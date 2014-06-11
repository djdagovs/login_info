
/*
 * login_info.js
 *
 * Jscript (jquery) for login_info plugin to add a customized info to the login screen
 *
 * @version 1.4
 * @author Markus Neubauer
 * @http://www.std-soft.com/index.php/hm-service/81-c-std-service-code/2-text-auf-der-login-seite-einblenden
 * @example: https://www.std-soft.de/webmail (in production)
 */

if ( login_info_before != null ) {
    $(document).ready(function() {
      $('#login-form').html(login_info_before.concat($('#login-form').html()));
    });
}
if ( login_info_after != null ) {
    $(document).ready(function() {
      $('#login-form').after(login_info_after);
    });
}

if ( bottomline != null ) {
  // larry
  if ( document.getElementById('bottomline') ) {
      $(document).ready(function() {
        $('#bottomline').html(bottomline);
      });
  }
  // default
  if ( document.getElementById('login-bottomline') ) {
      $(document).ready(function() {
        $('#login-bottomline').html(bottomline);
      });
  }
}


