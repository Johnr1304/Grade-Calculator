 function calculateGrade() {

      let m1 = Number(document.getElementById("sub1").value);
      let m2 = Number(document.getElementById("sub2").value);
      let m3 = Number(document.getElementById("sub3").value);

      // ✅ Validation (0–100 range) //
      if (
        m1 > 100 || m2 > 100 || m3 > 100 ||
        m1 < 0 || m2 < 0 || m3 < 0 ||
        isNaN(m1) || isNaN(m2) || isNaN(m3)
      ) {
        document.getElementById("result").innerHTML =
          "⚠️ Please enter valid marks between 0 and 100";
        return;
      }

      let total = m1 + m2 + m3;
      let average = total / 3;

      let grade;

      if (average >= 90) {
        grade = "A";
      } else if (average >= 75) {
        grade = "B";
      } else if (average >= 60) {
        grade = "C";
      } else if (average >= 40) {
        grade = "D";
      } else {
        grade = "Fail";
      }

      document.getElementById("result").innerHTML =
        "📊 Total: " + total + "<br>" +
        "📈 Average: " + average.toFixed(2) + "<br>" +
        "🏆 Grade: " + grade;
    }