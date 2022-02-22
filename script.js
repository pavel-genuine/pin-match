document.getElementById('pin-btn').addEventListener('click', function () {


    document.getElementById('pin-screen').value = pin(Math.round(Math.random() * 10000))

})

function pin(n) {

    if (n > 1000) {
        return n;
    }
    else {
        return pin(n)
    }
}

document.getElementById('parent').addEventListener('click', function (event) {

    let screen = document.getElementById('num-screen')
    let num = event.target.innerText

    if (num == 'C') {

        screen.value = ''
    }
    else if (num == '<') {

        screen.value = screen.value.slice(0, - 1)
    }
    else if (num == 'Submit') {

        if (screen.value == document.getElementById('pin-screen').value) {

            document.getElementById('ok').style.display = 'block'
            document.getElementById('cancel').style.display = 'none'
        } else {
            document.getElementById('ok').style.display = 'none'
            document.getElementById('cancel').style.display = 'block'
        }
    }
    else {
        screen.value = screen.value + event.target.innerText
    }
})