//Create any example program
//Student Grade Calculator
//create students object
const student1 = {name: "Ada" , score: 80};
const student2 = {name: "Obi", score: 75};
const student3 = {name: "Emeka", score: 65};
const student4 = {name: "Amara", score: 55};
const student5 = {name: "Amaka", score: 95};
const student6 = {name: "Mmasi", score: 25};
const student7 = {name: "Chioma", score: 35};
const student8 = {name: "Chidi", score: 44};
const student9 = {name: "Mmeso", score: 42};
const student10 = {name: "Chidimma", score: 69};

//array 
const students = [student1, student2, student3, student4, student5, student6, student7, student8, student9, student10];

function studentsgrade(score) {
    if (score >= 70) {
        return "A";
        
    } else if (score >= 55) 
        { return "C";
        
    } else if (score >= 45) {
        return "P"
        
    } else {
        return "F"
    }      
}

console.log (student1.score)


students.forEach(student =>  {
    const grade = 
    studentsgrade(student.score); 

    console.log (`${student.name} - ${student.score} - ${grade}`);

});

