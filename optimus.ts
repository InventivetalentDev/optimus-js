import Long = require("long");

const MAX_INT32 = 2147483647;
const MULTIPLIER = 4294967296 // 2^32;

export class Optimus {

    private readonly prime: Long;
    private readonly inverse: Long;
    private readonly random: Long;

    constructor(prime: number, inverse: number, random: number) {
        this.prime = Long.fromInt(prime);
        this.inverse = Long.fromInt(inverse);
        this.random = Long.fromInt(random);
    }

    encode(num: number): number {
        const n = Long.fromInt(num);
        return n.mul(this.prime).and(Long.fromInt(MAX_INT32)).xor(this.random).toSigned().toInt();
    }

    decode(num: number): number {
        const n = Long.fromInt(num);
        return n.xor(this.random).mul(this.inverse).and(Long.fromInt(MAX_INT32)).toSigned().toInt();
    }

}
