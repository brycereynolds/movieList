import React from 'react';
import './styles/index.styl';

export default class App extends React.Component{
  render(){
    return (
      <div>
        <ul>
          <li>My movie list length: {movies.length}</li>
          <li>My language list length: {languages.length}</li>
        </ul>
        <h1>Movies</h1>
        <div className='movie'>
          <div className='title'>My Title</div>
          <div className='language'>English</div>
        </div>
      </div>
    )
  }
}
