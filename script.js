
var h1=document.createElement('h1')
console.log(h1)
h1.innerHTML='hello'
document.body.appendChild(h1)

//default import export... 
import people from './app.js'
console.log(people)

//name import export...
import {arr} from './app.js'