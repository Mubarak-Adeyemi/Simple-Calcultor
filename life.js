let output = document.getElementById('displayOutput');
let parentToggle = document.getElementById('parent-toggle');

function calculate(num) {
    output.value +=num
}

function clr() {
    output.value = "";
}

function del() {
    output.value = output.value.slice(0, -1);
}

function result() {
    try{
        output.value = eval(output.value)
    }
    catch {
        output.value = "Error"
    }
}

parentToggle.addEventListener('click', function(){
    this.classList.toggle('switchTheme');
})