using System;
using System.Collections.Generic;
using Fo.Common.Entities;

namespace Fo.Repositories.Entities
{
    public class Person : BaseEntity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Place { get; set; }
        public DateTime? Date { get; set; }
        public string Note { get; set; }
        public IEnumerable<string> Associations { get; set; }

        // public byte[] Image { get; set; }
    }
}