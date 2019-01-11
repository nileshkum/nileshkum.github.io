sap.ui.define([
	 "sap/ui/core/util/MockServer"
	// "LlistView/test/mockServer"
	// "sap/base/util/UriParameters",
	// "sap/base/Log"
], function (MockServer) {
		"use strict";

		// var oMockServer,
		// 	_sAppModulePath = "mycompany/myapp/MyWorklistApp/",
		// 	_sJsonFilesModulePath = _sAppModulePath + "localService/mockdata";

		return {

			init : function () {
    debugger;
     			var oMockServer = new MockServer({
					rootUri : " "
				});
				
				var oUriParameters = jQuery.sap.getUriParameters();

				// configure mock server with a delay of 1s
				MockServer.config({
					autoRespond : true,
					autoRespondAfter : (oUriParameters.get("serverDelay") || 1000)
				});
				
				var oPath = jQuery.sap.getModulePath("LlistView.localservice");
				// Simulate a manual back-end call
				// oMockServer.simulate(oPath + "/metadata.xml", oPath + "/mockdata");
				var oNewpath = oPath + "/mockdata";
					oMockServer.simulate(oPath + "/metadata.xml", oNewpath);

			//	oMockServer.setRequests(aRequests);
				oMockServer.start();

				// Log.info("Running the app with mock data");
			}


		};

	}
);