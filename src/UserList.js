import React from 'react';
const  UserList = (props)=>{
   return(
      <div className="container ">
       <ul className="collection">
       <li className="collection-item">
       <img src={props.user.picture.large} alt="profile" className="circle"/>
          <div className="title blue-text">
          {props.user.name.first} {props.user.name.last} ({props.user.gender})
          </div>
          <div className="red-text"> Email:{props.user.email}</div>
          <div className="blue-text"> Age: {props.user.registered.age}</div>
      </li>
    </ul>
    </div>
    )};
export default UserList;