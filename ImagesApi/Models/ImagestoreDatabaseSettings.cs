namespace ImagesApi.Models
{
    public class ImagestoreDatabaseSettings : IImagestoreDatabaseSettings
    {
        public string ImagesCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }

    public interface IImagestoreDatabaseSettings
    {
        string ImagesCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}