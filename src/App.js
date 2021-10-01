import './App.css';
import Header from "./components/Header";
import CharacterGallery from "./components/CharacterGallery"
import {useEffect, useState} from "react";
import {fetchData} from "./service/api-service";


function App() {

    const [characters, setCharacters] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        console.log("useEffect")
        fetchData()
            .then(characters => setCharacters(characters))
            .catch(error => console.log(error))
    },[])

    const handleInput = event => {
        setSearch(event.target.value)
    }

    const filteredCharacters = characters.filter(
        character => character.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
    <div>
        <Header onChange={handleInput} value={search}/>
        <CharacterGallery characters={filteredCharacters}/>
    </div>
    );
}

export default App;
