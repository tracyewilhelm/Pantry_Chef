const loginFormHandler = async (event) => {
  event.preventDefault();

  const user_name = document.querySelector("#username-login").value.trim();
  const user_password = document.querySelector("#password-login").value.trim();

  console.log(
    "we're going to try and post to /api/users/login",
    user_name,
    user_password
  );

  if (user_name && user_password) {
    console.log("before the fetch");
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ user_name, user_password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log in.");
    }
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
