import React from "react";

const Footer = props => {
  const infosList = props.infos.map((info, i) => (
    <li key={`info-${i}`}>{info}</li>
  ));
  return <ul className="App-footer">{infosList}</ul>;
};

export default Footer;
