import { should } from 'chai';
import { Optimus } from "../dist/optimus";

should();

describe('Optimus', function () {
    let optimus = new Optimus(1915711547, 1687808243, 1180519796);

    it('should encode/decode integers', function () {
        var values = [20, 55, 500, 9999];
        values.forEach(function (v) {
            optimus.decode(optimus.encode(22)).should.equal(22);
        });
    })

    it('should work with zero', function () {
        optimus.decode(optimus.encode(0)).should.equal(0);
    });

    it('should work with the largest 32 bit value', function () {
        optimus.decode(optimus.encode(2147483647)).should.equal(2147483647);
    });

});
