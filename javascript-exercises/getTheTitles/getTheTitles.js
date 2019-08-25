const getTheTitles = function(arr) {
  const res = [];
  arr.forEach((item)=> {
    res.push(item.title);
  });
    return res;
}

module.exports = getTheTitles;
