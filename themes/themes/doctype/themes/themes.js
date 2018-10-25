// Copyright (c) 2018, Frappe and contributors
// For license information, please see license.txt

frappe.ui.form.on('Themes', {
	refresh: function(frm) {

	},
	theme: function(frm){
		var text = frappe.add_theme();
		console.log(text);
		frappe.remove_theme();
	}
});