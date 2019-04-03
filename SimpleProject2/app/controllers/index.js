var count = 0;

function searchClick(e) {
	console.log('Start to make api call');
    $.num.text = count + ' calls';
	var url = 'https://www.mediawiki.org/w/api.php?action=help&recursivesubmodules=1';
	var xhr = Ti.Network.createHTTPClient({
		onload: function(e) {
			Ti.API.debug(this.responseText);
			// alert('success');
			console.log('Success');
			count ++;
			$.num.text = count + ' calls';
		},
		onerror: function(e) {
			Ti.API.debug(e.error);
			console.log('error');
			// alert('error');
		},
		timeout:5000
	});
	xhr.open("GET", url);
	xhr.send();
}

$.index.open();
