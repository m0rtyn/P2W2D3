const goodsList = document.getElementById('goodsList')

async function run () {
  const response = await fetch('http://localhost:4000/api/goods', {
    credentials: 'include'
  })
  const goods = await response.json()

  goods.forEach((good) => {
    goodsList.innerHTML += `<li>${good}</li>`
  })
}
run()
