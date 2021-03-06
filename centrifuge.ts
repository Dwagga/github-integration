namespace dwagga {
    //% help=pins/servo-write-pin weight=20
    //% blockId=device_set_servo_pin block="servo write|pin %name|to %value" blockGap=8
    //% parts=microservo trackArgs=0
    //% value.min=0 value.max=180
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=6
    //% name.fieldOptions.tooltips="false" name.fieldOptions.width="250"
    //% weight=100 color=#0fbc11
    export function servo(name:number ,value: number): void {
        pins.servoWritePin(name, value)
    }
}
