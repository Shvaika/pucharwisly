export const extractDate = (date) => {
    '2024-01-12T15:40:10.277631+00:00'//template
    const year = date.slice(0, 4)
    const day = date.slice(8, 10)
    const month = toMonth(date.slice(5, 7))
    return day+' '+month+' '+year
}

const toMonth = (month) => {
    switch (month) {
        case '01':
            return 'Sty'
        case '02':
            return 'Lut'
        case '03':
            return 'Mar'
        case '04':
            return 'Kwi'
        case '05':
            return 'Maj'
        case '06':
            return 'Cze'
        case '07':
            return 'Lip'
        case '08':
            return 'Sie'
        case '09':
            return 'Wrz'
        case '10':
            return 'Paź'
        case '11':
            return 'Lis'
        case '12':
            return 'Gru'
        default:
            return ''
    }
}