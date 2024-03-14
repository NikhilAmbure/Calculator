let calculation = '';

function updateCalculation(value){
    calculation += value;
    // console.log(calculation);
    document.querySelector('.input-box').innerHTML = calculation;
}

// function evaluation(value) {

//     let listNums = value.split("");
//     console.log(listNums);
//     let result = 0;
//     let calculation = '';
//     for (let i=0; i<listNums.length; i++){

//         if (listNums[i] == "+") {
//             result = Number(calculation) + Number(listNums[i+1]);
//             calculation = '';
//         }
//         else if(listNums[i] == "-") {
//             result = Number(calculation) - Number(listNums[i+1]);
//             calculation = '';
//         }
//         else if(listNums[i] == '/') {
//             result = Number(calculation) / Number(listNums[i+1]);
//             calculation = '';
//         }
//         else if (listNums[i] == "*") {
//             result = Number(calculation) * Number(listNums[i+1]);
//             calculation = '';
//         }
//         else {
//             calculation += listNums[i];
//         }
//     }
//     return result;
// }
