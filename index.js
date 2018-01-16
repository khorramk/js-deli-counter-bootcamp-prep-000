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

function nowServing(katzDeliLine){
  if (katzDeliLine.length=== 0){
    return 'There is nobody waiting to be served!';
  }
  if (katzDeliLine.length > 0){
   
    katzDeliLine.shift();
    return katzDeliLine[0];
  }

}
