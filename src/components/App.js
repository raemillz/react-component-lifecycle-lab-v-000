import React from 'react';
import TweetWall from './TweetWall';

import { getTweets }from '../lib/mockAPI';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      latestTweets: []
    };
  }

  // TODO: componentWillMount()
  componentWillMount() {
    this.fetchTweets();
    this.setState({
      tweets: this.props.newTweets
    });
  }
  // TODO: componentDidMount()
  componentDidMount() {
    this.interval = this.startInterval();
  }
  // TODO: componentWillUnmount()
  componentWillUnmount() {
    this.interval = this.cleanUpInterval();
  }

  startInterval = () => {
    this.interval = setInterval(this.fetchTweets, 2000);
  }

  cleanUpInterval = () => clearInterval(this.interval);

  fetchTweets = () => {
    const newTweets = getTweets();
    this.setState({
      latestTweets: newTweets
    });
  }

  render() {
    return (
      <div>
        <TweetWall newTweets={this.state.latestTweets} />
      </div>
    )
  }
}

export default App;
