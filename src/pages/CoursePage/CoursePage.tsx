import CircularProgress from "@mui/material/CircularProgress";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { coursesApi } from "../../api/api";
import LessonsList from "../../components/LessonsList/LessonsList";
import { Course } from "../../types/Course";
import "./CoursePage.scss";

type Props = {
  courses: Course[];
  token: string;
};

const CoursePage: React.FC<Props> = ({ courses, token }) => {
  const { courseId } = useParams();
  const [course, setCourse] = useState<Course>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (courseId) {
      coursesApi
        .getCourse(token, courseId)
        .then((response) => {
          const currentCourse = response.data;

          setCourse(currentCourse);
        })
        .catch((error) => console.log(error))
        .finally(() => setIsLoading(false));
    }
  }, [courseId, token]);

  return (
    <div>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          <h2>{course?.title}</h2>

          <p>{course?.description}</p>

          {/* <video width="320" height="240" controls>
            <source src={firstLesson?.link} type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
          <p>Lessons:</p>

          {course?.lessons && <LessonsList lessons={course.lessons} />}
        </>
      )}
    </div>
  );
};

export default CoursePage;
