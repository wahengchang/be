
const express = require('express');
const router = express.Router()
const {uploadLocalFile} = require('../modules/s3')
const multiparty = require('multiparty')
const fs = require('fs')

const downloadFileToLocal = (fromPath, toPath) => 
  new Promise( (resolve, reject) => {
    fs.readFile(fromPath, (err, data) => {
      fs.writeFile(toPath, data, (err) => {
        fs.unlink(fromPath, () => {
          resolve()
        });
      }); 
    }); 
  })
  
router.post('/ajax/upload', (req, res) => {
  const form = new multiparty.Form();

  form.parse(req, (err, fields, files) => {
    const {path: tempPath, originalFilename} = files.file[0];
    const copyToPath = "./download/" + originalFilename;

    downloadFileToLocal (tempPath, copyToPath).then(
      () => uploadLocalFile(copyToPath)
    ).then(
      result => res.json({url: result})
    )
  })
})

module.exports = router