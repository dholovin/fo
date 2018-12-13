using System;
using System.Collections.Generic;
using Fo.Common.Models;

namespace Fo.ServiceContracts.Models
{
    public class UpsertPerson : BaseUpdateModel
    {
        public string Name { get; set; } // met a person 'named'
        public string Place { get; set; } // at specific place (may be used for grouping)
        public DateTime? Date { get; set; } // on specific date
        public string Note { get; set; } // free form note, in addition to associations 
        public IEnumerable<string> Associations { get; set; } // have following associations (may be used for grouping)

        // public byte[] Image { get; set; }
    }
}