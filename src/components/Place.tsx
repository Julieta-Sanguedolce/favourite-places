interface PlaceProps {
    title: string,
    place: string,
    country: string,
    image: string,
    mapUrl: string,
    comment: string
}

function Place(props: PlaceProps): JSX.Element {
    return (
      <section>
        <h2>{props.title}</h2>
        <h3>{props.place}</h3>
        <p>Country: {props.country}</p>
        <img src={props.image} alt={props.title} />
        <p>The location:</p>
        <a href={props.mapUrl} target="_blank" rel="Noreferrer">View on Map</a>
        <p>{props.comment}</p>
      </section>
    );
  }
  
  export default Place;