import { MemStorage } from '../storage'
import { PoseidonHasher } from '../hashers'

jest.setTimeout(9000)

describe('Hash functions', function () {
    const hasher = new PoseidonHasher()

    it('poseidon', async () => {
        const output = hasher.hash(null, 1, 2)
        expect(output.toString()).toEqual('2104035019328376391822106787753454168168617545136592089411833517434990977743')
    })
})
