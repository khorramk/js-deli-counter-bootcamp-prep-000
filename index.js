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
      var kats = katzDeliLine.shift();
    return `Currently serving ${kats}.`;
}

function currentLine(line){
  if(katzDeliLine.length > 0){
   return `The line is currently: 1. ${katzDeliLine[0]}, 2. ${katzDeliLine[1]}, 3. ${katzDeliLine[2]}`;
  }else{
    return 'The line is currently empty.';
  }
}
