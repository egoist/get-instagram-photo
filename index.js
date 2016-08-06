'use strict'
const aimer = require('aimer')

module.exports = function getInstagramPhoto(url) {
  return aimer(url)
    .then($ => {
      return $('meta[property="og:image"]').attr('content')
    })
}
