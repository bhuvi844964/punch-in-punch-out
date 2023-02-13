const mongoose = require("mongoose")
const attendanceModel = require("../models/attendanceModel")


module.exports.attendance = async function (req, res) {
    try {
      let data = req.body;
      let {userId, Date ,PunchIn,PunchOut , session } = data;

      if (!userId || userId == "")
      return res.status(400).send({ Status: false, message: "Please provide userId " })

     if (!mongoose.isValidObjectId(userId))
            return res.status(400).send({ Status: false, message: "Please enter valid userId " })
    if (!Date || Date == "")
    return res.status(400).send({ Status: false, message: "Please provide Date " })
    if (!PunchIn || PunchIn == "")
    return res.status(400).send({ Status: false, message: "Please provide PunchIn " })
    if (!PunchOut || PunchOut == "")
    return res.status(400).send({ Status: false, message: "Please provide PunchOut " })
   
    if (!session || session == "") {
      return res.status(400).send({ Status: false, message: "Please provide session" })
  }
        let savedData = await attendanceModel.create(data)
        return res.status(201).send({ status : true, message: savedData })
    }   
  
  catch (error) {
    res.status(500).send({ status: false, error: error.message })
  }
  }



  module.exports.getAttendance = async function (req, res) {
    try {
      let attendanceFound = await attendanceModel.find(req.query).select({ createdAt: 0, updatedAt: 0, __v: 0});
      if (attendanceFound.length > 0) {
        res.status(200).send( attendanceFound );
      } else {
          res.status(404).send({ status: false, message: "No such data found " });
      }
    } catch (error) {
      res.status(500).send({ status: false, error: error.message });
    }
  };





  module.exports.getAttendanceById = async function (req, res) {
    try {
        const userId = req.params.userId

        if (!mongoose.isValidObjectId(userId))
        return res.status(400).send({ Status: false, message: "Please enter valid userId " })
    
        let allAttendance = await attendanceModel.findOne({ userId:userId })
        if (!allAttendance) {
            return res.status(400).send({ status: false, message: "slot not found" })

        }
        return res.status(200).send({ status: true, message: 'Attendance list',data: allAttendance })

    } catch (error) {
      res.status(500).send({ status: false, error: error.message });
    }

}

 