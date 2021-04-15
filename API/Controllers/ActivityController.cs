using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class ActivityController : BaseApiController
    {
        private readonly DataContext _context;
        public ActivityController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Avtivity>>> GetAllActivity()
        {
            return await _context.Avtivities.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Avtivity>> GetActivitie(Guid id)
        {
            return await _context.Avtivities.FindAsync(id);
        }
    }
}