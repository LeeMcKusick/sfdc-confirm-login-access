var isProduction = false;
if( $("span[id$='instance']").text().includes("Production") ) {
  isProduction = true;
}

if(isProduction) {
  $("a[id$='loginLink']").on('click', function()  {
     return confirm('This is a Production Org.\nDo you want to continue?');
  });
}
