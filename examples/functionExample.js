//Props are read only [Can't be used as variables]
//Example of functional component
import { PropTypes } from "prop-types";
function AddItem(props) {
  return (
    <form>
      <label for="text-box">{props.disptext}</label>
      <br></br>
      <input type="text" id="text-box" />
      <p> {props.number} </p>
    </form>
  );
}
AddItem.defaultProps = {
  //default props
  number: 0,
};

AddItem.propTypes = {
  //enforces data types to avoid errors
  number: PropTypes.number,
};
export default AddItem;