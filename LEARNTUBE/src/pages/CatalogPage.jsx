import { COURSES_DATA } from "../data/coursesData";
import TopicCard from "../components/cards/TopicCard";

export default function CatalogPage() {
  return (
    <div className="sec">
      <header className="section-header">
        <h1 className="section-title">Topics Catalog</h1>
        <p className="section-subtitle">Explore different topics to master</p>
      </header>

      <div className="sec">
        {COURSES_DATA.map((topic) => (
          <TopicCard key={topic.topicId} topic={topic} />
        ))}
      </div>
    </div>
  );
}
