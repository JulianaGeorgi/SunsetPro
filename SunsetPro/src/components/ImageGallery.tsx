import "./ImageGallety.css";
import { extractedData } from "../utils/utils";
import { useMarkerContext } from "../contexts/markerContext";
import { City } from "../types/City";

export const ImageGallery = () => {

  const {
    updateSelectedImage,
    ref
  } = useMarkerContext();

  // Function to create an array of random image URLs
  const getRandomIMageURLs = (subsetSize: number) => {
    // Shuffle the array of images
    const shuffledImages = [...extractedData].sort(() => Math.random() - 0.5);

    // Take a subset of the images
    const subset = shuffledImages.slice(0, subsetSize);

    return subset;
  };

  // Generate an array of random image URLs 
  const gallerySubset = getRandomIMageURLs(12);

  function onImageClickHandler(imageData: City) {
    // ref for scrolling to map when an image from the gallery is clicked
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    updateSelectedImage(imageData);
  }

  return (
    <section className=" m-4 px-4">
      <div className="py-8">
        <h2 className="mb-4 text-4xl text-center font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Sunset Collection</h2>
        <p className="text-sm text-gray-500 text-center">Click on an image to discover the exact Sunset Spot on the map</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {gallerySubset.map((data, index) => (
          <div key={index}>
            <img
              className="zoom h-48 w-72 object-cover rounded-lg hover:scale-110 cursor-pointer"
              src={data.imageUrl}
              alt={`Image ${index + 1}`}
              onClick={() => onImageClickHandler(data)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};