// PROFESSIONAL LAKUS KINGDOM APPLICATION JAVASCRIPT

const form = document.getElementById("application-form");

const thankYouMessage = document.getElementById("thankyou-message");

/* FORM SUBMIT */

form.addEventListener("submit", async function(event){

    event.preventDefault();

    /* BUTTON LOADING EFFECT */

    const submitButton = document.querySelector("button");

    submitButton.innerHTML = "Submitting Application...";

    submitButton.disabled = true;

    submitButton.style.opacity = "0.7";

    /* GET FORM DATA */

    const formData = new FormData(form);

    /* PROFESSIONAL SUCCESS EFFECT */

    setTimeout(() => {

        /* HIDE FORM */

        form.style.display = "none";

        /* SHOW THANK YOU MESSAGE */

        thankYouMessage.style.display = "block";

        thankYouMessage.innerHTML = `
        
        <div class="success-box">

            <div class="checkmark-circle">

                ✓

            </div>

            <h1>
                Application Submitted Successfully
            </h1>

            <p>
                Thank You For Applying To Lakus Kingdom.
                Your Application Has Been Received Successfully.
            </p>

        </div>

        `;

        /* SUCCESS SOUND */

        const successAudio = new Audio(
        "https://www.soundjay.com/buttons/sounds/button-3.mp3"
        );

        successAudio.play();

        /* SCROLL TOP */

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 2500);

});

/* PROFESSIONAL INPUT ANIMATION */

const inputs = document.querySelectorAll("input, textarea");

inputs.forEach(input => {

    input.addEventListener("focus", () => {

        input.style.transform = "scale(1.02)";

        input.style.boxShadow =
        "0 0 20px rgba(0,198,255,0.5)";

    });

    input.addEventListener("blur", () => {

        input.style.transform = "scale(1)";

        input.style.boxShadow = "none";

    });

});

/* LIVE CHARACTER EFFECT */

const textareas = document.querySelectorAll("textarea");

textareas.forEach(textarea => {

    textarea.addEventListener("input", () => {

        textarea.style.border =
        "2px solid #00c6ff";

    });

});

/* PROFESSIONAL PAGE LOADING ANIMATION */

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

    document.body.style.transition =
    "1s ease";

});

<form id="myForm">
  <input type="text" name="name" placeholder="Full Name" required><br>
  <input type="email" name="email" placeholder="Email" required><br>
  <input type="text" name="phone" placeholder="Phone" required><br>
  <textarea name="message" placeholder="Message"></textarea><br>

  <button type="submit">Send</button>
</form>

<script>
const scriptURL = "https://script.google.com/macros/s/AKfycbzz7eaZs1W6CwOZ6jUwn2o-UK0Lrg784F3dSxcO2LZp7WQDzhx9fkdb616iuZoPIMrD/exec";

document.getElementById("myForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const formData = new FormData(this);
  formData.append("key", "LAKUS_SECURE_2026");

  fetch(scriptURL, {
    method: "POST",
    body: formData
  })
  .then(res => res.text())
  .then(() => {
    alert("Form submitted successfully!");
    document.getElementById("myForm").reset();
  })
  .catch(() => alert("Error submitting form"));
});
</script>const SHEET_NAME = "LAKUS KINGDOM APPLICATION FROM";
const ADMIN_EMAIL = "jallowalgasim007@gmail.com";
const SECRET_KEY = "LAKUS_SECURE_2026";

function doPost(e) {
  try {
    var data = e.parameter;

    // 🔐 Security check (blocks fake requests)
    if (data.key !== SECRET_KEY) {
      return ContentService.createTextOutput("Unauthorized");
    }

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(LAKUS KINGDOM Application form);

    // 💾 Save to Google Sheet
    sheet.appendRow([
      new Date( LAKUS KINGDOM Application from),
      data.name,
      data.email,
      data.phone,
      data.message
    ]);

    // 📩 Send email to you
    MailApp.sendEmail(jallowalgasim007@gmail.com),
      "New Website Form Submission",
      "Name: " + data.name +
      "\nEmail: " + data.email +
      "\nPhone: " + data.phone +
      "\nMessage: " + data.message
    );

    return ContentService.createTextOutput("Success");

  } catch (err) {
    return ContentService.createTextOutput("Error");
  }
}