import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Better reach',
    text: 'Connecting the new generation of founders and investors by providing them with the interface that they need to launch and scale a start-up.',
  },
  {
    title: 'Discover start-ups',
    text: 'Can find start-ups that match your ideal target prospects ',
  },
  {
    title: 'Angel investors',
    text: 'Angel investors are highly beneficial for startups who need access to funding in the early stages of growth.',
  },
  {
    title: 'Ved is mad ',
    text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
