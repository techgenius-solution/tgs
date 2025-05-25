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

module.exports = router;
