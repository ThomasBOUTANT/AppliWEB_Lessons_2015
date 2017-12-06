/*
 * Activer les liens popover et configurer le chargement AJAX des détails d'un utilisateur
 */

$(document).ready(function(){
    $('[data-toggle="popover"]').popover({
    	html : true,
    });

	var popover = $('a.authorlink');
	popover.on('show.bs.popover', function() { 
    	  $.ajax({
    	     url : '/api/blog/user/' + this.text, 
    	     success : function(html) {
    	         popover.attr('data-content', html);
    	     }
    	  });
	});
});

