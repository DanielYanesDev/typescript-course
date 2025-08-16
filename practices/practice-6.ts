function getUsers ({ thereError }: { thereError: boolean }): Array<{ name: string, age: number }> | null {
  const users = [
    { name: 'Daniel', age: 18 },
    { name: 'Andrea', age: 28 },
    { name: 'Paola', age: 19 },
    { name: 'Natanael', age: 30 }
  ]

  if (!thereError) {
    return users.map(user => {
      return { name: user.name.toUpperCase(), age: user.age }
    })
  }

  return null
}

console.log(getUsers({thereError: false}))