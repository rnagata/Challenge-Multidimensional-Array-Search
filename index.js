function locate(array, target) {
  if (array.includes(target)){
    return true;
  }
  let found = false;
  array.forEach(function(item){
    if (Array.isArray(item)){
      if (item.includes(target)){
        found = true;
      }
      item.forEach(function(item){
        if (Array.isArray(item)){
          if (item.includes(target)){
            found = true;
          }
        }
      });
    }
  });
  return found;
}

module.exports = locate;
