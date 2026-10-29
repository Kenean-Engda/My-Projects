import { useState } from "react";
import SearchVideoCard from "../components/cards/SearchVideoCard";
export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [maxResults, setMaxResults] = useState(15);
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const api = import.meta.env.VITE_YOUTUBE_API_KEY;

  async function handleSearch(e) {
    e.preventDefault();
    if (!query.trim()) {
      setError("Enter valid input");
      return;
    }
    setHasSearched(true);
    const url =
      "https://www.googleapis.com/youtube/v3/search" +
      `?q=${encodeURIComponent(query)}` +
      "&type=video" +
      "&part=snippet" +
      `&maxResults=${maxResults}` +
      `&key=${api}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error occured : ${response.status}`);
      }
      setError("");
      const data = await response.json();
      const videosList = data?.items || [];
      setResults(videosList);
    } catch (error) {
      setError(`${error.name} : ${error.message}`);
    }
  }

  return (
    <div className="page-box">
      <h1 className="card-title text-center">Search From YouTube</h1>

      <div className="search-box">
        <form onSubmit={handleSearch}>
          <input
            className="search-input"
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <div className="search-controls">
            <div className="range">
              <label htmlFor="max-bar">Max Results</label>
              <div className="range-box">
                <input
                  className="results-range"
                  type="range"
                  value={maxResults}
                  onChange={(e) => setMaxResults(e.currentTarget.value)}
                  min="1"
                  max="50"
                />
                <div>{maxResults}</div>
              </div>
            </div>
            <button type="submit" className="btn-main">
              Search
            </button>
          </div>
        </form>
      </div>

      <div className="search-results cata-grid">
        {error !== "" ? (
          <p>{error}</p>
        ) : !hasSearched ? (
          <p>Type and search to explore courses from YouTube.</p>
        ) : results.length === 0 && error === "" ? (
          <p>No video found</p>
        ) : (
          results.map((video, index) => (
            <SearchVideoCard key={video?.id?.videoId || index} video={video} />
          ))
        )}
      </div>
    </div>
  );
}
