const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

export const searchPhotos = async (query) => {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}`,
    {
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch images");
  }

  return response.json();
};