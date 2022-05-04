using AspWebApi.Models.Login;
using Microsoft.AspNetCore.Mvc;
using Models.DataServices;
using Models.DataServices.Interfaces;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AspWebApi.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase {
        private readonly IUserService serivce;
        public LoginController()
        {
            serivce = new UserService();
        }
        // GET: api/<LoginController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<LoginController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<LoginController>
        [HttpPost]
        public IActionResult Post([FromBody] LoginRequest req)
        {
            var user = serivce.GetById(req.Username);
            if (user == null) return BadRequest("User doesn't exist.");
            var isCorrect = user.Password == req.Password;
            if (!isCorrect) return BadRequest("Username and password does not match.");
            return Ok();
        }

        // PUT api/<LoginController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<LoginController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
