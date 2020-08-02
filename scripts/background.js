'use strict';

chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({scrambleType: '3x3x3'}, function() {
        console.log("scrambleType set to 3x3x3.");
    });
    
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostContains: '.'},
            })
            ],
                actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});