function addstudent() {
    const name = document.getElementById('Name').value;
    const rollnumber = document.getElementById('Rollnumber').value;
    const className = document.getElementById('Class').value;
    const address = document.getElementById('Address').value;
    const attendance = document.getElementById('Attendance').value;
    const score = document.getElementById('Score').value;

    const student = {
        name,
        rollnumber,
        className,
        address,
        attendance,
        score
    };

    let students = JSON.parse(localStorage.getItem("classA")) || [];
    students.push(student);
    localStorage.setItem('classA', JSON.stringify(students));

    alert('Student added successfully!');
}
function displayStudents() {
    const students = JSON.parse(localStorage.getItem("classA")) || [];
    const ListDiv = document.getElementById('studentList');

    ListDiv.innerHTML = '';
    students.forEach((student, index) => {
        ListDiv.innerHTML += `
            <div>
                <h3>Student ${index + 1}</h3>
                <p>Name : ${student.name}</p>
                <p>Roll Number : ${student.rollnumber}</p>
                <p>Class : ${student.className}</p>
                <p>Address : ${student.address}</p>
                <p>Attendance : ${student.attendance}%</p>
                <button onclick="deleteStudent(${index})">Delete</button>
                
            </div>
            <hr>
        `;
    });
}

window.onload = displayStudents;

function deleteStudent(index) {
    let students = JSON.parse(localStorage.getItem("classA")) || [];
    students.splice(index, 1);
    localStorage.setItem('classA', JSON.stringify(students));
    displayStudents();
}   