import { IStorage, MemStorage } from './storage'
import { IHasher, Mimc7Hasher, MimcSpongeHasher } from './hashers'
import MerkleTree from './merkletree'

export = {
	storage: {
		MemStorage,
	},
	hashers: {
		Mimc7Hasher,
		MimcSpongeHasher,
    },
    tree: {
        MerkleTree,
    }
}
