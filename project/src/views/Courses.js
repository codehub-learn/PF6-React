import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
import Loader from "../components/Loader";
import { fetchCourses } from "../api";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetshData = async () => {
      const courses = await fetchCourses();

      setCourses(courses);
    };

    fetshData();
  }, []);

  // {
  //   "id": "02",
  //   "title": "User eXperience (UX) Research",
  //   "imagePath": "/ui-ux.png",
  //   "price": {
  //     "normal": 500,
  //     "early_bird": 450
  //   },
  //   "dates": {
  //     "start_date": "2020-10-05",
  //     "end_date": "2020-10-27"
  //   },
  //   "duration": "4 Fridays and 4 Saturdays",
  //   "open": true,
  //   "instructors": ["01", "02"],
  //   "description": "<p>Do you want to <strong>design products based on opinions or based on evidence</strong>?</p><p>In this course you will learn how <strong>UX research</strong> builds products that users really need, can and want to use!</p>"
  // },
  return (
    <>
      <h1>Courses</h1>
      <Row>
        {courses.length ? (
          courses.map(({ id, title }) => (
            <Col key={id} xs={12} sm={6} md={4}>
              <Card className="course-card">
                <CardImg
                  top
                  width="100%"
                  src="/assets/318x180.svg"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle tag="h5">{title}</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    Card subtitle
                  </CardSubtitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText>
                  <Button
                    tag={Link}
                    to={`/courses/${id}`}
                    color="primary"
                    className="float-right"
                  >
                    View
                  </Button>
                </CardBody>
              </Card>
            </Col>
          ))
        ) : (
          <Loader />
        )}
      </Row>
    </>
  );
};

export default Courses;
