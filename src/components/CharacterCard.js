import "./CharacterCard.css"

export default function CharacterCard(props){
    return(
        <div className={"character-card"}>
            <h3>{props.character.name}</h3>
            <img className={"character-card__image"} src={props.character.image} alt={"image " + props.character.name}/>
            <div>Species: {props.character.species}</div>
            <div>Status: {props.character.status}</div>
        </div>
    )
}