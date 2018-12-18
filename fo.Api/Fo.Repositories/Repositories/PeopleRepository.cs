using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Fo.ServiceContracts.Interfaces;
using Fo.Repositories.Entities;
using Fo.Repositories.Interfaces;
using System.Linq;
using System;

namespace Fo.Repositories
{
    public class PeopleRepository : IPeopleRepository
    {
        public async Task<IEnumerable<Person>> Get(CancellationToken cancellationToken)
        {
            return await Task.FromResult(new List<Person>()
            {
                new Person()
                {
                    Id = 1,
                    Name = "Some Name 1",
                    Date = DateTime.Now,
                    Place = "Some Place 1",
                    Associations = new string[] {"association 1.1", "association 1.2"},
                },
                new Person()
                {
                    Id = 2,
                    Name = "Some Name 2",
                    Date = DateTime.Now,
                    Place = "Some Place 2",
                    Associations = new string[] {"association 2.1", "association 2.2"},
                }
            });
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