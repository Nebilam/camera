input.onButtonPressed(Button.A, function () {
    devices.tellCameraTo(MesCameraEvent.StopPhotoMode)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.pause(5000)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    devices.tellCameraTo(MesCameraEvent.TakePhoto)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    devices.tellCameraTo(MesCameraEvent.LaunchVideoMode)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.pause(5000)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    devices.tellCameraTo(MesCameraEvent.StartVideoCapture)
})
input.onButtonPressed(Button.AB, function () {
    devices.tellCameraTo(MesCameraEvent.StopVideoMode)
    basic.clearScreen()
})
 