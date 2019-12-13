module.exports = function(id) {
  (function(d){
    var key = id, e = d.createElement("script");
    e.type = "text/javascript";
    e.async = true;
    e.src = "https://cdn.howuku.com/js/howu.js";
    e.setAttribute("key", key);
    d.getElementsByTagName("head")[0].appendChild(e);
  })(document);
};
