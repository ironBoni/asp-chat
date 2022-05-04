﻿using AspWebApi.Models.Register;
using Microsoft.AspNetCore.Mvc;
using Models;
using Models.DataServices;
using Models.DataServices.Interfaces;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AspWebApi.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class RegisterController : ControllerBase {
        private IUserService service;
        public RegisterController()
        {
            service = new UserService();
        }
        // GET: api/<RegisterController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<RegisterController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<RegisterController>
        [HttpPost]
        public IActionResult Post([FromBody] RegisterRequest req)
        {
            bool isUserExist = service.GetById(req.Username) == null;
            var success = !isUserExist & service.Create(new User(req.Username, req.Nickname, req.Password, req.ProfileImage, req.Server));

            if (!success) return BadRequest("User already exist.");
            return Ok();
        }

        // PUT api/<RegisterController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<RegisterController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}