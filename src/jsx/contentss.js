import React from 'react';
import ReactDOM from 'react-dom';
import {  Route , Link } from 'react-router-dom'
import 'antd/dist/antd.css';
import Bread from './bread'
import Script from './script'
import Slider from './slider'
import Intro from './intro'
import axios from 'axios'
import $ from 'jquery';
import 'readmore-js';
import jq from 'readmore-js/node_modules/jquery';
import {headerr} from './header';
import { Button } from 'antd';
import { Layout, Menu, Breadcrumb, Sider, Dropdown, Icon , Carousel, Card , Avatar} from 'antd';
const { Header, Content, Footer } = Layout;



function onChange(a, b, c) {
  console.log(a, b, c);
}

var thisDefault = 100
var yoyo = false
class Cont extends React.Component {
	
  constructor(props) {
  	super(props);
  	thisDefault = this.props.key1
    var flag = 0
  	// console.log('inside constructor')
  	// console.log('hello' + thisDefault)
   //  console.log( 'trying multiple props '+ this.props.url)
   this.state = {
    data : []
  };
  	// alert(this.props.key1)
  	if ( thisDefault != 100){
  		// alert('miracle')
     thisDefault = 1
   }
   else {
  	// alert('here')
  	thisDefault = null}
  }
  loadCommentsFromServer =() =>{
    const ax_url = 'https://server-try.herokuapp.com/api/update/';
    axios.get(ax_url)
    .then(res => {
      this.setState({ hungry_rides : res.data[8].hungry_rides.reverse() ,
        food_walks : res.data[8].food_walks.reverse(),
        about : res.data[8].about
      });
    })
  }

  componentWillMount() {
	// console.log('component mounted')
}

componentDidMount() {
    // console.log('conponentMounted')
    this.loadCommentsFromServer();
  }




  componentWillUnmount() {
	// console.log('unmounted')
}

// ReadMoreClick = (e) => {
//   console.log(e);
//   let use_id = e.split(" ").join("%");
//   console.log(use_id);
//   let use_url = "hungry_rides" + "/" + use_id;
//   <Link to= {use_url} />
// };

render(){
  console.log(this.props)
  let path_url = ""
  if (typeof(this.props.match) !== "undefined"){
    path_url= this.props.match.path
    path_url = (path_url.split("/"))[1]
    console.log("[Content.js] path was found " + this.props.match.params.id)
  }
  thisDefault = this.props.key1 || path_url
  console.log("[Content.js] this is the render function value of thisDefault " + thisDefault)
  var tempData= this.state.data
  var data = null
  if(thisDefault == "hungry_rides") { 
      yoyo = true
      var a = []
    var hungry_rides = this.state.hungry_rides || []
    console.log(this)
    var _this = this

    if(typeof(this.props.match) !== "undefined"){
      console.log("[Content.js before the start of for each]" + this.props.match);
      const key_id = this.props.match.params.id
      console.log("[Content.js checking the value of the key_id]" + key_id)
      hungry_rides.forEach(function(item, index){
        console.log("[Content.sj after the start of for each]")
      if (item.key == key_id){
      let keyValue = (item.key)
      console.log( "[Content.js the keyvalue after matching] " + " " +  index +" " +keyValue )
      let used_url = "/hungry_rides/" + keyValue;
      var temp = (
        <div>
                {headerr}
        <Card id = {keyValue} title={item.title} style={{ width: '100%' , fontSize :'12pt', padding: 24 , margin: 30, lineHeight:'140%'}}>
      <div className={"content-container" + index} style={{textAlign : 'left'}}></div>
      
      </Card>
      </div>
      )
      var attempt = item.content  
      $( document ).ready(function() {
          $('.content-container' + index).prepend(attempt)
          $('.content-container' + index).append('<div class="fb-comments" data-href="http://hungryhitchhiker.com/" data-width="100%" data-numposts="2"></div>')
            
      });

  
      a.push(temp)
          
      }
    });
  }
    
else{
    hungry_rides.forEach(function(item, index){
      let keyValue = (item.key)
      console.log( "[Content.js the keyvalue] " + " " +  index +" " +keyValue )
      let used_url = "/hungry_rides/" + keyValue;
      var attempt = (item.content).slice(0,1000) + "..." 
      var temp = (
        <div>
        <Card id = {keyValue} title={item.title} style={{ width: '100%' , fontSize :'12pt', padding: 24 , margin: 30, lineHeight:'140%'}}>
      <div className={"content-container" + index} style={{textAlign : 'left'}}></div>
      <Button onClick={_this.loadCommentsFromServer}><Link to ={used_url} >Read More</Link></Button>
      </Card>
      </div>
      )
       
      $( document ).ready(function() {
          $('.content-container' + index).html(attempt)
          /*$('.content-container' + index).append('<div class="fb-comments" data-href="http://hungryhitchhiker.com/" data-width="100%" data-numposts="2"></div>')
            */
      });

  
      a.push(temp)
          
      })
}
     data = (
      <div id = "journal" style={{ background: '#fff', padding: 24 , textAlign : 'center' }}> 
        {a}
      </div>
      )
    }
    else if(thisDefault == "food_walks"){ 
      console.log("[Foodwlkas it has entered here]")
      yoyo = true
      var a = []
    var food_walks = this.state.food_walks || []
    console.log(this)
    var _this = this
    console.log(this.props.match)
    if(typeof(this.props.match) !== "undefined"){
      console.log("[Content.js foodwalks before the start of for each]" + this.props.match);
      const key_id = this.props.match.params.id
      console.log("[Content.js foodwalks checking the value of the key_id]" + key_id)
      food_walks.forEach(function(item, index){
        console.log("[Content.sj after the start of for each]")
      if (item.key == key_id){
      let keyValue = (item.key)
      console.log( "[Content.js  foodwalks the keyvalue after matching] " + " " +  index +" " +keyValue )
      let used_url = "/food_walks/" + keyValue;
      var temp = (
        <div>
                {headerr}
        <Card id = {keyValue} title={item.title} style={{ width: '100%' , fontSize :'12pt', padding: 24 , margin: 30, lineHeight:'140%'}}>
      <div className={"content-container" + index} style={{textAlign : 'left'}}></div>
      
      </Card>
      </div>
      )
      var attempt = item.content  
      $( document ).ready(function() {
          $('.content-container' + index).prepend(attempt)
          $('.content-container' + index).append('<div class="fb-comments" data-href="http://hungryhitchhiker.com/" data-width="100%" data-numposts="2"></div>')
            
      });

  
      a.push(temp)
          
      }
    });
  }
    
else{
    food_walks.forEach(function(item, index){
      let keyValue = (item.key)
      console.log( "[Content.js the keyvalue] " + " " +  index +" " +keyValue )
      let used_url = "/food_walks/" + keyValue;
      var attempt = (item.content).slice(0,1000) + "..." 
      var temp = (
        <div>
        <Card id = {keyValue} title={item.title} style={{ width: '100%' , fontSize :'12pt', padding: 24 , margin: 30, lineHeight:'140%'}}>
      <div className={"content-container" + index} style={{textAlign : 'left'}}></div>
      <Button onClick={_this.loadCommentsFromServer}><Link to ={used_url} >Read More</Link></Button>
      </Card>
      </div>
      )
       
      $( document ).ready(function() {
          $('.content-container' + index).html(attempt)
          /*$('.content-container' + index).append('<div class="fb-comments" data-href="http://hungryhitchhiker.com/" data-width="100%" data-numposts="2"></div>')
            */
      });

  
      a.push(temp)
          
      })
}
     data = (
      <div id = "journal" style={{ background: '#fff', padding: 24 , textAlign : 'center' }}> 
        {a}
      </div>
      )
    }
    else if(thisDefault == "contact"){
      console.log("In contact")
      data = (
      <div id = "journal" style={{ background: '#fff', padding: 24 , textAlign : 'center', fontSize: '12pt'}}>
      <p>
      <img  id = "avatar" src= "https://s3.ap-south-1.amazonaws.com/hungry-media/img/vinayak.jpg" alt = "Avatar" height = "300px" width = "300px"/>
      </p>
      <p>
      <h1>Vinayak Agrawal</h1>
      </p>
      <p>
      Food is love, love is food
      </p>
      <p class = "logo" >
      <ul id = "horizontal-list" class= "social">
      <li class="trying"><a target = "_blank" href = "https://www.facebook.com/Hungryhitchhiker/?hc_ref=ARSARkj0iuYkY4JfVu3a2r4Y_bxgF08CAlmN9UK0EHFgsPHv-AdAjOkypeBXHU5oGoE"><img src="https://s3.ap-south-1.amazonaws.com/hungry-media/img/facebook.png" /></a></li>
      <li><a target = "_blank" href = "https://www.instagram.com/hungryhitchhiker/"><img src="https://s3.ap-south-1.amazonaws.com/hungry-media/img/insta.png"/></a></li>
      <li><a  href = "mailto:hungryhitchhiker@gmail.com"><img src="https://s3.ap-south-1.amazonaws.com/hungry-media/img/email.png" /></a></li>
      </ul>
      </p>    
      </div>
      )
    }
    else if(thisDefault == "about"){
      var a = []
      var about = this.state.about || []
      about.forEach(function(item, index){
        var temp = (<Card loading id = "journal-title" title={item.title}  style={{ width: '100%' , fontSize :'17pt', padding: 24 , margin: 30}}>
        <p>{item.content}</p>
        </Card>
        )
        a.push(temp)
      })
      data = (  
      <div><div id = "journal" style={{ background: '#fff', padding: 24 , textAlign : 'center'}}>
      {a}
      </div>
      </div>
      )
    }
    else if(thisDefault == "home"){
      data = (
      <div id = "journal" style={{ background: '#fff', padding: 24 , textAlign : 'left', fontSize: '14pt'}}>
      <Slider />
      <br />
	  <span class="glf-button" data-glf-cuid="2d0caf06-1db0-4c4d-82b5-af1862685b03" data-glf-ruid="c147d89e-ecfa-44cd-aad6-20da4de885db" > See MENU & Order</span>
	  <p>
      Any man who can hitch the length and breadth of the galaxy, rough it, slum it, struggle against terrible odds and still know where his home is, he is clearly the man to be reckoned with.
      Two years back, I started an unprecedented journey by stepping out from the world of engineering, to fulfill my passion and to justify that I am the maker of my own destiny.
      My destiny is still a work under progress though. :)
      </p>
      <p style={{textAlign : 'left' , fontSize : '17pt' , paddingLeft : 8}}>
      <b style = {{ fontSize : '20pt' , paddingLeft: 20}}>I am:</b>
      <ul>
      <li>A food explorer and an aspiring chef.</li>
      <li>I am on an adventurous and expeditious hitchhiking journey called life, to learn as much as I can, in order to educate myself with the voracious knowledge that the world has to provide. </li>
      <li>A believer and preacher of the ideology<i>‘healthy is tasty, if one know how to make it’</i>.</li>
      <li>A dreamer, who hopes to open a restaurant in <b>Jaipur</b> <i>(my hometown)</i> based on my exploration and  experiences.</li>
      </ul>
      </p>
      <br />
      <p>
      To all of you awesome people reading this, I hope you enjoy this journey with me as much as I have. :)
</p>
<p style= {{fontSize : 24 , textAlign: 'center'}}>
<b>-<a href="https://www.facebook.com/vinayakagr" target = "_blank">Vinayak</a> aka 'HungryHitchhiker'</b>
</p>
</div>


)
}

else if(thisDefault == "food_services"){
  data = (
    <div id = "journal" style={{ background: '#fff', padding: 24 , textAlign : 'center', fontSize: '14pt'}}>
    <h1> Food Services </h1>
    <p>
    In case you haven't guessed it yet, my journey is not just about traveling but rather also about implementing the things I learn in my own hometown, Jaipur. 
    Obviously, it will be selfish of me to keep doing all these things and not really offering the food cooked by me to the people out there. 
    I love cooking food for people! 
    </p>
    <p>
    While currently in beta version I plan to be able to provide a long range of
    offering to people. From healthy snacks, tiffin services, food to be used during some kind 
    of workshop, catering, salad bars, pop-up cafe in Jaipur, I aim to experiment with 
    a lot of things which I personally find exciting. 
    </p>
    <p>
    More details will be added on this page very soon</p>

    <p>
    Contact me at hungryhitchhiker@gmail.com for the latest update about the same.</p>

    </div>
    )
}
else if(thisDefault == "hungry_walks"){
  data = (
    <div id = "journal" style={{ background: '#fff', padding: 24 , textAlign : 'center', fontSize: '14pt'}}>
    <h1> Hungry Walks </h1>
    <p>
    Do you share the same love for street food like me?
    In my hometown Jaipur (India) there are street food shops that
    have been serving the taste buds of people in the city for generations now.
    It is an overt fact that nobody can compete with the food they serve with 
    their secret recipes. Today, with urbanisation deepening its roots in the cities,
    the new generation is forgetting about these places. Also, someone who is visiting a
    city from outside as a tourist will not be able to find or know about these shops
    and most probably end up eating at some fancy restaurant with the corrupted version
    of the dish. As the HungryHitchhiker, I wish to learn from the enlightened and pass 
    it to the seeker, so as to bridge the gap between them.
    </p><p>
    Come on a food tour with me to the joyful pink city and savour the taste of 
    street food in the way I prefer. Be it an exploration tour for finding more such shops 
    or just tasting the best street food of the city. The foodwalks that are being planned
    throughout the year under the name Hungrywalks will be conducted by me and my foodwalk 
    partner Atray. If you are a true foodie and want to be a wayfarer, you should definitely 
    know about the next foodwalk that is being planned. Not a localite and just visiting the 
    city/country? Feel free to contact me for a private foodwalk available anytime throughout
    the year in Jaipur? Ping me for details at hungryhitchhiker@gmail.com.

    </p>

    </div>
    )
}
else{
  console.log("[Content.js] In else statement")
  console.log(this.props)
  data = (  <div id = "journal" style={{ background: '#fff', padding: 24 , textAlign : 'center'}}>
   <h1>Hello </h1>
   </div>
   )
}
return( 
  <div>
  <Content style={{ padding: '0 50px', background: 'white' }}>
  {data}
  </Content>
  {yoyo &&  (<Script />)}

  </div>
  )}}

export default Cont

