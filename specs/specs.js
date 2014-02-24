describe("Contact", function() {
  describe("fullName", function() {
    it("combines the first and last name, separated by a space", function() {
      var testContact = Object.create(Contact)
      testContact.firstName = "Britney";
      testContact.lastName = "Spears";
      testContact.fullName().should.equal("Britney Spears");
    });
    
  });
});

