using AspWebApi.Models.Invitations;
using Microsoft.AspNetCore.Mvc;
using Models.DataServices;
using Models.DataServices.Interfaces;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AspWebApi.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class InvitationsController : ControllerBase {
        private IUserService service;
        public InvitationsController()
        {
            service = new UserService();
        }
        // GET: api/<InvitationsController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<InvitationsController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<InvitationsController>
        [HttpPost]
        public IActionResult Post([FromBody] InvitationRequest req)
        {

            var success = service.AcceptInvitation(req.From, req.Server);
            if (success) return StatusCode(201);
            return BadRequest();
        }

        // PUT api/<InvitationsController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<InvitationsController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
