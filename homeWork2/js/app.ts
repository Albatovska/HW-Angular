interface Converter {
    toSystem(num: number): string;
    fromSystem(str: string): number;
}

class ToBinary implements Converter {

    toSystem(num: number): string {
    // dec -> bin  двоичная -десятичная
     return num.toString(2);
    }

    fromSystem(str: string): number{
    // bin -> dec
    return parseInt(str, 2);
  }
}

const toBinary = new ToBinary();
console.log('dec -> bin: ', toBinary.toSystem(68));
console.log('bin -> dec: ', toBinary.fromSystem('1000100'));

class ToHex {
    toSystem(num: number):string {
    // dec -> hex   восмеричнав - десятиричная
    return num.toString(8);
    }

    fromSystem(str: string): number{
    // hex -> dec
    return parseInt(str, 8);
  }
}
const toHex = new ToHex();
console.log('dec -> hex: ', toHex.toSystem(18));
console.log('hex -> dec: ', toHex.fromSystem('22'));

class ToHexDec {
    toSystem(num: number): string {
    // dec -> hexDex    десятиричная - шестнацатиричная
     return num.toString(16);
    }

    fromSystem(str: string): number{
    // hexDex -> dec
    return parseInt(str, 16);
  }
}
const toHexDec = new ToHexDec();
console.log('dec -> hexDex: ', toHexDec.toSystem(111));
console.log('hexDex -> dec: ', toHexDec.fromSystem('6f'));