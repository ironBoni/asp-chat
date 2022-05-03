using Models;

namespace AspNetMvc.Models {
    public class RatingService : IDataService<Rating, int> {

        private static List<Rating> ratings = new List<Rating>()
        {
            new Rating(1, 5, "dvir", "Awesome website!"),
            new Rating(1, 5, "hadar", "Very good website"),
            new Rating(1, 4, "dan", "I liked this")
        };

        public bool Create(Rating entity)
        {
            ratings.Add(entity);
            return true;
        }

        public bool Delete(int id)
        {
            var rating = ratings.Find(rating => rating.ID == id);
            if(rating == null) 
                return false;

            ratings.Remove(rating);
            return true;
        }

        public List<Rating> GetAll()
        {
            return ratings;
        }

        public Rating GetById(int id)
        {
            return ratings.Find(rating => rating.ID == id);
        }

        public bool Update(Rating entity)
        {
            var rating = ratings.Find(rating => rating.ID == entity.ID);

            if (rating == null)
                return false;

            rating.Feedback = entity.Feedback;
            rating.Rate = entity.Rate;
            return true;
        }
    }
}
