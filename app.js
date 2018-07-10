import { h, app } from "hyperapp"


const spec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v2.json",
  "data": { "url": "https://datasette-riokxmdoqj.now.sh/data-7845d4c/seattle-weather.json?_shape=array"},
  "mark": "circle",
  "tooltip": false,
  "encoding": {
    "y": {
      "field": "temp_min",
      "type": "nominal",
      "axis" : {
        "title": "temperature"
      }
    },
    "x": {
      "field": "date",
      "type": "temporal",
      "axis": {
        "title": "date"
      }
    },
    "size": {
      "field": "precipitation",
      "type": "quantitative",
    },
    "tooltip": {"field":"precipitation", "type": "quantitative"},
  }
}


const view = () => (
  <main>
    <h1>Vega Lite Rain Chart </h1>
    {vegaEmbed('#chart', spec)}
  </main>
)

app({}, {}, view, document.body)