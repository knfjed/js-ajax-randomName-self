// urlを指定
const url = "https://uinames.com/api/?ext";

// ファンクション呼び出されたら以下を実行
function getPersonalData() {
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

// データテーブルを作るファンクション
function createPersonalDataList(dataList) {
  // #rootを取得
  // ol要素を作成
  // li要素を作成、データを代入、ol要素に追加
  const root = document.getElementById("root");
  const ol = document.createElement("ol");
  root.appendChild(ol);
  const li = document.createElement("li");

  li.textContent = dataList;
  ol.appendChild(li);
}

// ウインドウが読み込まれたら、以下を実行
window.addEventListener("load", () => {
  getPersonalData().then(data => {
    console.log(data);
    let dataList = new Array(
      `name: ${data.name}  /  surname: ${data.surname} /   gender: ${data.gender} /  region: ${data.region} /  email: ${data.email} /  phone: ${data.phone}`
    );
    createPersonalDataList(dataList);
  });
});

getPersonalData();
