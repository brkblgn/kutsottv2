import mongoose from 'mongoose';

const deviceSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
        unique: true
    },
    location:{
        lat: {
            type: String,
            required: true
        },
        lng: {
            type: String,
            required: true
        }
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
    },{
        timestamps:true
});

export default mongoose.models.Device || mongoose.model('Device', deviceSchema);
