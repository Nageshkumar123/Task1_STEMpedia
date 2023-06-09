
import  C  from "../Container/C";
const ComponentC=(props)=>{
   const {updateValue}=props
	return (

         <div>
         <h1>
           Value From Redux :{updateValue.value};
         </h1>
         </div>
		)
} 
export default ComponentC;