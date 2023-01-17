import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";

export class App extends Component {
  state = {
    inputSearch : '',
  };

  handleSearchSubmit = inputSearch => {
    this.setState({
      inputSearch: inputSearch,
    })
  }

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
        >
      </div>
      </div>
    );
  }
}
