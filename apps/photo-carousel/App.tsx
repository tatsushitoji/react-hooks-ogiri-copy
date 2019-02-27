import * as React from 'react';
import Hero from './components/Hero';
import Body from './components/Body';

type Props = { className?: string };

const App: React.FC<Props> = () => (
  <div>
    <Hero />
    <Body />
  </div>
);

export default App;
