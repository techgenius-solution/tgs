const path = require('path');

exports.getHomeHTML = (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/skillgro/index-2.html'));
};
exports.getAboutUsHTML = (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/skillgro/about-us.html'));
};
exports.getContactHTML = (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/skillgro/contact.html'));
};
exports.getEventsHTML = (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/skillgro/events.html'));
};
exports.getBlogHTML = (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/skillgro/blog.html'));
};
exports.getInstructorsHTML = (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/skillgro/instructors.html'));
};
exports.getCoursesHTML = (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/skillgro/courses.html'));
};
exports.getInstructorDetailsHTML = (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/skillgro/instructor-details.html'));
};
exports.getBlogDetailsHTML = (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/skillgro/blog-details.html'));
};
exports.getCourseDetailsHTML = (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/skillgro/course-details.html'));
};
exports.getEventDetailsHTML = (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/skillgro/events-details.html'));
};