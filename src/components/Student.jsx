import React, { useState } from 'react';
import _ from 'lodash';

const Student = ({result, inputId}) => {

  const [button, setButton] = useState("fa fa-plus");
  const [details, setDetails] = useState(false);
  const [tags, setTags] = useState([]);

  const handleClick = () => {
    button === "fa fa-plus" ? setButton('fa fa-minus') : setButton('fa fa-plus');
    !details ? setDetails(true) : setDetails(false);
  };

  const handleTags = (e) => {
    e.preventDefault();
    let input = document.getElementById(`${inputId}`);
    let text = document.getElementById(`${inputId}`).value;
    const myTags = [...tags];
    if(text !== "") {
      myTags.push(text);
      setTags(myTags);
      input.value = '';
    }
    input.value = '';
  };

  return (
    <div className="studentContainer">
      <div className="imageContainer pt-3">
        <img src={result.pic} alt="img" className="rounded-circle studentImage"/>
      </div>
      <div className="col mainCol">
        <div className="title">
          <h1>{`${result.firstName.toUpperCase()} ${result.lastName.toUpperCase()}`}</h1>
          <button id="expand-btn" className="myButton" onClick={handleClick}>
          <span className="icon"><i className={`${button} fa-2x`} aria-hidden="true"></i></span></button>
        </div>
        <div className="details">
          <p>{`Email: ${result.email}`}</p>
          <p>{`Company: ${result.company}`}</p>
          <p>{`Skill: ${result.skill}`}</p>
          <p className="mb-3">{`Average: ${_.mean(result.grades.map(ea => +ea)).toFixed(2)}%`}</p>
          {details && result.grades.map((g, idx) => 
            <p key={idx}>{`Test: ${g}%`}</p>)}
          {details ? tags.map((tag, i)=> <p className="myBadge mt-2 mr-2 px-2 py-1" key={i}>{tag}</p>):''}
          {details ?
          <form onSubmit={(e)=> handleTags(e)}>
            <input id={inputId} type="text" className="myTagInput" placeholder="Add a tag"/>
          </form>
          :''}
        </div>
      </div>
    </div>
  );
}
export default Student;