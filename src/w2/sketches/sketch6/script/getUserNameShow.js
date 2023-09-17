let userName = prompt('너 누구냐?', '유빈');
let isUserNameCorrect = confirm('진짜 ' + userName + ' 맞아?');
if (isUserNameCorrect == true) {
  document.getElementById('html-id').textContent = '어서와 ' + userName + '아';
}
