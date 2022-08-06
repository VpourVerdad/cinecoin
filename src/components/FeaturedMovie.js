import React from 'react';

function FeaturedMovie({ films }) {
    console.log("film", films);
    let filmGenre = []
    for (let genre of films?.genres) {
        filmGenre.push(genre.name)
    }
    console.log(filmGenre)

    return (
        <section className="featured">
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">
                        {films.title}
                    </div>
                    <div className="featured--info">
                        <div className="featured--score">{films.vote_average}</div>
                        <div className="featured--year">{films.release_date}</div>
                    </div>
                    <div className="featured--description">
                        {films.overview}
                    </div>
                    <div className="featured--button">
                        <a href="/" className="featured--watchButton">
                            Lecture
                        </a>
                        <a href="/" className="featured--myListButton">
                            Ma Liste
                        </a>
                    </div>
                    <div className="featured--genres">

                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedMovie;