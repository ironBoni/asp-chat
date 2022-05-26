namespace AspWebApi.Models.Invitations {
    public class InvitationRequest {
        public string From { get; set; }
        // To my server.
        public string To { get; set; }
        // This is the server of the "From" guy.
        public string Server { get; set; }
    }
}
