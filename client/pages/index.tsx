import React, { useEffect, useState } from "react";
import { getEvents, displayEventTimes } from "../../server/calendarUtils";

function index() {
  const [message, setMessage] = useState("Loading");
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const startDateTime = "2023-12-14T08:00:00.000Z";
      const endDateTime = "2023-12-15T22:00:00.000Z";
      const events = await getEvents(startDateTime, endDateTime);
      console.log(displayEventTimes(events));
    };
  }, []);

  return (
    <div>
      <div>{message}</div>
      {people.map((person, index) => (
        <div key={index}>{person}</div>
      ))}
    </div>
  );
}

export default index;
