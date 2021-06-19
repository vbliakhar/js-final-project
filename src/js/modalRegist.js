import { func } from 'assert-plus';
import axios from 'axios';
console.log('modalRegister');
const refs = {
  firstName: document.querySelector('fname'),
  lastName: document.querySelector('lname'),
  btnRegisterIn: document.querySelector('[data-action="registerIn"]'),
  btnRegisterUp: document.querySelector('[data-action="registerUp"]'),
};

refs.btnRegisterUp.addEventListener('click', registerHandler);

async function registerHandler() {
  const authData = {
    email: 'petro@mail.com',
    password: '123456',
    returnSecureToken: true,
  };
  try {
    const response = await axios.post(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyChcY788mB18UnkkalIQ7EBRmOai-XC9H4',
      authData,
    );
    console.log(response);
  } catch (e) {
    console.log(e);
  }
}

function submitHandler() {
  fetch(
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyChcY788mB18UnkkalIQ7EBRmOai-XC9H4',
  ).then(response => response.json());
}
