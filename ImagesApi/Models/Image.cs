using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ImagesApi.Models
{
    public class Image
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        
    }
}