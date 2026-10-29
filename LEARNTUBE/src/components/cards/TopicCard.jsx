import { Link } from "react-router-dom";

export default function TopicCard({ topic }) {
  return (
    <article className="cata-card">
      <h3 className="card-title">{topic.name}</h3>
      <p className="card-desc">{topic.description}</p>
      <div>
        {topic.courseCount && (
          <span className="card-count">
            {topic.courseCount} {topic.courseCount === 1 ? "Course" : "Courses"} Available
          </span>
        )}
      </div>
      <Link to={`/courses/${topic.topicId}`} className="btn-main">Explore Topic</Link>
    </article>
  );
}
