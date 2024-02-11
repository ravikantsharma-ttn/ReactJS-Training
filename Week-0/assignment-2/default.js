const numArr = [1,2,3,4,5]

function startDisplay(){
    let counter = 0; 

    return function display(){
        setInterval(()=>{
            if(counter == numArr.length){
                counter = 0;
            }
            document.getElementById("counter").innerText = numArr[counter];
            counter++;
        },3000)
    }
}

const disp = startDisplay();

disp();