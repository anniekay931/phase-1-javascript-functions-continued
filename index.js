// code your solution here

// Implement a function called saturdayFun that takes "roller-skate" as the default argument when no arguments are passed.
// It allows the default argument to be overridden.
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun();
saturdayFun("bathe my dog");

// Implement a function called mondayWork that uses a default argument, 'go to the office' when no arguments are passed
function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

mondayWork()
mondayWork("work from home")


// Implement a function called wrapAdjective 
function wrapAdjective(flair = "*") {
    return function (adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    }
}

