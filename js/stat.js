'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 30;
var TEXT_HEIGHT = 16;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, FONT_GAP * 1.5);

  var maxTime = getMaxElement(times);
  var renderBar = function (color) {
    ctx.fillStyle = color;
    ctx.fillRect(CLOUD_X + FONT_GAP + (90 * i), CLOUD_HEIGHT - TEXT_HEIGHT - GAP, BAR_WIDTH, -(BAR_HEIGHT * times[i]) / maxTime);
  };

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + FONT_GAP + (90 * i), CLOUD_HEIGHT - TEXT_HEIGHT);
    ctx.fillText(Math.round(times[i]), CLOUD_X + FONT_GAP + (90 * i), CLOUD_HEIGHT - (BAR_HEIGHT * times[i] / maxTime) - 2 * TEXT_HEIGHT - GAP);
    if (players[i] === 'Вы') {
      renderBar('rgba(255, 0, 0, 1)');
    } else {
      var saturation = Math.floor(Math.random() * 100);
      renderBar('hsl(240,' + saturation + '%,50%)');
    }
  }
};
