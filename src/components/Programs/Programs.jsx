import React from 'react' 
import './Programs.css' 
import program from '../../assets/p.png' 
import program_1 from '../../assets/p1.png' 
import program_2 from '../../assets/p3.png' 
import program_icon from '../../assets/icon1.png'

const Programs = () => { return ( <div className="programs-container"> <div className="programs"> <div className="program"> <img src={program} alt="" /> <div className="capt"> <img src={program_icon} alt="" /> <p>GDSC Officer</p> </div> </div>

         <div className="program">
           <img src={program_1} alt="" />
           <div className="capt">
           <img src={program_icon} alt="" />
            <p>GDSC Countdown work</p>
           </div>
        </div>

         <div className="program">
           <img src={program_2} alt="" />
           <div className="capt">
           <img src={program_icon} alt="" />
            <p>GDSC Announcement work</p>

           </div>


         </div>

         
</div>
<a href="https://www.facebook.com/gdgoncampuswmsu" className="explore-more" target="_blank" rel="noopener noreferrer">
    Explore More
  </a>
</div>


)

}

export default Programs