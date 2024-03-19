import "./FavorisCard.css"

function FavorisCard(props) {
  return(
    <div  className="card">
      {props.favoris.map((i) =>
        <div className="element" key = {i.id}>
          <h5 className="title">{i.title}</h5>
          <h6>{i.body}</h6>
        </div>
      )}
     </div>
   )
}

export default FavorisCard;