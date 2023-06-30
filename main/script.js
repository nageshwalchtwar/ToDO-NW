let ulTasks = $('#ulTasks')
let btnAdd = $('#btnAdd')
let btnReset = $('#btnReset')
let btnSort = $('#btnSort')
let btnCleanup = $('#btnCleanup')
let inpNewTask = $('#inpNewTask')
let btnlogout = $('#btnlogout')
function addItem() {
    let listItem = $('<li>', {
        'class': 'list-group-item',
        text: inpNewTask.val()
    })
    listItem.click(() => {
        listItem.toggleClass('done')
    })
    ulTasks.append(listItem)
    inpNewTask.val('')
}

function clearDone() {
    $('#ulTasks .done').remove()
    toggleInputButtons()
}

function sortTasks() {
    $('#ulTasks .done').appendTo(ulTasks)
}



inpNewTask.keypress((e) => {
    if (e.which == 13) addItem()
})
inpNewTask.on('input', toggleInputButtons)

btnAdd.click(addItem)
btnReset.click(() => {
    inpNewTask.val('')

})
btnCleanup.click(clearDone)
btnSort.click(sortTasks)
