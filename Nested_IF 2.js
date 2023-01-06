var marks = prompt("Insert your marks:");
var participations = true;

if (marks < 60) {
  document.write("<b> Better Luck Next Time. </b>");
  document.write("<br> You Are Not Eligible For This Position ");
} else {
  if (marks <= 80 && participations == true) {
    document.write(
      "<b> Your academics and sports balance your score. You are Eligible for this position </b> "
    );
    document.write("<br> Go ahead for filling your application form. ");
  } else if (marks > 80) {
    document.write(
      "<b> Your academics are great! You are eligible for this position. </b>"
    );
    document.write("<br> Proceed further for filling the application form.");
  } else {
    document.write("<b> Better Luck Next Time. </b>");
    document.write("<br> You Are Not Eligible For This Position ");
  }
}
