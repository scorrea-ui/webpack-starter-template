const fs = require('fs')
const path = require('path')
const hash = require('object-hash')
const glob = require('glob')
// Only take a snippet of the hash, so it's less ugly in the html
const shortHash = val => hash(val).substr(0, 5)

module.exports = function () {
  // Build a cache buster object manually
  let CACHE_BUSTER = {}
  // Get javascript page sizes
  glob.sync('src/js/pages/**/*.js').forEach(val => {
    CACHE_BUSTER[path.basename(val, '.js')] = shortHash(fs.statSync(val).size)
  })
  // Assume vendor size based on deps
  CACHE_BUSTER['vendor'] = shortHash(require('../package.json').dependencies)
  // Get the size of scss
  CACHE_BUSTER['css'] = glob.sync('src/scss/**/*.scss').reduce((prev, current) => {
    return shortHash(prev + fs.statSync(current).size)
  }, 0)
  return CACHE_BUSTER
}
