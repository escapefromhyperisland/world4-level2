import React from 'react';
import { Angelo1 } from './Angelo1';
import { Angelo2 } from './components/Angelo2';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sound from 'react-sound';
import Music from './images/music.mp3';

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/world4-level2" component={Angelo1} />
        <Route path="/" component={Angelo2} />
        <Route component={() => <h1>This page doesn't exist!! </h1>} />
        <Sound
          url={Music}
          playStatus={Sound.status.PLAYING}
          playFromPosition={300}
          loop={true}
        />
      </Switch>
    </Router>
  );
};
