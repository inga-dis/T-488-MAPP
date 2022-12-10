import { useSelector } from 'react-redux'
import { selectAllGenres } from '../store/genresSlice'

export const getGenresInMovie = (movie) => {
    const genres = useSelector(state => selectAllGenres(state))
    const genresNames = []
    for (let i = 0; i < movie.genres.length; i++) {
        let genreToAdd = null
        if (movie.genres[i].ID) {
            genreToAdd = genres.find(genre => genre.ID === movie.genres[i].ID)
        } else {
            genreToAdd = genres.find(genre => genre.ID == movie.genres[i])
        }
        genresNames.push(genreToAdd.Name)
    }
    return genresNames
}
