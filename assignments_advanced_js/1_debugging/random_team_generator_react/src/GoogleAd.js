
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GoogleAd extends Component {
  googleInit = null;

  componentDidMount() {
    const { timeout } = this.props;
    this.googleInit = setTimeout(() => {
      if (typeof window !== 'undefined')
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, timeout);
  }

  componentWillUnmount() {
    if (this.googleInit) clearTimeout(this.googleInit);
  }

  render() {
    const { classNames, slot, googleAdClient, adFormat, adLayout } = this.props;
    return (
      <div className={classNames}>
        <ins
          className="adsbygoogle"
          style={{ display: 'block', textAlign: 'center' }}
          data-ad-layout={adLayout}
          data-ad-client={googleAdClient}
          data-ad-slot={slot}
          data-ad-format={adFormat}
          data-full-width-responsive="true"
        ></ins>
      </div>
    );
  }
}

GoogleAd.propTypes = {
  classNames: PropTypes.string,
  slot: PropTypes.string,
  timeout: PropTypes.number,
  googleAdClient: PropTypes.string,
  adFormat: PropTypes.string,
  adLayout: PropTypes.string,
};

GoogleAd.defaultProps = {
  classNames: '',
  timeout: 200,
};

export default GoogleAd;
