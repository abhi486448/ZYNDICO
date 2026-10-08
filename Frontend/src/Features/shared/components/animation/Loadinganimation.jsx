import React from 'react'
import "./animation.scss"

const Loadinganimation = () => {
  return (
    <main className="loading-container">
      <div className="loader-content">
        <div className="brand-spinner">
          <div className="spinner-ring"></div>
        </div>
        <h1 className="loading-text">
          PLEASE WAIT<span>.</span><span>.</span><span>.</span>
        </h1>
      </div>
    </main>
  )
}

export default Loadinganimation