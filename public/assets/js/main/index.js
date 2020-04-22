var indexjs = {
	signup :function() {
		console.log("sign_up_form");
		var username = $("#username-2").val();
		var fullname = $("#fullname-2").val();
		var email = $("#email-2").val();
		var password = $("#password-2").val();
		var repassword = $("#repassword-2").val();
		
		var item = {
				"fullname": fullname,
				"username": username,
				"email" : email,
				"password": password,
				"roles": ["user"]
		}
		
		if(password === repassword){
			$.ajax({
				url : '/api/auth/signup',
				type : 'POST',
				contentType : 'application/json; charset=utf-8',
				data : JSON.stringify(item),
				dataType : "json",
				success : function(a) {
					$("#alert").removeClass("alert-danger");
					$("#alert").addClass("alert-success");
					$("#alert").html(a.message);
					$("#alert").show();
				},
				error: function (a) { // error callback 
					$("#alert").removeClass("alert-success");
					$("#alert").addClass("alert-danger");
					$("#alert").html(a.responseJSON.message);
					$("#alert").show();
				}
			});
		}else{
			$("#alert").removeClass("alert-success");
			$("#alert").addClass("alert-danger");
			$("#alert").html("Mật khẩu không đúng");
			$("#alert").show();
		}
		
		
		
	}
}
	