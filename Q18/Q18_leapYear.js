// 18. Write a program which tells the number of days in a month, now consider leap year.

function leapYear(year,month){
    const leap = new Date(year, month, 0).getDate();
    
    return leap;
    
    
}


console.log(leapYear(1881,2));
console.log(leapYear(2008,2));
