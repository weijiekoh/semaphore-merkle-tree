import { MemStorage } from '../storage'
import { PoseidonHasher } from '../hashers'

jest.setTimeout(9000)

describe('Hash functions', function () {
    const hasher = new PoseidonHasher()

    it('poseidon', async () => {
        const input = [1, 2]
        const output = hasher.hash(null, 1, 2)
        expect(output.toString()).toEqual('12242166908188651009877250812424843524687801523336557272219921456462821518061')
    })
})
