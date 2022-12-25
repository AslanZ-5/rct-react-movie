class GetMovies {
  async serchMovies() {
    const res = await fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=1d5095d2457fa9660e61107e3db5b1e7&language=en-US&query=return",
    );

    if (!res.ok) {
      throw new Error("Faild to fetch data!!!!!!!!!");
    }
    const movies = await res.json();
    return movies;
  }
}

export default GetMovies;