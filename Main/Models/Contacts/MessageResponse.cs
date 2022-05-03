namespace AspWebApi.Models.Contacts {
    [Serializable]
    public class MessageResponse {
        public int Id { get; set; }
        public string Content { get; set; }
        public DateTime Created { get; set; }
        public bool Sent { get; set; }

        public MessageResponse(int id, string content, DateTime created, bool sent)
        {
            Id = id;
            Content = content;
            Created = created;
            Sent = sent;
        }

        public MessageResponse()
        {
        }
    }
}
