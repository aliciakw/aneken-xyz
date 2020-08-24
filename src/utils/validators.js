function validateString(str) {
  return !!str;
}

const emailRexexp = RegExp(/\S+@\S+\.\S+/);
function validateEmail(str) {
  return emailRexexp.test(str);
}

function validate(val, type) {
  switch(type) {
    case 'email':
      return validateEmail(val);
    default:
    case 'string': {
      return validateString(val);
    }
  }
}

export default validate;
