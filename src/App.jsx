import "./App.scss";
import { useEffect, useState } from "react";
import ProfileList from "./components/ProfileList/ProfileList";
import RadioButtons from "./components/RadioButtons/RadioButtons";
import SearchBox from "./components/SearchBox/SearchBox";
import { findBeers, findAbv, findClassic, findPh } from "./data/beerData";

const App = () => {
  
  

  // searchBox data
  const [searchTerm, setSearchTerm] = useState("");


  const handleSearchBoxInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    console.log(cleanInput);
    setSearchTerm(cleanInput);
    searchBeers(cleanInput);
  };

  // radioButton data
  const [radioButtonSelected, setRadioButtonSelected] = useState("All");
  const radioButtonOptions = ["All", "ABV", "Classic", "Ph"];


  useEffect(() => {
    updateBeerList();
  }, [radioButtonSelected]);

  const onRadioButtonChange = (event) => {
    console.log(event.target.value);
    setRadioButtonSelected(event.target.value);
  };

  const updateBeerList = async () => {
    
    if (radioButtonSelected === "abv") {
      findAbv().then(setData);
    } else if (radioButtonSelected === "classic") {
      findClassic().then(setData);
    } else if (radioButtonSelected === "ph") {
      findPh().then(setData);
    } else {
      findBeers().then(setData);
    }
    
    
  };

  // profileList data
    const [data, setData] = useState([]);
  
  
  return (
    <div className="app">
      <h1>Explore Beers</h1>
      <SearchBox label={"Search Beers"} searchTerm={searchTerm} handleInput={handleSearchBoxInput}/>
      <RadioButtons
        onChange={onRadioButtonChange}
        selected={radioButtonSelected}
        options={radioButtonOptions}
        label="Beer"
      />
      {data.length > 0 && <ProfileList profiles={data} />}
    </div>
  );
};

export default App;


