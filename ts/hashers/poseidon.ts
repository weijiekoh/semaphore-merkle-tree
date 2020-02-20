import IHasher from './ihasher'
import * as circomlib from 'circomlib'
import * as snarkjs from 'snarkjs'
const poseidon = circomlib.poseidon

const bigInt = snarkjs.bigInt;

class PoseidonHasher implements IHasher {
    private hashFunc: Function

    constructor() {
        this.hashFunc = poseidon.createHash(6, 8, 57, 'poseidon')
    }

    public hash(_, left, right) {
        return this.hashFunc([left, right])
    }
}

export default PoseidonHasher
