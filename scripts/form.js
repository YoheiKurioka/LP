// JavaScript
// フォーム要素を取得
var form = document.getElementById("form");
// メールアドレスの入力欄を取得
var email = document.getElementById("email");
// メールアドレスのエラー表示要素を取得
var emailError = document.getElementById("email-error");
// フォームの送信ボタンを取得
var submit = document.getElementById("submit");

// フォームが送信されたときの処理
form.addEventListener("submit", function(event) {
  // メールアドレスの入力値を取得
  var emailValue = email.value;
  // メールアドレスの形式が正しいかチェック
  var emailValid = emailValue.match(/^[^@]+@[^@]+\.[^@]+$/);
  // メールアドレスが正しくない場合
  if (!emailValid) {
    // エラー表示要素にメッセージを設定
    emailError.textContent = "メールアドレスの形式が正しくありません";
    // フォームの送信を中止
    event.preventDefault();
    return;
  }
  // メールアドレスが正しい場合
  else {
    // エラー表示要素に空文字を設定
    emailError.textContent = "";
    // フォームの送信を実行
    form.submit();
    // ボタンのテキストを変更
    submit.textContent = "送信完了";
    // ボタンを無効化
    submit.disabled = true;
  }
});
