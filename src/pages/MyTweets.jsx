import React from 'react';
import { useParams } from 'react-router-dom';
import Tweets from '../components/tweets';

const MyTweets = ({ tweetService }) => {
  const { username } = useParams();
  return (
    <Tweets tweetService={tweetService} username={username} addable={false} />
  );
};

export default MyTweets;
