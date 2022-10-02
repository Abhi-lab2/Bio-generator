import React, { useState } from "react";
import "./home.css";
import { Box } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

const Home = () => {
  // for text boxes
  const [namechange, setNamechange] = useState("John");
  const [gender, setGender] = useState("male");
  const [location, setLocation] = useState("Paris, London");
  const [school, setSchool] = useState("England");
  const [major, setMajor] = useState("Physology");
  const [occupation, setOccupation] = useState(
    "Religious manager of paper company"
  );
  const [rel, setRel] = useState("christan religion a strong belief");
  const [reason, setReason] = useState(
    `${gender === " male" ? "he" : "she"} wants to know if God really does exist and how that affects`
  );

  // For checkboxes here
  const [isLocationChecked, setIsLocationChecked] = useState(false);
  const [isSchoolChecked, setIsSchoolChecked] = useState(true);
  const [isOccupationChecked, setIsOccupationChecked] = useState(true);
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
  return (
    <>
      <Box className="container">
        <div id="settings">
          <div className="heading"><h2>Options</h2></div>

          <form>
            <div className="bio-element">
              <label htmlFor="person-name-textbox">Name</label>
              <input type="text" name="person-name-textbox" value={namechange} onChange={handleNameChange} />
              <label htmlFor="gender">Gender</label>
              <select name="gender" id="gender" onChange={(e) => handlegenderChange(e)}>
                <option value="male">male</option>
                <option value="female">female</option>
              </select>
              <button >Random Name</button>
            </div>
            {/* location */}
            <div className="bio-element">
              <label for="location">
                <input type="checkbox" id="location" name="location" value="false" checked={isLocationChecked} onChange={handleBoxLocationChange} />
                Location{" "}
              </label>
              <input type="text" name="location-textbox" value={location} onChange={handlelocationChange} />
              <button>Random Location</button>
            </div>

            {/* School */}
            <div className="bio-element">
              <label for="School">
                <input type="checkbox" id="school" name="school" value='false' checked={isSchoolChecked} onChange={handleBoxSchoolChange} /> School {" "}
              </label>
              <input type="text" name="school-textbox" value={school} onChange={handleschoolChange} />
              <button>Random School</button>
              <br />
              <label for="degree-textbox">Major</label>
              <input type="text" name="degree-textbox" value={major} onChange={handlemajorChange} />
              <button>Random Major</button>
            </div>

            {/* Occupation */}
            <div className="bio-element">
              <label for="Occupation">
                <input type="checkbox" id="occupation" name="occupation" value="false" checked={isOccupationChecked} onChange={handleBoxOccupationChange} /> Occupation {" "}
              </label>
              <input type="text" name="occupation-textbox" value={occupation} onChange={handleoccupationChange} />
              <button>Random Occupation</button>
            </div>

            {/* Religion */}
            <div className="bio-element">
              <label for="religion">
                <input type="checkbox" id="religion" name="religion" value='false' checked={isReligousChecked} onChange={handleBoxReligionChange} /> Religious Background {" "}
              </label> <br />
              <textarea name="religion-textbox" id="religion-text" type="text" value={rel} onChange={handlereligionChange} ></textarea> <br />
              <button>Random Religion </button>
            </div>

            {/* missionaries */}
            <div className="bio-element">
              <label for="desire">
                <input type="checkbox" id="desire" name="desire" value="false" checked={isMeetChecked} onChange={handleBoxMissionrisnChange} /> Reason for meeting with missionaries {" "}
              </label>
              <br />
              <textarea name="desire-textbox" id="desire-text" type="text" value={reason} onChange={handlereasonChange}></textarea> <br />
              <button style={{backgroundColor:"#D3BCA2"}}>Restoration</button>
              <button style={{backgroundColor:"#ACD4AD"}}>Plan of Salvation</button>
              <button style={{backgroundColor:"#ACAED3"}}>Gospal of Christ</button>
              <button style={{backgroundColor:"#DEAEBA"}}>Law of Charitity</button>
              <button style={{backgroundColor:"#C6A2C6"}}>Word of Wisdom</button>
              <button style={{backgroundColor:"#CDCFCE"}}>Any Lesson</button>
            </div>
          </form>
        </div>

        <div className="results-box">
          <div className="heading">
            <h2>Results</h2>
          </div>
          <div className="bio-output">
            <p>
              {/* Heather is from Southern Utah. She is studying English at BYU. She was raised to be very religious, leads a local Bible study group. She is trying to figure out if religion works for her and for her future. */}
              {namechange} {isLocationChecked ? `is from ${location},` : null}
              {isSchoolChecked ? `${gender === 'male' ? "he" : "she"} is studying ${major} at ${school}` : null }
              {isOccupationChecked ? `${gender === "male" ? "He" : "She"} currently works as a fishing guide on the Provo river.` : null }
              {isReligousChecked ? `without much religious experience, but has made a lot of friends who are members of the Church while attending school` : null}
              {isMeetChecked ? `believes that meeting with the missionaries will help to be a more spiritual and righteous person` : null}
            </p>
          </div>
        </div>
      </Box>
    </>
  );
};

export default Home;
