import React from 'react';

function Lead() {
  return (
    <main role="main" className="flex-shrink-0">
      {/* TODO: add tradingview component */}
      <div className="container">
        <h1 className="mt-5">
          <div>Welcome</div>
        </h1>

        <p className="lead">
          Pin a footer to the bottom of the viewport in desktop browsers with
          this custom HTML and CSS. A fixed navbar has been added with{' '}
          <code>padding-top: 60px;</code> on the{' '}
          <code>main &gt; .container</code>.
        </p>
      </div>
    </main>
  );
}

export default Lead;
