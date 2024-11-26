const pattern = "ayub" ; 
let text = 'ljfljsl;sjflsjkweofij afkjalfjla kjayubasdjlkasjdlkj'

let m = text.length - 1 ; 


function createShiftTable( string ){
  let table = new Object ; 
  for( let i = 0 ; i < string.length ; i++){
    table[string[i]] = string.length - 1 -  i ; 
  }
  return table ;  
}

function horsepool(pattern, text) {
  const shiftTable = createShiftTable(pattern); // Step 1: Create shift table
  const m = pattern.length;
  const n = text.length;
  
  let i = m - 1; // Start comparison from the end of the pattern

  while (i < n) {
    let k = 0; // Number of matched characters
    // Compare the pattern with text from right to left
    while (k < m && pattern[m - 1 - k] === text[i - k]) {
      k++;
    }
    
    if (k === m) {
      return i - m + 1; // Match found, return starting index
    }
    
    // Mismatch: Use the shift table
    const shift = shiftTable[text[i]] || m; // Default shift if character not in pattern
    i += shift; // Update index
  }

  return -1; // No match found
}

console.log(horsepool(pattern , text)) ; 
