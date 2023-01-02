import "./card.styles.css";
//import { Component } from "react";

const Card = ({ monsters }) => {
  const { id, name, email } = monsters;
  return (
    <div className="card-container" key={id}>
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt={name}
      />
      <header>
        <h2>{name}</h2>
        <p>{email}</p>
      </header>
    </div>
  );
};
export default Card;
// class Card extends Component {
//   render() {
//     const { id, name, email } = this.props.monsters;
//     return (
//       <div className="card-container" key={id}>
//         <img
//           src={`https://robohash.org/${id}?set=set2&size=180x180`}
//           alt={name}
//         />
//         <header>
//           <h2>{name}</h2>
//           <p>{email}</p>
//         </header>
//       </div>
//     );
//   }
// }

// export default Card;
