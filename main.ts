let status = 0
pins.servoWritePin(AnalogPin.P0, 98)
basic.forever(function () {
    status = pins.analogReadPin(AnalogPin.P2)
    if (status > 50) {
        pins.servoWritePin(AnalogPin.P0, 25)
    } else {
        pins.servoWritePin(AnalogPin.P0, 98)
    }
    basic.pause(500)
})
