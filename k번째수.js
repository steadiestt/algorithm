function solution(array, commands) {
  var answer = []
  for (let i = 0; i < commands.length; i++) {
    const command = commands[i]
    const sortList = array.slice(command[0] - 1, command[1])
      .sort((a, b) => a - b)
      // sort() 사용시 문자열 기준 정렬이기 때문에 숫자 정렬을 하기 위해
      // sort((a, b) => a - b) 해주어야 한다.
    answer[i] = sortList[command[2] - 1]
  }
  return answer
}

// 다른 사람 풀이 1
// function solution(array, commands) {
//   return commands.map(command => {
//       const [sPosition, ePosition, position] = command
//       const newArray = array
//           .filter((value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1)
//           .sort((a,b) => a - b)    

//       return newArray[position - 1]
//   })
// }