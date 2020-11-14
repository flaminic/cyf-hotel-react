import React, { useState } from "react";
import moment from "moment";

const SearchResultRow = props => {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const hightlightRow = () => {
    setIsHighlighted(!isHighlighted);
  };

  const showProfileFor = () => {
    props.onShowProfile(props.result.id);
  };

  return (
    <tr onClick={hightlightRow} className={isHighlighted ? "table-danger" : ""}>
      <th scope="row">{props.result.id}</th>
      <td>{props.result.title}</td>
      <td>{props.result.firstName}</td>
      <td>{props.result.surname}</td>
      <td>{props.result.email}</td>
      <td>{props.result.roomId}</td>
      <td>{props.result.checkInDate}</td>
      <td>{props.result.checkOutDate}</td>
      <td>
        {moment(props.result.checkOutDate).diff(
          moment(props.result.checkInDate),
          "days"
        )}
      </td>
      <td>
        <button onClick={showProfileFor}>Show profile</button>
      </td>
    </tr>
  );
};

export default SearchResultRow;
