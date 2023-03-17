import React from 'react';
import { Course } from '../../types/Course';

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
        src={course.previewImageLink} 
        alt={course.title}
        onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src="https://cdn-icons-png.flaticon.com/512/4762/4762311.png";
          }}
      />
    </div>
  );
}

export default CourseCard;