// Callback
// export const getRandomNumber = (callback: Function): void => {
  //   setTimeout(() => {
//     callback(null, Math.floor(Math.random() * 100))
//   }, 3000)
// }

// Then-Catch
const getRandomNumber = async (): Promise<number> => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(Math.floor(Math.random() * 100))
    }, 3000)
  })
}

getRandomNumber()
  .then(number => console.log(number))
  .catch(err => console.error(err))

const revertList = (originalList: any[]): any[] => {
  // Alternative way
  // const reversedList: any[] = []
  // for (let i = 0; i < originalList.length; i++) {
  //   const previusIndex = (originalList.length - i) - 1
  //   reversedList.push(originalList[previusIndex])
  // }
  
  const reversedList: any[] = originalList.map((_, index) => {
    const previusIndex = (originalList.length - index) - 1
    return originalList[previusIndex]
  })

  return reversedList
}

const verifyLists = (originalList: any[], reversedList: any[]): boolean => {
  return originalList.every((numberList, index) => numberList === reversedList[index])
}

const verifiyPalindricNumber = (numberToVerify: number): boolean => {
  const numbersList: string[] = numberToVerify.toString().split('')

  if (numbersList.length === 1) return false

  const numbersListReversed: string[] = revertList(numbersList)
  if (!verifyLists(numbersList, numbersListReversed)) return false

  return true
}

console.log(verifiyPalindricNumber(123454321))