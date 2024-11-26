// function buildShiftTable(pattern) {
//   let m = pattern.length ; 
//   const values = new Array(m).fill(m) ; 
//   for( let i  = 0  ; i < m ; ++i ){
//
//   }
//   return values ; 
// }
//
// const pattern = "BARBER";
// const shiftTable = buildShiftTable(pattern);
//
// console.log(shiftTable);

let array = [ 4 , 22 , 55 , 12 , 25 , 87 , 45 , 37 , 11 ] ; 

let empty = new Array(array.length).fill(0) ; 

for(let i = 0  ; i < array.length ; ++i){
  empty[i] = array[i] % 11  ; 
}

console.log(empty) ; 

