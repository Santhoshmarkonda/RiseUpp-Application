import "./index.css";

const ImageCard = ({ image }) => {
  const photographerUrl = `${image.user.links.html}?utm_source=riseupp&utm_medium=referral`;
  const unsplashUrl = "https://unsplash.com/?utm_source=riseupp&utm_medium=referral";

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
          href={photographerUrl}
          target="_blank"
          rel="noreferrer"
        >
          {image.user.name}
        </a>

        <a
          href={unsplashUrl}
          target="_blank"
          rel="noreferrer"
        >
          Unsplash
        </a>
      </div>
    </div>
  );
};

export default ImageCard;