import React, { Component } from 'react';
import './styles.css';
import { connect } from 'react-redux'
import { searchActionCreator } from '../../actions/actionCreator'

class searchComponent extends Component {

    constructor(props){
        super(props);
    }

    state = {
        userName: ''
    };

    onInputChange(userName){
        this.setState({ userName })
    }

    onSearchUserClick(){
        if(this.props.busy){
            return;
        }
        this.props.dispatch(searchActionCreator(this.state.userName));
      //  this.props.dispatch(setBusy(true));
       /* get(`https://github-user.now.sh?username=${this.state.userName}`)
            .then(data => {
                this.props.dispatch(setBusy(false));
                this.props.dispatch(storeResults(data.data));
            })*/
    }
    render() {
        return (
            <div className="searchComponent">
                <div className="searchBar">
                    <input
                        className='searchInput'
                        placeholder={'Enter a github user name to start'}
                        value={this.state.userName}
                        onChange={ event => this.onInputChange(event.target.value)}
                    />
                    <button
                        className={this.props.busy ? 'busy' : 'searchButton'}
                        disabled={this.props.busy}
                        onClick={() => this.onSearchUserClick()}
                        type='submit'>
                        Search
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        busy: state.home.busy
    };
};

//const mapDispatchToProps = dispatch => bindActionCreators({ gotoStep, getCountries }, dispatch);


export default connect(mapStateToProps)(searchComponent);
