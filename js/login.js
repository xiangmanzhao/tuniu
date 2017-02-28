$(function(){
	// 鼠标移入切换qq与新浪背景
	$('.qq a').hover(function(){
		$(this).css({backgroundPosition:"-160px -40px"})
		$(this).next('span').show();
	},function(){
		$(this).css({backgroundPosition:"-160px 0px"});
		$(this).next('span').hide();
	})
	$('.sina a').hover(function(){
		$(this).css({backgroundPosition:"0px -40px"});
		$(this).next('span').show();
	},function(){
		$(this).css({backgroundPosition:"0px 0px"});
		$(this).next('span').hide(); 
	})
	// 点击li切换登录方式
	$('.login_list li').click(function(){
		$(this).addClass('login_list_active').siblings().removeClass('login_list_active');
		$(this).find('b').show().parent().siblings().find('b').hide()

		// 切换内容
		var index=$(this).index();
		if(index==1){
			$('.login_name,.login_pass').hide();
			$('.login_num,.login_getnum').show();
		}else if(index==0){
			$('.login_name,.login_pass').show();
			$('.login_num,.login_getnum').hide();
		}
	})
	// 点击二维码 切换内容
	$('.login_changebtn').click(function(){
		$('.login_code,.login_code_box,.close_login_code').show();
		$('.login_form_box,.login_partner,.login_list').hide();
		$('.changeposition').css({backgroundPosition:"-76px -83px"});
	})
	$('.close_login_code').click(function(){
		$('.login_code,.login_code_box,.close_login_code').hide();
		$('.login_form_box,.login_partner,.login_list').show();
		$('.changeposition').css({backgroundPosition:"0px -83px"});
	})
	// 表单验证
	// 刷新页面所有值为空
	$('.login_form input,.login_phonenum').val('');

	$('.login_form input').focus(function(){
		$(this).val('');
		$('.login_phonenum').css({border:"1px solid #eee"});
		$(this).parent('.login_common').css({border:"1px solid #C4F269"}).siblings('.login_common').css({border:"1px solid #eee"});
	})
	$('.login_phonenum').focus(function(){
		$(this).css({border:"1px solid #C4F269"});
		$('.login_common').css({border:"1px solid #eee"});
	})
	// 用户登录
	$.getJSON("../data/login-user.json",function(loginInfo){
		$('.login_btn').click(function(){
			var status = false;
			var userName=$('.login_name input').val();
			var passWord=$('.login_pass input').val();
			var phonenum=$('.login_phonenum').val();
			for(var i=0;i<loginInfo.length;i++){
				var obj=loginInfo[i];			
				if((userName==obj.phone)&&(passWord==obj.password)){
					location.href="../tuniu.html";
					status = true;
				}else if((phonenum!='')&&(phonenum==obj.phone)){
					location.href="../tuniu.html"
				}

			};
			if(!status){
				alert('请输入正确用户名和密码')
			}

			// 存储cookie

			var loginattr={
				user:$('.login_name input').val(),
			}
			$.cookie('loginattr',JSON.stringify(loginattr), {expires:7, path:"/"})

		})
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
	$(".login_getpas").click(function(){
		randomNum();
		$('.login_getnum input').val(randomNum());
	});
})