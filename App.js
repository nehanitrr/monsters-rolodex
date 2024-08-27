import "./App.css";
import { Component } from "react";
import CardListComponent from "./components/cardList/CardListComponent";
import SearchBoxComponent from "./components/searchBox/SearchBoxComponent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      filteredList: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ monsters: users, filteredList: users });
      });
  }

  onSearchList = (event) => {
    const searchStr = event.target.value.toLocaleLowerCase();
    const filterList = this.state.monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(searchStr)
    );
    this.setState(() => {
      return { filteredList: filterList };
    });
  };

  render() {
    const {
      state: { filteredList },
      onSearchList,
    } = this;
    return (
      <div className="App">
        <h1 className="app-title">MONSTERS ROLODEX</h1>
        <SearchBoxComponent
          className={"monsters-search-box"}
          onSearchList={onSearchList}
          header={"Search Monsters"}
        />
        <CardListComponent filteredList={filteredList} />
      </div>
    );
  }
}
export default App;
