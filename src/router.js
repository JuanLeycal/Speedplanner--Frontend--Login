import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        { path: "/", alias: "/login", name: "login", component: () => import("./components/Login") },
        { path: "/findPassword", alias: "/findPassword", name: "findPassword", component: () => import("./components/FindPassword") },
        { path: "/passwordFound", alias: "/passwordFound", name: "foundPassword", component: () => import("./components/PasswordFound") },
        { path: "/adminLogin", alias: "/adminLogin", name: "adminLogin", component: () => import("./components/AdminLogin") },
        { path: "/noSectionRequestsFound", alias: "/noSectionRequestsFound", component: () => import("./components/NoSectionRequestsFound") },
        { path: "/sectionRequests", alias: "/sectionRequests", component: () => import("./components/SectionRequests") },
        { path: "/studentHome", alias: "/studentHome", name: "studentHome", component: () => import("./components/StudentHome")},
        { path: "/careerCourse", alias: "/careerCourse", name: "careerCourse", component: () => import("./components/CareerCourse")},
        { path: "/optionalCourse", alias: "/optionalCourse", name: "optionalCourse", component: () => import("./components/OptionalCourse")},
        { path: "/showSchedule", alias: "/showSchedule", name: "showSchedule", component: () => import("./components/ShowSchedule") },
        { path: "/dialogSaveSchedule", alias: "/dialogSaveSchedule", name: "dialogSaveSchedule", component: () => import("./components/DialogSaveSchedule") },
        { path: "/questionSaveSchedule", alias: "/questionSaveSchedule", name: "questionSaveSchedule", component: () => import("./components/QuestionSaveSchedule") },
        { path: "/successfullyRecordSchedule", alias: "/successfullyRecordSchedule", name: "successfullyRecordSchedule", component: () => import("./components/SuccessfullyRecordSchedule") },
        { path: "/statistic", alias: "/statistic", name: "statistic", component: () => import("./components/Statistics") },
        { path: "/filtersCareerCourse", alias: "/filtersCareerCourse", name: "filtersCareerCourse", component: () => import("./components/FiltersCareerCourse") },
        { path: "/viewSection", alias: "/vSection", name: "viewSection", component: () => import("./components/View Sections") },
        { path: "/filterOptionalCourse", alias: "/filterOptionalCourse", name: "filterOptionalCourse", component: () => import("./components/FilterOptionalCourse") },
        { path: "/viewSectionOptional", alias: "/vSectionOptional", name: "viewSectionOptional", component: () => import("./components/View Section Optional") },
    ]
});
