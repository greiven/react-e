import React, { Component } from "react";
import Userusers from './UserList';
class App extends Component {
  constructor() {
    // super allows us to use this in the constructor
    // allows us to access parent class's methods
    // if we have a constructor then super() is mandatory
    super()
    // define the initial value with this.state
    this.state = {
      users:[],
      isLodaing : false,
    
  }
}
// sortby= (key)=> {
//   this.setState({
//     users: this.state.users.sort((a, b) => a[key].registered.age > b[key].registered.age)
//   })
// }
getRandomUsers=(e) => {
  e.preventDefault();
  this.setState({isLodaing : true})
   fetch(`https://randomuser.me/api/?results=7`)
   .then(res=>res.json())
   .then(data=>{
     this.setState({
       isLodaing : false,
       users:data.results
     })
     
    })
 }
 clearRandomUsers = () => {
   this.setState({
     users : [],
     value:""
   })
 }
 
 filterGender= (gender) => {
  const lowerCaseGender = gender.toLowerCase();
  const filteredGender = this.state.users.filter(
    user => user.gender.toLowerCase() === lowerCaseGender
  );
this.setState({ users:filteredGender }, () => console.log(this.state.users));
};


 render(){

   const UserComponent = this.state.users.map(user=>
     <Userusers
      key={user.login.uuid}
      user={user}
     />)

  return (
    <div className="App container">
    <h4 className="p1">Employee Directory</h4>
        <div className="container center">
          <div className="row ">
                  <div className="input-field col s12">
                  <button class="btn-one" onClick={this.getRandomUsers}>
                    <p2>View all the Employees</p2>
                   {/* <i class="material-icons right">send</i> */}
                  </button>
                </div> 
              <div className=" col s12">
               <button className=" btn-one "onClick={() =>this.filterGender("Female")}>Show only Female</button>
          
               <button className="btn-one"onClick={() =>this.filterGender("male")}>Show only Male</button>
               <button className=" btn-one" >Sort by Age </button >
             </div>
             <div className=" deletbtn col s12">
             { this.state.users.length>0 ? <button className="btn-one " onClick={this.clearRandomUsers}>Delete all</button>:<div className="container  red-text">  Click the button  to see list of employees</div>}
             </div>
            </div>
           
          </div>
          {this.state.isLodaing ? <div className="center green-text">Loading...</div> : null}
          <div className="container">
           { UserComponent}  
          </div>

      </div> 
   
   );
 }
}

export default App;
