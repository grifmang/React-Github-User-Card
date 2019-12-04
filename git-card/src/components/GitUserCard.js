import React from "react";
import axios from "axios";

class GitUserCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user_data: []
        }
    }

    componentDidMount() {
            axios.get(`https://api.github.com/users/${this.props.login}`)
            .then(response => {
                this.setState({user_data: [...this.state.user_data, response.data]})
                console.log(this.state.user_data);
            })
            .catch(err => {console.log(err)})
    }

    render() {
        return (
            <>
            {this.state.user_data.length > 0 ?
            <div className='card'>
                <img alt="github avatar" src={this.state.user_data[0].avatar_url} />
                <div className='card-info'>
                    <h3 className='name'>Name: {this.state.user_data[0].name}</h3>
                    <p className='username'>{this.props.login}</p>
                    <p>Location: {this.state.user_data[0].location}</p>
                    <p><a href={this.state.user_data[0].html_url}>Github Link</a></p>
                    <p>Bio: {this.state.user_data[0].bio}</p>
                    <p>Followes: {this.state.user_data[0].followers}</p>
                    <p>Following: {this.state.user_data[0].following}</p>
                </div>
            </div>
            : 
            <p>Data not loaded.</p>}
            </>
        )
    }
}

export default GitUserCard;