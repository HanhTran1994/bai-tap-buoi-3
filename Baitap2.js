let month =4
let year=2013

if(month === 1 || month === 3 || month === 5|| month === 8|| month === 10|| month === 12){
    console.log(`Tháng ${month} có 31 ngày`);

} else if ( month === 4|| month === 6|| month === 9|| month === 11){
    console.log(`Tháng ${month} có 30 ngày`);

} else if(month ===2 ){
    // kiểm tra năm nhuận
    if (year % 4 ===0 && year % 100 !== 0){
        console.log(`Tháng 2 có 29 ngày `);
     } else {
        console.log(`Tháng 2 có 28 ngày`);
    }
} else {
    console.log(`Tháng không hợp lệ`);
}
   