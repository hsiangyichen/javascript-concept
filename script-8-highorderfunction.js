const movies = [
  {
    title: "Jurassic Park",
    year: 1993,
    genres: ["action", "adventure", "sci-fi"],
    rating: 8.1,
  },
  {
    title: "Back to the Future",
    year: 1985,
    genres: ["adventure", "comedy", "sci-fi"],
    rating: 8.5,
  },
  {
    title: "Aliens",
    year: 1986,
    genres: ["action", "adventure", "sci-fi"],
    rating: 8.4,
  },
  {
    title: "Indiana Jones and the Raiders of the Lost Ark",
    year: 1981,
    genres: ["action", "adventure"],
    rating: 8.4,
  },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
    genres: ["action", "adventure", "fantasy", "sci-fi"],
    rating: 8.6,
  },
  {
    title: "Total Recall",
    year: 1990,
    genres: ["action", "sci-fi", "thriller"],
    rating: 7.5,
  },
  {
    title: "Mrs. Doubtfire",
    year: 1993,
    genres: ["comedy", "drama", "family"],
    rating: 7.0,
  },
  {
    title: "Hook",
    year: 1991,
    genres: ["adventure", "comedy", "family"],
    rating: 6.8,
  },
  {
    title: "Princess Mononoke",
    year: 1997,
    genres: ["animation", "action", "adventure"],
    rating: 8.4,
  },
  {
    title: "The Matrix",
    year: 1999,
    genres: ["action", "sci-fi"],
    rating: 8.7,
  },
  {
    title: "Star Trek II: The Wrath of Khan",
    year: 1982,
    genres: ["action", "adventure", "sci-fi"],
    rating: 7.7,
  },
  {
    title: "Toy Story",
    year: 1995,
    genres: ["animation", "adventure", "comedy"],
    rating: 8.3,
  },
  {
    title: "I am Legend",
    year: 2007,
    genres: ["action", "adventure", "drama"],
    rating: 7.2,
  },
];

/* -------------------------------------------------------------------------- */
/*                         Part 1: Using Array Methods                        */
/* -------------------------------------------------------------------------- */

/* ------------------------------- .forEach() ------------------------------- */
movies.forEach((movie) => {
  console.log(movie.title);
});

/* --------------------------------- .sort() -------------------------------- */
movies.sort((a, b) => b.year - a.year);

console.log("Sorted Movies:", movies);

/* --------------------------------- .find() -------------------------------- */
const foundMovie = movies.find((movie) => {
  return movie.title === "Total Recall";
});
// this is a even clean version -> remove {} and return
// const foundMovie = movies.find((movie) => movie.title === "Total Recall");

console.log("Found it!", foundMovie);

/* -------------------------------- .filter() ------------------------------- */
const ninetiesMovies = movies.filter(
  (movie) => movie.year >= 1990 && movie.year < 2000
);

console.log("Nineties Movies:", ninetiesMovies);

/* -------------------------------- .reduce() ------------------------------- */
const averageRating =
  movies.reduce((sum, movie) => sum + movie.rating, 0) / movies.length;
console.log(`Average Rating: ${averageRating.toFixed(2)}`);

/* --------------------------------- .map() --------------------------------- */
const moviesWithPrimaryGenre = movies.map((movie) => ({
  title: movie.title,
  genre: movie.genres[0],
}));

console.log("Movies With Primary Genre:", moviesWithPrimaryGenre);

/* ---------------------------------------------------------------------------------------- */
/* -- Part 2: Create Your Own Higher-order Function That Takes a Function as an Argument -- */
/* ---------------------------------------------------------------------------------------- */
// 1.
function arrayForEachBasic(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    fn(element);
  }
}

arrayForEachBasic(movies, (movie) => {
  console.log(movie);
});

// 2. same functionality but cleaner
function arrayForEachBetter(arr, fn) {
  for (const element of arr) {
    fn(element);
  }
}

arrayForEachBetter(movies, (movie) => {
  console.log(movie);
});

// 3.
function arrayForEachWithCondition(arr, fn) {
  for (const element of arr) {
    fn(element);
  }
}

arrayForEachWithCondition(movies, (movie) => {
  if (movie.title === "Jurassic Park") {
    console.log("Found You!:", movie);
  }
});
