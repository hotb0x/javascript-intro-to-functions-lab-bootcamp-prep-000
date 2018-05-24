function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  let x = string.toUpperCase()
  console.log(x)
}

function logWhisper(string){
  let x = string.toLowerCase()
  console.log(x)
}

function sayHiToGrandma(string){
  if (string === string.toLowerCase){
    return "I can\'t hear you!"
  }
}
