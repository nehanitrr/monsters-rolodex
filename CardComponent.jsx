import { Component } from "react";
import "./card-styles.css";
import "./card-styles.css";

class CardComponent extends Component {
  render() {
    const { monster : {id , email , name} } = this.props;
    return (
      <div className="card-container" key={id}>
        <img
          alt={`monster ${name}`}
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default CardComponent;
