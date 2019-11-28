enum vocabulary {
    //% block="Open Light"
    Type_x,
    //% block="Close Light"
    Type_y,
    //% block="H"
    Type_h,
    //% block="W"
    Type_w
}

//% weight=100 color=#0fbc11 icon="\uf130"
namespace asr {

    function i2cwrite(addr: number, reg: number, value: number) {
        let buf = pins.createBuffer(2)
        buf[0] = reg
        buf[1] = value
        pins.i2cWriteBuffer(addr, buf)
    }

    function i2ccmd(addr: number, value: number) {
        let buf = pins.createBuffer(1)
        buf[0] = value
        pins.i2cWriteBuffer(addr, buf)
    }

    function i2cread(addr: number, reg: number) {
        pins.i2cWriteNumber(addr, reg, NumberFormat.UInt8BE);
        let val = pins.i2cReadNumber(addr, NumberFormat.UInt8BE);
        return val;
    }

    //% block="the microphone hears %vocabulary"
    export function asrmain(vocabulary: vocabulary): number {
        let zbx
        let buffer = pins.i2cReadBuffer(11, 1)
        if (vocabulary == 0) {
            zbx = buffer[0]
        }
        return zbx
    }


}
