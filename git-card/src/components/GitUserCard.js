import React from "react";

class GitUserCard extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
            <div className='card'>
                <img src={this.props.img} />
                <div className='card-info'>
                    <h3 className='name'>{this.props.name}</h3>
                    <p className='username'>{this.props.username}</p>
                <p>{this.props.location}</p>
                <p><a href={this.props.url} /></p>
                <p>{this.props.bio}</p>
                <p>{this.props.followers}</p>
                <p>{this.props.following}</p>
                </div>
            </div>
            </>
        )
    }
}

export default GitUserCard;