//get the values from the page
//starts or controller function
function getValues(){
    //get values from the page
    let startVal = document.getElementById("startValue").value;
    let endVal = document.getElementById("endValue").value;
    let numbers = [];

    //validate our input
    //parse into int
    startVal = parseInt(startVal);
    endVal = parseInt(endVal);
    //we call generateNums
    if(Number.isInteger(startVal) && Number.isInteger(endVal)){
        numbers = generateNums(startVal,endVal);

    }else{
        alert("You must enter integers!");
    }
    
    //we call displayNumbers
    if(numbers.length > 0){
        displayNumbers(numbers);
    }
}
//generate numbers from the startvalue to the end value
//logic function(s)
function generateNums(start,end){
    let nums = [];
    for(let i = start; i <= end; i++){
        nums.push(i);
    }
    return nums;
}
//display the numbers and mark even numbers bold
//display or view function
function displayNumbers(numsList){
    let tempRows = "";

    for(let i = 0; i < numsList.length; i++){
        let num = numsList[i];

        let className = "even";

        if(num % 2 == 0){
            className = "even";
        }
        else{
            className = "odd"
        }
        tempRows += `<tr><td class="${className}"><strong>${num}</strong></td></tr>`;
        // if(num % 2 == 0){
        //     tempRows += `<tr><td><strong>${num}</strong></td></tr>`;
        // }
        // else{
        //     tempRows += `<tr><td>${num}</td></tr>`;
        // }
    }
    document.getElementById("results").innerHTML = tempRows;
}
