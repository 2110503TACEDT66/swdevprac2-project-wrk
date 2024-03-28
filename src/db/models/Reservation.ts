const mongoose = require('mongoose');
const ReservationSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.ObjectId,
		ref: 'User',
		required: true,
	},
	coWork: {
		type: mongoose.Schema.ObjectId,
		ref: 'CoWork',
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	date: {
        type:String,
        required : true
    },
    startTime:{
		type: String,
		required : true
	},
	endTime:{
		type: String,
		required : true
	},
	table :{
		type:String,
		required :true
	}
});
const Reservation = mongoose.models.Reservation||mongoose.model("Reservation",ReservationSchema);
export default Reservation