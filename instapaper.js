// ==UserScript==
// @name         Instapaper Auto Confirm
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  自动确认 Instapaper 删除文章时的确认提示框
// @author       powersee
// @match        https://www.instapaper.com/u*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 覆盖 window.confirm 函数
    window.confirm = function(message) {
        console.log("Confirm detected: " + message);
        return true; // 自动选择 "确认"
    };

})();

