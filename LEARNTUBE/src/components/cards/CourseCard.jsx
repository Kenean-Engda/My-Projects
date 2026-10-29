import { Link } from "react-router-dom";
import { formatDuration } from "../../utils/timeUtils";

export default function CourseCard({ course }) {
  const { courseId, title, thumbnailUrl, description, duration } = course;
  const formattedDuration = formatDuration(duration);

  return (
    <article className="cata-card group">
      <div className="thumb-box">
        <img
          src={thumbnailUrl}
          alt={title}
          loading="lazy"
          className="thumb-img"
        />

        {formattedDuration && (
          <span className="duration">{formattedDuration}</span>
        )}
      </div>

      <div className="">
        <h3 className="card-title ">{title}</h3>
        <p className="card-desc ">{description}</p>
      </div>

      <Link to={`/player/${courseId}`} className="btn-main">
        <span>Watch Course</span>
        <span>&rarr;</span>
      </Link>
    </article>
  );
}
