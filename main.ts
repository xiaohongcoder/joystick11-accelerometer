basic.forever(function () {
    if (input.isGesture(Gesture.Shake)) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
        pins.digitalWritePin(DigitalPin.P12, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P12, 0)
    }
})
