import { Link } from "react-router-dom";

export default function SearchVideoCard({ video }) {
  const videoId = video?.id?.videoId;
  const title = video?.snippet?.title || "Title not found";
  const thumbnailUrl = video?.snippet?.thumbnails?.medium?.url || "";
  const description = video?.snippet?.description || "";
  return (
    <article className="cata-card group gap">
      <div className="thumb-box">
        <img
        src={thumbnailUrl}
        alt={title}
        loading="lazy"
        className="thumb-img"
        />
      </div>

      <div>
        <h3 className="card-title">{title}</h3>
        <p className="card-desc">{description}</p>
      </div>
      <Link to={`/player/${videoId}`} className="btn-main">
        <span>Watch Course</span>
        <span>&rarr;</span>
      </Link>
    </article>
  );
}
