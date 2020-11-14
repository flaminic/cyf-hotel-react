import React, { useEffect, useState } from "react";

const CustomerProfile = props => {
  const [profileInfo, setProfileInfo] = useState({});

  useEffect(() => {
    props.id &&
      fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
        .then(res => res.json())
        .then(body => setProfileInfo(body));
  }, [props.id]);

  return props.id ? (
    <div>
      <h2>CUSOMER PROFILE:</h2>
      <ul>
        <li>
          <b>ID: </b>
          {profileInfo.id}
        </li>
        <li>
          <b>Email: </b>
          {profileInfo.email}
        </li>
        <li>
          <b>VIP: </b>
          {profileInfo.isVip ? "Yes" : "No"}
        </li>
        <li>
          <b>Phone number: </b>
          {profileInfo.phoneNumber}
        </li>
      </ul>
    </div>
  ) : (
    <></>
  );
};

export default CustomerProfile;
