import React, { useEffect, useState } from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";
import CustomerProfile from "./CustomerProfile";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [searchedProfileId, setSearchedProfileId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);

  const search = searchVal => {
    const filteredBookings = bookings.filter(
      booking =>
        booking.firstName === searchVal || booking.surname === searchVal
    );
    setBookings(filteredBookings);
  };

  const changeSearchedProfile = newProfile => {
    setSearchedProfileId(newProfile);
  };

  useEffect(() => {
    setLoading(true);
    setFailed(false);

    fetch("https://cyf-react.glitch.me/delayed")
      .then(response => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          throw new Error(
            `Encountered something unexpected: ${response.status} ${
              response.statusText
            }`
          );
        }
      })
      .then(apiBookings => setBookings(apiBookings))
      .then(() => setLoading(false))
      .catch(() => setFailed(true))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="App-content">
      {loading ? (
        <h2 className="centered">Loading ....</h2>
      ) : failed ? (
        <h2 className="centered">Ops! Something went wrong</h2>
      ) : (
        <div className="container">
          <Search search={search} />
          <SearchResults
            results={bookings}
            onShowProfile={changeSearchedProfile}
          />
          <CustomerProfile id={searchedProfileId} />
        </div>
      )}
    </div>
  );
};

export default Bookings;
