// import { div } from "prelude-ls";
import React from "react";
import './home.css';
import img1 from './images/pyro.png'


function Home(){
    return(
        <>
        <section className="home_sec" >
        <div className="pyro_home">
                <img id="pyro_img" src={img1} alt="" />
            <div className="pyro_home_title">
                <div><h1  id="id1">Pyrokinesis 2022</h1></div>
                <div><h3 >Bohemian Escapade</h3></div>
            </div>
        </div>
        </section>
  
       
    
    <section className="about_pyro">
        <div className="about_para">
            <div className="pyro_title"><h2>Pyrokinesis 2022</h2></div>
            <div id="pyro_date">30 March to 2 April</div>
            <p>Pyrokinesis, famously known as Pyro is the annual cultural fest of Assam Engineering College (AEC), Guwahati. 
                It is a four-day-long event held at the end of February every year. The 4 days of Pyrokinesis are more than a 
                festival, it is an experience beyond words. From lustrous concerts to rollicking events, from fashion shows to
                 performances by world-renowned artistes, Pyro has it all!! The festival has reached a milestone in celebrating 
                 talent. The previous editions of this 4 day long euphoria have been larger than life. Pyro is back again this 
                 year with a plethora of events catering to every taste. So, welcome one and all to this fun and action packed 
                 journey. Welcome to Pyrokinesis!!!
            </p>
        </div>
        <div className="about_vid">
        <iframe id="player" type="text/html" width="640" height="390" src="https://www.youtube.com/embed/WcCQvxfz1Cc" frameborder="0"></iframe>
        {/* <iframe id="player" type="text/html"  src="https://www.youtube.com/embed/WcCQvxfz1Cc" frameborder="0"></iframe> */}
        </div>
    </section>

    <section>
        <div className="pyro_theme">
        <h3>Bohemian Escapade</h3>
            <p>“Bohemian Escapade” as the name suggests is an unconventional living with adventurous actions often in the company of like-minded people and with few permanent ties. So what can be more relatable than "Bohemian Escapade" as the theme of PYROKINESIS 2022. A way of living that embraces a life full of music, art, literature and the practice of freedom over possession. The unconventional way is expressing themselves through their art. It always believe that every positive vibe it sends in the world flows its way back to them. It provides a great freedom to express ourselves. A Bohemian lifestyle is much the same as travelling where we meet new people and enjoy new experiences.

            </p>
            <br/>
            <br />
        </div>
        <div className="pyro_theme">
        <h2>From The Convenor's Desk</h2>
            <p>"The purpose of life is to live it, to taste experience to the utmost, to reach out eagerly and without fear for newer and richer experience". On behalf of the entire organising committee, I have great pleasure in welcoming you all to Pyrokinesis and Udbhavanam 9.0 for the year 2022 and would like to extend my heartiest greetings. After a long stretch of what seemed like forever, we are all here today after having dealt with a series of trials encompassing the pandemic, examinations etc and for that very fact I would like to congratulate each and everyone reading this piece of writing. Adding to my starting quote, I would like to lay emphasis on the fact that life is provided to us and it is our responsibility to find the beauty in it for life is something to be enjoyed. Pyrokinesis, the Annual College Fest of Assam Engineering College is committed to stand by this message, that is, to add an element of beauty and enjoyment in everyone's life. And for this we are very grateful that after months of dedicated planning and sheer hard work of our students and every other person involved, we can finally say that Pyrokinesis is back. With a theme of 'Bohemian Escapade', this year's Pyrokinesis will be a four day event featuring great artists, spectacular display of talent through a multitude of competitions that we are organising and many other entertaining events enough to suit everyone's inclinations. Alongside this, we also have Udbhavanam 9.0 which is the annual technical fest of Assam Engineering College where we will be covering another myriad of events showcasing scientific and technical prowess by means of workshops, competitions, exhibitions and many more. My heartfelt gratitude to all the professors, organisations, students, essential staff, technicians etc who lent a helping hand without which this entire episode would have been far from reality. Join us as we rejoice and learn the true spirit of brotherhood and teamwork.
            </p>
            
            <h4>
            With regards~
            </h4>
            <h5>Kautilya Kamal Buragohain</h5><h5>Convenor</h5>
            </div>      
   </section> 
   </> 

 );
}
   
   
 export default Home;