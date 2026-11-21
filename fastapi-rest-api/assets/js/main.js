// FastAPI로 배우는 REST API 백엔드 개발 - 교안 공통 스크립트
(function () {
  "use strict";

  var pageCode = document.body.getAttribute("data-page") || "page";

  // 브라우저 저장소를 쓸 수 없는 환경에서도 페이지가 정상 동작하도록 감싼다.
  function load(key) {
    try { return window.localStorage.getItem(key); } catch (e) { return null; }
  }
  function save(key, value) {
    try { window.localStorage.setItem(key, value); } catch (e) { /* 저장 생략 */ }
  }

  // 1. 코드 복사 버튼
  document.querySelectorAll(".codeblock").forEach(function (block) {
    var code = block.querySelector("pre code");
    if (!code) return;
    var button = document.createElement("button");
    button.type = "button";
    button.className = "copy";
    button.textContent = "복사";
    button.addEventListener("click", function () {
      var text = code.innerText;
      var done = function () {
        button.textContent = "복사됨";
        setTimeout(function () { button.textContent = "복사"; }, 1500);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, function () { button.textContent = "직접 선택해 복사하세요"; });
      } else {
        var area = document.createElement("textarea");
        area.value = text;
        document.body.appendChild(area);
        area.select();
        try { document.execCommand("copy"); done(); } catch (e) { button.textContent = "직접 선택해 복사하세요"; }
        document.body.removeChild(area);
      }
    });
    block.appendChild(button);
  });

  // 2. 체크리스트, 스스로 묻고 답하기 답안, 기록 표 입력값 저장
  document.querySelectorAll("[data-save]").forEach(function (field) {
    var key = "kyoan:" + pageCode + ":" + field.getAttribute("data-save");
    var stored = load(key);
    if (field.type === "checkbox") {
      if (stored === "1") field.checked = true;
      field.addEventListener("change", function () { save(key, field.checked ? "1" : "0"); });
    } else {
      if (stored !== null) field.value = stored;
      field.addEventListener("input", function () { save(key, field.value); });
    }
  });

  // 3. 확인 퀴즈
  document.querySelectorAll(".quiz").forEach(function (quiz) {
    var button = quiz.querySelector("button");
    var result = quiz.querySelector(".result");
    var explain = quiz.querySelector(".explain");
    var answer = quiz.getAttribute("data-answer");
    button.addEventListener("click", function () {
      var picked = quiz.querySelector("input:checked");
      if (!picked) {
        result.hidden = false;
        result.className = "result";
        result.textContent = "보기를 하나 고른 뒤 확인하세요.";
        return;
      }
      result.hidden = false;
      if (picked.value === answer) {
        result.className = "result ok";
        result.textContent = "정답입니다.";
      } else {
        result.className = "result bad";
        result.textContent = "다시 생각해 보세요. 정답은 " + answer + "번입니다.";
      }
      explain.hidden = false;
    });
  });
})();
