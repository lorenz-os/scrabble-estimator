/**
 *
 * Redux
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectRedux from './selectors';
import reducer from './reducer';
import saga from './saga';

export function Redux() {
  useInjectReducer({ key: 'redux', reducer });
  useInjectSaga({ key: 'redux', saga });

  return <div />;
}

Redux.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  redux: makeSelectRedux(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Redux);
