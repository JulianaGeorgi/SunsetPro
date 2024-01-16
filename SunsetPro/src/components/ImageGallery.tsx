import { sunsetServices } from "../services/sunsetServices";
import "./ImageGallety.css";
import { extractedData } from "../utils/utils";

export const ImageGallery = () => {
  const { getSunsetImage } = sunsetServices();

   // Function to create an array of random image URLs
  //  const getRandomSunsetImageURLs = (count:number, width:number, height:number) => {
  //   return Array.from({ length: count }, (_, index) =>
  //     getSunsetImage(width, height)
  //   );
  // };

  // Define the width and height for the images
  // const imageWidth = 300;
  // const imageHeight = 200;

  // Generate an array of random image URLs using an API
  // const imageUrls = getRandomSunsetImageURLs(12, imageWidth, imageHeight);
  
  return (
    <section className=" m-4 px-4">
      <div className="py-8">
      <h2 className="mb-4 text-4xl text-center font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Sunset Collection</h2>
      </div>
        
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {extractedData.map((url, index) => (
          <div key={index}>
            <img
              className="zoom h-48 w-72 object-cover rounded-lg hover:scale-110 cursor-pointer"
              src={url.imageUrl}
              alt={`Image ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
