const root = document.getElementById("root");

// ファンクション呼び出されたら以下を実行
function getPersonalData({ limit }) {
  // urlを指定
  const url = `https://uinames.com/api/?ext&amount=${limit}`;
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

// データリストを作るファンクション
function createPersonalDataList(dataList) {
  // #rootを取得
  // ol要素を作成
  // li要素を作成、データを代入、ol要素に追加
  const ol = document.createElement("ol");
  root.appendChild(ol);

  // 以下を繰り返す
  dataList.forEach(name => {
    const li = document.createElement("li");
    li.textContent = dataList;
    ol.appendChild(li);
  });

  return ol;
}

{
  /* <table>
  <tr>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>; */
}

// データテーブルを作るファンクション
function createPersonalDataTable(dataList) {
  // console.log(dataList);
  // tableタグを作成
  const tableEl = document.createElement("table");
  tableEl.classList.add("nameTable");
  // trタグを作成する（tableヘッダー用）
  const trEl = document.createElement("tr");
  // 行を追加
  let row = tableEl.insertRow(-1);

  // dataListの１行目（index0 -> dataList[0]）のデータ数分ループをする
  // for (key of Object.keys(dataList)) {
  for (key of Object.keys(dataList[0])) {
    // thタグを作成する
    const thEl = document.createElement("th");
    //　dataList[0]のi番目のkeyを取得し前行で作成したthタグのデータに代入する
    thEl.textContent = key;
    // thタグをtrタグにappendする
    trEl.appendChild(thEl);
  }
  // trタグをtableタグにappendする。
  tableEl.appendChild(trEl);

  // dataListのプロパティ名の数分ループをする
  for (let i = 0; i < dataList.length; i++) {
    // trタグを作成
    const trEl = tableEl.insertRow(-1);

    // imgタグを作成
    const imgEl = document.createElement("img");

    for (let i = 0; i < 7; i++) {
      // tdダグをデータ数分作成する
      const tdEl = trEl.insertCell(-1);
      // tdタグにdataListの値を代入
      tdEl.textContent = "hello";
      // tdをtrにappend
      trEl.appendChild(tdEl);

      // // imgElにdataListの７番目を代入
      // const imgEl = dataList[6];
      // // imgElをtdの７番目にappend
      // tableEl.rows[1].cells[6].appendChild(imgEl);
    }
  }
  return tableEl;
}

// ウインドウが読み込まれたら、以下を実行
window.addEventListener("load", () => {
  getPersonalData({ limit: 15 }).then(personalDataList => {
    // console.log("personalDataList", personalDataList);
    root.appendChild(
      createPersonalDataTable(
        personalDataList.map(
          ({
            name,
            surname,
            gender,
            region,
            email,
            phone,
            password,
            photo
          }) => ({
            name: `${name} ${surname}`,
            gender,
            region,
            email,
            phone,
            password,
            photo
          })
        )
      )
    );
  });
});
