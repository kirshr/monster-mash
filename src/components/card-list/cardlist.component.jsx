//import { Component } from "react";
import "./card-list.styles.css";
import Card from "../card/card.component";

//FUNCTIONAL COMPONENT

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card monsters={monster} />;
    })}
  </div>
);

export default CardList;

//CLASS COMPONENT
// class CardList extends Component {
//   render() {
//     const { monsters } = this.props;
//     return (
//       <div className="card-list">
//         {monsters.map((monster) => {
//           return <Card monsters={monster} />;
//         })}
//       </div>
//     );
//   }
// }
// export default CardList;
