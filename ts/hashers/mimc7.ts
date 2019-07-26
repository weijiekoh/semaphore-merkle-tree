import IHasher from './ihasher'
import * as circomlib from 'circomlib'
import * as snarkjs from 'snarkjs'

const mimc7 = circomlib.mimc7
const bigInt = snarkjs.bigInt

class Mimc7Hasher implements IHasher {
    public hash(_, left, right) {
        return mimc7.multiHash([bigInt(left), bigInt(right)]).toString()
    }
}

export default Mimc7Hasher

