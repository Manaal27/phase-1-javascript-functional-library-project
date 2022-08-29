
 function myEach(collection,callback) {
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i], i, collection)
        }
      }else {
        for (let key in collection) {
          callback(collection[key], key, collection)
        }
      } 

      return collection;
    }

    function myMap(collection,callback) {
      const arrResult = [];
      if (Array.isArray(collection)) {
        for (let i =0; i < collection.length; i++) {
          arrResult.push(callback(collection[i], i, collection))
        }
      }else {
        for (let key in collection) {
          arrResult.push(callback(collection[key],key, collection))
        }
      }

      return arrResult;
    }

    function myReduce(collection,callback,acc) {

      let i = 0;
      if (!acc) {
        acc = collection[i];
        i = 1;
      }
      for (; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection)
      }
      return acc
    }

    function myFind(collection, predicate) {
      for (let i= 0; i < collection.length; i++) {
        if (predicate(collection[i])){
          return collection[i]
        }
      }
      return undefined
    }

    function myFilter(collection, predicate) {
      const arrResult = [];
      for (let i = 0; i < collection.length; i++){
        if (predicate(collection[i])){
          arrResult.push(collection[i])
        }

      }
      return arrResult
    
    }

    function mySize(collection) {
      let total = 0;
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          total += 1
        }
      } else {
        for (let key in collection) {
          total +=1
        }
      }
      return total
    }

    function myFirst(array, num) {
      if (!num) {
        return array[0]
      } else {
        const newArr = [];
        for (let i = 0; i < num; i++) {
          newArr.push(array[i])
        }
        return newArr
      }
    }

    function myLast(array, num) {
      if (!num) {
        return array[array.length - 1]
      } else {
        const newArr = [];
        let index = 1
        for (let i = 0; i < num; i++) {
          newArr.unshift(array[array.length - index])
          index += 1
        }
        return newArr
      }
    }

    function mySortBy(array, callback) {
      const newArr = array.slice(0)
      return newArr.sort((a,b)=> callback(a) - callback(b))
    }

    function myFlatten(array, shallow){

      const newArr = [];
      if (shallow) {
        for (let i = 0; i < array.length; i++) {
          if (Array.isArray(array[i])) {
            for (let j = 0; j < array[i].length; j++) {
              newArr.push(array[i][j])
            }
          } else {
            newArr.push(array[i])
          }
        }
      } else {
        for (let i = 0; i < array.length; i++) {
          if (Array.isArray(array[i])) {
            newArr.push(...fi.flatten(array[i]))
          } else {
            newArr.push(array[i])
          }
        }
      }
      return newArr

    }

    function myKeys(object) {
      const newArr = [];
      for (const key in object) {
        newArr.push(key)
      }
      return newArr
    }

    function myValues(object) {
      const newArr = [];
      for (const key in object) {
        newArr.push(object[key])
      }
      return newArr
    }

   

    








