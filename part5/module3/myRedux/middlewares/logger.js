function logger(store){
  return function(next){
    return function(action){
      console.log('logger')
      console.log(next)
      next(action)
    }
  }
}