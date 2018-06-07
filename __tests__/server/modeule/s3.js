const {uploadLocalFile} = require('../../../server/modules/s3')

describe('S3 module', () => {
  it('uploadLocalFile(file) to S3', (done) => {
    const path = './package.json'
    const expectRes = 'https://baseballblog.s3.amazonaws.com/package.json'
    
    uploadLocalFile(path).then(
        (res) => {
          expect(res).toBe(expectRes)
          done()
        }
    )
  })
})