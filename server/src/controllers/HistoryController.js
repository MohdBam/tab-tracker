const {History,Song } = require('../models')
const _ = require('lodash')

module.exports = {
    async index(req,res){
      try{
        const userId = req.user.id
        const history = await History.findAll({
            where : {
              UserId : userId
            },
            include : [{
              model: Song
            }]
        }).map(history => history.toJSON())
        .map(history => _.extend({}, history.Song,history))
        console.log(history)
        res.send(_.uniqBy(history,history => history.SongId))
      }
      catch(err){
        console.log("error")
        res.status(500).send({
          error:"An error occured trying to get the history"
        })
      }
    },
    async post(req,res){
      try{
        const userId = req.user.id
        const {songId} = req.body
      history = await History.create({SongId:songId,UserId:userId})
        res.send(history)
      }
      catch(err){
        console.log("errpr" + err)
        res.status(500).send({
          error:"An error occured trying to create the history"
        })
      }
    }
  }