export const getGenres = (movie) => {
    let genreString = ""
    for (let i = 0 ; i < movie.genres.length; i++ ) {
        genreString += movie.genres[i].Name
        if (!(i === (movie.genres.length - 1))) {
            genreString+= ", "
        }
    }
    return genreString
}