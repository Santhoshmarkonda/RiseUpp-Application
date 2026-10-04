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
        setImages([]);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [query]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (images.length === 0) {
    return (
      <div className="no-results">
        <img
          src="https://img.magnific.com/free-vector/glitch-error-404-page_23-2148105404.jpg?semt=ais_hybrid&w=740&q=80"
          alt="No results found"
        />
        <h2>No results found</h2>
        <p>Try searching for something else.</p>
      </div>
    );
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