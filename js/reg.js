$(function(){

	// 获取验证码
	function randomNumCheck(){
		var num="";
		var random=new Array(0,1,2,3,4,5,6,7,8,9,
		'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z')
		for(var i=0;i<6;i++){
			var idx = parseInt(Math.random()*random.length);
			num += random[idx];	
		}
		return num;
	}	
	$('.reg_check').html(randomNumCheck());
	$('.reg_changes').click(function(){
		randomNumCheck();
		$('.reg_check').html(randomNumCheck());
	})

	//注册、登录页面随机获取六位手机短信验证码
	//封装随机获取六位数字
	function randomNum(){
		var num="";
		var str = '0123456789';
		for(var i=0;i<6;i++){
			var idx = parseInt(Math.random()*str.length);
			num += str[idx];	
		}
		return num;
	}	
	$('.reg_getmovepas input').val('')
	$(".reg_getpas").click(function(){	
		randomNum();
		$('.reg_getmovepas input').val(randomNum());
	});
	$('.reg_phonenum').val('');
	$('.reg_checknum').val('');
	$('.reg_movepas').val('');
	$('.reg_passnum').val('');
	// 判断表单
	$.getJSON("../data/login-user.json",function(loginInfo){
		console.log(loginInfo)
		for(var i=0;i<loginInfo.length;i++){
			var obj=loginInfo[i];
				$('.reg_btn').click(function(){	
					console.log(1)
					var phoneNum=$('.reg_phonenum').val();
					var checkNum=$('.reg_checknum').val();
					var movePas=$('.reg_movepas').val();
					var passNum=$('.reg_passnum').val();

					console.log(phoneNum)

					if(phoneNum!=''&& checkNum!=''&& movePas!=''){
						if(phoneNum==obj.phone){
							alert("已注册！");
							location.href = "../tuniu.html";							
						}
						alert("注册成功,请登录！");
						location.href = "login.html";
					}

					if(!(/^[1][358][0-9]{9}$/).test(phoneNum)){
						alert("请输入正确的手机号码");
					}
					
					if(checkNum!=$('.reg_check').html()){
						alert("请输入正确的验证码");
					}
						
					if(passNum.length<6||passNum.length>20){
						alert("密码长度为6到20位之间");
					}

			})
				break;
		}
	})
	
})