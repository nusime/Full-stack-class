const body = document.body;
body.style.backgroundColor = 'rgb(80, 71, 71)';

const h3 = document.createElement('h3');
h3.textContent = 'Please fill in the rquired information';
h3.style.textAlign = 'center';

const img = document.createElement('img');
img.src = 'unknown.jpg';
img.style.position = 'center';
img.style.width = '120px';
img.style.height = '100px';
img.style.display = 'block';
img.style.margin = '0 auto 20px';

const form = document.getElementById('myform');
form.style.backgroundColor = 'rgb(230, 216, 216)';
form.style.width = '600px';
form.style.height = '400px';
form.style.padding = '50px';
form.style.margin = '100px';

form.append(h3);
form.append(img);
form.insertBefore(img, form.firstChild);
form.insertBefore(h3, form.firstChild);

const inputs = document.querySelectorAll('input, textarea');
inputs.forEach(input => {
    input.style.width = '200px';
    input.style.border = '2px solid darkred';
    input.style.marginBottom = '10px';
    input.style.padding = '5px';
    input.style.fontSize = '14px';
    input.style.display = 'inline-grid';
    input.style.alignContent = 'center';
    input.addEventListener('focus', () => {
        input.style.backgroundColor = 'rgb(255, 205, 140)';
    });
    input.addEventListener('blur', () => {
        input.style.backgroundColor = 'rgb(255, 248, 248)';
    })
});

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.style.backgroundColor = 'rgb(80, 71, 71)';
    button.style.color = 'white';
    button.style.fontWeight = 'bold';
    button.style.transform = 'translate(50%, 50%)';
    button.style.margin = '10px';
    button.addEventListener('mouseover', ()=> {
        button.style.backgroundColor ='darkred';
    });
    button.addEventListener('mouseout', ()=> {
        button.style.backgroundColor ='rgb(80, 71, 71)';
    });
});

function validateForm(){
    try {
        const uname = document.getElementById('uname').value.trim();
        const email = document.getElementById('email').value.trim();
        const pass = document.getElementById('pass').value.trim();
        const confirmPass = document.getElementById('confirm-pass').value.trim();
        const tel = document.getElementById('tel').value.trim();
        const bdate = document.getElementById('bdate').value.trim();
        const about = document.getElementById('about').value.trim();

        if(uname === '') throw new Error('Username is required');
        if(email === '') throw new Error('Email is required');
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if(!emailPattern.test(email)) throw new Error ('Please enter a valid email');
        if(pass === '') throw new Error('Password is required');
        const passPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$#!%*?&])[A-Za-z\d@$#!%*?&]{8,}$/;
        if(!passPattern.test(pass)){ 
            throw new Error('Password must contain letter, number and special character. It should be 8 character long ');
        }
        if(confirmPass === '') throw new Error('Confirm password is required');
        if(pass != confirmPass) throw new Error('Password does not match');
        if(tel === '') throw new Error('Phone number is required');
        const telPattern =  /^\(\d{3}\) \d{3}-\d{4}$/;
        if(!telPattern.test(tel)) {
            throw new Error('Phone number should be in this format (123) 456-7890');
        }
        if(bdate === '')throw new Error('Birthdate is required');
        if(about === '')throw new Error('Tell us about yourself');
        alert('The form is submitted succesfully');
    } catch (error) {
        alert(error.message); 
    }
}

