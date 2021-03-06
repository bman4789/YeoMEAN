'use strict';

angular.module('yeoMeanApp')
    .directive('markdowntf', function ($http) {
        var converter = new Showdown.converter();
        return {
            restrict: 'A',
            scope: { link: '@' },
            link: function (scope, element, attrs) {
                attrs.$observe('link', function (link) {
                    $http.get('/assets/' + link).success(function (response) {
                        var htmlText = converter.makeHtml(response);
                        element.html(htmlText);
                    });
                });
            }
        };
    });
