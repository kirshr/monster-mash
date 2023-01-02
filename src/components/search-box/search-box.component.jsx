//import { Component } from "react";
import "./search-box.styles.css";

const searchBox = ({ className, placeholder, onChangeHandler }) => {
  return (
    <div>
      <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler} //Passing this prop to the APP component
      />
    </div>
  );
};
export default searchBox;
// class SearchBox extends Component {
//   render() {
//     return (
//       <div>
//         <input
//           className={`search-box ${this.props.className}`}
//           type="search"
//           placeholder={this.props.placeholder}
//           onChange={this.props.onChangeHandler} //Passing this prop to the APP component
//         />
//       </div>
//     );
//   }
// }
// export default SearchBox;
