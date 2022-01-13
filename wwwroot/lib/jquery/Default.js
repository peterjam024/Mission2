$("#GetGrades").click(function () {

    var Assignment
    var Group
    var Quiz
    var Exam
    var Intex
    var OverallGrade

    Assignment = parseFloat(document.getElementById("Assignments"));
    Group = parseFloat(document.getElementById("Group Projects"));
    Quiz = parseFloat(document.getElementById("Quizzes"));
    Exam = parseFloat(document.getElementById("Exams"));
    Intex = parseFloat(document.getElementById("INTEX"));

    OverallGrade = Assignment * .55 + Group * .05 + Quiz * .1 + Exam * .2 + Intex * .1;
    alert(OverallGrade);


})

