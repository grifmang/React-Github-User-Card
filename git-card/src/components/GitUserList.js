import React from "react";
import GitUserCard from "./GitUserCard";

class GitUserList extends React.Component {

    render() {
        return (
            <>
            {this.props.data.map((user) => {
                return <GitUserCard login={user.login} key={user.login}/>
            })}
            </>
        )
    }
}

export default GitUserList;