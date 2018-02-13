/**
 * Sample OpenUI5 Progressive Web Application
 * Simple TODO list
 */
sap.ui.getCore().attachInit(function todoApp() {

	const oShell = new sap.m.Shell({
		app: new sap.ui.core.ComponentContainer({
			height : "100%",
			name : "com.sap.sports",
			homeIcon: "icons/One_dark_big.png"
		})
	})
	document.getElementById("splash-screen").remove(); // delete the splash screen
	oShell.placeAt("body", "only");
});