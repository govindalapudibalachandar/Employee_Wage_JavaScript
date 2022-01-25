//uc2 calculate employee parttime  and fulltime
const Is_Part_Time = 1;
const Is_Full_time = 2;
const Part_Time_Hours = 4;
const Full_Time_Hours = 8;
const Wage_Per_Hour = 20;

let emphrs=0;
let empcheck = Math.floor(Math.random () * 10) %3 ;
switch(empcheck){
    case Is_Part_Time:
        emphrs=Part_Time_Hours;
        break;
    case Is_Full_time:
         emphrs=Full_Time_Hours;
         break;
    default :
         emphrs=0;
}

let empwage = emphrs * Wage_Per_Hour;
console.log("UC2-emp wage : "+ empwage);
