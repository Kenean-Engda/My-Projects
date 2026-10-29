import { NavLink, Outlet } from "react-router-dom";
import CourseStatusCard from "../components/cards/CourseStatusCard";
import { COURSES_DATA } from "../data/coursesData";
import { getSecondsFromISO } from "../utils/timeUtils";

function getProgress(course) {
  const savedTime = localStorage.getItem(
    `learntube_watchtime_${course.courseId}`,
  );
  const watchedTime = savedTime ? parseFloat(savedTime) : 0;
  const duration = getSecondsFromISO(course.duration);
  const progress =
    duration > 0 ? Math.round((watchedTime * 100) / duration) : 0;
  return progress;
}

const levels = ["beginner", "intermediate", "advanced"];

export function InProgressCourses() {
  const renderedContent = COURSES_DATA.map((topicItem) => {
    const matchingLevels = levels.filter((levelName) => {
      const videos = topicItem.courses?.[levelName]?.videos || [];
      return videos.some((course) => {
        const prog = getProgress(course);
        return prog > 0 && prog < 100;
      });
    });
    if (matchingLevels.length === 0) {
      return null;
    }

    return (
      <div className="topic-group" key={topicItem.topicId}>
        <h2 className="topic-title">{topicItem.name}</h2>
        {matchingLevels.map((level) => {
          const matchingCourses = topicItem.courses[level].videos.filter(
            (course) => {
              const prog = getProgress(course);
              return prog > 0 && prog < 100;
            },
          );
          return (
            <div key={level} className="level-section">
              <h3 className="capitalize">{level}</h3>
              <div className="level-line"></div>
              <div className="cata-grid">
                {matchingCourses.map((course) => (
                  <CourseStatusCard key={course.courseId} course={course} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    );
  });
  const isEmpty = renderedContent.every((content) => content === null);
  return (
    <section className="gap">
      {isEmpty ? (
        <p className="section-subtitle">No course is in progress.</p>
      ) : (
        renderedContent
      )}
    </section>
  );
}

export function CompletedCourses() {
  const renderedContent = COURSES_DATA.map((topicItem) => {
    const matchingLevels = levels.filter((levelName) => {
      const videos = topicItem.courses?.[levelName]?.videos || [];
      return videos.some((course) => {
        const prog = getProgress(course);
        return prog >= 100;
      });
    });
    if (matchingLevels.length === 0) {
      return null;
    }
    return (
      <div key={topicItem.topicId} className="topic-group">
        <h2 className="topic-title">{topicItem.name}</h2>
        {matchingLevels.map((level) => {
          const matchingCourses = topicItem.courses[level].videos.filter(
            (course) => {
              const prog = getProgress(course);
              return prog >= 100;
            },
          );
          return (
            <div className="level-section" key={level}>
              <h3 className="capitalize">{level}</h3>
              <div className="level-line"></div>
              <div className="cata-grid">
                {matchingCourses.map((course) => (
                  <CourseStatusCard key={course.courseId} course={course} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    );
  });
  const isEmpty = renderedContent.every((content) => content === null);
  return (
    <section>
      {isEmpty ? (
        <p className="section-subtitle">There are no completed courses.</p>
      ) : (
        renderedContent
      )}
    </section>
  );
}

export default function DashboardPage() {
  return (
    <div className="gap">
      <h1 className="section-title">Dashboard</h1>
      <nav className="dash-nav">
        <NavLink
          to="in-progress"
          className={({ isActive }) =>
            `nav-tab-link ${isActive ? "active-tab" : ""}`
          }
        >
          In progress
        </NavLink>
        <NavLink
          to="completed"
          className={({ isActive }) =>
            `nav-tab-link ${isActive ? "active-tab" : ""}`
          }
        >
          Completed
        </NavLink>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
