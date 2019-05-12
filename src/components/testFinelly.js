// fetch get through promise
// const fetchData = {
//   data: [],
//   async ft() {
//     new Promise((res, rej) => {
//         fetch('http://127.0.0.1:8000/api/v1/')
//             .then(response => response.json())
//             .then(data => this.data.push(data))
//             .finally(() => {
//                 document.getElementById("myButton").style.backgroundColor = 'red';
//                 res()
//                 // return this.data
//                 // console.log(this.data)
//               })
//           .catch(error => console.log(error))
//       }).then(() => console.log(this.data))
//   },
//   mapFt(){
//     console.log(this.ft())  //.map(i => console.log(i))
//   }
// }

// // const fetchData = {
// //   data: [],
// //   async ft(){
// //     const response = await fetch('http://127.0.0.1:8000/api/v1/')
// //     const data = await response.json()
// //     .finally(()=>{
// //       document.getElementById("myButton").style.backgroundColor = 'green';
// //     })
// //     console.log(data.data)
// //     return data.data.map((i, item) => {
// //       return (
// //         `<h1>${i.attributes.title}</h1>`
// //       )
// //     })
// //   },
// // }
//
//
// export default fetchData.ft()
