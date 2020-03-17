// urlを指定
const url = "https://uinames.com/api/?ext";

// リクエストの送信
fetch(url)
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.log("errが出ました");
  });

// #rootを取得
// ol要素を作成
// li要素を作成、データを代入、ol要素に追加
const root = document.getElementById("root");
const ol = document.createElement("ol");
root.appendChild(ol);
const li = document.createElement("li");

li.textContent = "hello";
ol.appendChild(li);
