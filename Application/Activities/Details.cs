using MediatR;
using Persistence;
using System;
using Domain;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Activities
{
    public class Details
    {
        public class Query : IRequest<Avtivity>
        {
            public Guid id { get; set; }
        }

        public class Handler : IRequestHandler<Query , Avtivity>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Avtivity> Handle(Query request , CancellationToken cancellationToken)
            {
                return await _context.Avtivities.FindAsync(request.id);
            }
        }
    }
}