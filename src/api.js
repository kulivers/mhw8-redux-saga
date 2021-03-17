let isUserAuthorized = true;

export const apiIsUserLoggedIn = () => {
  return isUserAuthorized;
};

const apiIsUserInBase = (username) => {
  if (
    username === 'egor' ||
    username === '111' ||
    username === '222' ||
    username === '333'
  ) {
    return true;
  }
  return false;
};

export const apiLogin = (username) => {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      isUserAuthorized = apiIsUserInBase(username) ? true : false;
      resolve(isUserAuthorized);
    }, 3000);
  });
};

export const apiSignOut = () => {
  // setTimeout(() => {
  isUserAuthorized = false;
  // }, 2000);
};

export async function apiFetchUsers() {
  if (isUserAuthorized) {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const json = await response.json();
      return json;
    } catch {
      return null;
    }
  } else {
    return null;
  }
  // return result;
  // console.log(result); //works good
  // return result;
}

export const apiGetUsers = () => {
  if (isUserAuthorized) {
    return [
      { id: 0, name: 'zero' },
      { id: 1, name: 'first' },
      { id: 2, name: 'second' },
      { id: 3, name: 'third' },
      { id: 4, name: 'forth' },
    ];
  } else {
    console.log('in else');
    return null; //code of error;
  }
};
