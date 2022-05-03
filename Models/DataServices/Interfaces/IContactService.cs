using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.DataServices.Interfaces {
    internal interface IContactService {
        IEnumerable<User> GetContacts(string username);
        bool AddContact(string username, string friendToAdd);
    }
}
