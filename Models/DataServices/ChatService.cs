using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.DataServices {
    internal class ChatService : IDataService<Chat, int> {
        private static List<Chat> chats = new List<Chat>() {
            new Chat(1, new List<string>{ "ron", "noam" }, new List<Message>
            {
                new Message(1, "text", "my name is Noam.", "noam", new DateTime(2021, 4, 6, 9, 56, 0)),
                new Message(2, "text", "my name is Ron.", "ron", new DateTime(2021, 4, 6, 10, 5, 0)),
                new Message(3, "text", "I love it!", "ron", new DateTime(2021, 4, 8, 10, 30, 0))
            }),

            new Chat(2, new List<string>{ "ron", "dvir" }, new List<Message>
            {
                new Message(1, "text", "Hey Dvir, how are you?", "noam", new DateTime(2021, 4, 6, 10, 10, 0)),
                new Message(2, "text", "I'm good. Thanks Ron!", "dvir", new DateTime(2021, 4, 6, 10, 20, 0)),
                new Message(3, "text", "It's my favorite song :)", "dvir", new DateTime(2021, 4, 8, 12, 30, 0))
            }),

            new Chat(3, new List<string>{ "ron", "dan" }, new List<Message>
            {
                new Message(1, "text", "Dan, let's go to the mall", "ron", new DateTime(2021, 4, 6, 10, 12, 0)),
                new Message(2, "text", "Ok bro. Nice idea Ron", "dan", new DateTime(2021, 4, 6, 10, 20, 0)),
                new Message(3, "text", "Lovely :)", "dvir", new DateTime(2021, 4, 8, 12, 30, 0))
            }),
        };

        public bool Create(Chat entity)
        {
            chats.Add(entity);
            return true;
        }

        public bool Delete(int Id)
        {
            var toRemove = chats.Find(chat => chat.Id == Id);
            if (toRemove == null)
                return false;
            chats.Remove(toRemove);
            return true;
        }

        public List<Chat> GetAll()
        {
            return chats.ToList();
        }

        public Chat GetById(int Id)
        {
            return chats.Find(chat => chat.Id == Id);
        }

        public bool Update(Chat entity)
        {
            var chat = chats.Find(chat => chat.Id == entity.Id);
            if (chat == null)
                return false;
            chat.Id = entity.Id;
            //
            return true;
        }
    }
}
