import "./index.css";

const ImageCard = ({ image }) => {
  return (
    <div className="image-card">
      <img
        src={image.urls.small}
        alt={image.alt_description || "Unsplash image"}
      />

      <div className="image-details">
        <a
          href={image.links.html}
          target="_blank"
          rel="noreferrer"
        >
          View Image
        </a>

        <a
          href={image.user.links.html}
          target="_blank"
          rel="noreferrer"
        >
          {image.user.name}
        </a>
      </div>
    </div>
  );
};

export default ImageCard;