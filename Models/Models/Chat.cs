using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models {
    public class Chat {
        public int Id { get; set; }

        [Required(ErrorMessage ="Please enter the participants.")]
        public List<string> Participants { get; set; }

        [Required(ErrorMessage = "Please enter the messages.")]
        public List<Message> Messages { get; set; }

        public Chat(int id, List<string> participants, List<Message> messages)
        {
            Id = id;
            Participants = participants;
            Messages = messages;
        }
    }
}
