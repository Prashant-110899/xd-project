import React from 'react';
import './App.css';
import aero from'./images/aero.png';
import notey from './images/notey.png'
import ff from './images/ff.png';
import ff2 from './images/ff2.png';
import ff3 from './images/ff3.png';
import ff4 from './images/ff4.png';
import tick from './images/tick.png';
import group5 from './images/group5.png';
import f1 from './images/f1.png';
import f2 from './images/f2.png';
import f3 from './images/f3.png';
import f4 from './images/f4.png';
import f5 from './images/f5.png';
import f6 from './images/f6.png';
import f7 from './images/f7.png';
import g1 from './images/g1.png';
import g2 from './images/g2.png';
import g3 from './images/g3.png';
import g4 from './images/g4.png';
import g5 from './images/g5.png';
import g6 from './images/g6.png';
import circle from './images/circle.png';
import sqr from './images/sqr.png';
import reicon from './images/reicon.png'
import arr from './images/arr.png';
import ff5 from './images/ff5.png';
import gr1 from './images/gr1.png';
import gr2 from './images/gr2.png';
import gr3 from './images/gr3.png';
import aero2 from './images/aero2.png';
import last from './images/last.png';
import lastic1 from './images/lastic1.png';
import lastic2 from './images/lastic2.jpg';
import lastic3 from './images/lastic3.png';


class App extends React.Component {
  render(){
    return (
      <div className="container App">
        <header className="App-header">
          <div className="container1">
          <div class="row">
            <div class="col-sm-4"></div>
            <div class="col-sm-8 container1 colnav">
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                  <a class="navbar-brand" href="#"></a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                      <li class="nav-item">
                        <a class="cw nav-link active" aria-current="page" href="#">About</a>
                      </li>
                      <li class="nav-item">
                        <a class="cw nav-link" href="#">Services</a>
                      </li>
                      <li class="nav-item">
                        <a class="cw nav-link" href="#">Case Studies</a>
                      </li>
                      <li class="nav-item">
                        <a class="cw nav-link" href="#">Testimonials</a>
                      </li>
                      <li class="nav-item">
                        <a class="cw nav-link" href="#">Contact</a>
                      </li>
                      <li class="nav-item">
                        <button type="button" class="butnav btn btn-light">Login</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>

            </div>

          </div>

        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >

          </a>

        <div class="conttext container-fluid">
          <div class="row">
            <div class="col-sm-6">
              <h3 class="conttext1">Web Design</h3>
              <h3 class="conttext1">Web Development</h3>
              <h3 class="conttext1">by SB</h3>
              <p class="contpara">Our products are fully custom-made,made with
              the latest technologies and cloud-architectures.</p>
            <div class="contbtn1"><button type="button" class="contbtn btn btn-light"><b>Get Started    >></b></button></div>
            </div>
            <div class="col-sm-6">
              <div><img src={aero} class="img img-fluid" height="200" width="200"></img></div>
            </div>
          </div>
        </div>
      </div>
      </header>
        <div class="container2 container">
          <div class="row">
            <div class="col-sm-6">
              <div class="cont2img">
                <img src={notey} class="img img-fluid"></img>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="row">
                <div class="col-sm-6"></div>
                <div class="col-sm-6">
                  <img src={ff} className="img img-fluid"></img>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-2"><div class="cont2icon2"><img src={ff2} class="cont2icon img img-fluid"></img></div></div>
                <div class="col-sm-10"><div class="cont2icontext">ABOUT US</div></div>
              </div>
              <div class="row cont2head"><h2 class="cont2headtext">Great Digital Agency</h2></div>
              <div class="row cont2para1"><p>Our products are fully custom-made, built with the latest technologies and cloud-architectures.</p></div>
              <div class="row cont2para2"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                 ex odio, turpis accumsan congue. Quisque blandit dui Pellentesque habitant morbi tristique
                 senectus et netus et malesuada fames ac turpis egestas. In convallis porta mauris non aliquam.</p></div>
               <div class="row cont2btn2"><button type="button" class="btn btn-outline-info">Get Started  >></button></div>
               <div class="row">
                 <div class="col-sm-6"></div>
                 <div class="col-sm-6 c2i2"><img src={ff3} class="cont2icon3 img img-fluid"></img></div>
               </div>
              </div>

          </div>
        </div>
        <div className="container container3">
          <div class="row">
            <div class="col-sm-8 cont3grey"></div>
            <div class="col-sm-4 cont3blue"></div>
          </div>
        </div>
        <div className="container container4">
          <div class="row">
            <div class="col-sm-6 cont3grey">
              <div class="row">
                <div class="col-sm-4"><div class="cont2icon2"><img src={ff2} class="cont2icon img img-fluid"></img></div></div>
                <div class="col-sm-8 cont4head1"><h4 class="cont4headblue">OUR SERVICES</h4></div>
              </div>
              <div class="cont2head2"><h4 class="cont2head2bl">Transforming your ideas into Reality</h4></div>
              <div class="row">
                <div class="btnclasscont4">
                  <button type="button" class="btn btncont4 btn-primary">Web Development</button>
                  <button type="button" class="btn btncont4 btn-primary">Mobile Development</button>
                </div>
              </div>
              <div class="row">
                <div class="btnclasscont4">
                  <button type="button" class="btn btncont4 btnccc btn-primary">UI/UX Designing</button>
                  <button type="button" class="btn btncont4blue btn-primary">Branding</button>
                </div>
              </div>
              <div class="row">
                <div class="btnclasscont4">
                  <button type="button" class="btn btncont4 btn-primary">Cloud Technology</button>
                </div>
              </div>
            </div>
            <div class="col-sm-6 cont3grey2">
              <div class="card cardcont4">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3"><div class="cardicon4 cardconticon4"><img src={ff4} class="img img-fluid"></img></div></div>
                    <div class="col-sm-9"><h5 class="card-title cardcont4title">UI/UX Designing</h5></div>
                  </div>
                  <p class="card-text cardcont4text1">Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam
                     ex odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque habitant.</p>
                  <div class="row">
                    <div class="col-sm-2"><div class="cardicon4"><img src={tick} class="img img-fluid"></img></div></div>
                    <div class="col-sm-10"><p class="card-text cardcont4text1">Lorem ipsum dolor sit amet, conse ctetur adipi scing elit.</p></div>
                  </div>
                  <div class="row">
                    <div class="col-sm-2"><div class="cardicon4"><img src={tick} class="img img-fluid"></img></div></div>
                    <div class="col-sm-10"><p class="card-text cardcont4text1">Lorem ipsum dolor sit amet,</p></div>
                  </div>
                  <div class="row">
                    <div class="col-sm-2"><div class="cardicon4"><img src={tick} class="img img-fluid"></img></div></div>
                    <div class="col-sm-10"><p class="card-text cardcont4text1">conse ctetur adipi scing elit..</p></div>
                  </div>
                  <div class="row">
                    <div class="col-sm-2"><div class="cardicon4"><img src={tick} class="img img-fluid"></img></div></div>
                    <div class="col-sm-10"><p class="card-text cardcont4text1">Lorem ipsum dolor sit amet, conse ctetur</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container container32">
          <div class="row">
            <div class="col-sm-8 cont3grey"></div>
            <div class="col-sm-4 cont3blue"></div>
          </div>
        </div>
        <div class="container container5">
          <h3 class="cont5head">Workflow</h3>
          <p class="cont5text">Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio,
            is the turpis accu msan congue euisque blandit dui Pelle ntesque habitant.</p>
          <div class="row cardcont11">
            <div class="card cardcont51">
              <div class="card-body">
                <div class="row btncont5blue">
                  <button type="button" class="btn btncont5 btncont4 btn-primary">STEP 1</button>
                </div>
                <div class="cont5cardtitle"><h5 class="card-title">Send your brief</h5></div>
                  <div class="row">
                    <div class="col-sm-6"><hr class="new4"></hr></div>
                    <div class="col-sm-6"></div>
                  </div>
                <p class="card-text ct">Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio,
                   is the turpis accu msan congue euisque blandit dui Pelle ntesque habitant.</p>
                </div>
            </div>
            <div class="card cardcont52 shadow-lg p-3 mb-5 bg-white rounded">
              <div class="card-body">
                <div class="row btncont5blue">
                  <button type="button" class="btn btncont4blue btn-primary">STEP 2</button>
                </div>
                <div class="cont5cardtitle"><h5 class="card-title">Wait for delivery</h5></div>
                  <div class="row">
                    <div class="col-sm-6"><hr class="new4"></hr></div>
                    <div class="col-sm-6"></div>
                  </div>
                <p class="card-text ct">Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio,
                   is the turpis accu msan congue euisque blandit dui Pelle ntesque habitant.</p>
                </div>
            </div>
            <div class="card cardcont51">
              <div class="card-body">
                <div class="row btncont5blue">
                  <button type="button" class="btn btncont5 btncont4 btn-primary">STEP 3</button>
                </div>
                <div class="cont5cardtitle"><h5 class="card-title">Get your files</h5></div>
                <div class="row">
                  <div class="col-sm-6"><hr class="new4"></hr></div>
                  <div class="col-sm-6"></div>
                </div>
                <p class="card-text ct">Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio,
                   is the turpis accu msan congue euisque blandit dui Pelle ntesque habitant.</p>
                </div>
            </div>
          </div>
        </div>
        <div class="container container6">
          <div class="col-sm-4">
            <img src={group5} class="img-fluid"></img>
          </div>
          <div class="col-sm-4">
          </div>
          <h4 class="cont6head">Core Technologies</h4>
          <p class="cont6text">Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio,
             is the turpis accu msan congue euisque blandit dui Pelle ntesque habitant.</p>
          <div class="c234">
            <div class="card cont6card">
            <div class="card-body">
              <div class="cont6cardwrap">
                <p class="cont6cardtext">Design</p>
                <div class="vl"></div>
                <p class="cont6cardtext1">Development</p>
                <div class="vl"></div>
                <p class="cont6cardtext">Marketing</p>
              </div>
            </div>
            </div>
          </div>
          <div class="row ww1">
            <div class="cont6wrap">
              <img src={f1} class="fimg"></img>
              <img src={f2} class="fimg fimg2"></img>
              <img src={f3} class="fimg"></img>
              <img src={f4} class="fimg"></img>
              <img src={f5} class="fimg"></img>
              <img src={f6} class="fimg"></img>
              <img src={f7} class="fimg fimg7"></img>
            </div>
          </div>
          <div class="row ww1">
            <div class="cont6wrap1">
              <img src={g1} class="fimg"></img>
              <img src={g2} class="fimg"></img>
              <img src={g3} class="fimg"></img>
              <img src={g4} class="fimg gimg"></img>
              <img src={g5} class="fimg"></img>
              <img src={g6} class="fimg"></img>
            </div>
          </div>
        </div>
        <div class="container container7">
          <div class="row">
            <div class="col-sm-6 bluebox">
              <div class="ww3">
                <img src={circle} class="img-fluid circleimg"></img>
                <img src={sqr} class="img-fluid sqrimg"></img>
              </div>
            </div>
            <div class="col-sm-6 whitebox">
              <div class="row">
                <div class="col-sm-2"><div class="cont2icon2"><img src={ff2} class="cont2icon img img-fluid"></img></div></div>
                <div class="col-sm-10"><div class="cont2icontext">SELECTED CUSTOMERS</div></div>
              </div>
              <h5 class="cont7head">Check out what our clients say about us</h5>
              <p class="cont7para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ex
                turpis accumsan congue. Quisque blandit dui Pellentesque habitant morbi tristique senectus
                 et netus et malesuada fames ac turpis egestas. In convallis porta mauris non aliquam.</p>
               <img src={reicon} class="cont7re img-fluid"></img>
               <img src={arr} class="cont7arr img-fluid"></img>
               <img src={ff5} class="ff5img img-fluid"></img>
             </div>
          </div>
        </div>
        <div class="container container8">
          <div class="cont8in">
            <h4 class="cont8head">Case Studies</h4>
            <p class="cont8para">Lorem ipsum dolor sit amet, conse ctetur adipi scing elit.
              Aliq uam ex odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque habitant.</p>
            <div class="cont8wrapper">
              <div class="card cont7card" >
                <img src={gr1} class="card-img-top" alt="..."></img>
                <div class="card-body">
                  <h5 class="card-title">Isomorphic Web App</h5>
                  <p class="card-text">Getting involved matters. Crucial causes to the if ever, come from passive action.</p>
                </div>
              </div>
              <div class="card cont7card cont7card2" >
                <img src={gr2} class="card-img-top" alt="..."></img>
                <div class="card-body">
                  <h5 class="card-title">Isomorphic Web App</h5>
                  <p class="card-text">Getting involved matters. Crucial causes to the if ever, come from passive action.</p>
                </div>
              </div>
              <div class="card cont7card" >
                <img src={gr3} class="card-img-top" alt="..."></img>
                <div class="card-body">
                  <h5 class="card-title">Isomorphic Web App</h5>
                  <p class="card-text">Getting involved matters. Crucial causes to the if ever, come from passive action.</p>
                </div>
              </div>
              <div class="row cont7btn cont2btn2"><button type="button" class="btn btn-outline-info">View All</button></div>
              <img src={aero2} class="aero2img img-fluid"></img>
          </div>

          </div>

         </div>
         <div className="container container9">
           <div class="row">
             <div class="col-sm-6 lastimgcont">
               <img src={last} class="img-fluid lastimg"></img>
             </div>
             <div class="col-sm-6">
               <form>
                 <div class="form-group">
                   <h4 class="cont9fhead">Send Us message</h4>
                   <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Email*"></input>
                 </div>
                 <div class="form-group">
                   <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Your Name*"></input>
                 </div>
                 <div class="form-group">
                   <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Phone Number*"></input>
                 </div>
                 <div class="form-group">
                   <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Subject"></input>
                 </div>
                 <div class="form-group">
                   <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Your Message" rows="3"></textarea>
                 </div>
                 <div class="form-group form-check">
                   <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                   <label class="form-check-label cont9clabel" for="exampleCheck1">By sending this message, you confirm that you have read and agreed to our privacy-policy.</label>
                 </div>
                 <button type="button" class="btn btncont4blue cfghi btn-primary">Get Started  >></button>
               </form>
             </div>
           </div>
           <div class="lastcont">
             <div class="row">
               <div class="col-sm-5">
                 <div class="lastcont">
                   <div class="lastmesg">
                     <p class="lastmsgwt">Lorem Finaldream rure dolor in reprehenderit in voluptate velit esse cillum
                        dolore e uis nostrud exercitation isi ut aliquip ex ea commodo consequat.</p>
                      <div>
                        <img src={lastic1} class="lastic img-fluid"></img>
                        <img src={lastic2} class="lastic img-fluid"></img>
                        <img src={lastic3} class="lastic img-fluid"></img>
                      </div>
                   </div>
                 </div>
               </div>
               <div class="col-sm-6">
                 <div class="row">
                   <div class="col-sm-4 lastcolumn">
                     <h7 class="lasttitle">Our Services</h7>
                     <div class="row"><div class="col-sm-6"><hr class="new5"></hr></div></div>
                     <p class="lastmsgwt">Web Development</p>
                     <p class="lastmsgwt">Mobile Development</p>
                     <p class="lastmsgwt">Cloud Technologies</p>
                     <p class="lastmsgwt">UI/UX Designs</p>
                   </div>
                   <div class="col-sm-4 lastcolumn">
                       <h7 class="lasttitle">Our Links</h7>
                       <div class="row"><div class="col-sm-6"><hr class="new5"></hr></div></div>
                         <p class="lastmsgwt">Terms & Condition</p>
                         <p class="lastmsgwt">Privacy Policy</p>
                         <p class="lastmsgwt">Imprint</p>
                         <p class="lastmsgwt">Legal</p>
                   </div>
                   <div class="col-sm-4 lastcolumn">
                      <h7 class="lasttitle">Contact Us</h7>
                      <div class="row"><div class="col-sm-6"><hr class="new5"></hr></div></div>
                        <p class="lastmsgwt">Al. Dummyodl 124/23 floor 123 Banswara Street, 02-577 India.</p>
                        <p class="lastmsgwt">00 1800 245 453</p>
                        <p class="lastmsgwt">hello@inkyy.com</p>
                   </div>

                   </div>

                   </div>
                 </div>
               </div>
             </div>
            </div>


    );
  }
}

export default App;
