const Base = require('../daoBase.js')

module.exports = class Categorys extends Base {
  constructor(database) {
    super(database)
    this.ref = this.database.ref('Authors')
  }

  fetchDataFunction(cb) {
    this.ref.on('value', snap => {
      this.data = snap.val()
      super.fetchDataFunction(cb)
    })
  }

  normalize(result) {
    return this.fbListToArray(result)
  }

  create() {
    const DEFAULT_PAYLOAD = {
      name: '',
      imageUrl: '',
      description: '',
      about: ''
    }
    return super.create(DEFAULT_PAYLOAD)
  }
}
