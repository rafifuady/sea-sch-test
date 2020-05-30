import React from "react";
import {connect} from 'react-redux'
import { fetchApiAction,fetchApi, fetchUniApiAction,fetchFaApiAction, fetchTeApiAction } from '../../redux/action';

import Logo from '../../Slicing/Sea-Undergraduate-Logo.png'
import bGHead from '../../Slicing/BG-Head.jpg'
import iconGrad from '../../Slicing/icon-graduate.png'
import Uni1 from '../../Slicing/Logo_Binus.png'
import Uni2 from '../../Slicing/Logo_ITB.png'
import Uni3 from '../../Slicing/Logo_ITS.png'
import Uni4 from '../../Slicing/Logo_UGM.png'
import Uni5 from '../../Slicing/Logo_UI.png'
import Time1 from '../../Slicing/Timeline-1.png'
import Time2 from '../../Slicing/Timeline-2.png'
import Time3 from '../../Slicing/Timeline-3.png'
import Time4 from '../../Slicing/Timeline-4.png'
import bgApply from '../../Slicing/BG-Apply.jpg'
import footer from '../../Slicing/BG-Foot.jpg'

class Landing extends React.Component{
  componentDidMount() {
      //fetch API
      this.props.fetchApiAction()
      this.props.fetchUniApiAction()
      this.props.fetchTeApiAction()
      this.props.fetchFaApiAction()
      console.log(this.props)

  }

  render() {
    // console.log(this.props)
    const { contentData, faculty } = this.props
    // let seniorProg = contentData.senior_program.text()
    console.log(faculty)
    return(
      <React.Fragment>
        
        <div class='container'>
          <img src={Logo} alt="ligi" class='brandresponsive'></img>
          <div class="navbar" id="myTopnav">
            <a href="#home">Home</a>
            <a href="#program">Program </a>
            <a href="#apply">Apply Here </a>
            <a href="#FAQ">FAQ </a>
          </div>
        </div>
        <div class="card bg-dark text-white" id="home">
          <img src={bGHead} class="card-img" alt={bGHead}></img>
          <div class="card-img-overlay">
            <div class="row">
              <div class="col">
                <h2 class="card-title">Congratulation Sea Scholarship 2019 Awardees</h2>
                <p class="card-text">The Sea Scholarship Comittee is proud to announce the 2019 Academic Year Sea Scholarship recipient. Final Award email notification were sent on October 17, 2019.</p>
              </div>
              <div class="col">
                <img src={iconGrad} class="img-fluid" alt={iconGrad}></img>
              </div>
            </div>  
          </div>
        </div>
        {/* <div class="cardjumbo">
          <div class="pure-g">
            <div class="pure-u">
              <div class="container">
                <h1>Congratulation Sea Scholarship 2019 Awardees</h1>
                <h4>The Sea Scholarship Comittee is proud to announce the 2019 Academic Year Sea Scholarship recipient. Final Award email notification were sent on October 17, 2019.</h4>
              </div>
            </div>
            <div class="pure-u">
            </div>
          </div>
        </div> */}
        <div class="container">
          <h1 style={{textAlign:'center'}} id='program'>Undergraduate Program</h1>
          <p>{ contentData.program_content
          }</p>
          <div class="row">
            <div class='col'>
                <h5>Freshman Program</h5>
                <div dangerouslySetInnerHTML={{ __html: contentData.freshman_program}} />
            </div>
            <div class='col'>
            <h5>Senior Program</h5>
              <div dangerouslySetInnerHTML={{ __html: contentData.senior_program}} />
            </div>
          </div>
        </div>
        <div>
          <h1 style={{textAlign:'center'}}>Partner Universities</h1>
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="row">
                  <div class="col-6">
                    <img src={Uni1} class="img-fluid" alt={Uni1}></img>
                  </div>
                  <div class="col-6">
                    
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row">
                  <div class="col-6">
                    <img src={Uni2} class="img-fluid" alt={Uni2}></img>
                  </div>
                  <div class="col-6">
                    a
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row">
                  <div class="col-6">
                    <img src={Uni3} class="img-fluid" alt={Uni3}></img>
                  </div>
                  <div class="col-6">
                    a
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row">
                  <div class="col-6">
                    <img src={Uni4} class="img-fluid" alt={Uni4}></img>
                  </div>
                  <div class="col-6">
                    a
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row">
                  <div class="col-6">
                    <img src={Uni5} class="img-fluid" alt={Uni5}></img>
                  </div>
                  <div class="col-6">
                    a
                  </div>
                </div>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div class='container'>
          <h1 style={{textAlign:'center'}}>Timeline</h1>
          <div class="row">
            <div class="col-3">
              <div class="container">
                <p><strong>Registration</strong></p>
                <img src={Time1} class="img-fluid w-25 text-center" alt={Time1}></img>
                
                <p style={{fontSize: '80%'}}>{contentData.date_regis}</p>
              </div>
            </div>
            <div class="col-3">
              <div class="container">
                <p><strong>Essay and CV Screening</strong></p>
                <img src={Time2} class="img-fluid w-25 text-center" alt={Time2}></img>
                
                <p style={{fontSize: '80%'}}>{contentData.date_esay_cvscreen}</p>
              </div>
            </div>
            <div class="col-3">
              <div class="container">
                <p><strong>On-campus Interview</strong></p>
                <img src={Time3} class="img-fluid w-25 text-center" alt={Time3}></img>
                
                <p style={{fontSize: '80%'}}>{contentData.date_interview}</p>
              </div>
            </div>
            <div class="col-3">
              <div class="container">
                <p><strong>Announcement of Selected Scholars</strong></p>
                <img src={Time4} class="img-fluid w-25 text-center" alt={Time4}></img>
                
                <p style={{fontSize: '80%'}}>{contentData.date_interview}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 style={{textAlign:'center'}}>Testimonials</h1>
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner text-center">
              <div class="carousel-item active">
              </div>
              {
                this.props.testimony.map((data,index) => {
                  return(
                    <div class="carousel-item">
                      <div class="row">
                        <div class="col-6">
                          <img src={data.image} class="img-fluid d-25" alt="..."></img>
                        </div>
                        <div class="col-6">
                          <p class='blockquote'>{data.story}</p>
                          <p class='blockquote-footer'>{data.name}</p>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div>
          <div class="card bg-dark text-white">
            <img src={bgApply} class="card-img" alt={bgApply} id='apply'></img>
            <div class="card-img-overlay">
              <br></br><br></br>
              <br></br><br></br>
              <br></br><br></br>
              <br></br><br></br>
              <h3 class="card-title text-center">Applications are now closed.</h3>
              <h3 class="card-title text-center">We'll see you again next year.</h3>
            </div>
          </div>
        </div>
        <div>
          <h1 style={{textAlign:'center'}} id='FAQ'>FAQ</h1>
          <div class="container" id='faq_content'>
            <div dangerouslySetInnerHTML={{ __html: contentData.faq_content}} />
          </div>
        </div>
        <div>
        <div class="card bg-dark text-white">
            <img src={footer} class="card-img" alt={footer} id='apply'></img>
            <div class="card-img-overlay">
              <br></br>
              <p class="text-center">For more information about Sea, check out our corporate webiste here
           If you have further queries, reach out to us at id-scholarshops@seagroup.com</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  contentData: state.contentData.data,
  univ: state.contentData.uni,
  testimony: state.contentData.testimony,
  faculty: state.contentData.faculty
})

const mapDispatchToProps = {
  fetchApi,
  fetchApiAction,
  fetchUniApiAction,
  fetchTeApiAction,
  fetchFaApiAction
}
export default connect (mapStateToProps, mapDispatchToProps)(Landing)
