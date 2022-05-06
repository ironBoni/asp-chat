using Microsoft.AspNetCore.Mvc;
using Models.DataServices;
using Models.DataServices.Interfaces;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AspWebApi.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class MessagesController : ControllerBase {
        private IChatService service;
        public MessagesController()
        {
            service = new ChatService();
        }
    }
}
