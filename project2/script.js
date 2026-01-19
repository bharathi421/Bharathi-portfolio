let currentClass = "";
let data = JSON.parse(localStorage.getItem("students")) || {};

function changeClass() {
  currentClass = classSelect.value;
  if (!currentClass) return;

  if (!data[currentClass]) data[currentClass] = [];
  classTitle.innerText = currentClass + " Students";
  showAll();
}

function addStudent() {
  if (!currentClass) {
    alert("Select class first");
    return;
  }

  const student = {
    name: Name.value.trim(),
    roll: Rollnumber.value.trim(),
    address: Address.value.trim(),
    attendance: Number(Attendance.value),
    score: Number(Score.value)
  };

  if (!student.name || !student.roll) {
    alert("Fill all fields");
    return;
  }

  data[currentClass].push(student);
  localStorage.setItem("students", JSON.stringify(data));

  Name.value = Rollnumber.value = Address.value = Attendance.value = Score.value = "";
  showAll();
}

function status(score) {
  if (score < 50) return "Weak";
  if (score < 75) return "Average";
  return "Strong";
}

function showAll() {
  render(data[currentClass]);
}

function showWeak() {
  render(data[currentClass].filter(s => s.score < 50));
}

function render(list) {
  const body = document.getElementById("studentTable");
  body.innerHTML = "";

  if (!list.length) {
    body.innerHTML = `<tr><td colspan="5" class="empty">No students</td></tr>`;
    return;
  }

  list.forEach(s => {
    const st = status(s.score);
    body.innerHTML += `
      <tr>
        <td>${s.name}</td>
        <td>${s.roll}</td>
        <td>${s.attendance}%</td>
        <td>${s.score}%</td>
        <td><span class="badge ${st.toLowerCase()}">${st}</span></td>
      </tr>
    `;
  });
}
