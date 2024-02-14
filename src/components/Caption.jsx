export default function Caption({ job }) {
  return (
    <div className="u--flex card--left">
      <div>
        <figure className="card--image">
          <img src={`public${job.logo}`} alt="company logo" />
        </figure>
      </div>
      <div className="card--caption">
        <div className="u--flex">
          <h2 className="card--company">{job.company}</h2>
          {job.new ? <p className="card--new">NEW!</p> : ""}
          {job.featured ? <p className="card--featured">FEATURED</p> : ""}
        </div>

        <h1 className="card--position">{job.position}</h1>

        <ul className="u--flex card--list">
          <li className="card--list__items">{job.postedAt}</li>
          <li className="card--list__items">{job.contract}</li>
          <li className="card--list__items">{job.location}</li>
        </ul>
      </div>
    </div>
  );
}
