var app = angular.module("search", []);

app.filter('searchFor', function() {
  return function(arr, searchString) {
    if (!searchString) {
      return arr;
    }

    var result = [];

    searchString = searchString.toLowerCase();

    angular.forEach(arr, function(item) {
      if(item.title.toLowerCase().indexOf(searchString) !== -1) {
        result.push(item);
      }
    });
    return result;
  }
});

function searchController($scope) {
  
}