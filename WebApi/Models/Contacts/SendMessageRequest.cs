namespace AspWebApi.Models.Contacts {
    [Serializable]
    public class SendMessageRequest {
        public string Content { get; set; }
        public string? SenderUsername { get; set; }
    }
}
