using AutoMapper;
using Fo.Ioc.Mapping;
using Fo.Repositories;
using Fo.Repositories.Interfaces;
using Fo.ServiceContracts.Interfaces;
using Fo.ServiceContracts.Services;
using Microsoft.Extensions.DependencyInjection;

namespace Fo.Ioc
{
    public static class Wireup
    {
        public static IServiceCollection WireupPeople(this IServiceCollection services)
        {
            services.AddScoped<IPeopleRepository, PeopleRepository>();
            services.AddTransient<IPeopleService, PeopleService>();

            // Auto Mapper Configurations
            var mappingConfig = new MapperConfiguration(mc =>
            {
                mc.AddProfile(new PeopleMappingProfile());
            });
            mappingConfig.AssertConfigurationIsValid();
            // IMapper mapper = mappingConfig.CreateMapper();

            return services;
        }
    }

}