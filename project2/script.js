let currentClass = "";
let data = JSON.parse(localStorage.getItem("students")) || {};

/* CHANGE CLASS */
function changeClass() {
  currentClass = document.getElementById("classSelect").value;

  if (!currentClass) return;

  document.getElementById("addSection").classList.remove("hidden");
  document.getElementById("listSection").classList.remove("hidden");
  document.getElementById("classTitle").innerText = currentClass + " Students";

  if (!data[currentClass]) {
    data[currentClass] = [];
  }

  showAll();
}

/* ADD STUDENT */
function addStudent() {
  if (!currentClass) {
    alert("Select class first");
    return;
  }

  const student = {
    name: Name.value,
    roll: Rollnumber.value,
    address: Address.value,
    attendance: Number(Attendance.value),
    score: Number(Score.value)
  };

  data[currentClass].push(student);
  localStorage.setItem("students", JSON.stringify(data));

  Name.value = Rollnumber.value = Address.value = Attendance.value = Score.value = "";
  showAll();
}

/* PERFORMANCE */
function performance(score) {
  if (score < 50) return "Weak";
  if (score < 75) return "Average";
  return "Strong";
}

/* SHOW ALL */
function showAll() {
  render(data[currentClass]);
}

/* SHOW WEAK */
function showWeak() {
  const weak = data[currentClass].filter(s => s.score < 50);
  render(weak);
}

/* RENDER */
function render(list) {
  const box = document.getElementById("studentList");
  box.innerHTML = "";

  if (!list.length) {
    box.innerHTML = "<p>No students</p>";
    return;
  }

  list.forEach(s => {
    const p = performance(s.score);
    box.innerHTML += `
      <div class="card">
        <h3>${s.name}</h3>
        <p>Roll: ${s.roll}</p>
        <p>Attendance: ${s.attendance}%</p>
        <p>Score: ${s.score}%</p>
        <span class="badge ${p.toLowerCase()}">${p}</span>
      </div>
    `;
  });
}
