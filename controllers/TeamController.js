const Team = require('../models/Team')

module.exports={
    get: (params)=>{
        return new Promise((resolve,reject)=>{
              Team.find(params)
                  .then(data => {
                        resolve(data)
                  })
                  .catch(err => {
                      reject(err)
                  })
        })
        
    }
}