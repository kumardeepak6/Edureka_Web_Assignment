import React from 'react'
import "../components/css/contactus.css";
import axios from 'axios';
import Header from "../components/Header";
export class ContactUsComponent extends React.Component{
    contactus(e){
        e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const comments = document.getElementById('comments').value;

            if((name === "") || (email === "") || (comments === "") )
            {
              alert("Please fill out the details")
              
            }
        
            axios({
                method : "POST",
                url : "https://group26-project.herokuapp.com/userContact",
                data : {'name': name,'email': email,'comments':comments}
              }).then((response)=>{
                if(response.data.message === true)
                {
                 alert("call completed")
                  window.location.href="/"
                }
                else if(response.data.message===false){
                  alert("Invalid Data")
                }
              })
            }
        
    render() {
        return (
            <div>
                <Header isUserLoggedIn="true"/>
            <div class={"container"} id="contact">
                <form method="POST">
                    <div class="form-group row">
                            <label htmlFor="name" class="col-sm-2 col-form-label">Name</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="name" placeholder="Name" required/>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label htmlFor="email" class="col-sm-2 col-form-label">Email</label>
                            <div class="col-sm-10">
                                <input type="email" class="form-control" id="email" placeholder="Enter Email"  required/>
                            </div>
                        </div>
                    <div class="width20">
                      <div class="form-group row ">
                            <label htmlFor="textbox" class="col-sm-2 col-form-label">Enter Comments</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control width20" id="comments" placeholder="Comment"  required/>
                            </div>
                        </div>
                    </div>
                        <button type="button" class="btn btn-success" onClick={this.contactus} >Submit</button>
                    </form>
            </div>
            </div>
        );
    }
}
