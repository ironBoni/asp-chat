namespace AspWebApi.Models {
    
    [Serializable]
    public class ContactRequest {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Server { get; set; }
    }
}
