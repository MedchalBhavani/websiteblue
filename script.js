 const forms=document.querySelector('.forms');//class of login form and reg form
const loginform=document.querySelector('.loginform');//signin  regiter button class
const register=document.querySelector('.register');//signup class
const last=document.querySelector('.last');
const last2=document.querySelector('.last2');








last2.addEventListener('click', (e)=>{
e.preventDefault();

    loginform.classList.add('active');
    register.classList.remove('active');
    display: block;
    // When the element with the class 'last2' is clicked (presumably related to signing in or registering), add the class 'active' to the element with the class 'forms'
});

last.addEventListener('click', (e)=> {
    e.preventDefault();
    register.classList.add('active'); 
    loginform.classList.remove('active');// When the element with the class 'last' is clicked (presumably related to signing up), remove the class 'active' from the element with the class 'forms'
});








  /*
 document.addEventListener('DOMContentLoaded', function() {
    const loginform = document.getElementsByClassName('.loginform');
    const register = document.getElementsByClassName('.register');
    const  last2= document.getElementsByClassName('.last2');
    const last = document.getElementById('registerLink');

    last2.addEventListener('click', function(event) {
        event.preventDefault();
        loginform.classList.add('show');
        register.classList.remove('show');
    });

    last.addEventListener('click', function(event) {
        event.preventDefault();
        register.classList.add('show');
        loginform.classList.remove('show');
    });
});

*/


/*

document.addEventListener('DOMContentLoaded', function() {
    const forms= document.getElementsByClassName('.forms');
    const  last2= document.getElementsByClassName('.last2');
    const last = document.getElementsByClassName('.last');

    last2.addEventListener('click', function(event) {
        event.preventDefault();
        forms.classList.add('show');
        forms.classList.remove('show');
    });

    last.addEventListener('click', function(event) {
        event.preventDefault();
        forms.classList.add('show');
        forms.classList.remove('show');
    });
});

*/








