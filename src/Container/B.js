 import {connect} from "react-redux";
 import ComponentB from "../Components/ComponentB"
 import {updateValue} from "../Services/Action/Actions";

const handleChange = (event,props) => {
    const {updateValue}=props;
    console.warn(updateValue);
    const value = event.target.value;
    props.updateValue(value);

  }
  const mapDispatchToProps=dispatch=>({
    updateValue:(value)=>dispatch(updateValue(value))
  });
 export default connect(null,mapDispatchToProps)(ComponentB);