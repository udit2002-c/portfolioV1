let count = 0;

function increment() {
    count++;
    document.getElementById('display').innerText = count;
}

function decrement() {
    if(count>0){
    count--;
    document.getElementById('display').innerText = count;
    }
}
