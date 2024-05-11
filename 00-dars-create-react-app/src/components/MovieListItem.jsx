import React from "react";

class MovieListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: false,
      like: false,
    };
  }

  favoriteHandel = () => {
    this.setState(({ favorite }) => ({
      favorite: !favorite,
    }));
  };

  likeHandel = () => {
    this.setState(({ like }) => ({
      like: !like,
    }));
  };

  deleteHandel = () => {};

  render() {
    const { name, views } = this.props;
    const { favorite, like } = this.state;
    return (
      <li
        className={`list-group-item d-flex jusrify-content-between ${
          favorite && "increase"
        } ${like && "like"}`}
      >
        <span className="list-group-item-label" onClick={this.likeHandel}>
          {name}
        </span>
        <input
          type="number"
          className="list-group-item-input"
          defaultValue={views}
        />
        <div className="d-flex justify-center align-item-center">
          <button
            type="button"
            className="btn-cookie btn-sm"
            onClick={this.favoriteHandel}
          >
            <i className="fas fa-cookie"></i>
          </button>
          <button
            type="button"
            className="btn-trash btn-sm"
            onClick={this.deleteHandel}
          >
            <i className="fas fa-trash"></i>
          </button>

          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

// function MovieListItem({ name, views, favorite }) {
//   return (
//     <li
//       className={`list-group-item d-flex jusrify-content-between ${
//         favorite && "increase"
//       }`}
//     >
//       <span className="list-group-item-label">{name}</span>
//       <input
//         type="number"
//         className="list-group-item-input"
//         defaultValue={views}
//       />
//       <div className="d-flex justify-center align-item-center">
//         <button type="button" className="btn-cookie btn-sm">
//           <i className="fas fa-cookie"></i>
//         </button>
//         <button type="button" className="btn-trash btn-sm">
//           <i className="fas fa-trash"></i>
//         </button>
//         <i className="fas fa-star"></i>
//       </div>
//     </li>
//   );
// }

export default MovieListItem;
