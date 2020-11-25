var number = prompt("სტუდენტების რაოდენობა","");

let students = [];

for (let i=0; i<number; i++) {
    let student=prompt("სტუდენტი","");
    students.push(student);
}

let studentslist=students.join('', '');
alert(studentslist);