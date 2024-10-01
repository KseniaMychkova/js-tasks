// 10. Неопытный Junior запушил в GitHub html файл с комментариями. Team Lead не оценил использование комментариев в ветке development и попросил их убрать. Вырезая куски кода вы поняли, что их чересчур много. Необходимо написать регулярное выражение, которое вырежет все комментарии из html разметки <!---->

let comment = '<!--nhfngngngn--> <p>ojhfgjhdfj</p>'

const checkComment = (comment) => {
    let newStr = ''
    newStr = comment.replaceAll(/^\<\!\-\-[a-zA-Z0-9\+\!\-\_\=]+\-\-\>/gm, '')
    return newStr
}
const result = checkComment(comment)
console.log(result);