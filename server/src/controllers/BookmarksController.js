const {Bookmark,Song,User} = require('../models')
const _ = require('lodash')

module.exports = {
    async index(req,res){
      try{
        const userId = req.user.id
        const {songId} = req.query
        where = {
          UserId : userId
        }
        if(songId){
          where.SongId = songId
        }
        const bookmark = await Bookmark.findAll({
            where : where,
            include: [{
              model : Song
            }]

        }).map(bookmark => bookmark.toJSON())
        .map(bookmark => _.extend({}, bookmark.Song,bookmark))
        res.send(bookmark)
      }
      catch(err){
        console.log("error")
        res.status(500).send({
          error:"An error occured trying to get the bookmark"
        })
      }
    },
    async post(req,res){
      try{
        const userId = req.user.id
        const {songId} = req.body.params
        var bookmark = await Bookmark.findOne({
          where : {
              SongId : songId,
              UserId : userId
          }
      })
      if(bookmark){
        return res.status(400).send({
          error: "you already have this song as a bookmark"
        })
      }
      bookmark = await Bookmark.create({SongId:songId,UserId:userId})
        res.send(bookmark)
      }
      catch(err){
        console.log("errpr" + err)
        res.status(500).send({
          error:"An error occured trying to create the bookmark"
        })
      }
    },
    async delete(req,res){
      try{
        const userId = req.user.id
        const {id} = req.params
        const bookmark = await Bookmark.findOne({
          where : {
            id : id,
            UserId : userId
          }
        })
        if(!bookmark){
          return res.status(403).send({
            error : "you do not have access to this bookmark"
          })
        }
        await bookmark.destroy()
        res.send(bookmark)
      }
      catch(err){
        console.log("error")
        res.status(500).send({
          error:"An error occured trying to delete the bookmark"
        })
      }
    }
  }