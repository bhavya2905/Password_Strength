const password = document.getElementById('password');
const background =document.getElementById('background')

password.addEventListener('input', (e)=>{
    const input = e.target.value;
    const len = input.length;
    const blurVal = 20-len*2

    background.style.filter = `blur(${blurVal}px)`
})