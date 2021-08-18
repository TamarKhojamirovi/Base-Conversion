let Alphabet = {
  BINARY:        '01',
  OCTAL:         '01234567',
  DECIMAL:       '0123456789',
  HEXA_DECIMAL:  '0123456789abcdef',
  ALPHA_LOWER:   'abcdefghijklmnopqrstuvwxyz',
  ALPHA_UPPER:   'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA:         'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
};

function toDec(value, format) {
  let formatLength = format.length;
  let result = 0;

  for (let i = 0; i < value.length; i++) {
    let decValue = format.indexOf(value[i]);
    let charIndexFromRight = value.length - 1 - i;

    result += decValue * (formatLength ** charIndexFromRight);
  };

  return result.toString();
};

function fromDec(value, format) {
  let num = Number(value);
  let  formatLength = format.length;
  let result = '';


  do {
    result = format.charAt(num % formatLength) + result;
    num = Math.floor(num / formatLength);
  } while (num > 0); 

  return result;
}

function convert(input, source, target) {
  if (source === target) {
    return input;
  }
  else if (source === Alphabet.DECIMAL) {
    return fromDec(input, target);
  }
  else if (target === Alphabet.DECIMAL) {
    return toDec(input, source);
  }
  else {
    return fromDec(toDec(input, source), target);
  };
};


