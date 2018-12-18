using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Fo.ServiceContracts.Interfaces;
using Fo.ServiceContracts.Models;
using Fo.Repositories.Interfaces;

namespace Fo.ServiceContracts.Services
{
    public class PeopleService : IPeopleService
    {
        private readonly IPeopleRepository _peopleRepository; 
        private readonly IMapper _mapper; 

        public PeopleService(IMapper mapper, IPeopleRepository peopleRepository)
        {
            _peopleRepository = peopleRepository;
            _mapper = mapper;
        }

        public async Task<IEnumerable<Person>> Get(CancellationToken cancellationToken)
        {
            var peopleEntities = await _peopleRepository.Get(cancellationToken);
            var peopleModels = _mapper.Map<IEnumerable<Person>>(peopleEntities);
            return peopleModels;
        }

        // public async Task<IEnumerable<Person>> Get(int id, CancellationToken cancellationToken)
        // {
        //     throw new System.NotImplementedException();
        // }

        // public async Task<IEnumerable<Person>> Create(UpsertPerson upsertPerson, CancellationToken cancellationToken)
        // {
        //     throw new System.NotImplementedException();
        // }

        // public async Task<IEnumerable<Person>> Update(int id, UpsertPerson upsertPerson,
        // CancellationToken cancellationToken)
        // {
        //     throw new System.NotImplementedException();
        // }

        // public async Task<IEnumerable<Person>> Delete(int id, CancellationToken cancellationToken)
        // {
        //     throw new System.NotImplementedException();
        // }
    }
}