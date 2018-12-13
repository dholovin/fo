using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Fo.ServiceContracts.Models;

namespace Fo.ServiceContracts.Interfaces
{
    public interface IPeopleService
    {
        Task<IEnumerable<Person>> Get(CancellationToken cancellationToken);
        Task<IEnumerable<Person>> Get(int id, CancellationToken cancellationToken);
        Task<IEnumerable<Person>> Create(UpsertPerson upsertPerson, CancellationToken cancellationToken);
        Task<IEnumerable<Person>> Update(int id, UpsertPerson upsertPerson, CancellationToken cancellationToken);
        Task<IEnumerable<Person>> Delete(int id, CancellationToken cancellationToken);
    }
    
}