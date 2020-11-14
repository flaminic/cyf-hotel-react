import React from "react";
import CityCard from "./CityCard";

const TuristInfoCard = () => {
  return (
    <div className="d-flex flex-row justify-content-center">
      <CityCard
        cityName="Glasgow"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTD4HpR8HkPO8zIOJeYHae5Uhc0W59WAfH_tw&usqp=CAU"
        link="https://peoplemakeglasgow.com/"
      />
      <CityCard
        cityName="Manchester"
        image="https://governmentbusiness.co.uk/sites/default/files/william-mccue-508892-unsplash_1.jpg"
        link="https://visitmanchester.com"
      />
      <CityCard
        cityName="London"
        image="https://www.tripsavvy.com/thmb/Qog8dwgxpHJvibVZaon51uMo4D8=/3435x2576/smart/filters:no_upscale()/palace-of-westminster-in-london-at-sunset--872038342-5b9b082b46e0fb00501f5ddd.jpg"
        link="https://visitlondon.com/"
      />
    </div>
  );
};

export default TuristInfoCard;
