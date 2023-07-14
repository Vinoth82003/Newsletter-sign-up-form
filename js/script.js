console.log(`js loggedd `);

const inner_container = document.querySelector(".inner-container");
const conformbox = document.querySelector(".conformbox");

const subscrib = document.querySelector(".subscrib");
const dismiss = document.querySelector(".dismiss");

subscrib.addEventListener("click", function () {
  const email = document.getElementById("email").value;

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email);
  }

  if (email === "") {
    document.getElementById("field").classList.add("error");
    document.getElementById("error").innerText = "* empty request !";
  } else if (validateEmail(email)) {
    inner_container.style.display = "none";
    conformbox.style.display = "flex";
    document.getElementById(
      "conformText"
    ).innerHTML = ` A conformation email has been sent to <strong>${email}</strong> .
    Please open it and click the button inside to confirm your subscription .  `;
  } else {
    document.getElementById("field").classList.add("error");
    document.getElementById("error").innerText = "* Invalid Mail !";
  }
});

dismiss.addEventListener("click", function () {
  inner_container.style.display = "flex";
  conformbox.style.display = "none";
  document.getElementById("field").classList.remove("error");
  document.getElementById("error").innerText = "";
  document.getElementById("email").value = "";
});
