//catching elements

let time = document.querySelector('.infocorpo.vez')


let a1 = document.querySelector(`.item[data-item=a1]`)
let a2 = document.querySelector(`.item[data-item=a2]`)
let a3 = document.querySelector(`.item[data-item=a3]`)

let b1 = document.querySelector(`.item[data-item=b1]`)
let b2 = document.querySelector(`.item[data-item=b2]`)
let b3 = document.querySelector(`.item[data-item=b3]`)

let c1 = document.querySelector(`.item[data-item=c1]`)
let c2 = document.querySelector(`.item[data-item=c2]`)
let c3 = document.querySelector(`.item[data-item=c3]`)

let winner = document.querySelector('.infocorpo.resultado')


//putting click actions

    document.querySelectorAll('.item').forEach((element)=> {
        element.addEventListener('click', ()=> {
            switch (time.innerHTML) {
                case 'x':
                        if(element.innerHTML === '' && winner.innerHTML !== 'x' && winner.innerHTML !== 'o'){
                        element.innerHTML = 'x'
                        time.innerHTML = 'o'}
                        win()
                        break
                case 'o':if(element.innerHTML === '' && winner.innerHTML !== 'x' && winner.innerHTML !== 'o'){
                        element.innerHTML = 'o'
                        time.innerHTML = 'x'}
                        win()
                        break
                }
            })
        })
document.querySelector('.reset').addEventListener('click', reset)

//functions

function reset (){
    document.querySelectorAll('.item').forEach ((item)=> {
        item.innerHTML = ''
        winner.innerHTML = '--'
    })
    random()
}

function random () {
    time.innerHTML = Math.random()*100
    if (time.innerHTML > 50) {
        time.innerHTML = 'x'
    }
    else {
        time.innerHTML = 'o'
    }
}

function win () { 
    if (a1.innerHTML === a2.innerHTML && a2.innerHTML === a3.innerHTML) {
        winner.innerHTML = a1.innerHTML
    } else if (b1.innerHTML === b2.innerHTML && b2.innerHTML === b3.innerHTML) {
        winner.innerHTML = b1.innerHTML
    } else if (c1.innerHTML === c2.innerHTML && c2.innerHTML === c3.innerHTML) {
        winner.innerHTML = c1.innerHTML
    } else if (a1.innerHTML === b2.innerHTML && b2.innerHTML === c3.innerHTML) {
        winner.innerHTML = a1.innerHTML
    } else if (a3.innerHTML === b2.innerHTML && b2.innerHTML === c1.innerHTML) {
        winner.innerHTML = a3.innerHTML
    } else if (a1.innerHTML === b1.innerHTML && b1.innerHTML === c1.innerHTML) {
        winner.innerHTML = a1.innerHTML
    } else if (a2.innerHTML === b2.innerHTML && b2.innerHTML === c2.innerHTML) {
        winner.innerHTML = a2.innerHTML
    } else if (a3.innerHTML === b3.innerHTML && b3.innerHTML === c3.innerHTML) {
        winner.innerHTML = a3.innerHTML
    } else {
        
    }
}
random()