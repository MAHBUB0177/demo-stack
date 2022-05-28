export const initialState={
   profile:null,
//    Cartlength:0,
  pagereload:null,

}

const reducer = (state,action)=>{
   console.log(action.type);
   switch(action.type){
       case 'PRO':
           return{
               ...state,
               profile:action.value
           }
       case 'ADD_TO_CART':
           return{
            ...state,
            pagereload:action.pagereload
            }

         default:
           return{
                ...state
             }
            
   }
}


export default reducer;