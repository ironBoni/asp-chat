using AspWebApi.Models;
using AspWebApi.Models.Hubs;
using AspWebApi.Models.Invitations;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Models.DataServices;
using Models.DataServices.Interfaces;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AspWebApi.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class InvitationsController : ControllerBase {
        private readonly IUserService userService;
        private IHubContext<ChatHub> hub;

        public InvitationsController(IUserService userServ, IHubContext<ChatHub> chatHub)
        {
            hub = chatHub;
            userService = userServ;
        }

        // POST api/<InvitationsController>
        [HttpPost]
        [Route("/api/invitations")]
        public async Task<IActionResult> Post([FromBody] InvitationRequest req)
        {

            string response;
            var success = userService.AcceptInvitation(req.From, req.Server, req.To, out response);
            if (success)
            {
                var idToAdd = req.From;
                var id = req.To;
                var newNick = req.From;
                var newServer = req.Server;

                if (ChatHub.userToConnection.ContainsKey(id))
                {
                    var connectionIds = ChatHub.userToConnection[id];
                    foreach (var conId in connectionIds)
                        await hub.Clients.Client(conId).SendAsync("ReceiveContact", new ContactRequest(idToAdd, newNick, newServer));
                }

                return StatusCode(201);
            }
            return BadRequest(response);
        }
    }
}
