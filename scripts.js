$('.main-carousel').flickity({
  // options
  cellAlign: 'left',
  contain: true
});
$(document).ready(function(){
  $("a").on('click', function(event) {

    if (this.hash !== ""){
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });
});

function validateForm() {
  var eMail = document.forms["newsletter"]["email"].value;
  var at = eMail.indexOf("@");
  var dot = eMail.lastIndexOf(".");
  if (at<1 || dot<at+2 || dot+2>=eMail.length) {
      alert("Not a valid e-mail address");
      return false;
  }
  else alert('Thank you for subscribing!');
}
