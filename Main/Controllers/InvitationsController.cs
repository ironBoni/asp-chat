﻿using AspWebApi.Models.Invitations;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Models.DataServices;
using Models.DataServices.Interfaces;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AspWebApi.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class InvitationsController : ControllerBase {
        private readonly IUserService userService;

        public InvitationsController(IUserService userServ)
        {
            userService = userServ;
        }

        // POST api/<InvitationsController>
        [HttpPost]
        [Route("/api/invitations")]
        public IActionResult Post([FromBody] InvitationRequest req)
        {

            string response;
            var success = userService.AcceptInvitation(req.From, req.Server, req.To, out response);
            if (success) return StatusCode(201);
            return BadRequest(response);
        }
    }
}
