import React, { useState, useEffect } from "react";
import { Jumbotron, Button } from "reactstrap";

const App = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/stats")
      .then((res) => res.json())
      .then((data) => {
        setStats(data);
      });
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

      <ul>
        {stats.length &&
          stats.map(({ id, title, amount }) => (
            <li key={id}>
              {title} {amount}!!!!
            </li>
          ))}
      </ul>
    </div>
  );
};

export default App;
