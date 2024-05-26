function toggleMenu(){
    var toggler = document.getElementById('toggler');
    if (toggler) {
        toggler.checked = false;
}
}
function goToLogin() {
    window.location.href = "login.html"; 
}
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.policy .row .content p').forEach(p => {
        let text = p.innerText;
        let transformedText = text.charAt(0) + text.slice(1).toLowerCase();
        p.innerText = transformedText;
    });
});
let cartItemCount = 0;
function addToCart(event) {
    
    cartItemCount++;
    document.getElementById("cartItemCount").innerText = cartItemCount;
    event.preventDefault();
}
function goToCheckout() {  
    window.location.href = "giaohang.html";
}  
        document.getElementById('customerInfoForm').addEventListener('submit', function(event) {
            event.preventDefault();     
            var fullName = document.getElementById('fullName').value;
            var email = document.getElementById('email').value;
            var address = document.getElementById('address').value;
            var phoneNumber = document.getElementById('phoneNumber').value;
            window.location.href = 'camon.html';
        });
        