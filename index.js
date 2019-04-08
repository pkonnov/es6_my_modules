export default class TopNews {

  constructor(){
    this.url = 'http://new.sarinform.ru/api/top_news';
    this.responseData = new Set();
  }

 getData = () => {
    const res = fetch(this.url)
    .then((response) => {return response.json();})
    .then(data => {this.responseData.add(JSON.stringify(data))})
    return this.responseData;
  };
};

let myTopNew = new TopNews;

// console.log(myTopNew.getData.call(undefined));
