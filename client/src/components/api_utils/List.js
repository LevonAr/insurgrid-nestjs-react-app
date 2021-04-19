import ClientPage from "../api_utils/ClientPage";

import React from "react";
import { Link, Route } from "react-router-dom";

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
              <Link
                to={{
                  pathname: "/client",
                  clientProps: { clientName: repo.name },
                }}
              >
                {repo.name}
              </Link>
            </td>
            <td>{repo.description}</td>
            <td>{repo.quantity}</td>
          </tr>
        );
      })}
    </tbody>
  );
};
export default List;
