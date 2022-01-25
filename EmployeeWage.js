//
const Is_Part_Time = 1;
const Is_Full_time = 2;
const Part_Time_Hours = 4;
const Full_Time_Hours = 8;
const Wage_Per_Hour = 20;
const Num_Of_Working_Days = 20;

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
let totalemphrs=0;
for (let day = 0; day < Num_Of_Working_Days; day++){
let empcheck = Math.floor(Math.random () * 10) % 3;
totalemphrs += GetWorkingHours(empcheck);
}
let empwage = totalemphrs * Wage_Per_Hour;
console.log("Total Hrs :"+ totalemphrs + "Emp Wage : " +empwage);          
