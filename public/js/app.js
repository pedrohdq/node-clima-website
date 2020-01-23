const weatherForm  = document.querySelector('#weather-form')
const weatherInput = document.querySelector('#weather-input')
const response = document.querySelector('div.form-response p')

// d3 graph demo

const data  = [3,7,9,1,4,6,8,2,5]
const w     = 700
const h     = 300
const max   = d3.max(data)

// Scales

const x = d3.scale.linear().domain([0, data.length - 1]).range([0,w])
const y = d3.scale.linear().domain([0, max]).range([0,h])

console.log(x(8), x(4))

// Base vis layer

const vis = d3.select('#chart')
   .append('svg:svg')
   .attr('width', w)
   .attr('height', h)

// Add path layer

vis.selectAll('path.line')
   .data([data])
.enter().append("svg:path")
   .attr("d", d3.svg.line()
      .x((d,y) => x(i))
      .y((y) => y)
    )


weatherForm.addEventListener('submit', (e) => {
   e.preventDefault()
  
   response.parentElement.style = 'background-color: rgb(0, 0, 0, 0); color: #333333;'
   response.innerHTML = 'Buscando...'

   fetch('/clima?loc=' + weatherInput.value).then((res) => {
      res.json().then((data) => {
         if (data.error) {
            response.parentElement.style = 'background-color: rgb(255, 0, 0, 0.2); color: #333333;'
            response.innerHTML = data.error
         } else {
            response.parentElement.style = 'background-color: rgb(0, 255, 0, 0.2); color: #333333;'
            response.innerHTML = data.localizacao + ': ' +  data.previsao
         }
      })
   })
})
