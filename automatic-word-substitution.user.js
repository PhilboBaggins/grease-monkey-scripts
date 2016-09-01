// ==UserScript==
// @name        Automatic word substitution
// @namespace   automatic-word-substitution
// @description Substitute words and phrases in web pages for more entertaining alternatives
// @grant       none
// @author      Phil
// @license     MIT License
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js
// @updateURL   https://github.com/PhilboBaggins/grease-monkey-scripts/raw/master/automatic-word-substitution.user.js
// @version     1
// ==/UserScript==

console.time('Automatic word substitution execution time');

/*
 * jQuery replaceText - v1.1 - 11/21/2009
 * http://benalman.com/projects/jquery-replacetext-plugin/
 *
 * Copyright (c) 2009 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 *
 * Downloaded from http://github.com/cowboy/jquery-replacetext/raw/master/jquery.ba-replacetext.min.js
 */
(function($){$.fn.replaceText=function(b,a,c){return this.each(function(){var f=this.firstChild,g,e,d=[];if(f){do{if(f.nodeType===3){g=f.nodeValue;e=g.replace(b,a);if(e!==g){if(!c&&/</.test(e)){$(f).before(e);d.push(f)}else{f.nodeValue=e}}}}while(f=f.nextSibling)}d.length&&$(d).remove()})}})(jQuery);

$('*')
    // Farscape swear words
    .replaceText('Fuck', 'Frell')
    .replaceText('fuck', 'frell')
    .replaceText('Fuckwit', 'Frellnick')
    .replaceText('fuckwit', 'frellnick')
    .replaceText('Slut', 'Tralk') // or is it Trel'ik
    .replaceText('slut', 'tralk')
    .replaceText('Whore', 'Tralk')
    .replaceText('whore', 'tralk')
    .replaceText('Testicles', 'Mivonks')
    .replaceText('testicles', 'mivonks')
    .replaceText('Crap', 'Dren')
    .replaceText('crap', 'dren')
    .replaceText('Shit', 'Dren')
    .replaceText('shit', 'dren')
    .replaceText('Hell', 'Hezmata')
    .replaceText('hell', 'hezmata')
    .replaceText('Bugger', 'Yotz')
    .replaceText('bugger', 'yotz')
    .replaceText('Ass', 'Eema')
    .replaceText('ass', 'eema')
    .replaceText('Arse', 'Eema')
    .replaceText('arse', 'eema')
    .replaceText('Crazy', 'Fahrbot')
    .replaceText('crazy', 'fahrbot')
    .replaceText('Insane', 'Fahrbot')
    .replaceText('insane', 'fahrbot')
    .replaceText('Demented', 'Fahrbot')
    .replaceText('demented', 'fahrbot')
    // Futurama
    .replaceText('ask you a question', 'axe you a question')
    // XKCD 1418
    .replaceText('Force', 'Horse')
    .replaceText('force', 'horse')
    ;

console.timeEnd('Automatic word substitution execution time');

