// let raw = fs.readFileSync("../database/items.json");
// let itemList = JSON.parse(raw);
// let found = false;
// for (let item of itemList.averages) {
//     if (item.name === this.state.data.item_name) {
//         found = true;
//         item.count += 1;
//     }
// }
// if (!found) {
//     let newItem = {
//         name: this.state.data.item_name,
//         count: 1,
//     }
//     itemList.averages.push(newItem);
// }
// let newRaw = JSON.stringify(itemList);
// fs.writeFileSync("../database/items.json", newRaw);