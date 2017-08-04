import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Home extends Component {
    render(){
        return (<div>
                  <div className="logo"></div>
                  <div className="headline">No more shopping heartbreaks!</div><br/>
                  <div className="description">Poshfind helps you find fashion online that look & fit you as if tailormade!</div>

                  <div className="button-container">
                    <Link to="/onboard" className="btn"><span>Tell me how</span></Link>
                  </div>
                </div>
          );
    }
}

class OnboardTitle extends Component {
    render(){
        return (<div>
                  <div className="logo"></div>
                </div>
          );
    }
}

class Onboard extends Component {
    render(){
        return (<div className="content"><div style={{fontSize:'20px',textAlign:'center'}}>You'll start by clicking a selfie</div><br/>
            <img src="img/step1.png"  width="160px" style={{margin:'0 auto',width:'200px',display:'inherit',padding:'40px'}}/>
            <Link to="/onboard/step1" className="btn" style={{margin:'0 auto',zIndex:0}}>
              <span>Next</span>
            </Link>
          </div>
          );
    }
}

class OnboardStep1 extends Component {
    render(){
        return (<div className="content"><div style={{fontSize:'20px',textAlign:'center'}}>Poshfind e-measures you in a jiffy!</div><br/>
            <img src="../img/step2.png"  width="160px" style={{margin:'0 auto',width:'420px',display:'inherit',padding:'40px'}}/>
            <Link to="/onboard/step2" className="btn" style={{margin:'0 auto',zIndex:0}}>
              <span>Next</span>
            </Link>
          </div>
          );
    }
}

class OnboardStep2 extends Component {
    render(){
        return (<div className="content"><div style={{fontSize:'20px',textAlign:'center',padding:'0 20px'}}>Try on clothes online & order the right fit!</div><br/>
            <img src="../img/step3.png"  width="160px" style={{margin:'0 auto',width:'300px',display:'inherit',padding:'40px'}}/>
            <Link to="/onboard/start" className="btn" style={{margin:'0 auto',zIndex:0}}>
              <span>Get started</span>
            </Link>
          </div>
          );
    }
}

render(<Router>
        <div>
        <Route exact path="/" component={Home}/>
        <Route path="/onboard" render={()=>(
            <div>
            <OnboardTitle />
            <Route exact path="/onboard" component={Onboard}/>
            <Route exact path="/onboard/step1" component={OnboardStep1}/>
            <Route exact path="/onboard/step2" component={OnboardStep2}/>
          </div>)} />
        </div>
    </Router>, document.getElementById('container'));