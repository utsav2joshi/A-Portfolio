function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "shubham607joshi@gmail.com",
        Password : "kisnautsav",
        To : 'shubham607joshi@gmail.com',
        From : document.getElementById("email").value,
        Subject :document.getElementById("lttr").value,
        Body : "And this is the body"
    }).then(
    message => alert(message)
    );
}
let typed = new Typed('#element', {
    strings: ["Utsav here", "WebApp developer"],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true,
    fadeOut: false,
  fadeOutClass: 'typed-fade-out',
  fadeOutDelay: 500,
  });