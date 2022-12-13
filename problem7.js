const check=()=>{
    const table= document.getElementById("result")
let res = '<table><tr>';
for (let i = 2; i <= 30; i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        res += `<td>${i}</td>`; 
    }
}
res += '</tr></table>'
    table.innerHTML=res
}
check()