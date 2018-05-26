const Base = require('../../lib/daoBase.js')

module.exports = class Categorys extends Base {
  constructor(database) {
    super(database)
    this.ref = this.database.ref('Categorys')
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
}
