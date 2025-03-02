"use client"

import { useState } from "react"
import "./Programs.css"
import program from "../../assets/p.png"
import program_1 from "../../assets/p1.png"
import program_2 from "../../assets/p3.png"
import program_icon from "../../assets/icon1.png"

const Programs = () => {
  const programItems = [
    { img: program, caption: "GDSC Officer" },
    { img: program_1, caption: "GDSC Countdown work" },
    { img: program_2, caption: "GDSC Announcement work" },
  ]


  const allItems = [...programItems, ...programItems, ...programItems, ...programItems]

  const [isPaused, setIsPaused] = useState(false)

  return (
    <div className="programs-container">
      <div className="fade-overlay-left" />
      <div className="fade-overlay-right" />
      <div
        className={`programs-scroll-container ${isPaused ? "paused" : ""}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="programs-track">
          {allItems.map((item, index) => (
            <div className="program" key={index}>
              <img src={item.img || "/placeholder.svg"} alt="" />
              <div className="capt">
                <img src={program_icon || "/placeholder.svg"} alt="" />
                <p>{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <a
        href="https://www.facebook.com/gdgoncampuswmsu"
        className="explore-more"
        target="_blank"
        rel="noopener noreferrer"
      >
        Explore More
      </a>
    </div>
  )
}

export default Programs

