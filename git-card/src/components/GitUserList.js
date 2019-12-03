import React from "react";
import GitUserCard from "./GitUserCard";
import axios from "axios";

class GitUserList extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
            {this.props.data.map((element) => {
                axios.get(`https://api.github.com/users/${element.login}`)
                .then(response => {
                    console.log(response);
                    return <GitUserCard 
                                key={response.data.id}
                                img={response.data.avatar_url}
                                name={response.data.login}
                                username={response.data.name}
                                location={response.data.location}
                                url={response.data.html_url}
                                bio={response.data.bio}
                                followers={response.data.followers}
                                following={response.data.following}  />
                });
                
            })}
            </>
        )
    }
}

export default GitUserList;