const Base = require('../daoBase.js')
const { reader: storyParser } = require('../dataParser/story')

module.exports = class Story extends Base {
  constructor(database, storyId) {
    super(database)
    this.storyId = storyId
    this.ref = this.database.ref('Storys')
  }

  fetchDataFunction(cb) {
    const storyId = this.storyId

    this.ref.child(storyId).on('value', snap => {
      this.data = snap.val()
      super.fetchDataFunction(cb)
    })
  }

  normalize(item) {
    if (!item) return {}
    if (global.isEmptyObject(item)) return {}

    return storyParser(item)
  }
}
