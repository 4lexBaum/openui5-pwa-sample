sap.ui.define([
	"sap/ui/core/mvc/Controller",
	'sap/ui/core/Fragment',
	'sap/m/MessageToast'
], function(Controller, Router, JSONModel, MessageBox) {
	"use strict";

	var AppController = Controller.extend("com.sap.sports.view.App");

	AppController.prototype.onInit = function(oParameters) {
		console.log("Hey");
	};

	AppController.prototype.handleOpen = function (oEvent) {
		var oButton = oEvent.getSource();

		// create action sheet only once
		if (!this._actionSheet) {
			this._actionSheet = sap.ui.xmlfragment(
				"com.sap.sports.fragments.ActionSheet",
				this
			);
			this.getView().addDependent(this._actionSheet);
		}

		this._actionSheet.openBy(oButton);
	},

	AppController.prototype.actionSelected = function(oEvent){
		MessageToast.show("Selected action is '" + oEvent.getSource().getText() + "'");
	}

	AppController.prototype.onSourceCodePress = function(oEvent){
		sap.m.URLHelper.redirect("https://github.com/4lexBaum/openui5-pwa-sample", true);
	}

});