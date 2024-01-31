import { Schema, model } from "mongoose";

const postSchema = Schema({
    pid:{
        type:String,
        required:true,
    },
    ptitle:{
        type:String,
        required:true,
    },
    pcontent:{
        type:String,
    },
    pImages:{
        type:String,
    },
    pviews:{
        type:String,
    },
    plikes:{
        type:String,
    },
    pisPublic:{
        type:Boolean,
        default:true,
    },
    powner:{
        type:Schema.Types.ObjectId,
        ref:"User",
    },
},{timestamps:true})