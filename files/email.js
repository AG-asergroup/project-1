(function() {
    emailjs.init({
      publicKey: "ZdxuDW2EH2QLv6TWF",
    });
})()
window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('service_0gymvmw', 'template_ql6kddn', this)
            .then(() => {
                alert('email sent!');
            }, (error) => {
                alert('FAILED...', error);
            });
    });
}