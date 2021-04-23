using Microsoft.AspNetCore.Mvc;
using MediatR;
using Microsoft.Extensions.DependencyInjection;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BaseApiController : ControllerBase
    {
        private IMediator _mediatr;

        protected IMediator Mediator => _mediatr ??= HttpContext.RequestServices.GetService<IMediator>();
    }
}