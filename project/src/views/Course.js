import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { fetchCourse } from "../api";
import Loader from "../components/Loader";

const Course = () => {
  const match = useRouteMatch();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetshCourse = async () => {
      const course = await fetchCourse(match.params.id);

      setCourse(course);
    };

    fetshCourse();
  }, [match.params.id]);

  console.log(course);

  return <>{course ? <h1>{course.title}</h1> : <Loader />}</>;
};

export default Course;
