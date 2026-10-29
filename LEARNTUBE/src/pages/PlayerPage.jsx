import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { COURSES_DATA, allCourseIds } from "../data/coursesData.js";

export default function PlayerPage() {
  const { courseId } = useParams();

  const frameRef = useRef(null);
  const playerRef = useRef(null);
  const [isSaved, setIsSaved] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const isInCatalog = allCourseIds.includes(courseId);
  const levels = ["beginner", "intermediate", "advanced"];
  const courseFound = getCourse(courseId);
  const courseInfo = isInCatalog && courseFound ? courseFound : [];

  function getCourse(courseId) {
    const levelType = [];
    const courseType = [];
    const matchedTopic = COURSES_DATA.filter((topic) => {
      const matchedLevel = levels.filter((level) => {
        const videos = topic.courses?.[level]?.videos;
        const playlists = topic.courses?.[level]?.playlists;
        if (videos?.some((course) => course.courseId === courseId)) {
          courseType.push("videos");
        } else if (playlists?.some((course) => course.courseId === courseId)) {
          courseType.push("playlists");
        }
        return (
          videos?.some((course) => course.courseId === courseId) ||
          playlists?.some((course) => course.courseId === courseId)
        );
      });
      if (matchedLevel.length === 1) {
        levelType.push(...matchedLevel);
      }
      return matchedLevel.length === 1;
    });
    const courseArray =
      matchedTopic[0]?.courses?.[levelType[0]]?.[courseType[0]]?.filter(
        (course) => course.courseId === courseId,
      ) || null;
    const wantedCourse = courseArray ? courseArray[0] : courseArray;
    const wantedItems = [wantedCourse, matchedTopic[0], levelType[0]];
    return wantedItems;
  }

  function saveWatchTime() {
    if (typeof playerRef.current?.getCurrentTime === "function") {
      setIsSaving(true);
      const currentTime = playerRef.current.getCurrentTime();
      localStorage.setItem(`learntube_watchtime_${courseId}`, currentTime);

      setTimeout(() => {
        setIsSaving(false);
        setIsSaved(true);

        setTimeout(() => {
          setIsSaved(false);
        }, 2500);
      }, 300);
    }
  }

  useEffect(() => {
    const savedTime = localStorage.getItem(`learntube_watchtime_${courseId}`);
    const parsedTime = parseFloat(savedTime);
    const startSeconds = Number.isFinite(parsedTime) ? parsedTime : 0;

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player(frameRef.current, {
        videoId: courseId,
        host: "https://www.youtube-nocookie.com",
        playerVars: {
          start: Math.floor(startSeconds),
          rel: 0,
          enablejsapi: 1,
          origin: window.location.origin,
          widget_referrer: window.location.origin,
        },
        events: {
          onReady: () => {
            setIsReady(true);
          },
        },
      });
    };

    if (
      !document.querySelector(
        'script[src="https://www.youtube.com/iframe_api"]',
      )
    ) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    }
    return () => {
      if (
        playerRef.current &&
        typeof playerRef.current.destroy === "function"
      ) {
        playerRef.current.destroy();
        playerRef.current = null;
        setIsReady(false);
      }
    };
  }, [courseId]);

  return (
    <section className="sec">
      <h1 className="title text-center">Course Player</h1>

      <article className="player-card">
        <h2 className="topic-title">
          {courseInfo[1] ? courseInfo[1].name : "Unknown topic"}
        </h2>
        <h3 className="capitalize w-fit mx-auto">
          {courseInfo[2] ? courseInfo[2] : "Unknown level"}
        </h3>
        <div className="player-box">
          <h4 className="font-bold">
            {courseInfo[0] ? courseInfo[0].title : "Course"}
          </h4>
          <div className={isReady ? "player-frame" : ""}>
            <div className="player-div" ref={frameRef}>
              Loading video...
            </div>
          </div>
          <p className="player-disc">{courseInfo[0]?.description}</p>
        </div>
        {isInCatalog ? (
          <div className="btn-save-box">
            <button
              className="btn-main btn-save"
              onClick={saveWatchTime}
              disabled={isSaving || isSaved}
            >
              {isSaving
                ? "Saving..."
                : isSaved
                  ? "Progress Saved! ✓"
                  : "Save progress"}
            </button>
          </div>
        ) : null}
      </article>
    </section>
  );
}
