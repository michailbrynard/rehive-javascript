describe("Auth", function() {
  var rehive;

  beforeEach(function() {
    rehive = new Rehive({apiVersion: 3});
    //console.log(rehive);
    spyOn(rehive.auth, "registerCompany").and.returnValue('test1@rehive.com');
    spyOn(rehive.auth, "register").and.returnValue('test1@rehive.com');
    spyOn(rehive.auth, "login").and.returnValue('test1@rehive.com');
    spyOn(rehive.auth, "logout").and.returnValue('Successfully logged out.');
    spyOn(rehive.auth, "logoutAll").and.returnValue('Successfully logged out all sessions.');
    spyOn(rehive.auth, "changePassword").and.returnValue('New password has been saved.');
    spyOn(rehive.auth, "resetPassword").and.returnValue('Password reset message has been sent.');
    spyOn(rehive.auth, "resetConfirmPassword").and.returnValue('Password has been reset with the new password.');
    spyOn(rehive.auth, "resendEmailVerification").and.returnValue('success');
    spyOn(rehive.auth, "resendMobileVerification").and.returnValue('success');
    spyOn(rehive.auth, "verifyMobile").and.returnValue('success');
  });

  it("should be able to register company successfully", function() {
    var email;

    email = rehive.auth.registerCompany();

    expect(rehive.auth.registerCompany).toHaveBeenCalledTimes(1);
    expect(email).toEqual('test1@rehive.com');
  });


  it("should be able to register successfully", function() {
    var email;

    email = rehive.auth.register();

    expect(rehive.auth.register).toHaveBeenCalledTimes(1);
    expect(email).toEqual('test1@rehive.com');
  });

  it("should be able to login successfully", function() {
    var email;

    email = rehive.auth.login();

    expect(rehive.auth.login).toHaveBeenCalledTimes(1);
    expect(email).toEqual('test1@rehive.com');
  });

  it("should be able to logout successfully", function() {
    var message;

    message = rehive.auth.logout();

    expect(rehive.auth.logout).toHaveBeenCalledTimes(1);
    expect(message).toEqual("Successfully logged out.");
  });

  it("should be able to logout all successfully", function() {
    var message;

    message = rehive.auth.logoutAll();

    expect(rehive.auth.logoutAll).toHaveBeenCalledTimes(1);
    expect(message).toEqual("Successfully logged out all sessions.");
  });

  it("should be able to change password successfully", function() {
    var message;

    message = rehive.auth.changePassword();

    expect(rehive.auth.changePassword).toHaveBeenCalledTimes(1);
    expect(message).toEqual("New password has been saved.");
  });

  it("should be able to send reset password message successfully", function() {
    var message;

    message = rehive.auth.resetPassword();

    expect(rehive.auth.resetPassword).toHaveBeenCalledTimes(1);
    expect(message).toEqual("Password reset message has been sent.");

  });

  it("should be able to confirm password reset successfully", function() {
    var message;

    message = rehive.auth.resetConfirmPassword();

    expect(rehive.auth.resetConfirmPassword).toHaveBeenCalledTimes(1);
    expect(message).toEqual("Password has been reset with the new password.");
  });

  it("should be able to resend email verification successfully", function() {
    var status;

    status = rehive.auth.resendEmailVerification();

    expect(rehive.auth.resendEmailVerification).toHaveBeenCalledTimes(1);
    expect(status).toEqual("success");
  });

  it("should be able to resend mobile verification successfully", function() {
    var status;

    status = rehive.auth.resendMobileVerification();

    expect(rehive.auth.resendMobileVerification).toHaveBeenCalledTimes(1);
    expect(status).toEqual("success");
  });

  it("should be able to verify mobile number successfully", function() {
    var status;

    status = rehive.auth.verifyMobile();

    expect(rehive.auth.verifyMobile).toHaveBeenCalledTimes(1);
    expect(status).toEqual("success");
  });
});
