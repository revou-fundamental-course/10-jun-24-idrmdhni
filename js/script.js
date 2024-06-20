let change = true;

function convert(char) {
  let cel = document.getElementById("celcius").value.trim();
  let frnht = document.getElementById("fahrenheit");
  let cal = document.getElementById("calculation");

  if (cel == "") {
    document.getElementById("alert-message3").style.display = "none";
    document.getElementById("alert-message2").style.display = "none";
    document.getElementById("alert-message1").style.display = "block";
  } else {
    document.getElementById("alert-message1").style.display = "none";
    const regex = /^[-]?[0-9]+(\.[0-9]*)?$/;
    if (regex.test(cel)) {
      if (!change) {
        document.addEventListener("change", (event) => {
          if (event.target.id === "celcius") {
            change = true;
            console.log("berubah");
          }
        });
      }
      if (char == "Konversi") {
        document.getElementById("alert-message3").style.display = "none";
        document.getElementById("alert-message2").style.display = "none";
        let fahrenheitResult = cel * 1.8 + 32;
        let fahrenheitCalculation = `(${cel}\u00B0C \u00D7 9/5) + 32 = ${fahrenheitResult}\u00B0F`;
        frnht.value = fahrenheitResult + " " + "\u00B0F";
        cal.value = fahrenheitCalculation;
        change = false;
      } else if (char == "Reset") {
        document.getElementById("celcius").value = "";
        document.getElementById("fahrenheit").value = "";
        document.getElementById("calculation").value = "";
      } else {
        if (!change) {
          let fahrenheitResult = cel * 1.8 + 32;
          let celciusCalculation = `(${fahrenheitResult}\u00B0F - 32) \u00D7 5/9 = ${cel}\u00B0C`;
          frnht.value = fahrenheitResult + " " + "\u00B0F";
          cal.value = celciusCalculation;
        } else {
          document.getElementById("alert-message3").style.display = "block";
          document.getElementById("alert-message2").style.display = "none";
        }
      }
    } else if (char == "Reset") {
      document.getElementById("celcius").value = "";
    } else {
      document.getElementById("alert-message3").style.display = "none";
      document.getElementById("alert-message2").style.display = "block";
    }
  }
}
