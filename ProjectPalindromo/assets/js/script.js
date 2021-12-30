/* function verificaPalindromo (valorString) {
    if(!valorString) return "valor inexistente";
    
    return valorString.split("").reverse().join("") === valorString;
        
}
 */
//resolução 2
 function verificaPalindromo2 (string) {
    if(!string) return "valor inexistente";

    for(let i = 0; i < string.length / 2; i++){
        if(string[i] !== string[string.length - 1 - i]){
            return false;
        } 
    }
    return true;
} 

let arr = [1,3,4,6,80,33,23,90];

function arrayPares(arr){
    if(!arr.length)return -1;

    for(i = 0; i < arr.length; i++){
        if(arr[i] === 0){
            console.log('o array ja é zero');
        }else if( arr[i] % 2 === 0){
            arr[i] = 0;
        }
    }
return arr;
}
console.log(arrayPares([]));