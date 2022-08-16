import { Component } from "react";
import ListaKartica from "./components/ListaKartica";
import SearchPolje from "./components/SearchPolje";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      osobe: [],
      searchPolje: "",
    };
   
  }

  componentDidMount() {
   
    fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
      res.json().then((users) =>
        this.setState(
          () => {
            return { osobe: users };
          }
          
        )
      )
    );
  }

  onFilterChange = (event) =>{
    const searchPolje = event.target.value.toLocaleLowerCase();
    
    this.setState(() =>{
      return {searchPolje};
    });

  }

  render() {
    const {osobe, searchPolje} = this.state;
    const {onFilterChange} = this;
    const filter = osobe.filter((osoba) =>{
      return osoba.name
      .toLocaleLowerCase()
      .includes(searchPolje);
  });
    
    return (
      <div className="App">
        <SearchPolje onFilterChange={onFilterChange} /> {/* this props */}
        <ListaKartica osobe={filter} /> {/* this props */}
    
      </div>
    );
  }
}

export default App;
