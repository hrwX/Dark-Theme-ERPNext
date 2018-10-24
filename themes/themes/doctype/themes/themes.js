// Copyright (c) 2018, Frappe and contributors
// For license information, please see license.txt

frappe.ui.form.on('Themes', {
	refresh: function(frm) {

	},
	theme: function(frm){
		console.log("Test");
		var linkNode = document.getElementsByTagName('link');
		for(var i = 0; i < linkNode.length; i++){
			var link = linkNode[i];
			if (link.href.indexOf('custom.css') > 0){
				
			}
		}
	}
});