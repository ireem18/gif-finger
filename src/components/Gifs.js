import React from 'react';

import Gif from './Gif';

const Gifs = ({gifs}) => (
  <div className="container">
    <div className="columns is-multiline" style={{margin:'0 5px 20px 5px'}}>
      {gifs.map(gif => (
        <Gif key={gif.id} gif={gif} />
      ))}
    </div>
  </div>
)

export default Gifs;