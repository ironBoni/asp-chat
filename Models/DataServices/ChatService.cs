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

            new Chat(4, new List<string>{ "ron", "dan" }, new List<Message>
            {
                new Message(1, "text", "Dan, let's go to the mall", "ron", new DateTime(2021, 4, 6, 10, 12, 0)),
                new Message(2, "text", "Ok bro. Nice idea Ron", "dan", new DateTime(2021, 4, 6, 10, 20, 0)),
                new Message(3, "text", "Lovely :)", "dvir", new DateTime(2021, 4, 8, 12, 30, 0))
            }),
            new Chat(5, new List<string>{ "ron", "idan" }, new List<Message>
            {
                new Message(1, "text", "Idan, how was your semester?", "ron", new DateTime(2021, 4, 5, 10, 21, 0)),
                new Message(2, "text", "It was good. Thanks Ron.", "idan", new DateTime(2021, 4, 5, 10, 22, 0))
            }),
            new Chat(6, new List<string>{ "ron", "shlomo" }, new List<Message>
            {
                new Message(1, "text", "Shlomo, let's go to eat pizza", "ron", new DateTime(2021, 4, 6, 10, 40, 0)),
                new Message(2, "text", "Fine Ron, nice idea", "shlomo", new DateTime(2021, 4, 6, 10, 52, 0)),
                new Message(3, "text", "Ron, I like it!", "shlomo", new DateTime(2021, 4, 8, 12, 30, 0))
            }),
            new Chat(7, new List<string>{ "noam", "dvir" }, new List<Message>
            {
                new Message(1, "text","Hey Dvir, how are you?", "noam", new DateTime(2021, 4, 6, 12, 5, 0)),
                new Message(2, "text", "I'm great. Thanks Noam!", "dvir", new DateTime(2021, 4, 6, 12, 7, 0)),
                new Message(2, "text", "I Love it Noam! It's a very nice song! :)", "dvir", new DateTime(2021, 4, 8, 12, 30, 0))
            }),
            new Chat(8, new List<string>{ "noam", "dan" }, new List<Message>
            {
                new Message(1, "text","Hey, how are you?", "noam", new DateTime(2021, 4, 6, 12, 5, 0)),
                new Message(2, "text", "I'm great. Thanks!", "dan", new DateTime(2021, 4, 6, 12, 7, 0)),
                new Message(2, "text", "Always smile! :)", "noam", new DateTime(2021, 4, 8, 12, 30, 0))
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
