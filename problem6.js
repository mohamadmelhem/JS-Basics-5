// program to generate a multiplication table up to 12

//creating a multiplication table
const multiple=()=>{
    const table= document.getElementById("result")
const choosed =document.getElementById("number").value
let res = '<table><tr>';
console.log(choosed); 
  for(let i = 1; i <= 12; i++) {

        // multiply i with number
        const result = choosed * i;
    
        // display the result
        console.log(choosed); 
        res += `<td>${result}</td>`;
        
        
    }  
    res += '</tr></table>'
    table.innerHTML=res
}

