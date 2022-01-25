//UC1 Checking Employee is Absent Or Present Using Rabdom  Function
const Is_Absent = 0;

let empcheck = Math.floor(Math.random () * 10)%2;
if(empcheck == Is_Absent){
    console.log("Employee Is Absent");
}
else {
    console.log("Employee Is Present");
}