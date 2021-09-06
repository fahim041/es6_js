const movies = ["fast 9", "Marvel", "Dc", "Avatar", "fast 5"];

const movie = movies.find((movie) => movie.includes("fast"));
//return the first match of the array even if there are more matches

console.log(movie);
