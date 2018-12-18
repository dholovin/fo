using AutoMapper;
using Models = Fo.ServiceContracts.Models;
using Entities = Fo.Repositories.Entities;

namespace Fo.ServiceContracts.Mapping
{
    public class PeopleMappingProfile : Profile
    {
        public PeopleMappingProfile()
        {
            // Models to Entities
            CreateMap<Models.Person, Entities.Person>();

            // Entities to Models
            CreateMap<Entities.Person, Models.Person>();
        }
    }

}