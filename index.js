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
  let x = string
  if (string.toLowerCase !== string){
    return "I can\'t hear you!"
  } else if (string === "I love you, Grandma") {
    return "I love you, too."
  } else {
    return "YES INDEED!"
  }
}
