const signupFormHandler = async function (event) {
  event.preventDefault();

  const signUp = document.querySelector("#HPusername-signup").value.trim();
  const password = document.querySelector("#HPpassword-signup").value.trim();
  console.log("we're going to try to post to /api/users", signUp, password);

  if (signUp && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        user_name: signUp.value,
        user_password: password.value,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to sign up.");
    }
  }
};
document
  .querySelector("#homepageSignupForm")
  .addEventListener("submit", signupFormHandler);
