using Models.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.DataServices.Interfaces {
    public interface IContactService {
        List<Contact> GetContacts(string username);
        bool AddContact(string username, string friendToAdd);
    }
}
