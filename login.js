const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');


form.addEventListener('submit', e => {
	
	checkInputs();    

	if(isFormValid()==true){
		window.location.href = form.getAttribute("action");
	}
	else{
		e.preventDefault();
	} 
});

function isFormValid(){
	const formControls=form.querySelectorAll(".form-control");
	let result=true;
	formControls.forEach((control) => {
		if(control.classList.contains('error')){
			result=false;
		}
	});	
	return result;
}



function checkInputs() {
	
const usernameValue = username.value.trim();
const passwordValue = password.value.trim();
    if(usernameValue!="admin"){
        setErrorFor(username);
		
    }else {
		setSuccessFor(username);
		
	}
	
   
    // password validation
	 if(passwordValue!="12345"){
        setErrorFor(password)
		
    }
    else {
       setSuccessFor(password)
		
    }  
	
}

function setErrorFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control error';
	
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
