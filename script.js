let textBox = document.querySelector('#textBox');
let qrBox = document.querySelector('#qrBox');
let qrImg = document.querySelector('#qrImg');

function qrGenerate(){
    if(textBox.value == ""){
        textBox.classList.add("error");

        setTimeout(()=>{
            textBox.classList.remove("error");
        }, 1000)
    }
    else{
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + textBox.value;
        qrBox.classList.add("showImg");
    }
    
}