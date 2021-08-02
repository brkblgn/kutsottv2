import mongoose from 'mongoose';

const recordSchema = new mongoose.Schema({
    tempature: Number,
    humidity: Number,
    light: Number,
    pressure: Number,
    device: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Device'
    }
    },{
        timestamps:true
});

export default mongoose.models.Record || mongoose.model('Record', recordSchema);
