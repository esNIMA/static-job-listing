import { useContext } from "react";
import { filterContext } from "./Jobs";

export default function SearchBar() {
  const {
    filterLevel,
    filterLang,
    filterTools,
    setFilterLevel,
    setFilterLang,
    setFilterTools,
  } = useContext(filterContext);
  const handleLevelClick = (e) => {
    e.preventDefault();
    setFilterLevel("");
  };
  const handleLangClick = (e, lang) => {
    e.preventDefault();
    setFilterLang((filterLang) => filterLang.filter((item) => item !== lang));
  };
  const handleToolsClick = (e, tool) => {
    e.preventDefault();
    setFilterTools((filterTools) =>
      filterTools.filter((item) => item !== tool)
    );
  };
  return (
    <div className="search-bar u--center-margin">
      {filterLevel ? (
        <button
          onClick={(e) => handleLevelClick(e)}
          className="search-bar__button"
        >
          {filterLevel}
        </button>
      ) : (
        ""
      )}
      {filterLang.map((lang) => (
        <button
          onClick={(e) => handleLangClick(e, lang)}
          key={lang}
          className="search-bar__button"
        >
          {lang}
        </button>
      ))}
      {filterTools.map((tool) => (
        <button
          onClick={(e) => handleToolsClick(e, tool)}
          key={tool}
          className="search-bar__button"
        >
          {tool}
        </button>
      ))}
    </div>
  );
}
