
function takeANumber (line, name) {
line.push(name)
return `Welcome, ${name}. You are number ${line.length} in line.`

}


function nowServing ( line ) {
  if ( line.length === 0 ){
    return "There is nobody waiting to be served!"
  }
  else
return  `Currently serving ${line.shift()}.`
}



function currentLine (line){
if (line.length === 0){
return "The line is currently empty."
}
else

var arr = []
for ( var i = 0; i < line.length; i++){
arr.push(` ${i+1}. ${line[i]}`)
}
<<<<<<< HEAD
return `The line is currently:${arr}`
=======
return `The line is currently:${arr} `
>>>>>>> 5e859b876f92a0ce0d9133d6f50ecb4f470e4959
}
