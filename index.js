// Student Data Manager

let studentDetails = []
let createStudentManager = function() {
// For Add New student
    function addStudent(name, std, rollNo, subject, score) {
        let obj = {}
        obj.Name = name
        obj.Class = std
        obj.Roll = rollNo
        obj[subject] = score
        studentDetails.push(obj)

    }
    return addStudent
}
// For Update Score

function updateScore(objIndx,Subject,newScore){
    if(studentDetails[objIndx]["Subject"] == Subject){
        return studentDetails[objIndx]["Score"] = newScore
    }
    else{
        return "Data Not Exists Please Check Details And Try Again"
    }
}

 // for Get details of obj.

function getDetails(obj){
    for (key in obj) {
        console.log(obj)
    }
}

//for adding new subjects

function addSubject(obj,Subject,Score){
    for(indx of obj){
        indx[Subject] = Score
    }
}
function calAvg(){
    let cnt = 0;
    total = 0;
    for(indx of studentDetails){
        if(indx["score"]){
            total += indx["score"]
        }
        cnt++
    }
    return total / cnt;
}
calAvg()
// For Output calling functions.
addSubject(studentDetails,"Science",92)
createStudentManager()("Aman",8,7,"Computer Science",74)
getDetails(studentDetails)
console.log(updateScore(0,"Computer Science",87))