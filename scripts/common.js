//Header template
function showHeader() {
    var headerTemp = `<a href = "index.html"><img src="assests/images/logo.png" alt="logo" class="logo" /></a>
    <button type="button" class="btn btn-light btn-sm" data-toggle="modal" data-target="#loginModal" id="login-logout" onClick='mainLogin(event)'>LOGIN</button>
    
        <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel"
            aria-hidden="true" data-backdrop="false">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="loginModalLabel">Please Login</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    
                        <div class="modal-body">
                            <form id=login-form>
                            <div class="d-flex justify-content-around align-items-center my-2 pl-4">
                                <label>Username:</label>
                                <input type="text" required placeholder="Enter Username" id="username" name="username"><br>
                            </div>
                            <div class="d-flex justify-content-around align-items-center my-4 pl-4">
                                <label>Password:</label>
                                <input type="password" placeholder="Enter Password" required id="password" name="password"><br>
                            </div>
                            </form>

                        </div>

                        <div class="modal-footer justify-content-center">

                            <button class="btn btn-primary" id="login" data-dismiss='modal' onClick="login(event)">Login</button> 

                        </div>

                    
                </div>
            </div>
        </div>`;
    document.getElementById('header').innerHTML += headerTemp;
}

//Footer template
function showFooter() {
    var footerTemp = `<div id="contact"><button class="btn btn-info btn-sm" data-toggle="modal" data-target="#contactUsModal" data-backdrop="false">Contact Us</button></div>
    <!-- Contact Modal -->
        <div class="modal fade" id="contactUsModal" tabindex="-1" role="dialog" aria-labelledby="contactUsModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="contactUsModalLabel">Get in touch</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                    <form>
                        <p>Thank you for reaching out!!!<br>
                            Please enter your email and we will get back to you.</p>
                            <label for="email">Email: </label>
                            <input type="email" placeholder="Enter your email" required name="email"
                                autocomplete="off">
                    </div>
                    <div class="modal-footer">
                        <button type="button"  class="btn btn-primary" data-dismiss="modal">Submit</button>
                    </div>

                    </form>
                </div>
            </div>
        </div>
    <div id="social"><a href="https://www.facebook.com" target="_blank"><img src="assests/images/facebook.png" alt="facebook"></a><a href="https://www.instagram.com" target="_blank"><img src="assests/images/instagram.png" alt="facebook"></a><a href="https://www.twitter.com" target="_blank"><img src="assests/images/twitter.png" alt="facebook"></a></div><div id="copyright">&copy; 2020 ROOM SEARCH PVT. LTD.</div>`;
    document.getElementById('footer').innerHTML += footerTemp;

}
showHeader();
showFooter();





// Event handler invoked when login button inside the HEADER is clicked
 
 let mainLogin = e => {
	if (localStorage.getItem('isLogin') === 'true') {
		localStorage.setItem('isLogin', 'false');
		location.reload();
	}
};


 // Event handler invoked when login button inside the LOGIN MODAL is clicked
 

let login = e => {
	// setting both username and password to admin
	localStorage.setItem('username', 'admin');
	localStorage.setItem('password', 'admin');

	// setting the user state as non logged on webpage load
	localStorage.setItem('isLogin', 'false');

	e.preventDefault();
	let userElement = document.getElementById('username');
	let passwordElement = document.getElementById('password');

	if (
		userElement.value === localStorage.getItem('username') &&
		passwordElement.value === localStorage.getItem('password')
	) {
		localStorage.setItem('isLogin', 'true');
        alert('Successfully logged in!');
        let loginElement = document.getElementById('login-logout')
        loginElement.dataset.target = '';
        loginElement.innerText = 'LOGOUT';
        location.reload();
	} else {
		alert('Incorrect credentials! Login failed!');
		// clearing values of username & password fields from login modal
		userElement.value = '';
		passwordElement.value = '';
	}
};

let isLogin = localStorage.getItem('isLogin');
let loginElement = document.getElementById('login-logout');


let checkLogin = () => {
    if (!isLogin || isLogin === 'false') {
        localStorage.clear();
        loginElement.dataset.target = '#loginModal';
        loginElement.innerText = 'LOGIN';
    } else if (isLogin === 'true') {
        loginElement.dataset.target = '';
        loginElement.innerText = 'LOGOUT';
    }
}

checkLogin();
