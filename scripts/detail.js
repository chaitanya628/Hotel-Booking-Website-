const pricePerDay = 1000;
let updatePrice = () =>{
    let adults = document.getElementById("adult")
    let fromDate = document.getElementById('fdate')
    let toDate= document.getElementById('tdate')
    let totalprice= document.getElementById('price')
    let fdate = new Date(fromDate.value)
    let tdate = new Date(toDate.value)
    let days= (tdate - fdate)/(24*60*60*1000)

    // The to-date should be greater than from-date, so the dates before from-date should be disabled in calender. 
    
    toDate.min = fromDate.value;
    if(adults.value && fromDate.value && toDate.value){
        totalprice.value = 'Rs. ' +parseInt(adults.value) * pricePerDay * days;
    }
    else{
        totalprice.value = 'Rs. '+0;
    }
    
    
}