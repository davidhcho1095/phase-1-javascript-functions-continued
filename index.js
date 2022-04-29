//Saturday Fun
function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
}
//Monday Work
function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}
//Wrap Adjective
function wrapAdjective(adjective = '*'){
    let inner = function(Default = '||'){
        return `You are ${adjective}${Default}${adjective}!`;
    }
    return inner;
}