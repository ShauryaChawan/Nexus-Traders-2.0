import "./courses.scss";
import CourseHeader from "./components/CourseHeader/CourseHeader";
import CourseCard from "./components/CourseCard/CourseCard";
import { CoursesData } from "../../data/CoursesData";
import PreRegistration from "../../common components/PreRegistration/PreRegistration";

const Courses = () => {
  return (
    <div className="courses_container">
      {/* Courses Header */}
      <div className="header">
        <CourseHeader />
      </div>
      {/* Courses Pregistration */}
      <PreRegistration />

      {/* Courses Card */}
      <div className="courses">
        {CoursesData.map((course, index) => {
          return (
            <CourseCard
              key={index}
              title={course.title}
              video={course.video}
              duration={course.duration}
              old_online={course.old_online}
              new_online={course.new_online}
              old_offline={course.old_offline}
              new_offline={course.new_offline}
              content={course.content}
              path={course.path}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Courses;
