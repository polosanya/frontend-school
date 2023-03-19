import React from 'react';
import { Course } from '../../types/Course';
import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';

type Props = {
  course: Course;
};

const CourseCard: React.FC<Props> = ({ course }) => {
  return (
    <div className='CourseCard'>
      <h3>
        {course.title}
      </h3>

      <img 
        className='CourseCard__image'
        src={course.previewImageLink +'/cover.webp'} 
        alt={course.title}
        onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src="https://cdn-icons-png.flaticon.com/512/4762/4762311.png";
          }}
      />

      <p>
        Duration: {course.duration} minutes 
      </p>

      <Rating value={course.rating} readOnly precision={0.5} />

      <p>{course.meta?.skills?.at(0)}</p>

      <Link to={`/courses/${course.id}`}>Open Course</Link>
    </div>
  );
}

export default CourseCard;