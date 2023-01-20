function sendMail() {
  let captcha = grecaptcha.getResponse();
  console.log(captcha);
  let data = {
    name: document.getElementById("name").value,
    "g-recaptcha-response": captcha,
  };

  const CERVICE_ID = "service_6g4b9sf";
  const TEMPLETE_ID = "template_fnlcymh";
  if (!!capcha) {
    emailjs
      .send(CERVICE_ID, TEMPLETE_ID, data)
      .then((res) => {
        document.getElementById("name").value = "";
        console.log(res);
      })
      .then(() => grecaptcha.reset())
      .catch((err) => console.log(err));
  } else {
    console.log("Please capcha");
  }
}
