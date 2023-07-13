const express = require('express')
const { loginController, registerController,authController, applyDoctorController,getAllNotificationController,deleteAllNotificationController,getAllDocotrsController,bookAppointmentController,bookingAvailabilityController,userAppointmentsController  } = require('../controllers/userCtrl')
const authMiddleware = require('../middlewares/authMiddleware')

// router object
const router = express.Router()

// routes
// LOGIN || POST
router.post('/login', loginController)

// REGISTER || POST
router.post('/register', registerController)

// AUTH || POST
router.post('/getUserData', authMiddleware, authController);

// Apply Doctor || POST
router.post('/apply-doctor', authMiddleware, applyDoctorController);

// Notification Doctor || POST
router.post('/get-all-notification', authMiddleware, getAllNotificationController);

// Notification Doctor || POST
router.post('/delete-all-notification', authMiddleware, deleteAllNotificationController);

// GET ALL DOCTORS
router.get('/getAllDoctors', authMiddleware , getAllDocotrsController );

// BOOK APPOINTMENT
router.post('/book-appointment', authMiddleware, bookAppointmentController);

//Booking Avliability
router.post(
    "/booking-availbility",
    authMiddleware,
    bookingAvailabilityController
  );

  //Appointments List
router.get("/user-appointments", authMiddleware, userAppointmentsController);


// export
module.exports = router