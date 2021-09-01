import mongoose from 'mongoose';

const recordSchema = new mongoose.Schema({
    tempatureDHT: String,
    tempatureBMP: String,
    humidity: String,
    light: String,
    pressure: String,
    altitude: String,
    device: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Device'
    }
    },{
        timestamps:true
});

export default mongoose.models.Record || mongoose.model('Record', recordSchema);
