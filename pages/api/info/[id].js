
import connectDB from '../../../middleware/mongodb';
import User from '../../../model/user';
import Info from '../../../model/info';

import mongoose from 'mongoose';



// api/info/vc

// get user from db
// const handler = async ({ query: { id } }, res) => {

const handler = async (req, res) => {
    // console.log('id', id);
    
    const id = "vc"; // = req.params.id; 	// change to req.user; 

    var objId;
    
    await User.findOne({ 'username': id }, function (err, user) {
        if(err) res.status(500).send('error occured A');
        else {
            objId = user._id;
			// _user = user;
            console.log('user found', user);
            // res.status(200).send(user);
        }
    });
    
    // 2b
    if (req.method === 'GET') {
        await Info.find({ 'user': mongoose.Types.ObjectId(objId) }, function (err, info) {
            if(err) res.status(500).send('error occured B');
            else {
                console.log('user info', info);
                res.status(200).send(info);
            }
        });
    }

    // 2a
    else if (req.method === "POST") {

		
		const { bodyTemperature, heartRate, bloodTemperature, respiratoryRate, weight } = req.body;
		if (bodyTemperature && heartRate && bloodTemperature && respiratoryRate && weight) {
			try {
				const info = new Info({
					bodyTemperature,
                    heartRate,
                    bloodTemperature,
                    respiratoryRate,
                    weight,
					user: mongoose.Types.ObjectId(objId)
                });
				console.log("@@@@@@@@@@@@@@@@", info, objId);
				// Create new info
                const infocreated = await info.save(function(err, info) {
					if (err) { res.status(500).send('error occured C'); return }

					User.findOneAndUpdate({username: id } , { $push: { info: info._id }}, function (err, info) {
						if(err) res.status(500).send('error occured C');
						else {
							console.log('post info', info);
							res.status(200);
						}
					});
				});

                console.log('info created');
                return res.status(200).send(infocreated);
			} catch(error) {
				console.log('error occured D', error);
                return res.status(500).send(error.message);
			}
			
		} else {
			res.status(422).send('data_incomplete');
        }
		
    }
    else {
        res.status(422).send('req_method_not_supported');
    }
}

export default connectDB(handler);


// api/user?user=vc         <= req.id

// api/user/vc              <= req.params.id

// api/user

