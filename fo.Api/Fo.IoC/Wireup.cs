using Fo.Repositories;
using Fo.Repositories.Interfaces;
using Fo.ServiceContracts.Interfaces;
using Fo.ServiceContracts.Services;

namespace Microsoft.Extensions.DependencyInjection
{
    public static class Wireup
    {
        public static IServiceCollection WireupPeople(this IServiceCollection services)
        {
            services.AddScoped<IPeopleRepository, PeopleRepository>();
            services.AddTransient<IPeopleService, PeopleService>();
            return services;
        }
    }

}