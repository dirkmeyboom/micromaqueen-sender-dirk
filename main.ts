input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
basic.forever(function () {
    radio.setGroup(69)
})
