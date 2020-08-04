import React from "react";
import { Typography, Divider } from "antd";

const { Title, Paragraph } = Typography;

let backEndURL;

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  // dev
  backEndURL = "http://localhost:9000";
} else {
  // production
  backEndURL = "https://tweet-cleaner-server.herokuapp.com";
}

function Home() {
  return (
    <Typography>
      <Title>Welcome to TweetCleaner</Title>
      <Paragraph>
        This app helps Twitter users to delete a batch of their tweets very
        fast. You have multiple options to clean your tweets, such as:
      </Paragraph>
      <Paragraph>
        <ul>
          <li>
            Choosing a date or period (For example, 30 days) to delete all the
            created tweets before that date.
          </li>
          <li>
            Filter your tweets based on time, content, or the words in the
            tweet, number of likes, number of comments, etc. Once you are done
            with filtering them, you can delete the filtered tweets.
          </li>
        </ul>
      </Paragraph>
      <Divider></Divider>
      <Paragraph>To start Sign in with your Twitter account:</Paragraph>
      <a href={`${backEndURL}/auth/twitter`}>
        <img
          src="https://cdn.cms-twdigitalassets.com/content/dam/developer-twitter/icons/sign-in-with-twitter-gray-1-png-img-fullhd-medium.png.img.fullhd.medium.png"
          alt="Sign in with Twitter"
        />
      </a>
    </Typography>
  );
}

export default Home;
