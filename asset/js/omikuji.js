
document.getElementById('bird').addEventListener('click', () => {
  let num = Math.floor(Math.random() * 11);

  if (num >= 7) {
    document.getElementById('result').value = '大吉';
  } else if (num >= 3) {
    document.getElementById('result').value = '中吉';
  } else if (0 <= num <= 2) {
    document.getElementById('result').value = '小吉';

  }
// 5秒後に結果をクリア
setTimeout(() => {
  document.getElementById('result').value = '';
}, 5000);
});

document.getElementById('dog').addEventListener('click', () => {
  let num = Math.floor(Math.random() * 11);

  if (num >= 7) {
    document.getElementById('result').value = '大吉';
  } else if (num >= 3) {
    document.getElementById('result').value = '中吉';
  } else {
    document.getElementById('result').value = '小吉';
  }
// 5秒後に結果をクリア
setTimeout(() => {
  document.getElementById('result').value = '';
}, 5000);
});

document.getElementById('cat').addEventListener('click', () => {
  let num = Math.floor(Math.random() * 11);

  if (num >= 7) {
    document.getElementById('result').value = '大吉';
  } else if (num >= 3) {
    document.getElementById('result').value = '中吉';
  } else if (num <= 2) {
    document.getElementById('result').value = '小吉';
  }
// 5秒後に結果をクリア
setTimeout(() => {
  document.getElementById('result').value = '';
}, 5000);
});

document.getElementById('tanuki').addEventListener('click', () => {
  let num = Math.floor(Math.random() * 11);

  if (num >= 7) {
    document.getElementById('result').value = '大吉';
  } else if (num >= 3) {
    document.getElementById('result').value = '中吉';
  } else if (num <= 2) {
    document.getElementById('result').value = '小吉';
  }
// 5秒後に結果をクリア
setTimeout(() => {
  document.getElementById('result').value = '';
}, 5000);
});
// if （条件式1） {
//   条件式1が成り立った場合処理を実行
// } else if（条件式2） {
//   条件式2が成り立った場合処理を実行
// }

// document.getElementById('bird').addEventListener('click', () => {
//   window.alert('bird')
// });
