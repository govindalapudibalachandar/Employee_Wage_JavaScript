//uc3 using function
const Is_Part_Time = 1;
const Is_Full_time = 2;
const Part_Time_Hours = 4;
const Full_Time_Hours = 8;
const Wage_Per_Hour = 20;

function GetWorkingHours(empcheck){
switch (empcheck) {
    case Is_Part_Time:
        return Part_Time_Hours;
      
    case Is_Full_time:
         return Full_Time_Hours;

    default :
         return 0;
}
}
let emphrs=0;
let empcheck = Math.floor(Math.random () * 10) % 3;
emphrs = GetWorkingHours(empcheck);
let empwage = emphrs * Wage_Per_Hour;
console.log("Emp Wage : " +empwage);         
