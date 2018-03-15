import React from 'react';
import GoogleAnalytics from 'react-ga';
GoogleAnalytics.initialize('UA-105609025-3');

const WithAnalytics = (WrappedComponent) => {
  const trackPage = (page) => {
    GoogleAnalytics.set({ page });
    GoogleAnalytics.pageview(page);
  };

  const HOC = (props) => {
    // TODO: Disable on dev
    trackPage(props.location.pathname);

    return (
        <WrappedComponent {...props} />
    );
  };

  return HOC;
};

export default WithAnalytics;
