let loader = document.getElementById("loader");
console.log(loader);
function sendMail() {
  const CERVICE_ID = "service_6g4b9sf";
  const TEMPLETE_ID = "template_fnlcymh";

  let captcha = grecaptcha.getResponse();
  if (!!captcha) {
    loader.classList.add("show-loader");
    let data = {
      name: document.getElementById("name").value,
      "g-recaptcha-response": captcha,
    };

    emailjs
      .send(CERVICE_ID, TEMPLETE_ID, data)
      .then((res) => {
        document.getElementById("name").value = "";
        console.log(res);
      })
      .then(() => grecaptcha.reset())
      .then(() => loader.classList.remove("show-loader"))
      .catch((err) => {
        console.log(err);
      });
  } else {
    console.log("Please capcha");
  }
}
