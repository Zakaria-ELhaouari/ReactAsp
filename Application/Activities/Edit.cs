using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Avtivity Avtivity { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context , IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }
            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var activities = await _context.Avtivities.FindAsync(request.Avtivity.Id);
                // activities.Title = request.Avtivity.Title ?? activities.Title;
                // activities.Description = request.Avtivity.Description ?? activities.Description;
                // activities.Categorie = request.Avtivity.Categorie ?? activities.Categorie;
                // activities.City = request.Avtivity.City ?? activities.City;
                // activities.Venue = request.Avtivity.Venue ?? activities.Venue;
                _mapper.Map(request.Avtivity , activities);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}