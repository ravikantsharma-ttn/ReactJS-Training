function counter(){
    let counter = 1; 

    return function display(){
        setInterval(()=>{
            document.getElementById("counter").innerText = counter;
            counter++;
        },1000)
    }
}

const displayCounter = counter();

displayCounter();