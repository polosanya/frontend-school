import axios from "axios";
import "./CoursePage.scss";
import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { baseUrl, token } from "../../api/api";
import { Course } from "../../types/Course";

type Props = {
  courses: Course[];
};

const CoursePage: React.FC<Props> = ({ courses }) => {
  const { courseId } = useParams();
  const [course, setCourse] = useState<Course>();

  useEffect(() => {
    axios
      .get(`${baseUrl}/${courseId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        const currentCourse = response.data;

        setCourse(currentCourse);
      })
      .catch((error) => console.log(error))
  }, []);

  const firstLesson = course?.lessons?.at(0);
  
  console.log(firstLesson);

  return (
    <div>
      {!course || !firstLesson ? (
        <h2>NOT FOUND</h2>
      ) : (
        <>
          <h2>{course.title}</h2>

          <p>{course.description}</p>

          <h3>{firstLesson?.title}</h3>

          <img className="Lesson__image" src={`${firstLesson?.previewImageLink}/lesson-${firstLesson?.order}.webp`} alt="lesson" />


          <video width="320" height="240" controls>
            <source src={firstLesson?.link} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* <ul>
                {currentCourse.lessons?.map(lesson => (
                    <video src={`${lesson.previewImageLink}/lesson-${lesson.order}.webp.`}></video>
                ))}
              </ul> */}
        </>
      )}
    </div>
  );
};

export default CoursePage;
