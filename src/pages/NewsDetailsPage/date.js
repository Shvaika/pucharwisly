export const extractDate = (date) => {
    const year = date.slice(0, 4)
    const day = date.slice(8, 10)
    const month = toMonth(date.slice(5, 7))
    const time = date.slice(12, 16)
    return day+' '+month+' '+year+'  '+time
}

const toMonth = (month) => {
    switch (month) {
        case '01':
            return 'Styczeń'
        case '02':
            return 'Luty'
        case '03':
            return 'Marzec'
        case '04':
            return 'Kwiecień'
        case '05':
            return 'Maj'
        case '06':
            return 'Czerwiec'
        case '07':
            return 'Lipiec'
        case '08':
            return 'Sierpień'
        case '09':
            return 'Wrzesień'
        case '10':
            return 'Październik'
        case '11':
            return 'Listopad'
        case '12':
            return 'Grudzień'
        default:
            return ''
    }
}