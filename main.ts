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
   
    let bt: number
    //% block="the microphone hears wake-up call 'Hi,Shaun'"
    export function asrawaken(): boolean {
        let buffer = pins.i2cReadNumber(0x0B, 1)
        if (buffer == 0x00) {

        }
        else {
            bt = buffer
        }
        if (bt == 0x01) {
            return true
            bt = 0x00
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
        if (buffer == 0x00) {

        }
        else {
            bt = buffer
        }

        if (bt == 0x10 && vocabulary == 0) {
            return true
        }
        else if (bt == 0x11 && vocabulary == 1) {
            return true
        }
        else if (bt == 0x12 && vocabulary == 2) {
            return true
        }
        else if (bt == 0x13 && vocabulary == 3) {
            return true
        }
        else if (bt == 0x14 && vocabulary == 4) {
            return true
        }
        else if (bt == 0x15 && vocabulary == 5) {
            return true
        }
        else if (bt == 0x16 && vocabulary == 6) {
            return true
        }
        else if (bt == 0x17 && vocabulary == 7) {
            return true
        }
        else if (bt == 0x18 && vocabulary == 8) {
            return true
        }
        else if (bt == 0x20 && vocabulary == 9) {
            return true
        }
        else if (bt == 0x21 && vocabulary == 10) {
            return true
        }
        else if (bt == 0x22 && vocabulary == 11) {
            return true
        }
        else if (bt == 0x23 && vocabulary == 12) {
            return true
        }
        else if (bt == 0x24 && vocabulary == 13) {
            return true
        }
        else if (bt == 0x25 && vocabulary == 14) {
            return true
        }
        else if (bt == 0x31 && vocabulary == 15) {
            return true
        }
        else if (bt == 0x32 && vocabulary == 16) {
            return true
        }
        else if (bt == 0x33 && vocabulary == 17) {
            return true
        }
        else if (bt == 0x34 && vocabulary == 18) {
            return true
        }
        else if (bt == 0x35 && vocabulary == 19) {
            return true
        }
        else if (bt == 0x36 && vocabulary == 20) {
            return true
        }
        else {
            return false
        }

    }


}
