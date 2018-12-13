using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Fo.Common.Controllers;
using Fo.ServiceContracts.Interfaces;
using Fo.ServiceContracts.Models;
using Microsoft.AspNetCore.Mvc;

namespace Fo.Api.Controllers
{
    public class PeopleController : ApiController
    {
        private readonly IPeopleService _peopleService;

        public PeopleController(IPeopleService peopleService)
        {
            _peopleService = peopleService;
        }

        // GET api/people
        [HttpGet]
        public async Task<IEnumerable<Person>> Get(CancellationToken cancellationToken)
        {
            return await _peopleService.Get(cancellationToken); // new string[] { "value1", "value2" };
        }

        // GET api/people/5
        [HttpGet("{id}")]
        public async Task<IEnumerable<Person>> Get(int id, CancellationToken cancellationToken)
        {
            return await _peopleService.Get(id, cancellationToken);
        }

        // PUT api/people
        [HttpPut]
        public async Task<IEnumerable<Person>> Create([FromBody] UpsertPerson person,
        CancellationToken cancellationToken)
        {
            return await _peopleService.Create(person, cancellationToken);
        }


        // PUT api/people/5
        [HttpPut("{id}")]
        public async Task<IEnumerable<Person>> Update(int id, [FromBody] UpsertPerson person,
        CancellationToken cancellationToken)
        {
            return await _peopleService.Update(id, person, cancellationToken);
        }

        // DELETE api/people/5
        [HttpDelete("{id}")]
        public async Task<IEnumerable<Person>> Delete(int id, CancellationToken cancellationToken)
        {
            return await _peopleService.Delete(id, cancellationToken);
        }
    }
}
