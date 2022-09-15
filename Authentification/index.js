let savedEmail = ''
let savedPassword = ''

function goToHomePage () {
	document.getElementById('home').style.display = 'block'
	document.getElementById('login-form').style.display = 'none'
	document.getElementById('signup-form').style.display = 'none'

	document.getElementById('home-link').classList.add('active')
	document.getElementById('login-link').classList.remove('active')
	document.getElementById('signup-link').classList.remove('active')
}

function goToSignUpPage() {
	document.getElementById('home').style.display = 'none'
	document.getElementById('login-form').style.display = 'none'
	document.getElementById('signup-form').style.display = 'block'

	document.getElementById('signup-link').classList.add('active')
	document.getElementById('home-link').classList.remove('active')
	document.getElementById('login-link').classList.remove('active')
}

function goToLoginPage() {
	document.getElementById('home').style.display = 'none'
	document.getElementById('login-form').style.display = 'block'
	document.getElementById('signup-form').style.display = 'none'

	document.getElementById('login-link').classList.add('active')
	document.getElementById('signup-link').classList.remove('active')
	document.getElementById('home-link').classList.remove('active')
}

function signup() {
	let firstName = document.getElementById('first-name').value
	let lastName = document.getElementById('last-name').value
	let email = document.getElementById('email').value
	let phoneNumber = document.getElementById('phone-number').value
	let password = document.getElementById('password').value
	let confirmPassword = document.getElementById('confirm-password').value

	let error = false

	if(password !== confirmPassword) {
		document.getElementById('confirm-password-invalid').style.display = 'block'
		error = true
	} else {
		document.getElementById('confirm-password-invalid').style.display = 'none'
	}

	if(!error) {
		savedEmail = email
		savedPassword = password
		alert('Your details have been saved successfully!')
	}
}

function login () {
	let loginEmail = document.getElementById('login-email').value
	let loginPassword = document.getElementById('login-password').value

	if(loginEmail === savedEmail && loginPassword === savedPassword) {
		alert('Access granted')
	} else {
		alert('Access denied')
	}
}