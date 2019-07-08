var ToBinary = /** @class */ (function () {
    function ToBinary() {
    }
    ToBinary.prototype.toSystem = function (num) {
        // dec -> bin  двоичная -десятичная
        return num.toString(2);
    };
    ToBinary.prototype.fromSystem = function (str) {
        // bin -> dec
        return parseInt(str, 2);
    };
    return ToBinary;
}());
var toBinary = new ToBinary();
console.log('dec -> bin: ', toBinary.toSystem(68));
console.log('bin -> dec: ', toBinary.fromSystem('1000100'));
var ToHex = /** @class */ (function () {
    function ToHex() {
    }
    ToHex.prototype.toSystem = function (num) {
        // dec -> hex   восмеричнав - десятиричная
        return num.toString(8);
    };
    ToHex.prototype.fromSystem = function (str) {
        // hex -> dec
        return parseInt(str, 8);
    };
    return ToHex;
}());
var toHex = new ToHex();
console.log('dec -> hex: ', toHex.toSystem(18));
console.log('hex -> dec: ', toHex.fromSystem('22'));
var ToHexDec = /** @class */ (function () {
    function ToHexDec() {
    }
    ToHexDec.prototype.toSystem = function (num) {
        // dec -> hexDex    десятиричная - шестнацатиричная
        return num.toString(16);
    };
    ToHexDec.prototype.fromSystem = function (str) {
        // hexDex -> dec
        return parseInt(str, 16);
    };
    return ToHexDec;
}());
var toHexDec = new ToHexDec();
console.log('dec -> hexDex: ', toHexDec.toSystem(111));
console.log('hexDex -> dec: ', toHexDec.fromSystem('6f'));
