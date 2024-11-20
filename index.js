function separateDate (date){

    let dayNumber =""
    let monthNumber = ""
    let yearNumber = ""
    let datePart = ""

    for(let index = 0; index < date.length; index++){
        if (date[index]=== "/" && index===2){
            dayNumber = datePart
            datePart =""
        }
        if (date[index]=== "/" && index===5){
            monthNumber = datePart
            datePart = ""

        }
        if (date[index]=== "/"){
            continue

        }
        datePart += date[index]

        if(index === date.length -1 ){
            yearNumber = datePart
            datePart = ""

        }
    }

    console.log(dayNumber)
    console.log(monthNumber)
    console.log(yearNumber)

}

separateDate("03/04/2001")