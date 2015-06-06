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

[Reply to Outlook.com Attachment](javascript:%28function%28%29%7Bvar+myHead+%3D+document.getElementsByTagName%28'head'%29%5B0%5D%3B+var+myScript+%3D+document.createElement%28'script'%29%3B+myScript.type+%3D+'application%2Fjavascript'%3B+myScript.src+%3D+'https%3A%2F%2Fczenzel.github.io%2FOutlookFWReply%2Fscripts%2Fofr-bookmark.js'%3B+myHead.appendChild%28myScript%29%3B%7D%29%28%29%3B)

## Important Information

* All scripts must be hosted on GitHub Pages in order to return proper mime types for the JavaScript file or Internet Explorer based engines, and most others, will reject it for security.

## Have fun!

You can always reach me on Twitter (@czenzel)! Follow me or hire me for your projects!
