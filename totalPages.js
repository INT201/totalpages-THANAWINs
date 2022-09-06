const { template } = require('@babel/core')

function totalPages(arrayItems, rowsPerPage) {
  //code here
  return arrayItems === null || arrayItems === undefined?undefined:rowsPerPage === null || rowsPerPage === undefined || rowsPerPage === 0?1:Math.ceil(arrayItems.length/rowsPerPage)
}
module.exports = totalPages
