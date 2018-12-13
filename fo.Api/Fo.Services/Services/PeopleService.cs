using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Fo.ServiceContracts.Interfaces;
using Fo.ServiceContracts.Models;

namespace Fo.Services.Services
{
    public class PeopleService : IPeopleService
    {
        public async Task<IEnumerable<Person>> Get(CancellationToken cancellationToken)
        {
            throw new System.NotImplementedException();
        }

        public async Task<IEnumerable<Person>> Get(int id, CancellationToken cancellationToken)
        {
            throw new System.NotImplementedException();
        }
        public async Task<IEnumerable<Person>> Create(UpsertPerson upsertPerson, CancellationToken cancellationToken)
        {
            throw new System.NotImplementedException();
        }

        public async Task<IEnumerable<Person>> Update(int id, UpsertPerson upsertPerson,
        CancellationToken cancellationToken)
        {
            throw new System.NotImplementedException();
        }

        public async Task<IEnumerable<Person>> Delete(int id, CancellationToken cancellationToken)
        {
            throw new System.NotImplementedException();
        }
    }
}