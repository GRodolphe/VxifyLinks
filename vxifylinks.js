// ==UserScript==
// @name         X/Twitter to vxtwitter Link Converter
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Automatically converts x.com links to vxtwitter.com when copying from share button
// @author       0xRo
// @match        https://x.com/*
// @match        https://twitter.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log('VXTwitter Link Converter script loaded');

    // Function to convert x.com/twitter.com URLs to vxtwitter.com
    function convertToVxTwitter(url) {
        console.log('Original URL:', url);
        
        // Replace x.com or twitter.com with vxtwitter.com
        const convertedUrl = url.replace(/(https:\/\/(x|twitter)\.com\/)/, 'https://vxtwitter.com/');
        
        console.log('Converted URL:', convertedUrl);
        return convertedUrl;
    }

    // Function to handle copy events
    function handleCopy(event) {
        console.log('Copy event detected');

        // Get the selected text
        const selectedText = window.getSelection().toString();
        
        console.log('Selected text:', selectedText);

        // Check if the selected text contains an x.com or twitter.com URL
        if (selectedText.match(/(https:\/\/(x|twitter)\.com\/[^\s]+)/)) {
            // Convert the URL
            const convertedText = convertToVxTwitter(selectedText);
            
            // Prevent the default copy behavior
            event.preventDefault();
            
            // Set the converted URL to clipboard
            event.clipboardData.setData('text/plain', convertedText);
            
            console.log('Link successfully converted and copied to clipboard');
        }
    }

    // Add copy event listener to the document
    document.addEventListener('copy', handleCopy);
    
    console.log('Copy event listener installed');
})();
