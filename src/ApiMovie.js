const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = "https://api.themoviedb.org/3/";

const fetchMovies = async (endpoint) => {
    return fetch(
        `${API_URL}${endpoint}?language=fr-FR&api_key=${API_KEY}`
    ).then(response => response.json());
}

export default {
    getHomeMovies: async () => {
        return [
            {
                slug: "top-rated",
                title: "Mieux notés",
                items: await fetchMovies('movie/top_rated')
            },
            {
                slug: "upcoming",
                title: "Prochaines sorties",
                items: await fetchMovies('movie/upcoming')
            },
            {
                slug: "popular-tv",
                title: "Séries populaires",
                items: await fetchMovies('tv/popular')
            }
        ]
    },

    getMovieInfo: async (movieId, type) => {
        let info = []
        if (movieId) {
            switch (type) {
                case "movie":
                    info = await fetchMovies(`movie/${movieId}`)
                    break;
                case "tv":
                    info = await fetchMovies(`tv/${movieId}`)
                    break;
            }
        }
        return info
    }
}
