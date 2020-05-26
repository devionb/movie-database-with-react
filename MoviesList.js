import React, { PureComponent } from 'react';
// componets need to be closed EX: <Welcome />
import styled from 'styled-components';
import Movie from './movie';


class MoviesList extends PureComponent {
  state = {
    movies: [],
  }


  async componentDidMount() {
    try {
      const result = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=163da65788e563664623c5feeeea0f37&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
      const movies = await result.json();
      this.setState({
        movies: movies.results,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <MovieGrid>
          {this.state.movies.map((movie) => (<Movie key={movie.id} movie={movie} />))}
      </MovieGrid>
    );
  }
}


export default MoviesList;

// css in javascript
const MovieGrid = styled.div`
    display: grid;
    padding: 1rem;
    grid-template-columns: repeat(5, 1fr);
    grid-row-gap: 1rem;
`;