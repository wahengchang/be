const Base = require('../../lib/daoBase.js')

module.exports = class Author extends Base {
  constructor(database, authorId) {
    super(database)
    this.authorId = authorId
    this.ref = this.database.ref('Authors')
  }

  fetchDataFunction(cb) {
    const authorId = this.authorId

    this.ref.child(authorId).on('value', snap => {
      this.data = snap.val()
      super.fetchDataFunction(cb)
    })
  }

  normalize(item) {
    if (!item) return {}
    if (global.isEmptyObject(item)) return {}

    return {
      ...item,
      id: this.authorId
    }
  }
}
