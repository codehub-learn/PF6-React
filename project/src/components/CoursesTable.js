import React from "react";
import { Table } from "reactstrap";

const CoursesTable = ({ courses }) => {
  return (
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
        {courses.map(({ title, open, price, dates }) => (
          <tr>
            <td>{title}</td>
            <td>{open ? "✓" : "X"}</td>
            <td>{price.normal} €</td>
            <td>
              {dates.start_date} - {dates.end_date}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CoursesTable;
