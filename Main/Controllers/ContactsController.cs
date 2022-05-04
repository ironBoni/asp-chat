using AspWebApi.Models;
using AspWebApi.Models.Contacts;
using Microsoft.AspNetCore.Mvc;
using Models;
using Models.DataServices;
using Models.DataServices.Interfaces;
using Models.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AspWebApi.Controllers {
    [Route("api/[controller]")]
    [Produces("application/json")]
    [ApiController]
    public class ContactsController : ControllerBase {
        private readonly IUserService userService;
        private readonly IChatService chatService;
        public ContactsController()
        {
            userService = new UserService();
            chatService = new ChatService();
        }

        [HttpGet]
        [Route("/api/contacts/{id}/messages")]
        public IActionResult GetMessagesByContact(string id)
        {
            var messages = chatService.GetAllMessages(id, Current.Username);
            if (messages == null) return BadRequest();
            return Ok(messages.Select(m => new MessageResponse(m.Id, m.Text, m.WrittenIn, m.Sent)));
        }

        [HttpGet]
        [Route("/api/contacts/{id}/messages/{id2}")]
        public IActionResult GetMessagesByContact(string id, int id2)
        {
            var messages = chatService.GetAllMessages(id, Current.Username);
            if (messages == null) return BadRequest();
            var m = messages.Find(m => m.Id == id2);
            return Ok(new MessageResponse(m.Id, m.Text, m.WrittenIn, m.Sent));
        }

        [HttpPost]
        [Route("/api/contacts/{id}/messages")]
        public IActionResult SendMessage(string id, [FromBody] SendMessageRequest req)
        {
            var messages = chatService.GetAllMessages(id, Current.Username);
            if (messages == null) return BadRequest();
            var chat = chatService.GetChatByParticipants(id, Current.Username);
            var msgId = chatService.GetNewMsgIdInChat(chat.Id);
            var message = new Message(msgId, req.Content, id, true);
            var success = chatService.AddMessage(chat.Id, message);
            if(!success) return BadRequest("The message could not be added.");
            return StatusCode(201);
        }

        [HttpDelete]
        [Route("/api/contacts/{id}/messages/{id2}")]
        public IActionResult RemoveMessageById(string id, int id2)
        {
            var messages = chatService.GetAllMessages(id, Current.Username);
            if (messages == null) return BadRequest();
            messages.Remove(messages.Find(m => m.Id == id2));
            return StatusCode(204);

        }

        [HttpPut]
        [Route("/api/contacts/{id}/messages/{id2}")]
        public IActionResult UpdateMessageById(string id, int id2, [FromBody] PutMessageRequest req)
        {
            var messages = chatService.GetAllMessages(id, Current.Username);
            if (messages == null) return BadRequest();
            var message = messages.Find(m => m.Id == id2);
            message.Text = req.Content;
            return StatusCode(201);
        }

        // GET: api/<ContactsController>
        [HttpGet]
        public IActionResult Get()
        {
            var result = userService.GetContacts(Current.Username);

            if (result == null)
                return NotFound();
            return Ok(result);
        }

        [HttpGet]
        [Route("/api/contacts/server/{id}")]
        public IActionResult GetServerByUsername(string id)
        {
            var user = userService.GetById(id);
            if(user == null) return NotFound();
            return Ok(user.Server);
        }

        // POST api/<ContactsController>
        [HttpPost]
        public IActionResult Post([FromBody] ContactRequest req)
        {
            string response;
            var isAddOk = userService.AddContact(req.Id, req.Name, req.Server, out response);
            if (!isAddOk)
                return BadRequest(response);

            return StatusCode(201);
        }

        // GET api/<ContactsController>/5
        [HttpGet("{username}")]
        public IActionResult Get(string username)
        {
            var result = userService.GetContacts(Current.Username).Find(contact => contact.Id == username);
            if (result == null)
                return NotFound();
            return Ok(result);
        }

        // PUT api/<ContactsController>/5
        [HttpPut("{id}")]
        public IActionResult Put(string id, [FromBody] PutContactRequest request)
        {
            var contact = userService.GetContacts(Current.Username).Find(c => c.Id == id);
            if (contact == null)
                return StatusCode(400);

            contact.Name = request.Name;
            contact.Server = request.Server;
            return StatusCode(204);
        }

        // DELETE api/<ContactsController>/5
        [HttpDelete("{username}")]
        public IActionResult Delete(string username)
        {
            string res;
            var success = userService.RemoveContact(username, out res);
            if (success) return StatusCode(204);
            return BadRequest(res);
        }
    }
}
