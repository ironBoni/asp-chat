namespace AspWebApi.Models.Register {
    [Serializable]
    public class RegisterRequest {
        public string Username { get; set; }
        public string Nickname { get; set; }

        public string Password { get; set; }

        public string ProfileImage { get; set; }

        public string Server { get; set; }

    }
}
