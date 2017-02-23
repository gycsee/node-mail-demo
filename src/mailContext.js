var html_context = [];

html_context[0] = "<h3>This is the demo for Node-xlxs-mailer！</h3>";
// html_context[1] = "<div><b>...</b> ... </div>"
// html_context[2] = "<div><b>...</b> ... </div>"
// html_context[3] = "<div><b>...</b> ... </div>"
// ......

exports.getContext = function(){
    return html_context.join("");
   };