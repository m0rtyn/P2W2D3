const goodsList = document.getElementById('goodsList')

async function run () {
  const response = await fetch('http://localhost:6500/api/goods', {
    header: {
      credentials: 'include'
    }
  })
  const foods = await response.json()

  foods.forEach((food) => {
    goodsList.innerHTML += `<li>${food}</li>`
  })
}

run()
