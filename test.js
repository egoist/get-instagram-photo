'use strict'
const assert = require('assert')
const getPhoto = require('./')

getPhoto('https://www.instagram.com/p/BItduURBUpF/')
  .then(image => {
    assert(image.substr(0, 8) === 'https://', 'Image is not valid')
  })
  .catch(err => {
    console.log(err.message)
    process.exit(1)
  })
