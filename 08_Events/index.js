// generating the random number to the make changes of the color
const randomColor = function() {
    const hex = "0123456789ABCDEF"
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
        
    }
    return color;
}

let Interval;
const startColorChanging = function(){
     if(!Interval){
        Interval =setInterval(changeBgcolor, 1000)
     }
    function changeBgcolor(){
        document.body.style.backgroundColor = randomColor()
    }
}
const stopColorChanging = function(){
    clearInterval(Interval)
    Interval = null;
}
document.querySelector("#start").addEventListener('click',startColorChanging)
console.log(randomColor());
document.querySelector("#stop").addEventListener('click',stopColorChanging)
console.log(randomColor());
