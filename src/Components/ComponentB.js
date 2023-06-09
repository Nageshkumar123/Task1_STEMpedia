
import React from "react";

function ComponentB(props){


return(
<div>
<h1>Component B</h1>
<input type="text"  onChange={props.handleChange()} />

</div>

) 

}
 



export default ComponentB;