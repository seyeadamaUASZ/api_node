// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

const players=[
	{firstname:"adama", lastName:"seye",position:"md",age:25,team:"bayern"},
	{firstname: "henry",lastName: "diallo",position: "def",age: 25,team: "fcR"},
	{firstname: "ibrahima",lastName: "sene",position: "go",age: 25,team: "FB"}
]

const teams = [
	{name:"giants",city:"new york",conference:"nfc"},
	{name: "patriots",city: "new england",conference: "afc"},
	{name: "texans",city: "houston",conference: "afc"}
]

const db={
	team:teams,
	player: players
}
/*  This is a sample API route. */


router.get('/:resource',(req,res)=>{
	const resource = req.params.resource
	const data = db[resource]

	if(data==null){
        res.json({
        	confirmation: 'fail',
        	message: 'invalid request resource'
		})
		return
	}

	res.json({
		confirmation: 'success',
		data : data
	})
})
/*router.get('/player',(req,res)=>{
	res.json({
		confirmation: 'success',
		data: players
	})
})

router.get('/team', (req, res) => {
	res.json({
		confirmation: 'success',
		data: teams
	})
})*/


module.exports = router
