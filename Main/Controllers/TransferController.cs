using AspWebApi.Models.Transfer;
using Microsoft.AspNetCore.Mvc;
using Models;
using Models.DataServices;
using Models.DataServices.Interfaces;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AspWebApi.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class TransferController : ControllerBase {
        private IChatService service;
        public TransferController()
        {
            service = new ChatService();
        }

        // GET: api/<TransferController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<TransferController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<TransferController>
        [HttpPost]
        public IActionResult Post([FromBody] TransferRequest request)
        {
            Chat chat = service.GetAll().Find(c => c.Participants.Contains(request.From) 
            && c.Participants.Contains(request.To));
            if (chat == null)
            {
                chat = new Chat(new List<string>()
                {
                    request.From,
                    request.To
                });
                var success = service.Create(chat);
                if (success) return Ok();
                else return BadRequest();
            }

            var messageId = service.GetNewMsgIdInChat(chat.Id);
            var addSuccess = service.AddMessage(chat.Id, new Message(messageId, request.Content, request.From));
            if(!addSuccess) return BadRequest();
            return Ok();
        }

        // PUT api/<TransferController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<TransferController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
