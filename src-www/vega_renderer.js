
var supportedKeys = [
  'chart_1',
  'chart_2',
  'chart_3',
  'chart_4',
  'chart_counties_confirmed',
];
function loadVega(f, id) {
  if (!supportedKeys.includes(f)) {
    console.error('unsupported key:', f);
    return;
  }

  $.get('data/'+f+'.json', function( spec ) {
    var opt = {"renderer": "canvas", "actions": false};
    vegaEmbed("#"+id, spec, opt);
  });
}

$(document).ready(function(){
  loadVega('chart_1', 'vega_chart_1');
  loadVega('chart_2', 'vega_chart_2');
  loadVega('chart_3', 'vega_chart_3');
  loadVega('chart_4', 'vega_chart_4');
  loadVega('chart_counties_confirmed', 'vega_chart_counties_confirmed');
});
