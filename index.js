function sendMail() {
  let data = {
    name: document.getElementById("name").value,
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
