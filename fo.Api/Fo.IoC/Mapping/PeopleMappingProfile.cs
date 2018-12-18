using AutoMapper;
using Models = Fo.ServiceContracts.Models;
using Entities = Fo.Repositories.Entities;

namespace Fo.Ioc.Mapping
{
    public class PeopleMappingProfile : Profile
    {
        public PeopleMappingProfile()
        {
            // from Models to Entities
            CreateMap<Models.Person, Entities.Person>()
                .ForMember(dest => dest.Name, opt => opt.MapFrom(src => src.Note)); // TODO: remove. just for testing purposes

            // from Entities to Models
            CreateMap<Entities.Person, Models.Person>()
                .ForMember(dest => dest.Name, opt => opt.MapFrom(src => src.Place)); // TODO: remove. just for testing purposes
        }
    }

}