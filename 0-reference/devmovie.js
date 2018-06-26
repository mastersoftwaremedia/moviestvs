import axios from 'axios';
...
const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
  fields:{
		newMovies: {
			type: new GraphQLList(NewMoviesType),
      resolve() {
				return axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API}&language=en-US&page=1`)
        .then(res => {
					const movies = res.data.results;
          movies.map(movie=> 
						movie.poster_path = "https://image.tmdb.org/t/p/w500"+movie.poster_path)
          return movies
        })
      }
		}          
  }
})
---------
Step Three: Get information for a single movie

https://api.themoviedb.org/3/movie/${id}?api_key=${YOUR_API}&language=en-US
=>
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{
        topMovies: {...},
        movieInfo: {
            type: MovieInfoType,
            args: {id: {type: GraphQLString}},
            resolve(parentValue, args) {
                return axios.get(`https://api.themoviedb.org/3/movie/${args.id}?api_key=${process.env.API}&language=en-US&page=1`)
                .then(res => {
                    const movie = res.data;
                    movie.genres = movie.genres.map(g => g.name).join(', ')
                    movie.production_companies = movie.production_companies.map(c => c.name).join(', ')
                    movie.runtime+= ' min.'
                    return movie
                })
            }
        }
    }
})
---------------
In the original API, the genres and production_companies and represented as arrays:
genres: [
    {
        id: 18,
        name: "Drama"
    },
    {
        id: 10751,
        name: "Family"
    }
],
production_companies: [
    {
        id: 9195,
        logo_path: "/ou5BUbtulr6tIt699q6xJiEQTR9.png",
        name: "Touchstone Pictures",
        origin_country: ""
    }
],
-----------
Step Four: Get Movie trailers

https://api.themoviedb.org/3/movie/${id}/videos?api_key=${YOUR_API}&language=en-US
=>

The result being a reference to an array of youtube videos

{
    id: 43535,
    results: [
        {
            id: "533ec6a1c3a3685448004f82",
            iso_639_1: "en",
            iso_3166_1: "US",
            key: "e7bD5BNqfwY",
            name: "A Simple Twist of Fate - Hallmark Channel",
            site: "YouTube",
            size: 360,
            type: "Trailer"
        }
    ]
}
-----------
=>
const MovieInfoType = new GraphQLObjectType({
    name: 'MovieInfo',
    fields: {
        id: {type: GraphQLString},
        ...
         videos: {
             type: new GraphQLList(VideoType),
             args: {id: { type: GraphQLString } },
             resolve(parentValue, args) {
                return axios.get(`https://api.themoviedb.org/3/movie/${parentValue.id}/videos?api_key=${process.env.API}&language=en-US`)
                .then(res => res.data.results)
             }
         }
    }
})
=>
          movieCredits: {
            type: new GraphQLList(MovieCreditsType),
            args: {id: {type: GraphQLString}},
            resolve(parentValue, args) {
              return axios.get(`https://api.themoviedb.org/3/movie/${parentValue.id}/credits?api_key=${process.env.API}&language=en-US&page=1`)
              .then(res =>  res.data.cast.filter(cast => cast.profile_path ) )
            }
          }
========
const MovieInfoType = new GraphQLObjectType({
    name: 'MovieInfo',
    fields: {
        id: {type: GraphQLString},
        ...
         videos: { ... },
         ...
    }
})
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{
        videos: {
            type: new GraphQLList(VideoType),
            args: {id: { type: GraphQLString } },
            resolve(parentValue, args) {
               return axios.get(`https://api.themoviedb.org/3/movie/${args.id}/videos?api_key=${process.env.API}&language=en-US`)
               .then(res => res.data.results)
            }
        },
        newMovies: { ... } ,
        movieInfo: { ... }         
    }
})