/**
 * Converts Date object to a string
 * @param  date
 * @returns a string representation of the date, YYYY-MM-DD
 */

const formatDate = date => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, 0);
  const day = (date.getDate().toString().padStart(2, '0'));
  return `${year}-${month}-${day}`;
}

// Using module.exports for compatibility /w 'gatsby-node.js'
module.exports = {
  formatDate: formatDate,
}

