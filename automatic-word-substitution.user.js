// ==UserScript==
// @name        Automatic word substitution
// @namespace   automatic-word-substitution
// @include     http://127.0.0.1*
// @version     1
// @grant       none
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js
// ==/UserScript==

console.time('Automatic word substitution execution time');

$('body').children().each(function() {
    var newContent = $(this).html()
        // Farscape swear words
        .replace('Fuck', 'Frell')
        .replace('fuck', 'frell')
        .replace('Fuckwit', 'Frellnick')
        .replace('fuckwit', 'frellnick')
        .replace('Slut', 'Tralk') // or is it Trel'ik
        .replace('slut', 'tralk')
        .replace('Whore', 'Tralk')
        .replace('whore', 'tralk')
        .replace('Testicles', 'Mivonks')
        .replace('testicles', 'Mivonks')
        .replace('Crap', 'Dren')
        .replace('crap', 'dren')
        .replace('Shit', 'Dren')
        .replace('shit', 'Ddren')
        .replace('Hell', 'Hezmata')
        .replace('hell', 'hezmata')
        .replace('Hell', 'Hezmata')
        .replace('hell', 'hezmata')
        .replace('Hell', 'Yotz')
        .replace('hell', 'yotz')
        .replace('Ass', 'Eema')
        .replace('ass', 'eema')
        .replace('Arse', 'Eema')
        .replace('arse', 'eema')
        .replace('Crazy', 'Fahrbot')
        .replace('crazy', 'fahrbot')
        .replace('Insane', 'Fahrbot')
        .replace('insane', 'fahrbot')
        .replace('Demented', 'Fahrbot')
        .replace('demented', 'fahrbot')
        // Futurama
        .replace('ask you a question', 'axe you a question')
        ;
    $(this).html(newContent);
});

console.timeEnd('Automatic word substitution execution time');
