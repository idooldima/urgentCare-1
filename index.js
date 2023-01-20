function sendMail() {
  let data = {
    name: document.getElementById("name").value,
    "g-recaptcha-response": "6LfhNhQkAAAAAKD-Rwd6HtP-l9-r235apUkcbOx-",
  };

  const CERVICE_ID = "service_6g4b9sf";
  const TEMPLETE_ID = "template_fnlcymh";

  emailjs
    .send(CERVICE_ID, TEMPLETE_ID, data)
    .then((res) => {
      document.getElementById("name").value = "";
      console.log(res);
    })
    .catch((err) => console.log(err));
}
