import IStorage from './istorage'

class MemStorage implements IStorage {
    private db: any = {}

    async get(key) {
        return await this.db[key]
    }

    public async get_or_element(key, element) {
        if (!this.db.hasOwnProperty(key)) {
            return element
        } else {
            return await this.get(key)
        }
    }

    public async put(key, value) {
        this.db[key] = value
    }

    public async del(key) {
        delete this.db[key]
    }

    public async put_batch(key_values) {
        for (var i = 0; i < key_values.length; i++) {
            await this.put(key_values[i].key, key_values[i].value)
        }
    }
}

export default MemStorage
