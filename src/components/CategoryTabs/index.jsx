import "./index.css";

const CategoryTabs = ({ onCategorySelect }) => {
  return (
    <div className="category-tab">
      <button className="btn" onClick={() => onCategorySelect("mountains")}>
        Mountains
      </button>

      <button className="btn" onClick={() => onCategorySelect("flowers")}>
        Flowers
      </button>

      <button className="btn" onClick={() => onCategorySelect("beaches")}>
        Beaches
      </button>

      <button className="btn" onClick={() => onCategorySelect("cities")}>
        Cities
      </button>
    </div>
  );
};

export default CategoryTabs;
