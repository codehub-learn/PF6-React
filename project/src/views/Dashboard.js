import React, { useState, useEffect } from "react";
import { Jumbotron, Button, Table, Row, Col } from "reactstrap";
import CoursesTable from '../components/CoursesTable';
import { fetchStats, fetchCourses } from '../api';

const Dashboard = () => {
  const [stats, setStats] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetshData = async () => {
      const [responseStats, responseCourses] = await Promise.all([fetchStats(), fetchCourses()]);
      setStats(responseStats);
      setCourses(responseCourses);
    };

    fetshData();
  }, []);

  return (
    <div className="App">
      <h1>Dashboard</h1>

      <Jumbotron>
        <h1 className="display-3">Hello, world!</h1>
        <p className="lead">
          This is a simple hero unit, a simple Jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className="my-2" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>

      <Row>
        {stats.length > 0 &&
          stats.map(({ id, title, amount }) => (
            <Col key={id}>{title} {amount}!!!!</Col>
          ))}
      </Row>
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
          {courses.map((data) => <CoursesTable key={data.id} {...data} />)}
        </tbody>
      </Table>
    </div>
  );
};

export default Dashboard;
