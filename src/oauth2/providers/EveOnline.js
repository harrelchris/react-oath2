import { v4 as uuid } from 'uuid';

class EveOnline {
  authorizationEndpoint = "https://login.eveonline.com/v2/oauth/authorize/";
  tokenEndpoint = "https://login.eveonline.com/v2/oauth/token";

  constructor() {}

  authorize() {
    const state = uuid();
    const queryParams = {
      response_type: "code",
      redirect_uri: process.env.REACT_APP_CALLBACK_URL,
      client_id: process.env.REACT_APP_CLIENT_ID,
      scope: process.env.REACT_APP_SCOPE,
      state: state
    };
    const queryString = new URLSearchParams(queryParams).toString();
    const authorizationURL = `${this.authorizationEndpoint}?${queryString}`
    return [authorizationURL, state];
  }
}

export default EveOnline;
