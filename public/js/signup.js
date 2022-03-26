const signupFormHandler = async (event) => {
  event.preventDefault();

  const signUp = document.querySelector("#username-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (signUp && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ signUp, password }),
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
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
