import React from 'react';
import "./FeaturedMovie.css"
import convertDate from '../Utilities/convertDate.js'

function FeaturedMovie({ films }) {
    let filmGenre = []
    for (let genre of films?.genres) {
        filmGenre.push(genre.name)
    }

    return (
        <section className="featured" style={{
            backgroundSize : "cover",
            backgroundImage : `url(https://image.tmdb.org/t/p/original${films.backdrop_path})`,
            backgroundPosition : "center",
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">
                        {films.title}
                    </div>
                    <div className="featured--info">
                        <div className="featured--score">Note : {films.vote_average.toFixed(2)}</div>
                        <div className="featured--year">Sortie cinéma : {convertDate(films.release_date)}</div>
                    </div>
                    <div className="featured--description">
                        {films.overview}
                    </div>
                    <div className="featured--button">
                        <a href="/" className="featured--watchButton">
                            Lecture
                        </a>
                        <a href="/" className="featured--myListButton">
                            + Ma Liste
                        </a>
                    </div>
                    <div className="featured--genres">
                        {" "}
                        <strong>Genres : </strong>{filmGenre.join(', ')}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedMovie;