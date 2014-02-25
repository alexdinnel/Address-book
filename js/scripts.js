var Contact = {
  fullName: function() {
    return this.firstName + " " + this.lastName;  
  }
};

$(document).ready(function() {
  $('form#new-contact').submit(function() {
    event.preventDefault();
    var clickedForEdit;
    var inputFirstName = $("input#new-first-name").val();
    var inputLastName = $("input#new-last-name").val();
    var inputAddress = $("input#new-address").val();
    var newContact = Object.create(Contact);
    newContact.firstName = inputFirstName;
    newContact.lastName = inputLastName;
    newContact.address = inputAddress;

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + '</span></li>');

    $(".contact").last().click(function(){
      clickedForEdit = $(this);
      $(".edit").show();
      $("#edit-first-name").val(inputFirstName);
      $("#edit-last-name").val(inputLastName);
      $("#edit-address").val(inputAddress);
      

      $("#edit-contact").submit(function(event) {
         event.preventDefault();
         newContact.firstName = $("#edit-first-name").val();
         newContact.lastName = $("#edit-last-name").val();
         newContact.address = $("#edit-address").val();
         clickedForEdit.html(newContact.fullName());
         
         clickedForEdit.click(function(event) {
           $(".edit").show();
           var inputFirstName = $("edit#new-first-name").val();
           var inputLastName = $("edit#new-last-name").val();
           var inputAddress = $("edit#new-address").val();
           newContact.firstName = inputFirstName;
           newContact.lastName = inputLastName;
           newContact.address = inputAddress;
  
           // event.preventDefault();
         });

         
      });
      
    });
    

    this.reset();
  })
})


