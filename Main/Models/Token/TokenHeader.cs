using Microsoft.AspNetCore.Mvc;

namespace AspWebApi.Models.Token {
    public class TokenHeader {
        [FromHeader]
        public string Authorization { get; set; }
    }
}
