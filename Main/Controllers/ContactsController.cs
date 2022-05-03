using Microsoft.AspNetCore.Mvc;
using Models;
using Models.DataServices;
using Models.DataServices.Interfaces;
using Models.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AspWebApi.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class ContactsController : ControllerBase {
        private readonly IUserService userService;

        public ContactsController()
        {
            userService = new UserService();
        }

        // GET: api/<ContactsController>
        [HttpGet]
        public List<Contact> Get()
        {
            return userService.GetContacts(Current.Username);
        }

        // GET api/<ContactsController>/5
        [HttpGet("{username}")]
        public Contact Get(string username)
        {
            return userService.GetContacts(Current.Username).Find(contact => contact.Id == username);
        }

        // POST api/<ContactsController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<ContactsController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ContactsController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
