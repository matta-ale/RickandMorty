import { React, useState,useEffect } from 'react';
import styles from './Favorites.module.css';
import { connect, useDispatch } from 'react-redux';
import Card from '../Card/Card';
import { filterCards, getFav, orderCards } from '../../redux/actions';

const Favorites = (props) => {
  const { myFavorites } = props;
  const dispatch = useDispatch();
  const [aux, SetAux] = useState(false);

  useEffect( () => {
    dispatch(getFav())
  },[])
  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    SetAux(!aux);
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
    SetAux(!aux);
  };

  const onClose = () => {
    console.log('close button pressed on favorites page, no further action');
  };

  return (
    <div>
        <div className={styles.filtersContainer}>
          <h1 className={styles.title}>Favorites</h1>
          <div className={styles.selectSection}>
            <select className={styles.select} onChange={handleOrder}>
              <option value='A'>Ascendent</option>
              <option value='D'>Descendent</option>
            </select>
          </div>
          <div className={styles.selectSection}>
            <select className={styles.select} onChange={handleFilter}>
              <option value='all'>All</option>
              <option value='male'>Male</option>
              <option value='female'>Female</option>
              <option value='genderless'>Genderless</option>
              <option value='unknown'>Unknown</option>
            </select>
          </div>
        </div>
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
              origin={char.origin}
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
