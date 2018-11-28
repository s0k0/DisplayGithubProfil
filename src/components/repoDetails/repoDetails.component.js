import React from 'react';
import './styles.css';
import { connect } from 'react-redux'


const RepoDetails = ({data}) => {
    return (
        <div className="repoDetails" key={data.name}>
            <div className="profile">
                <img className="avatar" src={data.avatar} alt={data.avatar} />
                <span className="userName">{data.name}</span>
            </div>
            <div className="directories">
                {RepoListElement(data)}
            </div>
        </div>
    );
};

const RepoListElement = ({ repos }) => {
    if( !repos ) {
        return null;
    }
    const renderList = () => {
        return repos.map( repo => {
            return (
                <div className="repoItem" key={repo.id}
                    onClick={() => window.open(repo.url, "_blank")}>
                    <h5>{repo.name}</h5>
                    <span>Content: {repo.description}</span>
                </div>
            )
        })
    };

    return (
        <div className="repoDetailsContainer">
            <h2>Repository List</h2>
            <div className="repoList">{renderList()}</div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        data: state.home.repoDetails || {}
    };
};


export default connect(mapStateToProps)(RepoDetails);
