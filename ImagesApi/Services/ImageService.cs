using ImagesApi.Models;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;

namespace ImagesApi.Services
{
    public class ImageService
    {
        private readonly IMongoCollection<Image> _images;

        public ImageService(IImagestoreDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString); // Intializes mongo database
            var database = client.GetDatabase(settings.DatabaseName);

            _images = database.GetCollection<Image>(settings.ImagesCollectionName);
        }

        public List<Image> Get() =>
            _images.Find(image => true).ToList();


        public Image Create(Image image)
        {
            _images.InsertOne(image);
            return image;
        }

    }
}