// urlを指定
const url = "https://uinames.com/api/?ext";

// ファンクション呼び出されたら以下を実行
function getPersonalData(name, surname, gender) {
  return new Promise((resolve, reject) => {
    // リクエストの送信
    fetch(url).then(res => {
      if (res.status === 200) {
        res.json().then(data => {
          resolve(data);
        });
      } else {
        reject("レスポンスにエラーが出ました");
      }
    });
  });
}

// ウインドウが読み込まれたら、以下を実行
window.addEventListener("load", () => {
  getPersonalData().then(data => {
    console.log(data);
  });
});

// データテーブルを作るファンクション
function createPersonalDataList(nameList) {
  // #rootを取得
  // ol要素を作成
  // li要素を作成、データを代入、ol要素に追加
  const root = document.getElementById("root");
  const ol = document.createElement("ol");
  root.appendChild(ol);
  const li = document.createElement("li");

  li.textContent = "hello";
  ol.appendChild(li);
}

getPersonalData();
