enum vocabularyList {
    //% block="Open Light" 
    Open_Light,
    //% block="Close Light"
    Close_Light
}

//% weight=100 color=#0fbc11 icon="\uf130"
//% block="ASR"
namespace asr {

    //% block="the microphone hears %vocabulary"
    export function asrmain(vocabulary: vocabularyList): boolean {
        let buffer = pins.i2cReadBuffer(0x11, 1)

        if (buffer[0] == 0x01 && vocabulary == 1) {
            return true
        }
        else{
            return false
        }
        
    }


}
