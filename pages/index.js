import React from 'react';
import {connect} from 'react-redux';
import {decrementCounter, incrementCounter} from '../redux/actions/counterActions';

const API_URL = process.env.API_URL;

class App extends React.Component {

    static getInitialProps() {
        return { API_URL };
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="p-4 shadow rounded bg-white">
                    <h1 className="text-purple-500 leading-normal">Next.js</h1>
                    <p className="text-gray-500">with Tailwind CSS</p>
                </div>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={this.props.incrementCounter}>Increment</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={this.props.decrementCounter}>Decrement</button>
                <h1 className="text-white font-bold">{this.props.counter}</h1>
                <h1 className="text-white font-bold">API URL Env: {this.props.API_URL}</h1>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    counter: state.counter.value
});

const mapDispatchToProps = {
    incrementCounter: incrementCounter,
    decrementCounter: decrementCounter,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);