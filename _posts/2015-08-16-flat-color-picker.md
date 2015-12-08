---
layout: post
title: "Flat Color Picker"
date: 2015-08-16 07:43:07 PM
---

<script 
    src="//cdnjs.cloudflare.com/ajax/libs/zeroclipboard/2.2.0/ZeroClipboard.min.js"
></script>

<style>
    .wrapper .row div[class^="col-sm-"]{
        min-height: 128px;
        color: #ecf0f1;
    }
    .wrapper .row div[class^="col-sm-"] table{
        width: 100%;
        position: relative;
        min-height: 128px;
    }
    .wrapper .row div[class^="col-sm-"] td{
        vertical-align: middle;
        text-align: center;
    }
</style>

<div class="wrapper">
    <h3 class="text-center">
        Click the color to Copy!
    </h3>
    <div class="row" id="colors-wrapper">
    </div>
</div>

<script>
    var colors = [
        {name: "Turquoise", value: "#1abc9c"},
        {name: "Emerald", value: "#2ecc71"},
        {name: "Peter River", value: "#3498db"},
        {name: "Amethyst", value: "#9b59b6"},
        {name: "Wet Asphalt", value: "#34495e"},

        {name: "Sun Flower", value: "#f1c40f"},
        {name: "Carrot", value: "#e67e22"},
        {name: "Alizarin", value: "#e74c3c"},
        {name: "Clouds", value: "#ecf0f1", color: "#bdc3c7"},
        {name: "Concrete", value: "#95a5a6"},

        {name: "Green Sea", value: "#16a085"},
        {name: "Nephritis", value: "#27ae60"},
        {name: "Belize Hole", value: "#2980b9"},
        {name: "Wisteria", value: "#8e44ad"},
        {name: "Midnight Blue", value: "#2c3e50"},

        {name: "Orange", value: "#f39c12"},
        {name: "Pumpkin", value: "#d35400"},
        {name: "Pomegranate", value: "#c0392b"},
        {name: "Silver", value: "#bdc3c7"},
        {name: "Asbestos", value: "#7f8c8d"},
    ];

    for(var i = 0;i < colors.length;i++){
        $("#colors-wrapper").append(new ColorView(colors[i]));
    }

    function ColorView(color){
        var el = $("<div "+
            "class='col-sm-3'"+
            "data-clipboard-text='"+color.value+
            "'><table><tr><td>"
        );
        var target = el.find("td");
        target.html("<b>"+color.name+"</b>");
        if(color.color != null){
            target.find("b").css("color", color.color);
        }
        el.css('background-color', color.value);
        toCopy(el[0]);
        return el;
    }

    function toCopy(el){
        var client = new ZeroClipboard(el);
        client.on("ready", function(readyEvent){
            client.on("aftercopy", function(event){
                var value = $(event.target).find("b").html();
                $(event.target).find("b").text("Copied!");
                setTimeout(function(){
                    $(event.target).find("b").html(value);
                }, 1000);
            });
        });
    }
</script>