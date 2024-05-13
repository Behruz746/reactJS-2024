import React from "react";

// class MovieListItem extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     const { name, views, onDelte, favorite, like, toggleItem } = this.props;
//     return (
//       <li
//         className={`list-group-item d-flex jusrify-content-between ${
//           favorite && "increase"
//         } ${like && "like"}`}
//       >
//         <span
//           className="list-group-item-label"
//           onClick={toggleItem}
//           data-toggle="like"
//         >
//           {name}
//         </span>
//         <input
//           type="number"
//           className="list-group-item-input"
//           defaultValue={views}
//         />
//         <div className="d-flex justify-center align-item-center">
//           <button
//             type="button"
//             className="btn-cookie btn-sm"
//             onClick={toggleItem}
//             data-toggle="favorite"
//           >
//             <i className="fas fa-cookie"></i>
//           </button>
//           <button type="button" className="btn-trash btn-sm" onClick={onDelte}>
//             <i className="fas fa-trash"></i>
//           </button>

//           <i className="fas fa-star"></i>
//         </div>
//       </li>
//     );
//   }
// }

function MovieListItem(props) {
  const { name, views, onDelte, favorite, like, toggleItem } = props;
  return (
    <li
      className={`list-group-item d-flex jusrify-content-between ${
        favorite && "increase"
      } ${like && "like"}`}
    >
      <span
        className="list-group-item-label"
        onClick={toggleItem}
        data-toggle="like"
      >
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
          onClick={toggleItem}
          data-toggle="favorite"
        >
          <i className="fas fa-cookie"></i>
        </button>
        <button type="button" className="btn-trash btn-sm" onClick={onDelte}>
          <i className="fas fa-trash"></i>
        </button>

        <i className="fas fa-star"></i>
      </div>
    </li>
  );
}

export default MovieListItem;
