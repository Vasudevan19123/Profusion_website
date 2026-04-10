
  const sendBtn = document.querySelector(".send_bt a");

  sendBtn.addEventListener("click", function(event) {
    event.preventDefault(); 
    const name = document.querySelector("input[name='Name']").value.trim();
    const phone = document.querySelector("input[name='Phone Number']").value.trim();
    const email = document.querySelector("input[name='Email']").value.trim();
    const message = document.querySelector("textarea[name='Massage']").value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   
    if (name === "") {
      alert("Please enter your name");
      return;
    }
    if (phone === "") {
      alert("Please enter your phone number");
      return;
    }
    if (email === "" || !emailPattern.test(email)) {
      alert("Please enter a valid email");
      return;
    }
    if (message === "") {
      alert("Please enter your message");
      return;
    }

    alert("Form submitted successfully!");
   
  });