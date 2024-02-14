import Caption from "./Caption";
import Filter from "./Filter";

export default function job({ job }) {
  return (
    <div key={job.id} className="card u--center-margin">
      <div className="u--flex u--flex-end">
        <Caption job={job} />
        <Filter job={job} />
      </div>
    </div>
  );
}
