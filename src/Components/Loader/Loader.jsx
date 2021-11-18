import React from 'react'
import "./Loader.css"

const Loader = () => {
    return (
        <div className="">
            <div className=""></div>
            <br />
            <strong><h1>Loading...please wait!</h1></strong>
            <br />
            <div class="loader-outer">
    <div class="loader">
      <span class="dot dot-1"></span>
      <span class="dot dot-2"></span>
      <span class="dot dot-3"></span>
      <span class="dot dot-4"></span>
      <span class="dot dot-5"></span>
    </div>
    <br />
    <span></span>
    <span></span>
    <i class=" text-violet fab fa-github-square fa-10x"></i>
    <div>

    </div>
  </div>
        </div>
    )
}

export default Loader
