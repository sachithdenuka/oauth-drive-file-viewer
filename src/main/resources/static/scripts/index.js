$(document).ready(function(){

	$("#refreshFileButton").click(function(){
		$.ajax({
			url: '/listfiles',
		}).done(function(data){
			console.dir(data);
			var fileHTML = "";
			for(file of data) {
				fileHTML += '<li class="list-group-item"><img src="' + file.thumbnailLink + '">' 
				+ file.name + ' (FileID : ' + file.id + ')'
				+ '</li>';
			}
			
			$("#fileListContainer").html(fileHTML);
		});
	});
	
});