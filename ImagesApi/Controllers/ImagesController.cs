using ImagesApi.Models;
using ImagesApi.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System;
using System.Drawing;
using System.IO;

namespace ImagesApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImagesController : ControllerBase
    {
        private readonly ImageService _imageService;

        public ImagesController(ImageService imageService)
        {
            _imageService = imageService;
        }

        [HttpGet]
        public ActionResult<List<ImagesApi.Models.Image>> Find() =>
            _imageService.Get();

        [HttpPost]
        public ActionResult<ImagesApi.Models.Image> Create([FromBody] string source)
        {
            var imageObj = new ImagesApi.Models.Image();
            byte[] bytes = Convert.FromBase64String(source);

            using (System.Drawing.Image image = System.Drawing.Image.FromStream(new MemoryStream(bytes)))
            {
                _imageService.Create(imageObj);

                image.Save("wwwroot/images/" + imageObj.Id + ".jpg", System.Drawing.Imaging.ImageFormat.Jpeg);
            }

            return imageObj;
        }


    }
}