using System;
using MediatR;
using Domain;
using System.Collections.Generic;
using Persistence;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using System.Threading;

namespace Application.Activities
{
    public class List
    {
        public class Query : IRequest<List<Avtivity>> {}

        public class Handler : IRequestHandler<Query , List<Avtivity>> 
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
                
            }
            public async Task<List<Avtivity>> Handle(Query request , CancellationToken cancellationToken)
            {
                return await _context.Avtivities.ToListAsync();
            }
        }
    }
}