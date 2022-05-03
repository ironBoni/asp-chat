using Models.DataServices.Interfaces;
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
            new User("hadar", "Hadar Pinto", "Np1234", "https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png"),
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
        public IEnumerable<User> GetContacts(string username)
        {
            var contacts = new List<User>();
            var chats = chatsService.GetAll();
            var chatsWithHim = chats.Where(chat => chat.Participants.Contains(username));
            if (chatsWithHim == null)
                return contacts;

            var friends = chatsWithHim.Select(chat => chat.Participants.Find(participant => participant != username));
            return friends.Select(friendUsername => users.Find(user => user.Username == friendUsername));
        }

        public bool AddContact(string username, string friendToAdd)
        {
            var currentContacts = GetContacts(username);
            if (currentContacts == null)
                return false;

            // You cannot add yourself to the chat list.
            if (username == friendToAdd)
                return false;

            // You cannot add someone that is already in your chats.
            if (currentContacts.Any(user => user.Username == friendToAdd))
                return false;

            var newChat = new Chat(new List<string>() {
                username, friendToAdd});

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

        public IEnumerable<User> GetAll()
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
    }
}
