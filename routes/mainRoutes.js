const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.getHomeHTML);
router.get('/about-us', mainController.getAboutUsHTML);
router.get('/contact', mainController.getContactHTML);
router.get('/events', mainController.getEventsHTML);
router.get('/blog', mainController.getBlogHTML);
router.get('/instructors', mainController.getInstructorsHTML);
router.get('/courses', mainController.getCoursesHTML);
router.get('/instructor-details', mainController.getInstructorDetailsHTML);
router.get('/blog-details', mainController.getBlogDetailsHTML);
router.get('/course-details', mainController.getCourseDetailsHTML);
router.get('/events-details', mainController.getEventDetailsHTML);

router.get('/events-details_sanosyan', mainController.getInstructorDetailsHovoHTML);
router.get('/events-details_nalbandyan', mainController.getInstructorDetailsArturHTML);
router.get('/events-details_movsisyan', mainController.getInstructorDetailsSamvelHTML);
router.get('/events-details_asatryan', mainController.getInstructorDetailsSerobHTML);








module.exports = router;
