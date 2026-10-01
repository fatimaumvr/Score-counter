let scoreHome=document.getElementById('score1')
let scoreGuest=document.getElementById('score2')
const home1=document.getElementById('h1')
const home2=document.getElementById('h2')
const home3=document.getElementById('h3')
const guest1=document.getElementById('g1')
const guest2=document.getElementById('g2')
const guest3=document.getElementById('g3')

let numHome=Number(scoreHome.textContent)
let numGuest=Number(scoreGuest.textContent)

home1.addEventListener('click',function(){
    numHome+=1
    scoreHome.textContent=numHome

})

home2.addEventListener('click',function(){
    numHome+=2
    scoreHome.textContent=numHome
    
})

home3.addEventListener('click',function(){
    numHome+=3
    scoreHome.textContent=numHome
    
})

guest1.addEventListener('click',function(){
    numGuest+=1
    scoreGuest.textContent=numGuest
    
})

guest2.addEventListener('click',function(){
    numGuest+=2
    scoreGuest.textContent=numGuest
    
})

guest3.addEventListener('click',function(){
    numGuest+=3
    scoreGuest.textContent=numGuest
    
})
