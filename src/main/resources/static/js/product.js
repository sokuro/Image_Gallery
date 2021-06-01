$(document).ready(function() {
    $('#loader').hide();
    $("#submit").on("click", function() {
        $("#submit").prop("disabled", true);
    	var name = $("#name").val();
        var file = $("#image").val(); 
        var year = $("#year").val();
        var description = $("#description").val();
        var form = $("#form").serialize();
    	var data = new FormData($("#form")[0]);
    	data.append('name', name);
    	data.append('year', year);
    	data.append('description', description); 
    	//alert(data);
        $('#loader').show();
        if (name === "" || file === "" || year === "" || description === "") {
        	$("#submit").prop("disabled", false);
            $('#loader').hide();
            $("#name").css("border-color", "red");
            $("#image").css("border-color", "red");
            $("#year").css("border-color", "red");
            $("#description").css("border-color", "red");
            $("#error_name").html("Please fill the required field.");
            $("#error_file").html("Please fill the required field.");
            $("#error_year").html("Please fill the required field.");
            $("#error_description").html("Please fill the required field.");
        } else {
            $("#name").css("border-color", "");
            $("#image").css("border-color", "");
            $("#year").css("border-color", "");
            $("#description").css("border-color", "");
            $('#error_name').css('opacity', 0);
            $('#error_file').css('opacity', 0);
            $('#error_year').css('opacity', 0);
            $('#error_description').css('opacity', 0);
                    $.ajax({
                        type: 'POST',
                        enctype: 'multipart/form-data',
                        data: data,
                        url: "/image/saveImageDetails", 
                        processData: false,
                        contentType: false,
                        cache: false,
                        success: function(data, statusText, xhr) {
                        console.log(xhr.status);
                        if(xhr.status == "200") {
                        	$('#loader').hide(); 
                        	$("#form")[0].reset();
                        	$('#success').css('display','block');
                            $("#error").text("");
                            $("#success").html("Product Inserted Succsessfully.");
                            $('#success').delay(2000).fadeOut('slow');
                         }	   
                        },
                        error: function(e) {
                        	$('#loader').hide();
                        	$('#error').css('display','block');
                            $("#error").html("Oops! something went wrong.");
                            $('#error').delay(5000).fadeOut('slow');
                            location.reload();
                        }
                    });
        }
            });
        });
