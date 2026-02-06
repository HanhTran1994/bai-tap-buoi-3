let sleepHours = 15

if (sleepHours < 5) {
   console.log('rất buồn ngủ vì hôm qua ngủ chỉ có ${sleepHours} tiếng')
    
} else if (sleepHours >= 5 && sleepHours <7){
    console.log('Hơi mệt vì hôm qua ngủ chỉ có ${sleephours} tiếng')
    
} else if (sleepHours >= 7 && sleepHours <9){
    console.log('Tỉnh táo vì hôm qua ngủ đủ ${sleepHours} tiếng')

} else {
    console.log('Nhức đầu vì hôm qua ngủ tận ${sleepHours} tiếng')
}



let month = 13

switch(month){
    case 1:
        case 3:
            case 5:
                case 7:
                    case 8:
                        case 10:
                            case 12:
                    {
        console.log("Tháng ${month} có 31 ngày");
        break;
    }
    case 4 :
       case 6:
        case 9:
            case 11: {
        console.log("Tháng ${month} có 30 ngày");
        break;
            }
     case 2:{
        console.log("Tháng 2 có 29 ngày");   
        break;
    } default:{
        console.log("Tháng không hợp lệ");
    }


}


let number = 8 ;

let isEven = number % 2 === 0 ;// true hoặc flase

isEven === true 
? console.log('${number} là số chắn')
: console.log('${number} là số lẻ');