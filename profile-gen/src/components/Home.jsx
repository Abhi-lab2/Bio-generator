import React, { useState } from "react";
import "./home.css";
import { Box } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

const Home = (props) => {
  // for text boxes
  const [namechange, setNamechange] = useState("John");
  const [gender, setGender] = useState("male");
  const [location, setLocation] = useState("Paris, London");
  const [school, setSchool] = useState("England");
  const [major, setMajor] = useState("Physology");
  const [occupation, setOccupation] = useState("Religious manager of paper company");
  const [rel, setRel] = useState("Christan religion a strong belief");
  const [reason, setReason] = useState(`${gender === " male" ? "she" : "he"} wants to know if God really does exist and how that affects`);

  // For checkboxes here
  const [isLocationChecked, setIsLocationChecked] = useState(true);
  const [isSchoolChecked, setIsSchoolChecked] = useState(true);
  const [isOccupationChecked, setIsOccupationChecked] = useState(false);
  const [isReligousChecked, setIsReligousChecked] = useState(true);
  const [isMeetChecked, setIsMeetChecked] = useState(true);

  const handleNameChange = (event) => {
    setNamechange(event.target.value);
    console.log(setNamechange);
  };
  const handlegenderChange = (event) => {
    setGender(event.target.value);
    console.log(setGender);
  };
  const handlelocationChange = (event) => {
    setLocation(event.target.value);
  };
  const handleschoolChange = (event) => {
    setSchool(event.target.value);
  };
  const handlemajorChange = (event) => {
    setMajor(event.target.value);
  };
  const handleoccupationChange = (event) => {
    setOccupation(event.target.value);
  };
  const handlereligionChange = (event) => {
    setRel(event.target.value);
  };
  const handlereasonChange = (event) => {
    setReason(event.target.value);
  };

  //! for check boxes
  const handleBoxLocationChange = () => {
    setIsLocationChecked(!isLocationChecked);
  };
  const handleBoxSchoolChange = () => {
    setIsSchoolChecked(!isSchoolChecked);
  };
  const handleBoxOccupationChange = () => {
    setIsOccupationChecked(!isOccupationChecked);
  };
  const handleBoxReligionChange = () => {
    setIsReligousChecked(!isReligousChecked);
  };
  const handleBoxMissionrisnChange = () => {
    setIsMeetChecked(!isMeetChecked);
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // }
  // Random Buttons
  const randomNames = () => {
    let names = [
      "John", "Will", "Jerry", "Rayan", "Mike", "Harry", "Bob", "Popaye", "kayle"
    ]
    setNamechange(names[Math.floor(Math.random() * names.length)])
  }
  const randomLocation = () => {
    let loc = [
      "London", "Paris", "New-York", "Michigan", "Massachusetts", "San Francisco", "Hamburg", "Chile", "Italy"
    ]
    setLocation(loc[Math.floor(Math.random() * loc.length)])
  }
  const randomSchool = () => {
    let school = [
      "Harvard University", "Massachusetts Institute of Technology", "Stanford University", "Stanford University", "University of Oxford", "University of Washington"
    ]
    setSchool(school[Math.floor(Math.random() * school.length)])
  }
  const randomMajor = () => {
    let loc = [
      "London", "Will", "Jerry", "Rayan", "Mike", "Harry", "Bob", "Popaye", "kayle"
    ]
    setMajor(loc[Math.floor(Math.random() * loc.length)])
  }
  const randomOcc = () => {
    let occ = [
      "London", "Will", "Jerry", "Rayan", "Mike", "Harry", "Bob", "Popaye", "kayle"
    ]
    setOccupation(occ[Math.floor(Math.random() * occ.length)])
  }
  const randomrel = () => {
    let rel = [
      "London", "Will", "Jerry", "Rayan", "Mike", "Harry", "Bob", "Popaye", "kayle"
    ]
    setRel(rel[Math.floor(Math.random() * rel.length)])
  }
  const randommission = () => {
    let missionaries = [
      "recently went through some physically and emotionally traumatic experiences that have left", 
      `believes that meeting with the missionaries will help ${gender === " male" ? "he" : "she"} to be a more spiritual and righteous person`, 
      "is wondering if there is a higher power and if it can benefit",
      "is looking for a church to attend", "has recently lost a loved one, and is looking for ways to find peace during this difficult time",
    ]
    setReason(missionaries[Math.floor(Math.random() * missionaries.length)])
  }

  return (
    <>
      <Box className="container">
        <div id="settings">
          <div className="heading"><h2>Options</h2></div>

          {/* <form onSubmit={handleSubmit}> */}
          <div className="bio-element">
            <label htmlFor="person-name-textbox">Name</label>
            <input type="text" name="person-name-textbox" value={namechange} onChange={handleNameChange} />
            <label htmlFor="gender">Gender</label>
            <select name="gender" id="gender" onChange={(e) => handlegenderChange(e)}>
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
            <button onClick={randomNames}>Random Name</button>
          </div>
          {/* location */}
          <div className="bio-element">
            <label for="location">
              <input type="checkbox" id="location" name="location" value="false" checked={isLocationChecked} onChange={handleBoxLocationChange} />
              Location{" "}
            </label>
            <input type="text" name="location-textbox" value={location} onChange={handlelocationChange} />
            <button onClick={randomLocation}>Random Location</button>
          </div>

          {/* School */}
          <div className="bio-element">
            <label for="School">
              <input type="checkbox" id="school" name="school" value='false' checked={isSchoolChecked} onChange={handleBoxSchoolChange} /> School {" "}
            </label>
            <input type="text" name="school-textbox" value={school} onChange={handleschoolChange} />
            <button onClick={randomSchool}>Random School</button>
            <br />
            <label for="degree-textbox">Major</label>
            <input type="text" name="degree-textbox" value={major} onChange={handlemajorChange} />
            <button onClick={randomMajor}>Random Major</button>
          </div>

          {/* Occupation */}
          <div className="bio-element">
            <label for="Occupation">
              <input type="checkbox" id="occupation" name="occupation" value="false" checked={isOccupationChecked} onChange={handleBoxOccupationChange} /> Occupation {" "}
            </label>
            <input type="text" name="occupation-textbox" value={occupation} onChange={handleoccupationChange} />
            <button onClick={randomOcc}>Random Occupation</button>
          </div>

          {/* Religion */}
          <div className="bio-element">
            <label for="religion">
              <input type="checkbox" id="religion" name="religion" value='false' checked={isReligousChecked} onChange={handleBoxReligionChange} /> Religious Background {" "}
            </label> <br />
            <textarea name="religion-textbox" id="religion-text" type="text" value={rel} onChange={handlereligionChange} ></textarea> <br />
            <button onClick={randomrel}>Random Religion </button>
          </div>

          {/* missionaries */}
          <div className="bio-element">
            <label for="desire">
              <input type="checkbox" id="desire" name="desire" value="false" checked={isMeetChecked} onChange={handleBoxMissionrisnChange} /> Reason for meeting with missionaries {" "}
            </label>
            <br />
            <textarea name="desire-textbox" id="desire-text" type="text" value={reason} onChange={handlereasonChange}></textarea> <br />
            <button style={{ backgroundColor: "#D3BCA2" }} onClick={randommission}>Restoration</button>
            <button style={{ backgroundColor: "#ACD4AD" }} onClick={randommission}>Plan of Salvation</button>
            <button style={{ backgroundColor: "#ACAED3" }} onClick={randommission}>Gospal of Christ</button>
            <button style={{ backgroundColor: "#DEAEBA" }} onClick={randommission}>Law of Charitity</button>
            <button style={{ backgroundColor: "#C6A2C6" }} onClick={randommission}>Word of Wisdom</button>
            <button style={{ backgroundColor: "#CDCFCE" }} onClick={randommission}>Any Lesson</button>
          </div>
          {/* </form> */}
        </div>

        <div className="results-box">
          <div className="heading">
            <h2>Results</h2>
          </div>
          <div className="bio-output">
            <p>
              {/* Heather is from Southern Utah. She is studying English at BYU. She was raised to be very religious, leads a local Bible study group. She is trying to figure out if religion works for her and for her future. */}
              {namechange} {isLocationChecked ? `is from ${location}, ` : null}
              {isSchoolChecked ? `${gender === 'male' ? "he" : "she"} is studying ${major} at ${school}. ` : null}
              {isOccupationChecked ? `${gender === "male" ? "He" : "She"} currently works as a fishing guide on the Provo river, ` : null}
              {isReligousChecked ? `without much religious experience, but has made a lot of friends who are members of the Church while attending school. ` : null}
              {isMeetChecked ? `${gender === "male" ? "He" : "She"} believes that meeting with the missionaries will help to be a more spiritual and righteous person` : null}
            </p>
          </div>
        </div>
      </Box>
    </>
  );
};

export default Home;
