using AspWebApi.Models;
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

        public ContactsController()
        {
            userService = new UserService();
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

        // GET api/<ContactsController>/5
        [HttpGet("{username}")]
        public IActionResult Get(string username)
        {
            var result = userService.GetContacts(Current.Username).Find(contact => contact.Id == username);
            if (result == null)
                return NotFound();
            return Ok(result);
        }

        // POST api/<ContactsController>
        [HttpPost]
        public IActionResult Post([FromBody] ContactRequest req)
        {
            var isAddOk = userService.AddContact(req.Id, req.Name, req.Server);
            if (isAddOk)
                return StatusCode(201);

            return Ok();
        }

        // PUT api/<ContactsController>/5
        [HttpPut("{id}")]
        public IActionResult Put(string contactId, [FromBody] PutContactRequest request)
        {
            var contact = userService.GetContacts(Current.Username).Find(c => c.Id == contactId);
            if (contact == null)
                return StatusCode(400);

            contact.Name = request.Name;
            contact.Server = request.Server;
            return StatusCode(204);
        }

        // DELETE api/<ContactsController>/5
        [HttpDelete("{username}")]
        public void Delete(string username)
        {
            var contact = userService.RemoveContact(username);

        }
    }
}
