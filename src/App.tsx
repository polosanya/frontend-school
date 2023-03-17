import React, { useEffect, useState } from 'react';
import { coursesFromServer } from './api/mockData';
import './App.css';
import CoursesList from './components/CoursesList/CoursesList';
// import { coursesApi } from './api/api';
import axios from "axios";
import { Course } from './types/Course';
import { baseUrl, token } from './api/api';

const App: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    axios.get(baseUrl, {
      headers: {"Authorization" : `Bearer ${token}`},
    })
      .then((response) => {
        console.log(response);
      })
      .catch(error => console.log(error))
  }, []);

  return (
    <div className="App">
      <h1>Frontend School</h1>

      {/* <CoursesList courses={coursesFromServer}/> */}
    </div>
  );
}

export default App;
