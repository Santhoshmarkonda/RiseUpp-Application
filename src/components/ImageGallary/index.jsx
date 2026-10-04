import { useEffect, useState } from "react";
import { searchPhotos } from "../../services/unsplashApi";
import ImageCard from "../ImageCard";
import "./index.css";

const ImageGallery = ({ query }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchImages = async () => {
      try {
        const data = await searchPhotos(query);
        setImages(data.results);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [query]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h2 className="gallery-heading">{query}</h2>
      <div className="image-gallery">
        {images.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
    </>
  );
};

export default ImageGallery;
