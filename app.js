const registerButton = document.querySelector('input[value="Register Now"]');
const div = document.querySelector('.details');
const bg = document.querySelector('.bg');
registerButton.addEventListener('click',function(){
    div.style.display="block";
    bg.style.display="none";
});

const submit =document.querySelector('input[value="submit"]');
submit.addEventListener('click',function(){
    alert("details are submited ")
})