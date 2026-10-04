import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/Searchbar";
import CategoryTabs from "./components/Categorytabs";
import ImageGallery from "./components/ImageGallary";

function App() {
  const [query, setQuery] = useState("animals");

  return (
    <main>
      <Header />
      <SearchBar onSearch={setQuery} />
      <CategoryTabs onCategorySelect={setQuery} />
      <ImageGallery query={query} />
    </main>
  );
}

export default App;