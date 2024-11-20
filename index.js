
const calendar = [
    31,
    28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
]


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

    if (dateSeparated.monthNumber < 1 || 12 < dateSeparated.monthNumber) {
        return false
    }
    if (dateSeparated.yearNumber < 999 || 9999 < dateSeparated.yearNumber) {
        return false

    }
    if (calendar[dateSeparated.monthNumber - 1] < dateSeparated.dayNumber) {
        return false

    }

    return true

}


isValideDate("09/10/2001")



function isPalindrome(date) {

    const dateSeparated = separateDate(date)

    let dateWithoutSlash = dateSeparated.dayNumber + dateSeparated.monthNumber + dateSeparated.yearNumber

    for (let index1 = 0, index2 = dateWithoutSlash.length - 1; index1 <= index2; index1++, index2--) {
        if (dateWithoutSlash[index1] !== dateWithoutSlash[index2]) {
            return false
        }
    }

    return true

}

console.log(isPalindrome("22/02/2022"))