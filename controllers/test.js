import User from '../models/User.js';
import Device from '../models/Device.js';

export const createTestData = async (req, res) => {
    const userData = await new User({
        username: 'testUser',
        email: 'testUser@mail.com',
        password: 'testPass',
        role: 'admin'
    }).save();

    const deviceData = await new Device({
        name: 'testDevice',
        location: {
            lat: 0,
            lng: 0
        },
        user: userData._id
    }).save();

    res.status(201).json({user: userData, device: deviceData});

};

export const getUser = async (req, res) => {
    const userId = req.params.userId;
    const user = await Device.find({user: userId}).exec();

    res.status(200).json(user);
}