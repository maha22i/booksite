import "./FavorisCard.css"

function LivreCard(props) {
  return(
    <div  className="card">
      {props.livres.map((i) =>
        <div className="element" key = {i.id}>
          <h5>{i.titre}</h5>
          <h6>{i.autheur}</h6>
          <h6>{i.date}</h6>
          <p>{i.resume}</p>
        </div>
      )}
    </div>
  )
}

export default LivreCard;