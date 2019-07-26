import IHasher from './ihasher'
import * as circomlib from 'circomlib'
import * as snarkjs from 'snarkjs'
const mimcsponge = circomlib.mimcsponge

const bigInt = snarkjs.bigInt;

class MimcSpongeHasher implements IHasher {
    public hash(_, left, right) {
        return mimcsponge.multiHash([bigInt(left), bigInt(right)]).toString()
    }
}

export default MimcSpongeHasher
