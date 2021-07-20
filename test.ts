led.enable(false)
let strip = neopixel.create(DigitalPin.P16, 5, NeoPixelMode.RGB)
strip.setBrightness(30)
strip.showColor(neopixel.colors(NeoPixelColors.Red))
CatCar.setColourThreshold(170)
basic.pause(1000)
basic.forever(function () {
    while (CatCar.checkColour() != neopixel.colors(NeoPixelColors.Blue)) {
        if (CatCar.Line_Sensor(CatCar.lijnSensor.links, CatCar.lijnKleur.wit) && CatCar.Line_Sensor(CatCar.lijnSensor.rechts, CatCar.lijnKleur.wit)) {
            CatCar.draaien(CatCar.Turn.links, 20)
        } else if (CatCar.Line_Sensor(CatCar.lijnSensor.links, CatCar.lijnKleur.wit) && CatCar.Line_Sensor(CatCar.lijnSensor.rechts, CatCar.lijnKleur.zwart)) {
            CatCar.maakAchterlampen(0, 0, 50)
            CatCar.steer(45, 15)
        } else if (CatCar.Line_Sensor(CatCar.lijnSensor.links, CatCar.lijnKleur.zwart) && CatCar.Line_Sensor(CatCar.lijnSensor.rechts, CatCar.lijnKleur.wit)) {
            CatCar.maakAchterlampen(50, 0, 0)
            CatCar.steer(15, 45)
        } else {
            CatCar.draaien(CatCar.Turn.rechts, 20)
        }
        strip.showColor(CatCar.checkColour())
    }
    while (CatCar.checkColour() == neopixel.colors(NeoPixelColors.Blue)) {
        CatCar.stoppenrijden()
    }
})
