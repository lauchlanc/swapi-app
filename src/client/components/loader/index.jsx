import React from 'react';
import './loader.css';
import deathStar from '../../img/death-star.svg'

export type Props = {
  display: boolean,
};

const Loader = ({ display }) => (
  <div>
    {display ?
      <div className="loading">
        <img
            src={deathStar}
            className="star"
            alt="Spinning Death Star"
            />
      </div>
      :
      ''
    }
  </div>

);

export default Loader;
