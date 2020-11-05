window.onload = function() {
  async function getPopulation () {
    return await (await fetch('http://penqe.com/penqe/population.json')).json();
  }

  getPopulation()
    .then(data => {
      data = JSON.stringify(data)
      console.log(data); //都道府県別の人口データがdataに格納されています。

      // ↓↓ ここからdataを使い、可視化のコードを記載してください ↓↓


    })
    .catch(err => {
      console.log(err);
    })
};
