import { sunsetServices } from "../services/sunsetServices";
import "./ImageGallety.css"

export const ImageGallery = () => {
  const { getSunsetImage } = sunsetServices();

   // Function to create an array of random image URLs
   const getRandomSunsetImageURLs = (count:number, width:number, height:number) => {
    return Array.from({ length: count }, (_, index) =>
      getSunsetImage(width, height)
    );
  };

  // Define the width and height for the images
  const imageWidth = 300;
  const imageHeight = 200;

  // Generate an array of random image URLs using an API
  // const imageUrls = getRandomSunsetImageURLs(12, imageWidth, imageHeight);

  const imageUrls = [
    "https://shootplanet.com/wp-content/uploads/2021/04/portugal-porto-sunset-bridge-city.jpg",
    "https://farm4.staticflickr.com/3868/15174557888_f5d06caf75_b.jpg",
    "https://i0.wp.com/www.therealalgarve.com/wp-content/uploads/2018/12/jan-zikan-424230-unsplash.jpg?resize=1920%2C1080&ssl=1",
    "https://farm4.staticflickr.com/3365/3279619484_f71a49bdd0.jpg",
    "https://i.pinimg.com/736x/47/31/34/473134bb4c57692169369c1618c82191.jpg",
    "https://farm8.staticflickr.com/7034/6537141473_4a38fd7671_b.jpg",
    "https://static.wixstatic.com/media/893dfc_7efeddc0614d4232a853482bef818162~mv2.jpg/v1/fill/w_640,h_854,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/893dfc_7efeddc0614d4232a853482bef818162~mv2.jpg", 
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/460642888.jpg?k=b4203b0f981396b7da3779ff55980830f57fedbf995d7f9c7dae6d943a830ba8&o=&hp=1",
    "https://assets-global.website-files.com/6432c77d4fe5652984778763/6474f1304728165b9494fd27_IMG_6108.jpeg",
    "https://algarexperience.com/wp-content/uploads/2020/07/sunset-bbq-beach-live-act-boat-trip-tour-algarexperience-algarve-portugal.jpg",
    "https://www.benoitproperties.com/wp-content/uploads/2022/08/algarve1.png",
    "https://daybyme.s3.eu-west-2.amazonaws.com/items/1580826222sxeIyDlkxo.jpg"
  ]
  
  return (
    <section className=" m-4 px-4">
      <div className="py-8">
      <h2 className="mb-4 text-4xl text-center font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Sunset Collection</h2>
      </div>
        
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {imageUrls.map((url, index) => (
          <div key={index}>
            <img
              className="zoom h-48 w-72 object-cover rounded-lg hover:scale-110"
              src={url}
              alt={`Image ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
