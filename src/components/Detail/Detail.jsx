import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Detail.module.css';

export default function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div className={styles.detailContainer}>
      <div className = {styles.dataAndImageContainer}>
        <div className={styles.dataContainer}>
          <div className={styles.nameDiv}><h2>{character?.name}</h2></div>
          <h2>
            <span>Status: </span>
            {character?.status}
          </h2>
          <h2>
            <span>Species: </span>
            {character?.species}
          </h2>
          <h2>
            <span>Gender: </span>
            {character?.gender}
          </h2>
          <h2>
            <span>Origin: </span>
            {character.origin?.name}
          </h2>
        </div>
        <div className={styles.imageContainer}>
          <img className={styles.detailImage} src={character?.image} alt='character' />
        </div>
      </div>
    </div>
  );
}
