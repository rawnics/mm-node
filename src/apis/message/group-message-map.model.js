/**
 * group-message-map api models
 */

//Require Mongoose
import mongoose from 'mongoose';

//Define a schema
var Schema = mongoose.Schema;

var GroupMessageMapSchema = new Schema({
    messageId: String,
    groupId: Number,
    userSId: Number,
    createdBy: { type: Number, default: null },
    updatedBy: { type: Number, default: null },
    createdTime: { type: Date, default: Date.now },
    updatedTime: { type: Date, default: Date.now }
}, { collection: 'group_message_map' });

// Compile model from schema
var GroupMessageMap = mongoose.model('GroupMessageMap', GroupMessageMapSchema);

module.exports = GroupMessageMap;