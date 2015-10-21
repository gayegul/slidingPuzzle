$(document).ready(function() {

  function getPuzzleReady() {
    var table = $('<table>');
    $('#container').append(table);
    var numberOfRows = 4;
    var numberOfColumns = 4;

    for(var i = 0; i < numberOfRows; i++) {
      var tr = $('<tr>');
      table.append(tr);

      for(var j = 0; j < numberOfColumns; j++) {
        var div = $('<div>');
        var width = 157.5;
        var height = 88.5;
        var position = (width * j * -1 + 'px ' + height * i  * -1 + 'px');
        div.css({'background-image': 'url(http://www.personal.psu.edu/jul229/mini.jpg)', 'background-position': position});
        div.on('click', swap);
        var td = $('<td>');
        td.append(div);
        tr.append(td);
      }
    }
    $('tr:nth-child(4) td:nth-child(4) div').addClass('hidden');
  }

  function swap() {
    var left = findLeftNeighbour($(this));
    var right = findRightNeighbour($(this));
    var top = findTopNeighbour($(this));
    var bottom = findBottomNeighbour($(this));

    if(left.hasClass('hidden')) {
      swapWithEmpty($(this), left);
    }
    else if(right.hasClass('hidden')) {
      swapWithEmpty($(this), right);
    }
    else if(top.hasClass('hidden')) {
      swapWithEmpty($(this), top);
    }
    else if(bottom.hasClass('hidden')) {
      swapWithEmpty($(this), bottom);
    }
  }

  function swapWithEmpty(item, empty) {
    var clickedParent = item.parent();
    var emptyParent = empty.parent();

    item.detach().appendTo(emptyParent);
    empty.detach().appendTo(clickedParent);
  }

  function findLeftNeighbour(item) {
    return item.parent().prev().find('div');
  }
  function findRightNeighbour(item) {
    return item.parent().next().find('div');
  }
  function findTopNeighbour(item) {
    var index = item.parent().index();
    return item.parent().parent().prev().find('td:eq('+ index +')').find('div');
  }
  function findBottomNeighbour(item) {
    var index = item.parent().index();
    return item.parent().parent().next().find('td:eq('+ index +')').find('div');
  }

  function shuffleOnce() {
    var left = findLeftNeighbour($('.hidden'));
    var right = findRightNeighbour($('.hidden'));
    var top = findTopNeighbour($('.hidden'));
    var bottom = findBottomNeighbour($('.hidden'));
    var possibleMoves = [];
    if(left && left[0]) {
      possibleMoves.push(left);
    }
    if(top && top[0]) {
      possibleMoves.push(top);
    }
    if(right && right[0]) {
      possibleMoves.push(right);
    }
    if(bottom && bottom[0]) {
      possibleMoves.push(bottom);
    }
    var random = Math.floor(Math.random() * possibleMoves.length);
    swapWithEmpty(possibleMoves[random], $('.hidden'));
  }

  function shuffle() {
    for(var i = 0; i < 100; i++) {
      shuffleOnce();
    }
  }

  $('button').on('click', shuffle);
  getPuzzleReady();

});
