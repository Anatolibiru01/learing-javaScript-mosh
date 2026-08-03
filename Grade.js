function calculateGrade(marks){
    let tot = 0;
    for (mark of marks) tot += mark; 
    
    let ave = tot/(marks.length)
    let grade = ""
    if (ave <= 59) grade = "F";
    if (ave >= 60 && ave <= 69) grade = "D";
    if (ave >= 70 && ave <= 79) grade = "C";
    if (ave >= 80 && ave <= 89) grade = "B";
    if (ave >= 90 && ave <= 100) grade = "A";

    console.log(grade)
}
let marks = [80, 80, 70]
calculateGrade(marks)
