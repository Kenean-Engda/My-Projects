import { getSecondsFromISO } from "../../utils/timeUtils";
import { Link } from "react-router-dom";

export default function CourseStatusCard({ course }) {
  const courseId = course.courseId;
  const title = course.title;
  const thumbnailUrl = course.thumbnailUrl;
  const description = course.description;
  const duration = getSecondsFromISO(course.duration);
  const savedTime = localStorage.getItem(`learntube_watchtime_${courseId}`);
  const watchedTime = savedTime ? parseFloat(savedTime) : 0;
  const progress =
    duration > 0 ? Math.round((watchedTime * 100) / duration) : 0;
  return (
    <article className="cata-card group">
      <div>
        <img 
        src={thumbnailUrl} 
        alt={title} 
        loading="lazy" 
        className="thumb-img"
        />
      </div>
      
      <h3 className="card-title line-clamp-2">{title}</h3>
      <p className="card-desc line-clamp-3">{description}</p>
      
      <div>
        <span>{progress}</span> % Completed
      </div>

      <Link to={`/player/${courseId}`} className="btn-main">
        <span>{progress > 0 ? "Continue Course" : "Watch Course"}</span>
        <span> &rarr;</span>
      </Link>
    </article>
  );
}
