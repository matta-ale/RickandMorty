import React from 'react';
import styles from './Favorites.module.css';
import { connect } from 'react-redux';
import Card from '../Card/Card';

const Favorites = (props) => {
  const { myFavorites } = props;
  const onClose = () => {
    console.log('close button pressed on favorites page, no further action')
  }
  return (
    <div>
      <h1>Favorites</h1>
      <div className={styles.container}>
        {myFavorites.map((char) => {
          return (
            <Card
              key={char.id}
              id={char.id}
              name={char.name}
              status={char.status.toLowerCase()}
              species={char.species.toLowerCase()}
              gender={char.gender.toLowerCase()}
              origin={char.origin.name}
              image={char.image}
              onClose={onClose}
            />
          );
        })}
      </div>
    </div>

    //
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
