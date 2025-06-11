const path = require('path');

exports.getHomeHTML = (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/skillgro/pages/index.html'));
};
exports.getAboutUsHTML = (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/skillgro/pages/about-us.html'));
};
exports.getContactHTML = (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/skillgro/pages/contact.html'));
};
exports.getEventsHTML = (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/skillgro/pages/events.html'));
};
exports.getBlogHTML = (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/skillgro/pages/blog.html'));
};
exports.getInstructorsHTML = (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/skillgro/pages/instructors.html'));
};
exports.getCoursesHTML = (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/skillgro/pages/courses.html'));
};
exports.getInstructorDetailsHTML = (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/skillgro/pages/instructor-details.html'));
};
exports.getBlogDetailsHTML = (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/skillgro/pages/blog-details.html'));
};
exports.getCourseDetailsHTML = (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/skillgro/pages/course-details.html'));
};
exports.getEventDetailsHTML = (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/skillgro/pages/events-details.html'));
};
exports.getInstructorDetailsHovoHTML = (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/skillgro/pages/instructor-details_hovo.html'));
};
exports.getInstructorDetailsArturHTML = (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/skillgro/pages/instructor-details_artur.html'));
};
exports.getInstructorDetailsSamvelHTML = (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/skillgro/pages/instructor-details_samvel.html'));
};
exports.getInstructorDetailsSerobHTML = (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/skillgro/pages/instructor-details_serob.html'));
};
exports.getCourseFrontendDetailsHTML = (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/skillgro/pages/course-frontend.html'));
};
exports.getCourseBackendDetailsHTML = (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/skillgro/pages/course-backend.html'));
};
exports.getCourseFullStackDetailsHTML = (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/skillgro/pages/course-full-stack.html'));
};