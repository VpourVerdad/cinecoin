import React from "react"
import "./MovieSection.css"

function MovieSection({title, items}) {
  return (
    <div className="movieRow">
        <h2>{title}</h2>
        <div className="movieRow--left">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}>
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7" />
            </svg>
        </div>
        <div className="movieRow--right">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}>
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
        </div>
        <div className="movieRow--listArea">
            <div className="movieROw--list">
                {items.results.length > 0 &&
                    items.results.map((item, key) => (
                        <div key={key} className="movieRow--item">
                            <img
                                src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                                alt={item.original_title}
                            />
                        </div>
                    ))}
            </div>
        </div>
    </div>
  )
}

export default MovieSection