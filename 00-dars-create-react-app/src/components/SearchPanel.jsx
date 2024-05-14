import React, { Component } from "react";

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
  }

  upDateTermHandel = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.upDateTermHandel(term);
  };

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Kinolarni qidirish"
        onChange={this.upDateTermHandel}
        termue={this.state.term}
      />
    );
  }
}

// function SearchPanel({ data, searchHeander }) {
//   return (
//     <input
//       type="text"
//       className="form-control search-input"
//       placeholder="Kinolarni qidirish"
//       onChange={(e) => searchHeander(data, e.target.termue)}
//     />
//   );
// }

export default SearchPanel;
