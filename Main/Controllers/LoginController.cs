using AspWebApi.Models.Login;
using Microsoft.AspNetCore.Mvc;
using Models.DataServices;
using Models.DataServices.Interfaces;
using System.Net.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using System.Text;
using Models.Models;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AspWebApi.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase {
        private readonly IUserService serivce;
        public IConfiguration _configuration;
        public LoginController(IConfiguration config)
        {
            _configuration = config;
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

            var claims = new[] {
            new Claim(JwtRegisteredClaimNames.Sub, _configuration["JWTParams:Subject"]),
            new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
            new Claim(JwtRegisteredClaimNames.Iat, DateTime.UtcNow.ToString()),
            new Claim("UserId", req.Username)

            };

            SymmetricSecurityKey secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWTParams:SecretKey"]));


            var mac = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);
            var token = new JwtSecurityToken(
                _configuration["JWTParams:Issuer"],
                _configuration["JWTParams:Audiene"],
                claims,
                expires: DateTime.UtcNow.AddMinutes(20),
                signingCredentials: mac);

            var tokenUser = new JwtSecurityTokenHandler().WriteToken(token);
            var fullToken = string.Format("Bearer " + tokenUser);
            Current.TokenToIdDict[fullToken] = req.Username;
            return Ok(tokenUser);

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