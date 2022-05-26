using AspWebApi.Models;
using Models.DataServices.Interfaces;
using Models.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.DataServices {
    // The key is string
    public class UserService : IUserService {
        private static List<User> users = new List<User>() {
            new User("noam", "Noam Cohen", "Np1234", "/profile/noam.jpg"),
            new User("hadar", "Hadar Pinto", "Np1234", "/profile/hadar.jpg"),
            new User("dvir", "Dvir Pollak", "Np1234", "/profile/dvir.jpg"),
            new User("ron", "Ron Solomon", "Np1234", "/profile/ron.jpg"),
            new User("dan", "Dan Cohen", "Np1234", "/profile/dan.jpg"),
            new User("idan", "Idan Ben Ari", "Np1234", "/profile/idan.jpg"),
            new User("shlomo", "Shlomo Levin", "Np1234", "/profile/shlomo.png"),
            new User("yaniv", "Yaniv Hoffman", "Np1234", "/profile/yaniv.png"),
            new User("oren", "Oren Orbach", "Np1234", "/profile/oren.webp"),
            new User("yuval", "Yuval Baruchi", "Np1234", "/profile/yuval.png"),
            new User("ran", "Ran Levi", "Np1234", "/profile/ran.webp"),
        };

        private static IDataService<Chat, int> chatsService = new ChatService();

        public List<Contact> GetContacts(string username)
        {
            var user = users.Find(user => user.Username == username);
            if (user == null) return new List<Contact>();
            var contacts = user.Contacts;
            return contacts;
        }

        public bool AddContact(string friendToAdd, string name, string server, out string response)
        {
            var username = Current.Username;
            var currentUser = users.Find(user => user.Username == Current.Username);
            var currentContacts = GetContacts(username);

            if (currentUser == null)
            {
                response = "Username doesn't exists.";
                return false;
            }
            if (currentContacts == null)
            {
                currentUser.Contacts = new List<Contact>();
            }

            // You cannot add yourself to the chat list.
            if (username == friendToAdd && GetFullServerUrl(server) == Current.MyServerUrl)
            {
                response = "You cannot add yourself to the chat list";
                return false;
            }

            // You cannot add someone that is already in your chats.
            if (currentContacts.Any(user => user.Id == friendToAdd))
            {
                response = "You cannot add him, because he's already in your chat list.";
                return false;
            }

            var newChat = new Chat(new List<string>() {
                username, friendToAdd});

            User friend = users.Find(user => user.Username == friendToAdd);
            // then add it
            if (friend == null)
            {
                friend = new User(friendToAdd, name, Current.Password, Current.DefaultImage, server);
                users.Add(friend);
            }

            friend.Server = server;

            var newContact = new Contact(friendToAdd, name, server, null, null, friend.ProfileImage);
            if (!currentUser.Contacts.Contains(newContact))
            {
                currentUser.Contacts.Add(newContact);
                CurrentUsers.IdToContactsDict[currentUser.Username] = currentUser.Contacts;
            }
            var friendUser = users.Find(user => user.Username == friendToAdd);
            var newContactFriend = new Contact(username, currentUser.Nickname, Current.MyServerUrl, null, null, currentUser.ProfileImage);
            friendUser.Contacts.Add(newContactFriend);
            CurrentUsers.IdToContactsDict[friendUser.Username] = friendUser.Contacts;
            response = "";
            return chatsService.Create(newChat);
        }

        public bool Create(User entity)
        {
            users.Add(entity);
            return true;
        }

        public bool Delete(string username)
        {
            var toRemove = users.Find(user => user.Username == username);
            if (toRemove == null)
                return false;
            users.Remove(toRemove);
            return true;
        }

        public List<User> GetAll()
        {
            return users.ToList();
        }

        public User GetById(string username)
        {
            return users.Find(user => user.Username == username);
        }

        public bool Update(User entity)
        {
            var user = users.Find(user => user.Username == entity.Username);
            if (user == null)
                return false;
            user.Username = entity.Username;
            user.Password = entity.Password;
            user.ProfileImage = entity.ProfileImage;
            return true;
        }

        public bool RemoveContact(string userToRemove, out string res)
        {
            var username = Current.Username;
            var currentUser = users.Find(user => user.Username == Current.Username);
            var currentContacts = GetContacts(username);
            res = "";
            if (currentContacts == null)
            {
                res = "Current Contacts not set.";
                return false;
            }

            if (userToRemove == Current.Username)
            {
                res = "You cannot add yourself to the chat list.";
                return false;
            }

            if (!currentContacts.Any(user => user.Id == userToRemove))
            {
                res = "You cannot add someone that is already in your chats.";
                return false;
            }

            var contactToRemove = currentContacts.Find(c => c.Id == userToRemove);
            if (contactToRemove == null)
            {
                res = "You cannot remove it. It's not one of your contacts.";
                return false;
            }

            currentUser.Contacts.Remove(contactToRemove);
            CurrentUsers.IdToContactsDict[currentUser.Username] = currentUser.Contacts;

            var chatToRemove = chatsService.GetAll().Find(
                c => c.Participants.Contains(userToRemove) &&
                c.Participants.Contains(Current.Username));

            if (chatToRemove == null)
            {
                res = "There is no chat with such participants.";
                return false;
            }

            return chatsService.Delete(chatToRemove.Id);
        }

        public bool AcceptInvitation(string from, string server, string to, out string response)
        {
            var hisServer = GetFullServerUrl(server);
            response = "ok";
            // it's the same server, this is why to post to /api/contacts add him to the system already.
            if (Current.MyServerUrl == hisServer)
                return true;

            User userToAdd = users.Find(u => u.Username == from);
            if (userToAdd == null)
            {
                userToAdd = new User(from, from, Current.Password, Current.DefaultImage, server);
                users.Add(userToAdd);
            }
            //The username to add to;
            var currentUser = users.Find(user => user.Username == to);
            if (currentUser == null)
            {
                response = "such user does not exists";
                return false;
            }
            var currentContacts = GetContacts(to);

            if (currentContacts == null)
            {
                currentContacts = new List<Contact>();
            }

            var newChat = new Chat(new List<string>() {
                to, from});

            var requestor = users.Find(user => user.Username == from);
            // then add it

            requestor.Server = server;

            var newContact = new Contact(from, from, server, null, null, Current.DefaultImage);
            if (!currentUser.Contacts.Contains(newContact))
            {
                currentUser.Contacts.Add(newContact);
                CurrentUsers.IdToContactsDict[currentUser.Username] = currentUser.Contacts;
            }

            response = "";
            if (chatsService.GetAll().Find(c => c.Participants.Contains(from)
                && c.Participants.Contains(Current.Username)) != null)
                return true;
            return chatsService.Create(newChat);
        }

        public string GetFullServerUrl(string url)
        {
            if (!url.EndsWith("/"))
                url = url + "/";
            if (!url.StartsWith("http://"))
                url = "http://" + url;
            return url;
        }
    }
}
