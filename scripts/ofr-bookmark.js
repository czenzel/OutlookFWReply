/*
 * Outlook.com Forward as Attachment Reply for Internet Explorer
 * This is only for Internet Explorer and Bookmark Based Initialization
 * Copyright 2015 (c) Christopher Zenzel. All Rights Reserved.
 * For information on using or integrating this script contact @czenzel on Twitter.
 */

$(document).ready(function() {
	_z_rta_waitForMessageView("#ComposeRteEditor_surface", 1250);
});

function _z_rta_ComposeViewLink(myAddrs) {
	var myAddrsLink = '$($("#toCP").find("textarea")[1]).val("' + myAddrs + '");';

	$(".ComposeHeader").append("<p id='zRtaReply'><a onclick='" + myAddrsLink + "'><strong>Reply</strong> to Forwarded Attachment</a></p>");

	if (myAddrs == '') $("#zRtaReply").remove();
}

function _z_rta_ComposeRAViewLink(myAddrs) {
	var myAddrsLink = '$($("#toCP").find("textarea")[1]).val("' + myAddrs + '");';

	$(".ComposeHeader").append("<p id='zRtaReplyAll'><a onclick='" + myAddrsLink + "'><strong>Reply All</strong> to Forwarded Attachment</a></p>");

	if (myAddrs == '') $("#zRtaReplyAll").remove();
}

function _z_rta_ReplyAllToAttachment(myTextHtml) {
	var myAddrs = '';
	var myFromRegex = /--Forwarded Message Attachment--\<br\>From\:\s*(\w*\@\w*\.\w*)\<br\>/;
	var myCcRegex = /--Forwarded Message Attachment--.*Cc\:\s*([\w*\@\w*\.\w*\,?\s*?]*)\<br\>/;
	var myMatch = myFromRegex.exec(myTextHtml);
	if (myMatch != null) { myAddrs += myMatch[1] + ','; };
	myMatch = myCcRegex.exec(myTextHtml);
	if (myMatch != null) { myAddrs += myMatch[1] + ','; };
	_z_rta_waitForComposeRAView('.ComposeHeader', myAddrs, 1250);
}

function _z_rta_ReplyToAttachment(myTextHtml) {
	var myAddrs = '';
	var myFromRegex = /--Forwarded Message Attachment--\<br\>From\:\s*(\w*\@\w*\.\w*)\<br\>/;
	var myMatch = myFromRegex.exec(myTextHtml);
	if (myMatch != null) { myAddrs += myMatch[1] + ','; };
	_z_rta_waitForComposeView('.ComposeHeader', myAddrs, 1250);
}

function _z_rta_waitForComposeView(selector, attr, time) {
        if(document.querySelector(selector) != null) {
		_z_rta_ComposeViewLink(attr);
		return;
	}
	else {
		setTimeout(function() {
			_z_rta_waitForComposeView(selector, attr, time);
		}, time);
	}
}

function _z_rta_waitForComposeRAView(selector, attr, time) {
        if(document.querySelector(selector) != null) {
		_z_rta_ComposeRAViewLink(attr);
		return;
	}
	else {
		setTimeout(function() {
			_z_rta_waitForComposeRAView(selector, attr, time);
		}, time);
	}
}

function _z_rta_waitForMessageView(selector, time) {
        if(document.querySelector(selector) != null) {
		var flagBind = false;
		$("#ComposeRteEditor_surface").contents().find("body").bind('DOMSubtreeModified', function() {
			$("#zRtaReply").remove();
			$("#zRtaReplyAll").remove();
			var contents = $($("#ComposeRteEditor_surface").contents().find("body")).html();
			_z_rta_ReplyToAttachment(contents);
			_z_rta_ReplyAllToAttachment(contents);
			$("#ComposeRteEditor_surface").contents().find("body").unbind('DOMSubtreeModified');
			flagBind = true;
		});
		if (!flagBind) {
			$("#zRtaReply").remove();
			$("#zRtaReplyAll").remove();
			$("#ComposeRteEditor_surface").contents().find("body").unbind('DOMSubtreeModified');
			var contents = $($("#ComposeRteEditor_surface").contents().find("body")).html();
			_z_rta_ReplyToAttachment(contents);
			_z_rta_ReplyAllToAttachment(contents);
		}
		return;
	}
	else {
		setTimeout(function() {
			_z_rta_waitForMessageView(selector, time);
		}, time);
	}
}
