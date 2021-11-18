import React from 'react'
import "./Loader.css"

const Loader = () => {
    return (
        <div className="">
            <div className=""></div>
            <br />
            <strong><h1>Loading...please wait!</h1></strong>
            <br />
            <div className="loader-outer">
    <div className="loader">
      <span className="dot dot-1"></span>
      <span className="dot dot-2"></span>
      <span className="dot dot-3"></span>
      <span className="dot dot-4"></span>
      <span className="dot dot-5"></span>
    </div>
    <br />
    <span></span>
    <span></span>
    <i className=" text-violet fab fa-github-square fa-10x"></i>
    <div>

    </div>
  </div>
        </div>
    )
}

export default Loader
