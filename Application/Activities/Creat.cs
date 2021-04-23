using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Creat
    {
        public class Command : IRequest 
        {
            public Avtivity Avtivity { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                _context.Avtivities.Add(request.Avtivity);
                await _context.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }
}