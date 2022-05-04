namespace AspWebApi.Models {
    
    public class ContactRequest {
        public string id { get; set; }
        public string name { get; set; }
        public string server { get; set; }

        public ContactRequest()
        {

        }

        public ContactRequest(string id, string name, string server)
        {
            this.id = id;
            this.name = name;
            this.server = server;
        }
    }
}
