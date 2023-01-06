var age = prompt("Input your age:");

if (age < 18) {
  document.write("<b> You are Minor. </b>");
  document.write("<br> Not Eligible to Work ");
} else {
  if (age >= 18 && age <= 60) {
    document.write("<b> You are Eligible to Work. </b>");
    document.write("<br> Please fill in your details and apply ");
  } else {
    document.write(
      "<b> You are too old to work as per the Government rules </b>"
    );
    document.write("<br> Please Collect your pension!");
  }
}
