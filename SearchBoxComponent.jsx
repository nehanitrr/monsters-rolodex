import { Component } from "react";
import "./SearchBox.css";
class SearchBoxComponent extends Component {
  render() {
    const { onSearchList , header ,className } = this.props;
    return (
      <input
        className={`search-box ${className}`}
        type={"search"}
        placeholder={header}
        onChange={onSearchList}
      />
    );
  }
}

export default SearchBoxComponent;
