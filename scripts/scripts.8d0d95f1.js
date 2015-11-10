"use strict";angular.module("dhanesanaApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),$("a.mdl-layout__tab").mouseenter(function(){$(this).addClass("is-active")}),$("a.mdl-layout__tab").mouseleave(function(){$(this).removeClass("is-active")}),angular.module("dhanesanaApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("dhanesanaApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("dhanesanagithubioApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<!-- First Row --> <div class="mdl-grid"> <div class="mdl-card mdl-shadow--4dp mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet"> <div class="mdl-card__title"> <i class="material-icons resume-icons">build</i><h2 class="mdl-card__title-text">Skills</h2> </div> <div class="mdl-card__supporting-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia... </div> <div class="mdl-card__actions mdl-card--border"> <a class="mdl-button mdl-js-button mdl-js-ripple-effect"> Ruby on Rails </a> </div> <div class="mdl-card__actions mdl-card--border"> <a class="mdl-button mdl-js-button mdl-js-ripple-effect"> AngularJS </a> </div> <div class="mdl-card__actions mdl-card--border"> <a class="mdl-button mdl-js-button mdl-js-ripple-effect"> JavaScript & jQuery </a> </div> <div class="mdl-card__actions mdl-card--border"> <a class="mdl-button mdl-js-button mdl-js-ripple-effect"> Responsive CSS </a> </div> <div class="mdl-card__actions mdl-card--border"> <a class="mdl-button mdl-js-button mdl-js-ripple-effect"> Sinatra </a> </div> <div class="mdl-card__actions mdl-card--border"> <a class="mdl-button mdl-js-button mdl-js-ripple-effect"> Relational Database </a> </div> </div> <div class="mdl-card mdl-shadow--4dp mdl-cell mdl-cell--8-col mdl-cell--8-col-tablet"> <div class="mdl-card__title"> <i class="material-icons resume-icons">work</i><h2 class="mdl-card__title-text">Experience</h2> </div> <div class="mdl-card__actions mdl-card--border"> <a class="mdl-button mdl-js-button mdl-js-ripple-effect"> <span class="employer">Ace CPR</span>, <em class="job">Web Developer</em>, <span class="job-city">San Diego, CA</span> </a> </div> <div class="mdl-card__supporting-text job-desc"> I was responsible for the design and development of Ace CPR’s web application for accepting electronic payments and schedule appointments. I designed for responsiveness, and incorporated components from Google’s Material Design. An admin interface was provided to give my clients control of their scheduling and page content. </div> <div class="mdl-card__actions mdl-card--border"> <a class="mdl-button mdl-js-button mdl-js-ripple-effect"> <span class="employer">Freelance</span>, <em class="job">Tutor</em>, <span class="job-city">San Diego, CA</span> </a> </div> <div class="mdl-card__supporting-text job-desc"> Served as a one-on-one tutor for various high school students. Academic subjects included Computer Literacy, World History, and English. </div> <div class="mdl-card__actions mdl-card--border"> <a class="mdl-button mdl-js-button mdl-js-ripple-effect"> <span class="employer">CSUSM</span>, <em class="job">Research Assistant</em>, <span class="job-city">San Marcos, CA</span> </a> </div> <div class="mdl-card__supporting-text job-desc"> Assisted in studies of psychological capital and how it affects posi\\ve team outcomes. Results were compiled for statistical analysis and submitted for peer review. </div> </div> </div> <!-- Second Row --> <div class="mdl-grid"> <div class="mdl-card mdl-shadow--4dp mdl-cell mdl-cell--12-col"> <div class="mdl-card__title"> <i class="material-icons resume-icons">school</i><h2 class="mdl-card__title-text">Education</h2> </div> <div class="mdl-card__actions mdl-card--border"> <a class="mdl-button mdl-js-button mdl-js-ripple-effect"> <span class="employer">Dev Bootcamp</span>, <span class="school-city">San Francisco, CA</span> </a> </div> <div class="mdl-card__supporting-text job-desc"> Dev Bootcamp is an intensive 19-week web development program. During my time at Dev Bootcamp, I learned full stack web development and contributed to numerous group projects using agile development methods. </div> <div class="mdl-card__actions mdl-card--border"> <a class="mdl-button mdl-js-button mdl-js-ripple-effect"> <span class="employer">Code Fellows</span>, <span class="school-city">Seattle, WA</span> </a> </div> <div class="mdl-card__supporting-text job-desc"> During my time at Code Fellows, I completed their Foundations I and Foundations II course. I learned many web development concepts including DOM manipulation, and data algorithms. </div> <div class="mdl-card__actions mdl-card--border"> <a class="mdl-button mdl-js-button mdl-js-ripple-effect"> <span class="employer">California State University San Marcos</span>, <span class="school-city">San Marcos, CA</span> </a> </div> <div class="mdl-card__supporting-text job-desc"> CSUSM emphasized the application of the scientific method in researching and analyzing scientific data related to human behavior. I graduated with a B.A. in Psychology in Fall 2012. </div> </div> </div> <!-- Third Row --> <div class="mdl-grid"> <div class="mdl-card mdl-shadow--4dp mdl-cell mdl-cell--12-col"> <div class="mdl-card__title"> <i class="material-icons resume-icons">code</i><h2 class="mdl-card__title-text">Projects</h2> </div> <div class="mdl-card__actions mdl-card--border"> <a class="mdl-button mdl-js-button mdl-js-ripple-effect"> <span class="employer">yongBot</span>, <span class="school-city">github.com/dhanesana/yongBot</span> </a> </div> <div class="mdl-card__supporting-text job-desc"> yongBot is an IRC (Internet Relay Chat) bot that responds to user commands with fun and useful content rela\\ng to music, sports, and technology. This project incorporates many plugins and APIs that retrieve information from the web and presents them to the end users. I developed the bot using the Cinch bot building framework, and configured it to be deployed to Heroku\'s cloud plajorm. </div> <div class="mdl-card__actions mdl-card--border"> <a class="mdl-button mdl-js-button mdl-js-ripple-effect"> <span class="employer">Hobbyists</span>, <span class="school-city">github.com/tani8/Hobbyist</span> </a> </div> <div class="mdl-card__supporting-text job-desc"> Hobbyists is a RESTful online web plajorm that fosters communication between like-minded individuals with shared hobbies. My responsibilities included consuming APIs, user authentication, and creating responsive page layouts while adhering to agile development methods. I contributed to this project during my time at Dev Bootcamp. </div> </div> </div> <footer class="mdl-mini-footer"> <div class="mdl-mini-footer--left-section"> <div> <i class="material-icons resume-icons">attach_file</i><span>Download PDF Résumé</span> </div> </div> <div class="mdl-mini-footer--right-section"> <div> <span>Built with AngularJS <a href="https://angularjs.org/" target="_blank"><img class="angular-logo" src="http://i.imgur.com/Qo2rHIQ.png"></a></span> </div> </div> </footer>')}]);