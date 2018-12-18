using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Fo.Repositories.Entities;

namespace Fo.Repositories.Interfaces
{
    public interface IPeopleRepository
    {
        Task<IEnumerable<Person>> Get(CancellationToken cancellationToken);
        // Task<IEnumerable<Person>> Get(int id, CancellationToken cancellationToken);
        // Task<IEnumerable<Person>> Create(UpsertPerson upsertPerson, CancellationToken cancellationToken);
        // Task<IEnumerable<Person>> Update(int id, UpsertPerson upsertPerson, CancellationToken cancellationToken);
        // Task<IEnumerable<Person>> Delete(int id, CancellationToken cancellationToken);
    }
    
}