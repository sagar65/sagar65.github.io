// creating Angular Module

var websiteApp = angular.module('websiteApp', []);
websiteApp.controller('FormController', function($scope, $http, $timeout) {
	alert( ) 	

	$scope.footerformData = {};
	$scope.successStatus = true;
	$scope.submitfooterForm = function(data) {
		//alert("submit click");
		$scope.successStatus = true;
		var status = true;
		if (data) {
			//alert("if data is there");
			return false;
		} else {
			//alert(12);
			$http({
				method : 'POST',
				url : 'mail.php',
				data : $.param($scope.footerformData), // pass in data as strings
				headers : {
					'Content-Type' : 'application/x-www-form-urlencoded'
				} // set the headers so angular passing info as form data (not request payload)
			}).success(function(data) {
				//alert(567);
				$scope.successStatus = false;
				$scope.footerformData = {};

				$('#footerSuccess').fadeIn(1000);
				$timeout(function() {
					$('#footerSuccess').fadeOut(1000);
				}, 1000);
			})
		};
	}
}).controller('rsvp2Ctrl', ['$scope','$timeout','$http',
function($scope , $timeout,$http) {
	//alert()
	$('.showmsg').hide();
      $scope.user = {} ;
       $scope.submit = false;
    	$scope.update = function(valid) {
		 if(valid == false){
		 	$scope.submit = true;
		 }
		 
		 if(valid!= false){
		 		$scope.submit = false;
		  	$http({
				method : 'POST',
				url : 'mail.php',
				data : $.param($scope.user), // pass in data as strings
				headers : {
					'Content-Type' : 'application/x-www-form-urlencoded'
				} // set the headers so angular passing info as form data (not request payload)
			}).success(function(data) {
					 $scope.submit = false;
					 $scope.user=null;
           $('.showmsg').fadeIn(1,function(){
		 });
				$timeout(function() {
				
					$('.showmsg').fadeOut(1000);
				}, 1000);
				 
			})
		  	
		  	
				}

	};

}])
