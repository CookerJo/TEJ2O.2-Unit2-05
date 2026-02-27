/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Josiah
 * Created on: Feb 2026
 * This program will change the temperature to kelvin.
*/

let temperatureCelsius: number
let temperatureKelvin: number

// clear screen
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// convert temperature into kelvin
input.onButtonPressed(Button.A, function () {
    temperatureCelsius = input.temperature()
    temperatureKelvin = Math.round(temperatureCelsius + 273.15)
    basic.showString("The temperature is: " + temperatureKelvin + " K")
    pause(1000)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})
