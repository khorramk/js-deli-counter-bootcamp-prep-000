var katzDeliLine = [];

function takeANumber(katzDeliLine, newPerson){
  if (katzDeliLine.length === 0){
    katzDeliLine.push(newPerson);
    return `Welcome, ${newPerson}. You are number 1 in line.`;
  }else{
    katzDeliLine.push(newPerson);
    return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`;
  }
  
}

function nowServing(){
  if (katzDeliLine === 0){
    return `the line is empty`;
  }
  if (
}
