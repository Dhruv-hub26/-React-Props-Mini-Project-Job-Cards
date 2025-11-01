import React from "react";
import "./index.css";
import Card from "./component/card";
import jobs from "./jobsData/jobsData";

const App = () => {
  return (
    <div className="parent">
      {jobs.map((job, index) => (
        <Card
          key={index}
          brandLogo={job.brandLogo}
          company={job.company}
          date={job.date}
          post={job.post}
          tag1={job.tag1}
          tag2={job.tag2}
          pay={job.pay}
          location={job.location}
        />
      ))}
    </div>
  );
};

export default App;
