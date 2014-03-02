// ==UserScript==
// @name        Hack a Day comment fixer
// @namespace   hack-a-day-comment-fixer
// @description Hide those annoying "This is not a hack" comments on hackaday.com
// @include     http://hackaday.com/*
// @grant       none
// @author      Phil
// @license     MIT License
// @updateURL   https://github.com/PhilboBaggins/grease-monkey-scripts/raw/master/hackaday-comments-fixer.user.js
// @version     1
// ==/UserScript==

function makeid(length)
{
    // https://stackoverflow.com/questions/1349404/generate-a-string-of-5-random-characters-in-javascript

    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 10; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function ReplaceCommentBox(commentBox) {
    var originalContent = commentBox.innerHTML;
    function restoreComment() {
        commentBox.innerHTML = originalContent;
    }
    var idForNewButton = 'restore-not-a-hack-comment-button-' + makeid();
    commentBox.innerHTML = '<p>"not a hack" comment. <button id="' + idForNewButton + '">Click here</button> to restore it</p>';
    var button = document.getElementById(idForNewButton);
    button.addEventListener('click', restoreComment, true);
}

var commentBoxes = document.getElementsByClassName('comment-content');

for (var i = 0; i < commentBoxes.length; i++) {
    if (commentBoxes[i].innerHTML.toLowerCase().indexOf('not a hack') !== -1) {
        ReplaceCommentBox(commentBoxes[i]);
    }
}
