//export default class TopNews {
//
//  constructor() {
//    this.url = 'http://new.sarinform.ru/api/top_news';
//    this.node = [];
//    this.getData();
//  }
//
// getData = () => {
//  return fetch(this.url)
//    .then((response) => {return response.json()})
//    .then(data => {this.node.push(data)})
//  };
//
//};
//
//let myTopNew = new TopNews;
//
//console.log(myTopNew.node);
//

let rendersToPage = 'h'
document.getElementById("root").innerHTML = `${rendersToPage}
`;


async function main() {
  try{
    const response = await fetch("http://127.0.0.1:8000/api/v1/")
    const jsonData = await response.json()
    console.log(jsonData)
  } catch (err) {
    console.log(err)
  }
}

main()
