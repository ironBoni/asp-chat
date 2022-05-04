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

        public static void SetContactsForEveryUser()
        {
            var username = Current.Username;
            var currentUser = users.Find(user => user.Username == Current.Username);
            var contactsByMessages = new List<Contact>();
            var chats = chatsService.GetAll();
            var chatsWithHim = chats.Where(chat => chat.Participants.Contains(username));

            var friends = chatsWithHim.Select(chat => chat.Participants.Find(participant => participant != username));

            foreach (var fUsername in friends)
            {
                var fUser = users.Find(user => user.Username == fUsername);
                var chat = chats.Find(chat => chat.Participants.Contains(username) &&
                                                       chat.Participants.Contains(fUsername));
                var lastTime = chat.Messages.Max(message => message.WrittenIn);
                var lastMsg = chat.Messages.Find(message => message.WrittenIn == lastTime);
                var contact = new Contact(fUsername, fUser.Nickname, fUser.Server, lastMsg.Text, lastTime, fUser.ProfileImage);
                contactsByMessages.Add(contact);
            }

            foreach (var contact in contactsByMessages)
            {
                if (!currentUser.Contacts.Contains(contact))
                    currentUser.Contacts.Add(contact);
            }
        }

        private static IDataService<Chat, int> chatsService = new ChatService();

        public List<Contact> GetContacts(string username)
        {
            return users.Find(user => user.Username == username).Contacts;
        }

        public bool AddContact(string friendToAdd, string name, string server, out string response)
        {
            var username = Current.Username;
            var currentUser = users.Find(user => user.Username == Current.Username);
            var currentContacts = GetContacts(username);

            if (currentContacts == null)
            {
                response = "There are not contacts.";
                return false;
            }

            // You cannot add yourself to the chat list.
            if (username == friendToAdd)
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

            var friend = users.Find(user => user.Username == friendToAdd);
            // then add it
            if (friend == null)
            {
                response = "The user doesn't exist in the system.";
                return false;
            }

            friend.Server = server;

            var newContact = new Contact(friendToAdd, name, server, null, null);
            if (!currentUser.Contacts.Contains(newContact))
                currentUser.Contacts.Add(newContact);

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

        public bool AcceptInvitation(string from, string server, out string response)
        {
            var userToAdd = users.Find(u => u.Username == from);
            string name = "";
            if (userToAdd == null) name = userToAdd.Username;
            return AddContact(from, name, server, out response);
        }
    }
}
