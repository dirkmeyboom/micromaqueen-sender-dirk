let stop_reeeeechts = 0
let stop_liiiiinks = 0
let liiiiinks = 0
let reeeeechts = 0
let voooooruit = 0
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0) && input.pinIsPressed(TouchPin.P1)) {
        radio.sendString("voooooruit")
    } else {
        if (input.pinIsPressed(TouchPin.P0)) {
            radio.sendString("liiiiinks")
        } else {
            if (input.pinIsPressed(TouchPin.P1)) {
                radio.sendString("reeeeechts")
            } else {
                if (input.buttonIsPressed(Button.A)) {
                    radio.sendString("stop liiiiinks")
                } else {
                    if (input.buttonIsPressed(Button.B)) {
                        radio.sendString("stop reeeeechts")
                    }
                }
            }
        }
    }
})
basic.forever(function () {
    stop_reeeeechts = stop_reeeeechts
    stop_liiiiinks = stop_liiiiinks
    liiiiinks = liiiiinks
    reeeeechts = reeeeechts
    voooooruit = voooooruit
    radio.setGroup(69)
})
