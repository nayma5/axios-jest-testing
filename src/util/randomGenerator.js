export function randomPrice(){
    return Math.floor(Math.random()*200) +1;
}


export function currentDate(){

var day = new Date();
var dd = String(day.getDate()).padStart(2, '0');
var mm = String(day.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = day.getFullYear();
day = yyyy + '-' + dd + '-' + mm;
return day


}

   
export function checkoutDate(){

    var day = new Date();
    day.setDate(day.getDate()+2)
    var dd = String(day.getDate()).padStart(2, '0');
    var mm = String(day.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = day.getFullYear();
    checkoutDate =yyyy + '-' + dd + '-' + mm ;
 
    return checkoutDate

}


