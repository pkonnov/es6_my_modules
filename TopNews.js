const _d = document;
const buttonMore = _d.getElementById('myButton')
let num = 1;

async function main() {
    const response = await fetch(`http://127.0.0.1:8000/api/v1/?page=${num}`)
    const jsonData = await response.json()
    console.log(jsonData)
    const mapData = await jsonData.data.map((i) => {
      return `
      <div class="col-12 lenta">
        <a class="title" href="/${i.attributes.section + "/" + i.attributes.slug}">${i.attributes.title}</a><br>
        <span class="time_pub">${i.attributes.publish}</span>
        <span class="section">
          <a id="s" href="/${i.attributes.section}">${i.attributes.section_rus}</a>
        </span>
      </div>`
    })
    // check for data counts
    if (jsonData.data.length < 10) buttonMore.style.display = "none"
    _d.getElementById('root').insertAdjacentHTML('beforeend', mapData.join(''))
}

buttonMore.addEventListener('click', (e) => {
  num++
  return main();
})


// <div class="col-12 lenta">
//             <a class="title" href="/economy/saratovec-dispetcher-skoroj-otkazalsya-prisylat-vr/">Саратовец: диспетчер скорой отказался присылать врачей к женщине с кровохарканием</a><br>
//             <span class="time_pub">19:30</span>
//             <span class="section">
//               <a id="s" href="/economy">Экономика
//               </a>
//             </span>
//           </div>
