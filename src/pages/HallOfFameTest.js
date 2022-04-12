import React from 'react';
import './HallOfFame.scss'
/* import Scoob from '../assets/scoobdoo.jpg'
import Mave from '../assets/mavericksflat.png'
import Watts from '../assets/watts.jpg'
import Don from '../assets/campbell.jpg'
import Damita from '../assets/damita.jpg'
import Tony from '../assets/tony.jpg'
import Greg from '../assets/greg.jpg'
import Skeeter from '../assets/skeeter.jpg' */
import Sidebar from '../components/Sidebar/Sidebar';
import Hof from '../components/hof/Hof';

// get content for page 

const HallOfFame = () => {

    return ( 

      <div className="hof">
        <Sidebar />
        <main id="main-doc">
          <h1 className="hof-title">O.G pioneers hall of fame</h1>

          <Hof />
        {/* <div className="main-section" id="Introduction">
            <header>Introduction
            <img src={Mave} className="image" alt="" />
            </header>
            
          <div className='article'>
              <header>
                <b className="og-era">
                THE ORIGINAL ERA HALL OF FAME
            </b>
            </header>
      
            <p>
                The Artform of Locking now has several decades of contributors, Each decade has Locking dancers who are now icons in the world of Streetdance, However this room is dedicated to the Many ORIGINAL pioneers,  who deserve recognition for their contribution to the Art and Sub-Culture of Locking. 
                Many of these dancers we refer to as Masters or Ogs were around before the Group ‘The Lockers “were presented as a group to the public in 1973. They were there during the sharing and development stages of the dance. These are the dancers who were on Soul Train and in the nightclubs of Los Angeles.
                YES There are many people with different levels of contributions to the history of the art, And lockerlegends looks forward to expanding our Hall to include various phases of contributions, but these are some the ORIGINAL, main & true old school pioneers who contributed steps, style and the attitude which created and contributed to the evolution of the entire sub-culture we know as “Locking”
            </p>
            
          </div>
          </div>
          
        <section className="main-section" id="The_term_OG">
            <header>The term OG
            <img src={Watts} className="image" alt="" />
          </header>
            <article>
            <header>
                <b className="og-era">
                O.G What does it mean?
            </b>
            </header>
            <p>The term OG in the street dance of Locking refers to ORIGINAL GENERATION, therefor we acknowledge those who contributed within that era as ORIGINAL OG’s, OG LEGENDS or simply OGs. The  others who did the dance of locking from other eras or decades within locking we refer to as 70s ,80s & 90s 0ldSchool or new school pioneers , or simply BG’s , this terminology is in direct connection with street respect terminology.</p>
          </article>
        </section>
        <section className="main-section" id="Don_Campbell">
            <header>Don Campbell
            <img src={Don} className="image" alt="" />
            </header>
            <article>
            <header>
                <b className="og-era">
                Campbellock
            </b>
            </header>
            <p>
                The creator and Known as the Godfather of Locking & originator of the first Locking moves, combined with gestures That he adapted to his unique rhythm, created the style of dance first known as Campbellocking, and later as it evolved into a dance art form became known as Locking . He was a original member the Soul Train Gang, And established the first improvisational group Called “The Campbellockers”or  Campbellock dancers, Then Later Her was the organizing force behind the group “The Original Lockers” A dynamic soloist, known for his show stoping dives and splits.
            </p>
          </article>
        </section>
        <section className="main-section" id="Damita_Jo_Freeman">
            <header>Damita Jo Freeman
            <img src={Damita} className="image" alt="" />
            </header>
            <article>
            <header>
                <b className="og-era">
                Damita
            </b>
            </header>
              <p>
                  An Original Soul Train Gang member and the first lady of Locking. She was Don Campbells’ first dance partner on the show.  She later won the second Soul Train Dance contest, displaying her unique Locking style with then partner Jimmy “Scooby doo” Foster. Known for her high leg kicks, she went on to become one of the industries most noted choreographers
              </p>
        
            </article>
          </section>
        <section className="main-section" id="Greg_Pope">
            <header>Greg Pope
            <img src={Greg} className="image" alt="" />
          </header>
            <article>
            <header>
                <b className="og-era">
                Campbellock Jr
            </b>
            </header>
            <p>
                He was not related to Don Campbell but given the name because of his creativity with locking movements. A member of the Soul Train Gang and Locking Dance group from  The watts writers workshop “Creative Generation” before joining the Original Lockers in 1973. Greg helped to create several steps, moves, handshakes and routines associated with Locking. Greg toured around the world and is an important key figure to the world wide spread of the dance style locking.
            </p>
          </article>
        </section>
        <section className="main-section" id="Fred_Berry">
            <header>Fred Berry</header>
            <article>
            <header>
                <b className="og-era">
                Penguin
            </b>
            </header>
          <p>
            He is also known as Rerun on the 1970’s TV sitcom “Whats Happening”. A Soul Train Dancer and member of the first improvistional group “The Cambellockers”and a member of the Original Lockers.  His wide body and smile was associated with his introduction of the slow motion and his signature move the master butt drop.
              </p>
              </article>
        </section>
        <section className="main-section" id="Leo_Williams">
          <header>Leo Williams</header>
            <article>
            <header>
                <b className="og-era">
                Fluky Luke
            </b>
            </header>
            <p>
                A soul train dancer and original member of the Lockers  was known for his double jointed locks known as “Leo locks”.  He also contributed various sychronized steps such as the which-a-way to the locking sub-culture.
            </p>
            <p>
             
            </p>
          </article>
        </section>
        <section className="main-section" id="Jimmy_Foster">
            <header>Jimmy Foster
            <img src={Scoob} className="image" alt="" />
          </header>
            <article>
            <header>
                <b className="og-era">
                Scoo b doo
            </b>
            </header>
            <p>
                A member of the Original Soul Train Gang, along with then Partner Damito Jo Freeman used their Locking styles to win the second Soul Train Dance contest. He Later bacame a member of the Watts Writers “Creative Generation”1972-1973 and went on to dance with “Something Special” and become one of the first Chip”n”dale dancers. Scooby was a long tall animated dancer, who was often seen developing locking handshakes and steps along with Greg Campbellock Jr. but probaly the most noted for the step he created known as the Scoobydoo.
            </p>
      
          </article>
        </section>
        <section className="main-section" id="James_Higgins">
            <header>James Higgins
            <img src={Skeeter} className="image" alt="" />
          </header>
            <article>
            <header>
                <b className="og-era">
                O.G Skeeter Rabbit
            </b>
            </header>
            <p>
                Is an early Soul Train Dancer and member of several early locking groups. The Original Go-Go Brothers 1971 to 1973, Watts Writers  “Creative Generation” 1972 to 1973 and the Original Lockers 1973 to 1974. He also danced with the Ghetto Dancers in 1975 and was also known as an outstanding master robot. He later organized and toured with the Locking group 33rpm in late 1975.  He was most known for his creation of the dance step done in most syncronized locking routines called “The skeeterrabbit”.
            </p>

          </article>
        </section>
        <section className="main-section" id="Arnetta_Johnson">
            <header>Arnetta Johnson</header>
            <article>
            <header>
                <b className="og-era">
               Netta bug
            </b>
            </header>
             <p>
              An Original Locking Streetdancer, and the very First female dancer to dance in a Locking group, NettaBug was very instramental with her strong fundamental Locking, She was a high school chearleader and was often sceen at the clubs as well as the streetparties and high school dances along with the GoGo brothers , here connection with the watts writers workshop prompted the Organization of the First unisex Locking Group “Creative Generation” She was also a member of the First all Female Locking group “The Toota Woota Sisters” Many who saw the Lockers believe Tony Basil to have been a first. but these females came years before.
             </p>
            </article>
          </section>
        <section className="main-section" id="Anthony_Lewis">
            <header>Anthony Lewis
            <img src={Tony} className="image" alt="" />
          </header>
            <article>
            <header>
                <b className="og-era">
                Tony Go-Go
            </b>
            </header>
            <p>
                An early Soul Train Dancer and a founding member of the Go Go Brothers dance group in the early 1970s’.  He also danced with groups like 33rpm and was a member of the “Original Lockers”.  Tony had a quick acrobatic style. He and other Go Go Brother members are credited with the first sycronized locking group 1971. Tony went on to introduce and establish locking styles and instruction in Japan
            </p>

          </article>
        </section>
    <section className="main-section" id="Others">
          <header>Others</header>
          <article>
            <ul>
                <li>Kevin “YoYo” Lombard :see the GoGo Brothers page</li>
                <li>Eugine Henderson “F&M”</li>
                <li>Steve Crane ” Sinbad” see:The Ghetto dancers</li>
                <li>Greg Dandridge “Captain Crunch”see The Ghetto Dancers</li>
                <li>Mike Frenke “Peekaboo” see: 33rpm & YoYo brothers</li>
                <li>Guy Evan “Shocklock”</li>
                <li>John “OkieDoke” Wilson see 33rpm</li>
                <li>Jeffrey Daniel</li>
                <li>Tito Collins see: The Alphebet kids & 33rom</li>
                <li>Jefery McKintire “Cat Man”</li>
                <li>Bishop “CoCo” Hall</li>
                <li>Tick</li>
                <li>Sneaky T</li>
            </ul>
      
          </article>
        </section> */}
      </main>
        </div>

     );
}
 
export default HallOfFame;