using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Shop.Models;
using Shop.Repositories;
using Shop.Services;

namespace Shop.Controllers
{
   [Route("v1/account")]
    public class HomeController : Controller
    {
        [HttpPost("login")]
        [AllowAnonymous]
        public IActionResult  Authenticate([FromBody]User model){
            
            var user = UserRepository.Get(model.Username, model.Password);

            if(user == null) return NotFound(new {message = "Usuário ou senha não encontrado"});

            var token = TokenService.GenerateToken(user);
            user.Password = "";
            return Ok(new { user = user, token = token});

        }

        [HttpGet]
        [Route("anonymous")]
        [AllowAnonymous]
        public string Anonymous() => "Anônimo";

        [HttpGet]
        [Route("authenticated")]
        [Authorize]
        public string Authenticated() => String.Format("Autenticado - {0}", User.Identity.Name);

        [HttpGet]
        [Route("employee")]
        [Authorize(Roles = "employee,manager")]
        public string Employee() => "Funcionário";

        [HttpGet]
        [Route("manager")]
        [Authorize(Roles = "manager")]
        public string Manager() => "Gerente";

    }
}