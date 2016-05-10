var app = angular.module('mentorApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'partials/home.html'
  })
  .state('mentor', {
    url: '/mentor',
    templateUrl: 'partials/mentor.html'
  })
  .state('student', {
    url: '/student',
    templateUrl: 'partials/student.html'
  })
});
