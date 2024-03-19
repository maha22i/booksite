import './Favoris.css'
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate} from "react-router-dom";
import { AuthContext } from '../provider/UserProvider';
import FavorisCard from './cards/FavorisCard';
import { Button } from '../stories/Button';
import Modal from './modals/Modal';

function Favoris() {
  const [listeFavoris, setListeFavoris] = React.useState([]);
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState();

  let retour = useNavigate()
  let connexion = useNavigate();

  useEffect(()=>{
    const favouriteItems = localStorage.getItem('favourites') === null ? [] : JSON.parse(localStorage.getItem('favourites'));
    setListeFavoris(favouriteItems);
  }, [])
 
  const {currentUser} = useContext(AuthContext);

  function Connexion(){
    connexion('/connexion');
  }

  function Click(){
    retour("/");
  }

  const handleRemoveFavourite = (e, item) => {
    e.stopPropagation();
    e.preventDefault();
    
    let favouriteItems = JSON.parse(localStorage.getItem('favourites'));

    favouriteItems = favouriteItems.filter(favItem => favItem.id !== item.id);

    localStorage.setItem('favourites', JSON.stringify(favouriteItems));
    setListeFavoris(favouriteItems);
  }

  return(
    <div>
      <div className='Header'>
        {currentUser ? <p>{currentUser.username}</p> : <Button primary backgroundColor="#979797" label="Connexion" onClick={Connexion}/>}
        <Button primary backgroundColor="#979797" label="Go Home" onClick={Click}/>
      </div>
      <h1> Favoris</h1>
      
      <div className='container'>
        {listeFavoris.map((item) => {
          let thumbnail =
            item.volumeInfo.imageLinks &&
            item.volumeInfo.imageLinks.smallThumbnail;
          let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
          if (thumbnail != undefined && amount != undefined) {
            return (
              <>
                <div
                  className="card"
                  onClick={() => {
                    setShow(true);
                    setItem(item);
                  }}
                >
                  <img src={thumbnail} alt="" />
                  <div className="bottom">
                    <h3 className="title">{item.volumeInfo.title}</h3>
                    <p className="amount">&#8377;{amount}</p>
                  </div>
                  <button className="button" onClick={e => handleRemoveFavourite(e, item)} style={{backgroundColor: '#ff6f6f'}}>Remove Favorite</button>
                </div>
                <Modal
                  show={show}
                  item={bookItem}
                  onClose={() => setShow(false)}
                />
              </>
            );
          }
        })}
      </div>

      {/* <FavorisCard favoris={listeFavoris}/>  */}
    </div>
  )
}

export default Favoris;
   