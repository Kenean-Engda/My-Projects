import { useParams } from "react-router-dom";
import { COURSES_DATA } from "../data/coursesData";
import CourseCard from "../components/cards/CourseCard";

export default function CoursesPage() {
  const { topicId } = useParams();
  const thisTopic = COURSES_DATA.find(
    (topicItem) => topicItem.topicId === topicId,
  );

  if (!thisTopic) {
    return (
      <section className="sec text-center">
        <p className="section-subtitle">Topic not found.</p>
      </section>
    );
  }

  const topicName = thisTopic.name;

  const topicCourses = thisTopic.courses;
  const levelsArray = ["beginner", "intermediate", "advanced"];

  return (
    <section className="sec">
      <h1 className="section-title text-center">{topicName} Courses</h1>
      <div className="gap">
        {levelsArray.map((level) => {
          const videos = topicCourses[level]?.videos || [];
          const playlists = topicCourses[level]?.playlists || [];
          const isEmpty = videos.length === 0 && playlists.length === 0;

          return (
            <div key={level} className="level-section">
              <h2 className="capitalize">{level}</h2>
              <div className="level-line" />
              {isEmpty ? (
                <p>
                  No {level} level {topicName} courses found.
                </p>
              ) : (
                <div className="cata-grid">
                  {videos.map((course) => (
                    <CourseCard key={course.courseId} course={course} />
                  ))}
                  {playlists.map((course) => (
                    <CourseCard key={course.courseId} course={course} />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
