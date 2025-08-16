type PhoneNumber = `+503${string}`

const validatePhoneNumber = ({ phoneNumber }: { phoneNumber: PhoneNumber }): boolean => {
  if (phoneNumber === undefined || phoneNumber === null || !phoneNumber.startsWith('+503')) {
    return false
  }

  return true
}

console.log(validatePhoneNumber({phoneNumber: '+50390824561'}))