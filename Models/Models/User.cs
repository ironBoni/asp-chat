using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models {
    public class User {
        [Key]
        public string Username { get; set; }

        [Required(ErrorMessage ="Please enter nickname.")]
        public string Nickname { get; set; }
    
        [Required(ErrorMessage ="Please enter password")]
        public string Password { get; set; }

        public string ProfileImage { get; set; }

        public User(string username, string nickname, string password, string profileImage)
        {
            Username = username;
            Nickname = nickname;
            Password = password;
            ProfileImage = profileImage;
        }
    }
}
