import { useState } from "react";
import Modal from "../modals/Modal";

const Card = ({ book }) => {
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState();
  console.log(book);

  const handleAddFavourite = (e, item) => {
      e.stopPropagation();
    e.preventDefault();
    
    const favouriteItems = localStorage.getItem('favourites') === null ? [] : JSON.parse(localStorage.getItem('favourites'));

    let itemAlreadyAdded = false;

    if (favouriteItems.length > 0) {
      favouriteItems.map(storageItem => {
        if (item.id === storageItem.id) {
          itemAlreadyAdded = true;
          }
        })
    }

    if (!itemAlreadyAdded) {
      favouriteItems.push(item);
    }

    localStorage.setItem('favourites', JSON.stringify(favouriteItems));

  }

  return (
    <>
      {book.map((item) => {
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
                  <button className="button" onClick={e => handleAddFavourite(e, item)}>Add Favorite</button>

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
    </>
  );
};
export default Card;
