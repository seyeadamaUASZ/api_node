// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

const controllers = require('../controllers')

router.get('/:resource',(req,res)=>{
   const resource = req.params.resource
   const controller=controllers[resource]

   if (controller==null){
	   res.json({
		   confirmation: 'fail',
		   message: 'Invalid resource'
	   })
	   return
   }
   controller.get()
   .then(data=>{
      res.json({
		  confirmation:'success',
		  data:data
	  })
   })
   .catch(err=>{
       res.json({
		   confirmation: 'fail',
		   message : err.message
	   })
   })

})

module.exports = router
