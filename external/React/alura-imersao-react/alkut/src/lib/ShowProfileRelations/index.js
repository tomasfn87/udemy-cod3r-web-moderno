const showProfileRelationsSync = ((data, exhibition) => {
    let i = 0
    while (exhibition.length < 6 && exhibition.length != data.length) {
    exhibition.push(data[i])
    i++
    } i = 0
    return exhibition
})

const showProfileRelationsAsyncA = ((data, exhibition) => {
    if (data.length > 6) {
    exhibition = data.slice(data.length - 6, data.length)
    } else {
    return data
    } return exhibition
})

const showProfileRelationsAsyncB = ((data, exhibition) => {
    if (data.length > 6) {
    exhibition = data.slice(0, 6)
    } else {
    return data
    } return exhibition
})

export { showProfileRelationsAsyncA, showProfileRelationsAsyncB,  showProfileRelationsSync }