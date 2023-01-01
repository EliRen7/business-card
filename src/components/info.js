import React from "react";
import Img from "../images/profile-pic2.jpg";
import { MdEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";

function Info() {
  return (
    <main className="card-info">
      <div className="main-info">
        <img alt="profilepic"className="profile-pic" src={Img} />
        <h1 className="name-info">Elizabeth Renderos</h1>
        <h2 className="job-info">Frontend Developer</h2>
        <h3 className="email-info">elirenderos@gmail.com</h3>
      </div>
      <div className="buttons-info">
        <button className="email-button-info">
          <a href= "mailto: elirenderos@gmail.com" className="email-text">
            <MdEmail fontSize={"16px"} color={'black'}/>
            Email
          </a>
        </button>
        <a href="https://linkedin.com/in/elizabeth27283" target={'_blank'}  rel="noreferrer" className="linkedIn-text">
          <button className="linkedIn-button-info">
            <AiFillLinkedin fontSize={"14px"} />
            LinkedIn
          </button>
        </a>
      </div>
    </main>
  );
}

export default Info;
