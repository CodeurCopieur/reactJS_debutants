import React from 'react';
import PropTypes from 'prop-types';

export default function Texte({titre}) {
  return (
    <div>
      <h1>{titre}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, id quisquam sequi cumque corporis illum hic mollitia? Maiores quo atque molestias tempore similique est velit, ab error nobis, consequuntur dolores!
      </p>
    </div>
  )
}

//Propriété par default
Texte.defaultProps = {
  titre : 'titre par default'
};

Texte.propTypes = {
  titre : PropTypes.object.isRequired
};