using AspWebApi.Models.Contacts;
using Microsoft.AspNetCore.SignalR;
using Models;
using Models.DataServices;
using Models.DataServices.Interfaces;
using System.Collections.Concurrent;

namespace AspWebApi.Models.Hubs {
    public class ChatHub : Hub {
        private readonly IChatService chatService;
        private static ConcurrentDictionary<string, string> userToConnection = new ConcurrentDictionary<string, string>();
        private const string ReceiveMessage = "ReceiveMessage";
        public ChatHub()
        {
            chatService = new ChatService();
        }
        public async Task SendMessage(string from, string content, string to)
        {
            //var userId = CurrentUsers.GetIdByToken(token);
            var chat = chatService.GetChatByParticipants(from, to);
            var id = chatService.GetNewMsgIdInChat(chat.Id);

            if (userToConnection.ContainsKey(to)) {
                var connectionId = userToConnection[to];
                await Clients.Client(connectionId).SendAsync(ReceiveMessage, new MessageResponse(id, content, DateTime.Now, true, from));
            }
            else
                await Clients.All.SendAsync(ReceiveMessage, new MessageResponse(id, content, DateTime.Now, true, from));
        }
       
        public async Task SetIdInServer(string username)
        {
            userToConnection[username]= Context.ConnectionId;
            await Clients.Client(Context.ConnectionId).SendAsync("Ok");
        }
    }
}
