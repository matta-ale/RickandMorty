import styles from './Card.module.css';
import { Link ,useLocation} from 'react-router-dom';
import { ROUTES } from '../../Helpers/PathRouters';
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import { useState , useEffect,} from 'react';

function Card(props) {
  const { id, name, status, species, gender, origin, image, onClose,addFav,removeFav,myFavorites,allCharacters} = props;
  //acá arriba hice un destructuring de las props para emprolijar el código.
  //Buena práctica
  const character = { id, name, status, species, gender, origin, image, onClose,addFav,removeFav }
  const [isFav, setIsFav] = useState(false);
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === ROUTES.FAVORITES) {
      myFavorites.forEach((fav) => {
        if (fav.id === id) {
           setIsFav(true);
        }
     });
    } else if (location.pathname ===ROUTES.HOME) {
      allCharacters.forEach((fav) => {
        if (fav.id === id) {
           setIsFav(true);
        }
     });
    }
   
}, [myFavorites]);

function handleFavorite() {
    isFav ? removeFav(id) : addFav(character);
    setIsFav(!isFav);
  }

  return (
    <div className={styles.card}>
       <div className={styles.imageAndTextContainer}>
      {
         isFav ? (
        <button className={`${styles.favButton} ${styles.favButtonTrue}`} onClick={handleFavorite}>❤️</button>
      ) : (
        <button className={styles.favButton} onClick={handleFavorite}>🤍</button>
      )}
        <img src={image} alt='character' />
        <button className={styles.closeButton}onClick={() => onClose(id)}>X</button>
        <Link to={ROUTES.DETAIL + `${id}`}>
          <div className={styles.nameDiv}>
            <h2 className={styles.name}>{name}</h2>
          </div>
        </Link>
        <div className={styles.infoDiv}>
          <h2>
            <span>Status: </span>
            {status}
          </h2>
          <h2>
            <span>Species: </span>
            {species}
          </h2>
          <h2>
            <span>Gender: </span>
            {gender}
          </h2>
          <h2>
            <span>Origin: </span>
            {origin}
          </h2>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
   
  return {
      myFavorites: state.myFavorites,
      allCharacters: state.allCharacters
   }
}


const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
