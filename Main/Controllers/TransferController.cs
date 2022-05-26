using AspWebApi.Models.Contacts;
using AspWebApi.Models.Hubs;
using AspWebApi.Models.Transfer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Models;
using Models.DataServices;
using Models.DataServices.Interfaces;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AspWebApi.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class TransferController : ControllerBase {
        private IChatService chatService;
        private IHubContext<ChatHub> hub;
        public TransferController(IChatService chatServ, IHubContext<ChatHub> chatHub)
        {
            chatService = chatServ;
            hub = chatHub;
        }

        // POST api/<TransferController>
        [HttpPost]
        [Route("/api/transfer")]
        public async Task<IActionResult> Post([Bind("From,To,Content")] TransferRequest request)
        {
            Chat chat = chatService.GetAll().Find(c => c.Participants.Contains(request.From) 
            && c.Participants.Contains(request.To));
            if (chat == null)
            {
                chat = new Chat(new List<string>()
                {
                    request.From,
                    request.To
                });
                var success = chatService.Create(chat);
                if (success) {
                    await SendSignalRToClient(request.From, request.To, request.Content);
                    return StatusCode(201); 
                }
                else return BadRequest();
            }

            var messageId = chatService.GetNewMsgIdInChat(chat.Id);
            // the sent is false because it was not sent from my server
            var addSuccess = chatService.AddMessage(chat.Id, new Message(messageId, request.Content, request.From, false));
            if(!addSuccess) return BadRequest();
            await SendSignalRToClient(request.From, request.To, request.Content);
            return StatusCode(201);
        }

        private async Task SendSignalRToClient(string from, string to, string content)
        {
            var chat = chatService.GetChatByParticipants(from, to);
            var id = chatService.GetNewMsgIdInChat(chat.Id);

            if (ChatHub.userToConnection.ContainsKey(to))
            {
                var connectionIds = ChatHub.userToConnection[to];
                foreach (var conId in connectionIds)
                    await hub.Clients.Client(conId).SendAsync("ReceiveMessage", new MessageResponse(id, content, DateTime.Now, true, from));
            }
        }
    }
}
