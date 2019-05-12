const _d = document;
const renderContainer = _d.querySelector('.ReadableNews')

const mainFetchReadableNews = async () => {
  const response = await fetch(`https://sarinform.ru/api/readable`)
  const data = await response.json()
  console.log(data)
  const dataMap = await data.map(i => {
    return (
      `<li><a href="${i.view_node}">${i.title}</a></li>`
    )
  })
  renderContainer.innerHTML = dataMap.join('')
}
mainFetchReadableNews()
