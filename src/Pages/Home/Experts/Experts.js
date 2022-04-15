import React from "react";

import expert1 from "../../../images/expert/expert-1.jpg";
import expert2 from "../../../images/expert/expert-2.jpg";
import expert3 from "../../../images/expert/expert-3.jpg";
import expert4 from "../../../images/expert/expert-4.jpg";
import expert5 from "../../../images/expert/expert-5.jpg";
import expert6 from "../../../images/expert/expert-6.png";
import Expert from "../Expert/Expert";

const experts = [
  { id: 1, name: "kala manik", img: expert1 },
  { id: 2, name: "kala manik", img: expert2 },
  { id: 3, name: "kala manik", img: expert3 },
  { id: 4, name: "kala manik", img: expert4 },
  { id: 5, name: "kala manik", img: expert5 },
  { id: 6, name: "kala manik", img: expert6 },
];

const Experts = () => {
  return (
    <div className="container" id="experts">
      <h3 className="text-center text-danger">this is experts</h3>
      <div className="row ">
                {
                          experts.map(expert=><Expert
                          key={expert.id}
                          expert={expert}
                          
                          >


                          </Expert>)
                }
      </div>
    </div>
  );
};

export default Experts;
