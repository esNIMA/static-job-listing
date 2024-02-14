export default function Filter({job}) {
  return (
    <div className="card--right">
      <div className="card--filter__flex ">
        <button className="card--filter__button">{job.level}</button>
        {job.languages.map((lang) => (
          <button className="card--filter__button" key={lang}>
            {lang}
          </button>
        ))}
        {job.tools.map((tool) => (
          <button className="card--filter__button" key={tool}>
            {tool}
          </button>
        ))}
      </div>
    </div>
  );
}
