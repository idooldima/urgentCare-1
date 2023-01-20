let loader = document.getElementById("loader");
let recaptchaError = document.getElementById("recaptcha-error");

function sendMail() {
  const CERVICE_ID = "service_6g4b9sf";
  const TEMPLETE_ID = "template_fnlcymh";

  let captcha = grecaptcha.getResponse();

  loader.classList.add("show-loader");
  document.getElementById("overlay").style.display = "block";
  recaptchaError.classList.remove("show-recaptcha-error");
  let data = {
    name: document.getElementById("name").value,
    "g-recaptcha-response": captcha,
  };
  if (!!captcha) {
    emailjs
      .send(CERVICE_ID, TEMPLETE_ID, data)
      .then((res) => {
        document.getElementById("name").value = "";
        console.log(res);
      })
      .then(() => grecaptcha.reset())
      .then(() => {
        loader.classList.remove("show-loader");
        document.getElementById("overlay").style.display = "none";
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    console.log("Please capcha");
    loader.classList.remove("show-loader");
    document.getElementById("overlay").style.display = "none";
    recaptchaError.classList.add("show-recaptcha-error");
  }
}
