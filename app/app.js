$(document).ready(function() {

  var table = $('<table>');
  table.appendTo($('#container'));

  var trNumber = 4;
  var tdNumber = 4;
  var dataHolder = [];

  // creates a table, divides into cells and rows, assigns background for each
  for(var j = 0; j < trNumber; j++) {
    var tr = $('<tr>');
    tr.appendTo(table);
    for(var i = 0; i < tdNumber; i++) {
      var td = $('<td>');
      var div = $('<div>');
      div.attr("number", i);
      div.appendTo(td);
      td.appendTo(tr);
      var pos = (-157.5 * i) + 'px ' + (-88.5 * j) + 'px';
      td.css({"background-position": pos});
    }
    $('#container tr:nth-child(4)').find('td:nth-child(4)').addClass('hidden');
  }

  function move() {
    var empty = $('tr').find('.hidden');
    var property = $(this).css('background-position');
    console.log(property);
    empty.removeClass().addClass('newClass').css({"background-position": property}).show();
    $(this).addClass('hidden');
  }

  $('td').on('click', move);
});
