enum vocabularyList {
    //% block="Turn on the lights" 
    Turn_on_the_lights,
    //% block="Turn off lights"
    Turn_off_lights,
    //% block="Turn left"
    Turn_left,
    //% block="Turn right"
    Turn_right,
    //% block="Move forward"
    Move_forward,
    //% block="Backwards"
    Backwards,
    //% block="Patrolling mode"
    Patrolling_mode,
    //% block="Obstacle avoidance mode"
    Obstacle_avoidance_mode,
    //% block="Parking"
    Parking,
    //% block="Open device"
    Open_device,
    //% block="Close device"
    Close_device,
    //% block="Suspend_operation"
    Suspend_operation,
    //% block="Continue operation"
    Continue_operation,
    //% block="One level up"
    One_level_up,
    //% block="One level down"
    One_level_down,
    //% block="Run function one"
    Run_function_one,
    //% block="Run function two"
    Run_function_two,
    //% block="Run function three"
    Run_function_three,
    //% block="Run function four"
    Run_function_four,
    //% block="Run function five"
    Run_function_five
}

//% weight=100 color=#0fbc11 icon="\uf130"
namespace asr {
    //% block="the microphone hears wake-up call 'Hi,Shaun'"
    export function asrawaken(): boolean {
        let buffer = pins.i2cReadNumber(0x0B, 1)

        if (buffer == 0x01) {
            return true
        }
        else {
            return false
        }
    }
    //% block="the microphone hears %vocabulary"
    //% vocabulary.fieldEditor="gridpicker"
    //% vocabulary.fieldOptions.columns=3
    export function asrmain(vocabulary: vocabularyList): boolean {
        let buffer = pins.i2cReadNumber(0x0B, 1)


        if (buffer == 0x10 && vocabulary == 1) {
            return true
        }
        if (buffer == 0x11 && vocabulary == 2) {
            return true
        }
        if (buffer == 0x12 && vocabulary == 3) {
            return true
        }
        if (buffer == 0x13 && vocabulary == 4) {
            return true
        }
        if (buffer == 0x14 && vocabulary == 5) {
            return true
        }
        if (buffer == 0x15 && vocabulary == 6) {
            return true
        }
        if (buffer == 0x16 && vocabulary == 7) {
            return true
        }
        if (buffer == 0x17 && vocabulary == 8) {
            return true
        }
        if (buffer == 0x18 && vocabulary == 9) {
            return true
        }
        if (buffer == 0x20 && vocabulary == 10) {
            return true
        }
        if (buffer == 0x21 && vocabulary == 11) {
            return true
        }
        if (buffer == 0x22 && vocabulary == 12) {
            return true
        }
        if (buffer == 0x23 && vocabulary == 13) {
            return true
        }
        if (buffer == 0x24 && vocabulary == 14) {
            return true
        }
        if (buffer == 0x25 && vocabulary == 15) {
            return true
        }
        if (buffer == 0x31 && vocabulary == 16) {
            return true
        }
        if (buffer == 0x32 && vocabulary == 17) {
            return true
        }
        if (buffer == 0x33 && vocabulary == 18) {
            return true
        }
        if (buffer == 0x34 && vocabulary == 19) {
            return true
        }
        if (buffer == 0x35 && vocabulary == 20) {
            return true
        }
        if (buffer == 0x36 && vocabulary == 21) {
            return true
        }
        else {
            return false
        }

    }


}
