using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;
using MediatR;
using Application.Activities;

namespace API.Controllers
{
    public class ActivityController : BaseApiController
    {
        // private readonly IMediator _meditor;
        
        // public ActivityController(IMediator meditor)
        // {
        //     _meditor = meditor;
            
        // }

        [HttpGet]
        public async Task<ActionResult<List<Avtivity>>> GetAllActivity()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Avtivity>> GetActivitie(Guid id)
        {
            // return await _context.Avtivities.FindAsync(id);
            // return Ok();
            return await Mediator.Send(new Details.Query{id = id});
        }

        [HttpPost]

        public async Task<IActionResult> AddActivity(Avtivity avitities){
            
            await Mediator.Send(new Creat.Command{Avtivity = avitities});

            return Ok();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditActivity(Guid id , Avtivity avitities)
        {
            avitities.Id = id;
            await Mediator.Send(new Edit.Command{Avtivity = avitities});
            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteActivity(Guid id)
        {
            await Mediator.Send(new Delete.Command{Id = id});
            return Ok();
        }
    }
}