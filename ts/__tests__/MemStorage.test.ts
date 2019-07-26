const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const path = require('path');
const uuidv4 = require('uuid/v4');

const assert = chai.assert;
const expect = chai.expect;

import { MemStorage } from '../storage'

const db = new MemStorage()
describe('db test', function () {

    it('tests simple put/get', async () => {
        const testkey = 'testkey';
        const rand_string = uuidv4();
        await db.put(testkey, rand_string);
        assert.equal(await db.get(testkey), rand_string);
        assert.notEqual(await db.get(testkey), '');
        expect(db.get('b')).to.be.rejected;
        assert.equal(await db.get_or_element('b', 5), 5);
        assert.notEqual(await db.get_or_element('b', 6), 5);
    })

    it('tries put batch', async () => {
        const testkey1 = 'testkey1';
        const rand_string1 = uuidv4();
        const testkey2 = 'testkey2';
        const rand_string2 = uuidv4();
        const rand_string3 = uuidv4();
        await db.put_batch([
            { key: testkey1, value: rand_string1 },
            { key: testkey2, value: rand_string2 },
            { key: testkey1, value: rand_string3 },
        ]);
        assert.equal(await db.get(testkey1), rand_string3);
        assert.equal(await db.get(testkey2), rand_string2);
        expect(db.get('testkey3')).to.be.rejected;
    })
})
