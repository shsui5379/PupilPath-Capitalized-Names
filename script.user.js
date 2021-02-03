// ==UserScript==
// @name         PupilPath Capitalized Names
// @version      1.0
// @description  Capitalizes course names and instructor names on PupilPath dashboard
// @match        https://pupilpath.skedula.com/home/dashboard/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.addEventListener('load', function() {
        var table = document.getElementById("progress-card");
        for (var i = 1; i < table.rows.length; i++) {
            var row = table.rows[i];

            row.cells[1].innerText = row.cells[1].innerText.toUpperCase();
            row.cells[2].innerText = row.cells[2].innerText.toUpperCase();
        }
    }, false);
})();
