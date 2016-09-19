import { expect } from 'chai'
import { Map } from 'immutable';
import * as actions from '../../src/client/actions/usersAction';
import * as reducers from '../../src/client/reducers/usersReducer';
import * as types from '../../src/client/constants/usersConst';

describe('[Redux] - User: actions', () => {
  it('should create an action when signing up', () => {
    const expectedAction = {
      type: types.SIGNUP_REQUEST
    }
    expect(actions.signUpRequest()).to.deep.equal(expectedAction);
  });

  it('should create an action when successfully signed up', () => {
    const expectedAction = {
      type: types.SIGNUP_SUCCESS
    };
    expect(actions.signUpSuccess()).to.deep.equal(expectedAction);
  });

  it('should create an action when sign up is failed', () => {
    const error = {
      reason: "error message"
    };
    const expectedAction = {
      type: types.SIGNUP_FAILURE,
      error: {
        reason: "error message"
      }
    };
    expect(actions.signUpFailure(error)).to.deep.equal(expectedAction);
  });

  it('should create an action when signing in', () => {
    const expectedAction = {
      type: types.SIGNIN_REQUEST
    }
    expect(actions.signInRequest()).to.deep.equal(expectedAction);
  });

  it('should create an action when successfully signed in', () => {
    const expectedAction = {
      type: types.SIGNIN_SUCCESS
    };
    expect(actions.signInSuccess()).to.deep.equal(expectedAction);
  });

  it('should create an action when sign in is failed', () => {
    const error = {
      reason: "error message"
    };
    const expectedAction = {
      type: types.SIGNIN_FAILURE,
      error: {
        reason: "error message"
      }
    };
    expect(actions.signInFailure(error)).to.deep.equal(expectedAction);
  });
});

describe('[Redux] - User: reducers', () => {
  it('should return the initial state', () => {
    const expectedReducer = {
      isAuthenticated: false,
      isAuthenticating: false,
      isSignupFail: false,
      isSigninFail: false,
      statusText: null
    }
    expect(
      reducers.default(undefined, {})
    ).to.deep.equal(expectedReducer);
  });

  it('should handle SIGNUP_REQUEST', () => {
    const expectedReducer = {
      isAuthenticated: false,
      isAuthenticating: false,
      isSignupFail: false,
      isSigninFail: false,
      statusText: null
    }
    expect(
      reducers.default(undefined, {
        type: types.SIGNUP_REQUEST
      })
    ).to.deep.equal(expectedReducer);
  });

  it('should handle SIGNUP_SUCCESS', () => {
    const expectedReducer = {
      isAuthenticated: false,
      isAuthenticating: false,
      isSignupFail: false,
      isSigninFail: false,
      statusText: null
    }
    expect(
      reducers.default(undefined, {
        type: types.SIGNUP_SUCCESS
      })
    ).to.deep.equal(expectedReducer);
  });

  it('should handle SIGNUP_FAILURE', () => {
    const expectedReducer = {
      isAuthenticated: false,
      isAuthenticating: false,
      isSignupFail: true,
      isSigninFail: false,
      statusText: "error message"
    }
    expect(
      reducers.default(undefined, {
        type: types.SIGNUP_FAILURE,
        error: {
          reason: "error message"
        }
      })
    ).to.deep.equal(expectedReducer);
  });

  it('should handle SIGNIN_REQUEST', () => {
    const expectedReducer = {
      isAuthenticated: false,
      isAuthenticating: true,
      isSignupFail: false,
      isSigninFail: false,
      statusText: null
    }
    expect(
      reducers.default(undefined, {
        type: types.SIGNIN_REQUEST
      })
    ).to.deep.equal(expectedReducer);
  });

  it('should handle SIGNIN_SUCCESS', () => {
    const expectedReducer = {
      isAuthenticated: true,
      isAuthenticating: false,
      isSignupFail: false,
      isSigninFail: false,
      statusText: null
    }
    expect(
      reducers.default(undefined, {
        type: types.SIGNIN_SUCCESS
      })
    ).to.deep.equal(expectedReducer);
  });

  it('should handle SIGNIN_FAILURE', () => {
    const expectedReducer = {
      isAuthenticated: false,
      isAuthenticating: false,
      isSignupFail: false,
      isSigninFail: true,
      statusText: "error message"
    }
    expect(
      reducers.default(undefined, {
        type: types.SIGNIN_FAILURE,
        error: {
          reason: "error message"
        }
      })
    ).to.deep.equal(expectedReducer);
  });
});