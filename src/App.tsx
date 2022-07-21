import React from 'react';
import './App.css';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'launchnotes-embed': any;
      'launchnotes-embed-inline': any;
    }
  }
}

function App() {
  return (
    <div className="App">
      <h2>Pop-up Embed</h2>
      <button key={'whats-new-launchnotes'} id="#whats-new-launchnotes">Click Me</button>
      <launchnotes-embed
        project={process.env.PRODUCTION_META}
        token={process.env.PRODUCTION_META_PUBLIC_TOKEN}
        toggle-selector="#whats-new-launchnotes"
        primary-color="#265DBD"
        heading-color="#FFFFFF"
        subheading-color="#FFFFFF"
        unread-background-color="#F29272"
        unread-text-color="#0b2a70"
        heading="Product updates"
        subheading="Check out our <a href='https://updates.launchnotes.io/board' target='_blank'>roadmap</a>"
        anonymous-user-id={"your-user-id"}
        unread-placement="right"
        unread-offset-x={-6}
        unread-offset-y={-70}
        show-unread
      />

      <h2>Inline Embed</h2>
      <launchnotes-embed
        project={process.env.PRODUCTION_META}
        token={process.env.PRODUCTION_META_PUBLIC_TOKEN}
      />
    </div>
  );
}

export default App;
