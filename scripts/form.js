// DOMContentLoadedイベントを待つ
document.addEventListener("DOMContentLoaded", function () {
  // 入力項目とツールチップを取得
  const email = document.getElementById("email");
  const emailTooltip = document.getElementById("email-tooltip");
  const message = document.getElementById("message");
  const messageTooltip = document.getElementById("message-tooltip");
  const gender = document.getElementsByName("gender");
  const genderTooltip = document.getElementById("gender-tooltip");
  const prefecture = document.getElementById("prefecture");
  const prefectureTooltip = document.getElementById("prefecture-tooltip");
  const submitBtn = document.getElementById('submit');
  let isValidEmail, isValidMessage, isValidGender, isValidPrefecture = false;

  // 入力項目に入力イベントのリスナーを追加
  email.addEventListener("input", function () {
    // メールアドレスのバリデーション
    isValidEmail = validateEmail();
  });
    message.addEventListener("input", function () {
      // 問い合わせ内容のバリデーション
      isValidMessage = validateMessage();
    });

    for (let i = 0; i < gender.length; i++) {
      gender[i].addEventListener("input", function () {
        // 性別のバリデーション
        isValidGender = validateGender();
      });
    }

    prefecture.addEventListener("input", function () {
      // 都道府県のバリデーション
      isValidPrefecture = validatePrefecture();
    });

    submitBtn.addEventListener("click", function () {
      if (isValidEmail && isValidGender && isValidMessage && isValidPrefecture) {
        submitBtn.setAttribute("value", "送信済み");
      } else {
        submitBtn.setAttribute("value", "入力に誤りがあるよ");
      }
    });

    // メールアドレスのバリデーション関数
    function validateEmail() {
      // メールアドレスの正規表現
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      // メールアドレスが正しいかどうかチェック
      let isValid = emailRegex.test(email.value);
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

      return isValid;
    }

    // 問い合わせ内容のバリデーション関数
    function validateMessage() {
      // 問い合わせ内容が空かどうかチェック
      let isValid = message.value !== "";
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

      return isValid;
    }

    // 性別のバリデーション関数
    function validateGender() {
      // 性別が選択されているかどうかチェック
      let isValid = false;
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

      return isValid;
    }

    // 都道府県のバリデーション関数
    function validatePrefecture() {
      // 都道府県が選択されているかどうかチェック
      let isValid = prefecture.value !== "";
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
      return isValid;
    }

  });
