import "./Header.css"

export default function Header(props){
    return(
        <div>
            <header className={"header"}>
                <img className={"header__image"} src={"https://rickandmortyapi.com/icons/icon-512x512.png"} alt={"rick and morty logo"}/>
                <input className={"header__input"} type="text" onChange={props.onChange} value={props.value} placeholder={"Search for Characters"}/>
            </header>
        </div>

    )
}