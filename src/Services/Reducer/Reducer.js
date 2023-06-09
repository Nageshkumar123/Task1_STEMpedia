import {UPDATE_VALUE} from "../Constant";
const intialstate={
	cardData:[]
}

export default function carditems(intialstate=[],action){
	switch(action.type){
case UPDATE_VALUE:
	return [
           {cardData:action.data}  
		]
default:
	return intialstate
}
}
