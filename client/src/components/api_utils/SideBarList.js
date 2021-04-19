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
  let styles = {
    paddingLeft: "48px",
    paddingTop: "20px",
    paddingBottom: "20px",
    borderTop: "none",
  };
  return (
    <tbody>
      {repos.map((repo) => {
        return (
          <tr>
            <td style={styles}>
              <Link to={`/clients/${repo.name}`}>{repo.name}</Link>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};
export default List;
