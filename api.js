export const api = async (endpoint, data, type) => {
  var res;
  var user = JSON.parse(localStorage.getItem('myApp'));
  if (user) {
    var token = user.token;
    console.log('value of token', token);
  }

  // var token = store.getState().login.loginUser.token;
  console.log(' i am called with value in api action');

  switch (type) {
    case 'post':
      await axios({
        data: data,
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'x-auth': token,
        },
        url: mainUrl + endpoint,
      })
        .then(function (response) {
          res = response;
        })
        .catch((err) => {
          if (err.response.status === 400) {
            res = err.response;
          }
          if (
            err.response.status === 401 ||
            err.response.status === 403 ||
            err.response.status === 503
          ) {
            localStorage.removeItem('user');
            store.dispatch(setLoginFlag(false));
            store.dispatch(setLoginUser({}));
            history.push('/login');
          }
        });
      break;
    case 'get':
      await axios({
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'x-auth': token,
        },
        url: mainUrl + endpoint,
      })
        .then(function (response) {
          res = response;
        })
        .catch((err) => {
          if (err.response.status === 400) {
            res = err.response;
          }
          if (
            err.response.status === 401 ||
            err.response.status === 403 ||
            err.response.status === 503
          ) {
            localStorage.removeItem('user');
            store.dispatch(setLoginFlag(false));
            store.dispatch(setLoginUser({}));
            history.push('/login');
          }
        });
      break;
    case 'patch':
      await axios({
        method: 'patch',
        data: data,
        headers: {
          'Content-Type': 'application/json',
          'x-auth': token,
        },
        url: mainUrl + endpoint,
      })
        .then(function (response) {
          res = response;
        })
        .catch((err) => {
          if (err.response.status === 400) {
            res = err.response;
          }
          if (
            err.response.status === 401 ||
            err.response.status === 403 ||
            err.response.status === 503
          ) {
            localStorage.removeItem('user');
            store.dispatch(setLoginFlag(false));
            store.dispatch(setLoginUser({}));
            history.push('/login');
          }
        });
      break;
    case 'delete':
      await axios({
        data: data,
        method: 'delete',
        headers: {
          'Content-Type': 'application/json',
          'x-auth': token,
        },
        url: mainUrl + endpoint,
      })
        .then(function (response) {
          res = response;
        })
        .catch((err) => {
          if (err.response.status === 400) {
            res = err.response;
          }
          if (
            err.response.status === 401 ||
            err.response.status === 403 ||
            err.response.status === 503
          ) {
            localStorage.removeItem('user');
            store.dispatch(setLoginFlag(false));
            store.dispatch(setLoginUser({}));
            history.push('/login');
          }
        });
      break;
    case 'postWithoutToken':
      console.log('i am called');
      await axios({
        method: 'post',
        data: data,
        headers: {
          'Content-Type': 'application/json',
        },
        url: mainUrl + endpoint,
      })
        .then(function (response) {
          res = response;
        })
        .catch((err) => {
          res = err.response;
        });
      break;
    default:
      return true;
  }

  // var parsdata = await checkData(res);
  return res;
};
