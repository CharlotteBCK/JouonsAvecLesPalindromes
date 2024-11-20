function separateDate(date) {

    let dayNumber = ""
    let monthNumber = ""
    let yearNumber = ""
    let datePart = ""

    for (let index = 0; index < date.length; index++) {
        if (date[index] === "/" && index === 2) {
            dayNumber = datePart
            datePart = ""
        }
        if (date[index] === "/" && index === 5) {
            monthNumber = datePart
            datePart = ""

        }
        if (date[index] === "/") {
            continue

        }
        datePart += date[index]

        if (index === date.length - 1) {
            yearNumber = datePart
            datePart = ""

        }
    }

    return {
        dayNumber: dayNumber,
        monthNumber: monthNumber,
        yearNumber: yearNumber

    }
}

separateDate("03/04/2001")


function isValideDate(date) {

    const dateSeparated = separateDate(date)

    if(dateSeparated.monthNumber < 1 || 12 < dateSeparated.monthNumber){
        return false
    } 
    if (dateSeparated.yearNumber < 999 || 9999 <dateSeparated.yearNumber){
        return false

    }

    return true

}


console.log(isValideDate("03/14/2001"))