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
    <section className="m-4 px-4">
      <div className="flex flex-col justify-center items-center py-8">
        <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Sunset Collection</h2>
        <p className="text-sm text-gray-500">Click on an image to discover the exact Sunset Spot on the map</p>
        <img src="https://cdn-icons-png.flaticon.com/512/7162/7162383.png" className="rotate-180 h-7 w-7 m-2"></img>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {gallerySubset.map((data, index) => (
          <div key={index}>
            <img
              className="zoom h-48 w-72 object-cover rounded-lg hover:scale-110 cursor-pointer"
              src={data.imageUrl}
              alt={`Image ${index + 1}`}
              title={data.city}
              onClick={() => onImageClickHandler(data)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};