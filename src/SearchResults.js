import React from "react";
import SearchResultRow from "./SearchResultRow";

const SearchResults = props => {
  const rows = props.results.map((result, i) => (
    <SearchResultRow
      result={result}
      onShowProfile={props.onShowProfile}
      key={`result-${i}`}
    />
  ));

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room</th>
          <th scope="col">Check in</th>
          <th scope="col">Check out</th>
          <th scope="col">Nights</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default SearchResults;
