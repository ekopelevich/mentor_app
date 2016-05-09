var app = angular.module('mentorApp', ['ui.router', 'ngAnimate']);

app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('mentor-registration', {
    url: '/registration/mentor',
    templateUrl: 'partials/mentor-registration.html'
  })
  .state('student-registration', {
    url: '/registration/student',
    templateUrl: 'partials/student-registration.html'
  })
  .state('mentor-dashboard', {
    url: '/dashboard',
    templateUrl: 'partials/dashboard.html'
  })
});
