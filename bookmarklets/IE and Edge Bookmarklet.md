# Bookmarklet for Internet Explorer Edge - Project Spartan

## Creating the Bookmark

In order to create the bookmarklet in your Favorites Bar in Project Spartan or Internet Explorer Edge you must access the Favorites directory for your Edge installation under Windows 10. 

When in the Favorites folder please copy the "Bing" shortcut and paste the shortcut in the "Favorites Bar" folder since you can not create a new shortcut with the following length of text.

The bookmark folder can be found on the Internet and under the Technical Preview and Insider Preview forums. They describe both the Default and User level folders.

## The Bookmarklet Source (Testing Only Environment on my GitHub)

You should branch this project into your GitHub account. You can help out and also make sure you have a copy of the script instead of relying on my user bin. I am soon going to make an organization of all my open source code.

Inside the Bing shortcut you copy and pasted you must do the following:

* Close Internet Explorer Edge or Project Spartan
* Right Click > Properties
* Paste the following code into the hyperlink field

```
javascript:(function(){var myHead = document.getElementsByTagName('head')[0]; var myScript = document.createElement('script'); myScript.type = 'application/javascript'; myScript.src = 'https://czenzel.github.io/OutlookFWReply/scripts/ofr-bookmark.js'; myHead.appendChild(myScript);})();
```

* Restart Internet Explorer Edge or Project Spartan
* Go to Outlook.com and Test

## Drag and Drop Bookmarklet - Beta

If you are planning to test a drag and drop of the bookmarklet please try this included hyperlink. This might not work in all browsers especially in Internet Explorer Edge, as of Build 10130.

<a href="javascript:(function(){var myHead = document.getElementsByTagName('head')[0]; var myScript = document.createElement('script'); myScript.type = 'application/javascript'; myScript.src = 'https://czenzel.github.io/OutlookFWReply/scripts/ofr-bookmark.js'; myHead.appendChild(myScript);})();">Reply to Outlook.com Attachment</a>

## Important Information

* All scripts must be hosted on GitHub Pages in order to return proper mime types for the JavaScript file or Internet Explorer based engines, and most others, will reject it for security.

## Have fun!

You can always reach me on Twitter (@czenzel)! Follow me or hire me for your projects!
