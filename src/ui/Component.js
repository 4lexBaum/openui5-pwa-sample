jQuery.sap.declare("com.sap.sports.Component");

sap.ui.core.UIComponent.extend("com.sap.sports.Component", {
	metadata: {
		manifest: "json"
	},
	createContent : function() {

		return sap.ui.view({
			viewName : "com.sap.sports.view.App",
			type : sap.ui.core.mvc.ViewType.XML
		});
	}
});
