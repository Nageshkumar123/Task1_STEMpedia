import {connect} from "react-redux";
import ComponentC from "../Components/ComponentC";
const mapStateToProps = (state) => {
  return {
    value: state.value, 
  };
};

export default connect(mapStateToProps)(ComponentC);