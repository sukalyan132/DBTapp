angular.module('dbtService.services', [])
    .factory('API', function ( $http) {
	var base = "";
        return {
					get_details : function (url) {
						return $http.get(base+url,
											  {
												  method : 'GET',  
												  headers:{'Content-Type': 'application/x-www-form-urlencoded'}
											  }
											  );
						
					},
					post_details : function (form,url) {
						return $http.post(base+url,
											 form,
											  {
												  method : 'POST',  
												  headers:{'Content-Type': 'application/x-www-form-urlencoded'}
											  }
											  );
						
					}
				}
    });