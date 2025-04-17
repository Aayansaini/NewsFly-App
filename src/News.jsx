import React, { useEffect, useState } from "react";
import "./News.css";

const API_KEY = "26703ffa784a4230a03da28f2b0d9eaf";

function News() {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchRandomNews();
  }, []);

  const fetchRandomNews = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?sources=techcrunch&pageSize=12&apiKey=${API_KEY}`
      );
      if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
      const data = await res.json();
      setArticles(data.articles);
    } catch (err) {
      setError("Failed to fetch random news.");
    } finally {
      setLoading(false);
    }
  };

  const fetchNewsByQuery = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch(
        `https://newsapi.org/v2/everything?q=${query}&pageSize=10&apiKey=${API_KEY}`
      );
      if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
      const data = await res.json();
      setArticles(data.articles);
    } catch (err) {
      setError("Failed to fetch news by query.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    fetchNewsByQuery();
  };

  return (
    <div>
      <nav>
        <div className="navbar obj-width">
          <a href="#" className="logo">
            NewsApp
          </a>
          <div>
            <input
              id="search-input"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search news..."
            />
            <button id="search-button" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </nav>

      <div id="blog-container" className="obj-width">
        {loading && <p style={{ color: 'white', fontSize: '18px' }}>Loading...</p>}
        {error && <p style={{ color: 'red', fontSize: '18px' }}>{error}</p>}
        {!loading && !error && articles.length === 0 && (
          <p style={{ color: 'white', fontSize: '18px' }}>No articles found.</p>
        )}
        {articles.map((article, index) => (
          <div
            className="blog-card"
            key={index}
            onClick={() => window.open(article.url, "_blank")}
          >
            <img
              src={article.urlToImage || "default-image.jpg"}
              alt={article.title}
            />
            <h2>
              {article.title.length > 30
                ? `${article.title.slice(0, 30)}...`
                : article.title}
            </h2>
            <p>
              {article.description && article.description.length > 120
                ? `${article.description.slice(0, 120)}...`
                : article.description || ""}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
