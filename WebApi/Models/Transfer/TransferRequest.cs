namespace AspWebApi.Models.Transfer {
    [Serializable]
    public class TransferRequest {
        public string From { get; set; }
        public string To { get; set; }
        public string Content { get; set; }
    }
}
