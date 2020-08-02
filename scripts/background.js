'use strict';

chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({balance: 0.0}, function() {
        console.log("Balance set to 0.");
    });
    chrome.storage.sync.set({milestone: 10}, function() {
        console.log("Milestone set to 10.");
    });
    chrome.storage.sync.set({amountDonated: 0}, function() {
        console.log("Amount donated set to 0.");
    });
    chrome.storage.sync.set({donationHistory: []}, function() {
        console.log("donationHistory set to empty.");
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostEquals: 'developer.chrome.com'},
            })
            ],
                actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});