import React from "react";

class UserClass extends React.Component {
constructor(props) {
    super(props);
    this.state={
        userinfo:{
            location:"Biaora",
            company:"google"
        }
    }
    console.log(props)
}
async componentDidMount(){
    const fetchapi=await fetch("https://api.github.com/users/Harshita-Git64");
    const data=await fetchapi.json();
    console.log(data)
    this.setState({
        userinfo:data
    })
}

    render() {    
        const {name,profile,contact} = this.props;
        const{location,html_url}=this.state.userinfo;
        return(
            <div className="userclass">
                <h1>Team Profile</h1>
                <h4>Name: {name},{profile}</h4>
                <h5>Contact : {contact}</h5>
                <h5>Location : {location}</h5>
                <p>github profile: {html_url}</p>
            </div>
        );
    }
}

export default UserClass;