import { useEffect, useState } from "react";
import Card from "./cards/card";
import axios from "axios";
const Main = () => {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);

  useEffect(() => {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=''" +
            "&key=AIzaSyBHOPo2V3b2o-sg8EqBBPZtCr9S3nCoa7E" +
            "&maxResults=40"
        )
        .then((res) => setData(res.data.items))
        .catch((err) => console.log(err));
  }, [])

  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&key=AIzaSyBHOPo2V3b2o-sg8EqBBPZtCr9S3nCoa7E" +
            "&maxResults=40"
        )
        .then((res) => setData(res.data.items))
        .catch((err) => console.log(err));
    }
  };

  console.log(bookData);

  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>
           Bienvenue chez BookApp
          </h1>
        </div>
        <div className="row2">
          <h2>Trouvez un livre</h2>
          <div className="search">
            <input
              type="text"
              placeholder="nom du livre"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={searchBook}
            />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>
          {/* <img src="./images/bg2.png" alt="" /> */}
        </div>
      </div>

      <div className="container">{<Card book={bookData} />}</div>
    </>
  );
};
export default Main;
