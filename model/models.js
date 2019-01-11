sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device",
	"openui5/community/model/firebase/FirebaseModel"
], function(JSONModel, Device, FirebaseModel) {
	"use strict";

	return {

		createDeviceModel: function() {
			var oModel = new JSONModel(Device);

			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},

		createFirebaseModel: function(){
				var config = {
					    apiKey: "AIzaSyA_Z8DgyBTOuPZ9CBIZidSUA3Ro05uXEp0",
					    authDomain: "webapp-a0077.firebaseapp.com",
					    databaseURL: "https://webapp-a0077.firebaseio.com",
					    projectId: "webapp-a0077",
					    storageBucket: "webapp-a0077.appspot.com",
					    messagingSenderId: "699647224453"
					  };

				var oViewModel = new FirebaseModel(null, config);
			// Login to firebase
						oViewModel.getFirebasePromise().then(function(firebase){
							firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
						  //  firebase.auth().signInAnonymously().catch(function(error) {
						        // Handle Errors here.
						        //var errorCode = error.code;
						        //var errorMessage = error.message;

						    });
						});
					return oViewModel;
		}

	};
});
