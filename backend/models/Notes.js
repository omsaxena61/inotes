mongoose = require('mongoose');
const NoteSchema = new Schema({
    
    title: {
      type:String,
      required:true
    },
    description: {
        type:String,
        required:true
        
      },
      tag: {
        type:String,
        default:"genral"

      },
      date: {
        type:String,
        default:Date.now
      },
    });
    module.exports=mongoose.module('notes',NoteSchema);