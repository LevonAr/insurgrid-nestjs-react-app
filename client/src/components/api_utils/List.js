import React from "react";
import { Link } from "react-router-dom";

const List = (props) => {
  const { repos } = props;
  if (!repos || repos.length === 0)
    return (
      <tbody>
        <tr>No repos, sorry</tr>
      </tbody>
    );
  return (
    <tbody>
      {repos.map((repo) => {
        return (
          <tr>
            <td>
              <Link to={`/clients/${repo.name}`}>{repo.name}</Link>
            </td>
            <td>{repo.company}</td>
            <td>${repo.quantity}</td>
          </tr>
        );
      })}
    </tbody>
  );
};
export default List;
