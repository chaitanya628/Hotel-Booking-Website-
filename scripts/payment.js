// Button should be enabled only when user is logged in
if(!isLogin || isLogin === 'false'){
    document.getElementById('payment-btn').disabled = true;
} else if (isLogin === 'true') {
document.getElementById('payment-btn').disabled = false;
}

let payNow = e => {
	e.preventDefault();
	alert('Hi your booking is successfull!');
};

