// DOMContentLoadedイベントを待つ
document.addEventListener("DOMContentLoaded", function () {
  // 入力項目とツールチップを取得
  var email = document.getElementById("email");
  var emailTooltip = document.getElementById("email-tooltip");
  var message = document.getElementById("message");
  var messageTooltip = document.getElementById("message-tooltip");
  var gender = document.getElementsByName("gender");
  var genderTooltip = document.getElementById("gender-tooltip");
  var prefecture = document.getElementById("prefecture");
  var prefectureTooltip = document.getElementById("prefecture-tooltip");

  // 入力項目に入力イベントのリスナーを追加
  email.addEventListener("input", function () {
    // メールアドレスのバリデーション
    validateEmail();
  });

  message.addEventListener("input", function () {
    // 問い合わせ内容のバリデーション
    validateMessage();
  });

  for (var i = 0; i < gender.length; i++) {
    gender[i].addEventListener("input", function () {
      // 性別のバリデーション
      validateGender();
    });
  }

  prefecture.addEventListener("input", function () {
    // 都道府県のバリデーション
    validatePrefecture();
  });

  // メールアドレスのバリデーション関数
  function validateEmail() {
    // メールアドレスの正規表現
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    // メールアドレスが正しいかどうかチェック
    var isValid = emailRegex.test(email.value);
    // ツールチップの位置を調整
    emailTooltip.style.top = email.offsetTop + "px";
    emailTooltip.style.left = email.offsetLeft + email.offsetWidth + 10 + "px";
    // ツールチップの内容とクラスを設定
    if (isValid) {
      emailTooltip.textContent = "メールアドレスが正しいです";
      emailTooltip.classList.add("valid-tooltip");
      emailTooltip.classList.remove("invalid-tooltip");
    } else {
      emailTooltip.textContent = "メールアドレスが正しくありません";
      emailTooltip.classList.add("invalid-tooltip");
      emailTooltip.classList.remove("valid-tooltip");
    }
  }

  // 問い合わせ内容のバリデーション関数
  function validateMessage() {
    // 問い合わせ内容が空かどうかチェック
    var isValid = message.value !== "";
    // ツールチップの位置を調整
    messageTooltip.style.top = message.offsetTop + "px";
    messageTooltip.style.left = message.offsetLeft + message.offsetWidth + 10 + "px";
    // ツールチップの内容とクラスを設定
    if (isValid) {
      messageTooltip.textContent = "問い合わせ内容が入力されています";
      messageTooltip.classList.add("valid-tooltip");
      messageTooltip.classList.remove("invalid-tooltip");
    } else {
      messageTooltip.textContent = "問い合わせ内容が入力されていません";
      messageTooltip.classList.add("invalid-tooltip");
      messageTooltip.classList.remove("valid-tooltip");
    }
  }

  // 性別のバリデーション関数
  function validateGender() {
    // 性別が選択されているかどうかチェック
    var isValid = false;
    for (var i = 0; i < gender.length; i++) {
      if (gender[i].checked) {
        isValid = true;
        break;
      }
    }
    // ツールチップの位置を調整
    genderTooltip.style.top = gender[0].offsetTop + -15 + "px";
    genderTooltip.style.left = gender[2].offsetLeft + gender[2].offsetWidth + 60 + "px";
    // ツールチップの内容とクラスを設定2
    if (isValid) {
      genderTooltip.textContent = "性別が選択されています";
      genderTooltip.classList.add("valid-tooltip");
      genderTooltip.classList.remove("invalid-tooltip");
    } else {
      genderTooltip.textContent = "性別が選択されていません";
      genderTooltip.classList.add("invalid-tooltip");
      genderTooltip.classList.remove("valid-tooltip");
    }
  }

  // 都道府県のバリデーション関数
  function validatePrefecture() {
    // 都道府県が選択されているかどうかチェック
    var isValid = prefecture.value !== "";
    // ツールチップの位置を調整
    prefectureTooltip.style.top = prefecture.offsetTop + "px";
    prefectureTooltip.style.left = prefecture.offsetLeft + prefecture.offsetWidth + 10 + "px";
    // ツールチップの内容とクラスを設定
    if (isValid) {
      prefectureTooltip.textContent = "都道府県が選択されています";
      prefectureTooltip.classList.add("valid-tooltip");
      prefectureTooltip.classList.remove("invalid-tooltip");
    } else {
      prefectureTooltip.textContent = "都道道府県が選択されていません";
      prefectureTooltip.classList.add("invalid-tooltip");
      prefectureTooltip.classList.remove("valid-tooltip");
    }
  }

});
