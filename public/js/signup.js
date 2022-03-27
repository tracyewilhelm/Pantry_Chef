const signupFormHandler = async function (event) {
  event.preventDefault();

  const user_name = document.querySelector("#HPusername-signup").value.trim();
  const user_password = document
    .querySelector("#HPpassword-signup")
    .value.trim();

  console.log(
    "we're going to try to post to /api/users",
    user_name,
    user_password
  );

  if (user_name && user_password) {
    console.log("before the fetch");
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        user_name,
        user_password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    console.log(user_name);
    console.log(user_password);

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
