---
layout: post
title: "Script Bash untuk Integrasi dengan Git"
date: 2015-07-30 09:33:42
---

Script _Bash_ untuk Intergrasi dengan _Git_
===========================================

Sehari-hari saya menggunakan **gnome-terminal** untuk melakukan pekerjaan
saya. Selain itu saya juga menggunakan hampir selalu menggunakan program untuk
mengontrol versi kode yang dikenal dengan **Git**. Lalu, bagaimana agar kedua
program ini bisa terintegrasi sehingga dapat mempermudah pekerjaan saya?

##### Begin with the End

Nantinya **gnome-terminal** akan mampu mendeteksi apakah dia berapa pada sebuah direktori yang terhubung dengan **Git** atau tidak, mampu mendeteksi nama branch yang sedang digunakan, dan juga mampu medeteksi _state_ dari branch
tersebut.