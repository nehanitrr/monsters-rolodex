import { Component } from "react";
import CardComponent from "../card/CardComponent";
import "./cardList-styles.css";

class CardListComponenet extends Component {
  render() {
    const { filteredList } = this.props;
    return (
      <div className="card-list">
        {filteredList.map((monster) => (
          <CardComponent monster={monster}/>
        ))}
      </div>
    );
  }
}

export default CardListComponenet;
