import { useContext } from "react";
import { filterContext } from "./Jobs";
export default function Filter({ job }) {
  const {
    filterLevel,
    filterLang,
    filterTools,
    setFilterLevel,
    setFilterLang,
    setFilterTools,
  } = useContext(filterContext);
  function handleLvlClick(e) {
    e.preventDefault();
    if (!filterLevel) {
      setFilterLevel(job.level);
    } else {
      setFilterLevel("");
    }
  }
  const handleLangClick = (e, lang) => {
    e.preventDefault();
    if (!filterLang.includes(lang)) {
      setFilterLang(() => [...filterLang, lang]);
    } else {
      setFilterLang((filterLang) => filterLang.filter((item) => item !== lang));
    }
  };
  const handleToolsClick = (e, tool) => {
    e.preventDefault();
    if (!filterTools.includes(tool)) {
      setFilterTools(() => [...filterTools, tool]);
    } else {
      setFilterTools((filterTools) =>
        filterTools.filter((item) => item !== tool)
      );
    }
  };

  return (
    <div className="card--right">
      <div className="card--filter__flex ">
        <button onClick={handleLvlClick} className="card--filter__button">
          {job.level}
        </button>
        {job.languages.map((lang) => (
          <button
            onClick={(e) => handleLangClick(e, lang)}
            className="card--filter__button"
            key={lang}
          >
            {lang}
          </button>
        ))}
        {job.tools.map((tool) => (
          <button
            onClick={(e) => handleToolsClick(e, tool)}
            className="card--filter__button"
            key={tool}
          >
            {tool}
          </button>
        ))}
      </div>
    </div>
  );
}
