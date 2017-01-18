// Marketo form to be insterted into Webflow Footer

<script type="text/javascript"> 

$('form#wf-form-Email-Form .btn').click(function() {
  validateNewsletterForm();
});

function validateNewsletterForm() {
  // Validation Regex for Email address
  var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // Elements
  var firstName = (document.getElementById('FirstName-3').value);
  var lastName = (document.getElementById('LastName-3').value);
  var company = (document.getElementById('Company').value);
  var emailAddress = (document.getElementById('email').value);
  var phone = (document.getElementById('phone').value);
  var errorMessage;
  // Test validity of email address
  var emailValid = emailRegex.test(emailAddress);
  if ( !emailValid || !firstName || !lastName || !company || !emailAddress || !phone ) {
    // Show Form Error block
    $('.w-form-fail').fadeIn();
    return false;
  }
  // Hide form errors on valid form
  $('.w-form-fail').hide();

  // Show Loading State
  $('#wf-form-Email-Form').fadeOut();


  // Submit to Marketo by Ajax POST
  $.ajax({
    type: 'POST',
    url: $('#wf-form-Email-Form').attr('action'),
    data: $('#wf-form-Email-Form').serialize(),
    success: showSuccessMessage
  });

  // Show Success Message after signing up
  function showSuccessMessage() {
    $('.w-form-done').fadeIn();
  }
}

</script>