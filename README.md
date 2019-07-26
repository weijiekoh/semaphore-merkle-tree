# semaphore-merkle-tree

This package offers a Merkle tree implementation which is meant to work with
the [Semaphore](https://github.com/kobigurk/semaphore) zero-knowledge
signalling system.

## Installation

```bash
npm i semaphore-merkle-tree
```

## Usage

```ts
import { storage, hashers, tree } from 'semaphore-merkle-tree'

const storage = new hashers.MemStorage()
const hasher = new storage.MimcSpongeHasher();
const prefix = 'semaphore';
const default_value = '0';
const depth = 2

const tree = new tree.MerkleTree(
    prefix,
    storage,
    hasher,
    depth,
    default_value,
)
```

## Functions

### `tree.update(index, value)`

Adds `value` to the leaf at `index`

### `tree.path(index)`

Returns the Merkle path to the leaf at the specified index

### `tree.rollback(updates)`

Rolls back the tree by the specified number of updates

## Building

```bash
git clone https://github.com/weijiekoh/semaphore-merkle-tree.git && \
cd semaphore-merkle-tree && \
npm i && \
npm run build
```

## Testing

```bash
npm run test
```
