const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordEl = document.getElementById("password-el")
let passwordEll = document.getElementById("password-ell")

function generate(){
    passwordEl.textContent = null
    passwordEll.textContent =  null
    for (let k= 0 ; k < 8 ; k++)
    {
        let i = Math.floor(Math.random() * characters.length)
        let j = Math.floor(Math.random() * characters.length)
        passwordEl.textContent += characters[i]
        passwordEll.textContent += characters[j] 

    }
    pa
}




