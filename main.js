var bond = "BOND here";

//Temporary
var underscore = "//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.2/underscore-min.js";

/**
 * Import different libraries
 */
var imp = function(url, s) {
  var s = document.createElement('script');
  s.src = url;
  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(s);
}

var listRepos = function(filter) {
  console.info("Not implemented");
}

/**
 *  Take cookies in json format and process them as
 *  Write now only tested on Cookie Importer in firefox
 */
var processCookies = function(cookie) {
  return _.map(c, function (cookie) {
    return [cookie.domain, true, cookie.path, cookie.secure, cookie.session? true : cookie.expirationDate, cookie.name, cookie.value];
  });
}

/**
 * Print cookie on screen in Netscape format
 */
var dumpCookies = function(cookies) {
  var out = "";
  _.each(cookies, function(j) { out += "<p>"; _.each(j, function(i) { out += i.toString() + "\t" }); out += "</p>" });
  document.write(out);
}

var dump = function(cookies) {
  imp(underscore);
  var res = processCookies(cookies);
  dumpCookies(res);
}

