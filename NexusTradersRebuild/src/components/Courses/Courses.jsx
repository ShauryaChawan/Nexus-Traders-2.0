import React from "react";
import "./courses.scss";
import CourseCard from "./CourseCard";
import { CoursesData } from "../../data/CoursesData";

const Courses = () => {
  return (
    <div className="courses_container">
      <h2>Courses</h2>
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
