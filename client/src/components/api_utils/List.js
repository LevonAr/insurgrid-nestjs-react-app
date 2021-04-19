import React from "react";
const List = (props) => {
  const { repos } = props;
  if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
  return (
    <tbody>
      {repos.map((repo) => {
        return (
          <tr>
            <td>{repo.name} </td>
            <td>{repo.description}</td>
            <td>{repo.quantity}</td>
          </tr>
        );
      })}
    </tbody>
  );
};
export default List;
