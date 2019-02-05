var count = 0;

function searchClick(e) {
	console.log('Start to make api call');
	var url = 'https://pokeapi.co/api/v2/ability/4/';
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
