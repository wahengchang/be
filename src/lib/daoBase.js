// rlr : real time reader
module.exports = class Base {
    constructor (database) {
        this.database = database
        this.data = null
        this.ref = null
    }

    normalize(result) {
        return result
    }

    fetchDataFunction(cb){
        this.data = this.normalize(this.data)
        cb(this.data)
    }

    fbListToArray(fbList) {
        return Object.entries(fbList).map(([id, item])=> ({
            ...item,
            id
        }))
    }

    on(cb) {
        this.fetchDataFunction(cb)
    }

    validateUpdatePayload(payload) {
        return true
    }

    updateById(id, payload) {
        if(this.validateUpdatePayload(payload))
            return this.ref.child(id).update(payload)
        
        return Promise.reject('invalidate Data')
    }

    validateCreatePayload(payload) {
        return true
    }

    create(payload) {
        if(this.validateCreatePayload(payload)){
            if(!payload.createdAt){
                const createdAt = (new Date()).getTime()
                payload = {...payload, createdAt }
            }
            return this.ref.push().set(payload)
        }
        
        return Promise.reject('invalidate Data')
    }
}