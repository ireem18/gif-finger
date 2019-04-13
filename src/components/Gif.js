import React from 'react';


const Gif = ({gif}) => (
  <div className="column is-one-quarter">
    <div className="box">
      <a href = {gif.embed_url} target="_blank" rel = "noopener noreferrer">
        <figure className="image is-square">
          <img 
            src ={gif.images.downsized.url}
            alt={gif.title}
            style={{borderRadius:'5px'}}
            />

        </figure>
      </a>
    </div>
  </div>

);


export default Gif;