---
layout: post
title: "Aplikasi Daftar Nama"
date: 2015-08-10 16:58:25
---

Aplikasi Daftar Nama
====================

{% include styles/style1.html %}

<div>
    <table id="names-container"></table>
</div>

<script>
    function List(){
        var dataStore = [];
        var pos = 0;
        this.add = function(item){
            dataStore.push(item);
        }
        this.all = function(){
            return dataStore;
        }
        this.start = function(){
            pos = 0;
        }
        this.next = function(){
            if(++pos < dataStore.length){
                return true;
            }
            return false;
        }
        this.get = function(){
            if(pos > -1 && pos < dataStore.length){
                return dataStore[pos];
            }
        }
    }

    function Button(symbol, onclick){
        var button = $("<button>"+symbol+"</button>");
        if(typeof onclick === 'function'){
            button.on('click', onclick);
        }
        return button;
    }

    function Item(value, buttons){
        var tr = $("<tr><td class='name'></td><td class='buttons'></td></tr>");
        var tdName = tr.find('.name');
        var tdButtons = tr.find('.buttons');
        if(typeof value === 'string'){
            tdName.html(value);
        }else{
            tdName.append(value);
        }
        buttons.forEach(function(button){
            tdButtons.append(button);
        });
        return tr.get(0);
    }

    function NameItem(name){
        return new Item(
            name
            , [
                (new Button("↓")),
                (new Button("↑")),
                (new Button("x"))
            ]
        );
    }

    function InputItem(){
        var input = $("<input>");
        return new Item(
            input
            , [
                (new Button("+", function(){
                    console.log(input.val())
                })),
            ]
        );
    }

    var list = new List();
    var names = ['Dwi', 'Juli', 'Prabowo'];
    for(var i = 0;i < names.length;i++){
        list.add(names[i]);
    }

    var namesContainer = $("#names-container");

    list.start();
    do{
        var element = new NameItem(list.get());
        namesContainer.append(element);
    }while(list.next());
    var inputElement = new InputItem();
    namesContainer.append(inputElement);
</script>