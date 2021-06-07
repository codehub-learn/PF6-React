import React, { useState, useEffect } from "react";
import {
  Jumbotron,
  Row,
  Col,
  Card,
  CardBody,
  CardText,
  Badge,
} from "reactstrap";
import CoursesTable from "../components/CoursesTable";
import Loader from "../components/Loader";
import { fetchStats, fetchCourses } from "../api";

const Dashboard = () => {
  const [stats, setStats] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetshData = async () => {
      const [responseStats, responseCourses] = await Promise.all([
        fetchStats(),
        fetchCourses(),
      ]);

      setStats(responseStats);
      setCourses(responseCourses);
    };

    fetshData();
  }, []);

  return (
    <>
      <Row>
        <Col xs={12}>
          <Jumbotron>
            <h1>Welcome to Code.Hub Dashboard!</h1>
            <p className="lead">Manage everything and have fun!</p>
          </Jumbotron>
        </Col>
      </Row>

      <Row>
        {stats.length ? (
          stats.map(({ id, title, amount }) => (
            <Col key={id} xs={12} sm={6} md={3}>
              <div>
                <Card>
                  <CardBody>
                    <CardText>
                      {title}: <Badge>{amount}</Badge>
                    </CardText>
                  </CardBody>
                </Card>
              </div>
            </Col>
          ))
        ) : (
          <Col xs={12}>
            <Loader />
          </Col>
        )}
      </Row>

      <Row>
        <Col xs={12}>
          {courses.length ? <CoursesTable courses={courses} /> : <Loader />}
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
