import React, { useEffect, useState } from "react";
// import { coursesFromServer } from './api/mockData';
import "./App.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import Courses from "./pages/Courses/Courses";
import CoursePage from "./pages/CoursePage/CoursePage";
// import Home from "./pages/Home/Home"
import { baseUrl, token } from "./api/api";
import axios from "axios";
import { Course } from "./types/Course";

const App: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(baseUrl, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        const coursesFromServer = response.data.courses;

        setCourses(coursesFromServer);
        setIsLoading(false);
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="App">
     <h1>Frontend School</h1>
     
      <Routes>
        <Route path="/" element={<Navigate to="/courses" replace />} />
        <Route path="courses">
          <Route index element={<Courses courses={courses} isLoading={isLoading} />} />
          <Route path=":courseId" element={<CoursePage courses={courses} />} />
        </Route>
        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Routes>
    </div>
  );
};

export default App;
