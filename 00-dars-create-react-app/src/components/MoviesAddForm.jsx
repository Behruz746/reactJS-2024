import React from "react";

class MoviesAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Kung Fu Panda",
      views: "000",
    };
  }

  onChangeInput = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, views } = this.state;

    return (
      <div className="movies-add-form">
        <h3>Yangi kino qo'shing</h3>
        <form action="#" className="add-form d-flex">
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Qanday kino?"
            onChange={(e) => this.onChangeInput(e)}
            name="name"
            value={name}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="Nechi marotaba ko'rilgan"
            onChange={(e) => this.onChangeInput(e)}
            name="views"
            value={views}
          />
          <button type="submit" className="btn btn-outline-dark">
            Qo'shish
          </button>
        </form>
      </div>
    );
  }
}

// function MoviesAddForm({ dataList }) {
//   return (
//     <div className="movies-add-form">
//       <h3>Yangi kino qo'shing</h3>
//       <form action="#" className="add-form d-flex">
//         <input
//           type="text"
//           className="form-control new-post-label"
//           placeholder="Qanday kino?"
//         />
//         <input
//           type="number"
//           className="form-control new-post-label"
//           placeholder="Nechi marotaba ko'rilgan"
//         />
//         <button type="submit" className="btn btn-outline-dark">
//           Qo'shish
//         </button>
//       </form>
//     </div>
//   );
// }

export default MoviesAddForm;
