document.addEventListener("DOMContentLoaded", () => {
    loadData();
});

function loadData() {
    // データ配列に基づいてCollectionViewを作成します
    let view = new wijmo.collections.CollectionView(products);

    // unitPriceの降順にソートします
    let sortDesc = new wijmo.collections.SortDescription('unitPrice', false);
    view.sortDescriptions.push(sortDesc);

    // unitPriceが200より大きい項目だけを表示します
    view.filter = (item) => { return item.unitPrice > 200 };

    // ソートおよびフィルタ処理した結果をリストに追加します
    view.items.forEach((item) => {
        var newlist = document.createElement("li");
        var newtxt = document.createTextNode(item.productId + ': ' + item.productName + ' ' + item.unitPrice);
        newlist.appendChild(newtxt);
        document.getElementById("product_list").appendChild(newlist);
    });    

    let flexGrid = new wijmo.grid.FlexGrid('#flexGrid', {
        itemsSource: view});    

}