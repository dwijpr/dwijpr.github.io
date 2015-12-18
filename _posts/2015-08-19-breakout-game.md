---
layout: post
title: "Breakout Game"
date: 2015-08-19 10:28:59 PM
---

<style>
    #breakout-game * { padding: 0; margin: 0; }
    canvas#myCanvas { background: #ddd; display: block; margin: 0 auto; }
</style>

<div id="breakout-game">
    <canvas id="myCanvas" width="480" height="320"></canvas>
    <script src="assets/js/debug.js"></script>
    <script src="assets/js/vars.js"></script>
    <script src="assets/js/breakout.js"></script>
    <script>
        var game = new Game("myCanvas");
        game.run();
    </script>
</div>
