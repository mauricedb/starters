import { Movie } from '../types/movie';
import { Vote } from './Vote';
import classes from './SelectedMovie.module.css';

interface Props {
  movie: Movie;
  clearSelectedMovie: () => void;
}

export function SelectedMovie({ clearSelectedMovie, movie }: Props) {
  return (
    <section className={classes.SelectedMovie}>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <p>
        Released on:&nbsp;
        {new Date(movie.release_date).toLocaleDateString()}
      </p>
      <Vote average={movie.vote_average} count={movie.vote_count} />
      <p>
        <button onClick={clearSelectedMovie}>Back</button>
      </p>
    </section>
  );
}
