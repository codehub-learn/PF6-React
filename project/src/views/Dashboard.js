import React, { useState, useEffect } from "react";
import {
  Jumbotron,
  Table,
  Row,
  Col,
  Card,
  CardBody,
  CardText,
  Badge,
  Spinner,
} from "reactstrap";
import CoursesTable from "../components/CoursesTable";
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
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "200px",
              }}
            >
              <Spinner color="dark" />
            </div>
          </Col>
        )}
      </Row>

      <Row>
        <Col xs={12}>
          {courses.length ? (
            <Table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Bookable</th>
                  <th>Price</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((data) => (
                  <CoursesTable key={data.id} {...data} />
                ))}
              </tbody>
            </Table>
          ) : (
            <Col xs={12}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "200px",
                }}
              >
                <Spinner color="dark" />
              </div>
            </Col>
          )}
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
