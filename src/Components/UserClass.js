import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            count: 100,
        }
    }

    async componentDidMount(){
        // console.log("Child Component Did Mount")

        const data = await fetch("API");
        const json = await data.json();
        console.log(json);
    }

    render() {
        return (
            <div className="user-card">
                <h1>Name : {this.props.name}</h1>
                <h2>Location : {this.props.location}</h2>
                <h2>Likes : {this.state.count}</h2>
                <button onClick={
                    () => {
                        this.setState({count: this.state.count + 1})
                    }
                }>Likes Increase</button>
                <h3>Instagram: Mahima__08</h3>
                <div>
                    <UserContext.Consumer>
                        {
                            ({loggedInUser}) => (<div>{loggedInUser}</div>)
                        }
                    </UserContext.Consumer>
                </div>
            </div>
        )

    }
}

export default UserClass;