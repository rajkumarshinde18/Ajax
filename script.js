$(document).ready(function () {
  $("#registrationForm").submit(function (e) {
    e.preventDefault();

    let user = {
      name: $("#name").val(),
      email: $("#email").val(),
      mobile: $("#mobile").val(),
      city: $("#city").val(),
    };

    // Get existing users
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Push new user
    users.push(user);

    // Store again in local storage
    localStorage.setItem("users", JSON.stringify(users));

    // AJAX POST Method
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/posts",
      type: "POST",
      data: user,

      success: function (response) {
        alert("Registration Successful!");

        // Redirect to list page
        window.location.href = "list.html";
      },
    });
  });
});
