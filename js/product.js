$(function(){
	var i=0;

	$('.pro_img_list li img').click(function(){
		var index=$(this).parent().index();
		$('.pro_img_list li img').removeClass('img_list_active');
		$(this).addClass('img_list_active').siblings().removeClass('img_list_active');	
		$('.pro_img_box li img').parent().eq(index).stop().fadeIn().siblings().stop().fadeOut();
	})


	// 点击左右键 切换图片
	var size=$('.pro_img_box li').size();

	$('.pro_back').click(function(){
		i--;
		if(i==-size){
			i=0;
		}

		$('.pro_img_list li img').removeClass('img_list_active');
		$('.pro_img_list li img').eq(i).addClass('img_list_active').siblings().removeClass('img_list_active');	
		$('.pro_img_box li img').parent().eq(i).stop().fadeIn().siblings().stop().fadeOut();
	})
	$('.pro_forward').click(function(){
		i++;
		if(i==size){
			i=0;
		}		
		$('.pro_img_list li img').removeClass('img_list_active');
		$('.pro_img_list li img').eq(i).addClass('img_list_active').siblings().removeClass('img_list_active');	
		$('.pro_img_box li img').parent().eq(i).stop().fadeIn().siblings().stop().fadeOut();
	})

	// 获取cookie数据
	
	var obj=JSON.parse($.cookie("attr"));
	var title=obj.title;
	var pic=obj.img;
	var price=obj.pric;
	var satisfied=obj.satic;
	var count=obj.coun;
	var follow=obj.follo;

	// 存放获取数据到页面
	$('.content_main_left h2').html(title)
	$('.pro_img_main,.pro_img_big').attr({src:'../'+pic})
	$('.pro_sale_price').html(price)
	$('.pro_satisfied').html(satisfied)
	$('.pro_cout').html(count)
	$('.pro_follow').html(follow)

	// 点击加减符号 修改input中的内容
	// 点击减号
	$('.pro_change_count input').val('1')
	$('.pro_sub').click(function(){
		var num=$('.pro_change_count input').val();
		num=Number(num)
		$('.pro_change_count input').val(num-1);
		if(num<=1){
			$('.pro_change_count input').val('1')
		}
	})
	//点击加号
	$('.pro_plus').click(function(){
		var num=$('.pro_change_count input').val();
		num=Number(num)
		$('.pro_change_count input').val(num+1);
	})

	// 点击按钮时 存储cookie数据
	$('.pro_btn_buy').click(function(){
		// 存储商品的标题
		var title=$(this).parent().parent().parent().siblings('h2').html();
		// 存储商品的图片
		var pic=$(this).parent().parent().siblings('.pro_tour_left').find('.pro_img_main').attr('src');
		// 存储商品的价格
		var price=$(this).parent().siblings('.pro_tour_price').find('.pro_sale_price').html();
		// 存储商品的数量
		var count=$(this).siblings('.pro_shop_num').find('input').val()-0;
		
		// 判断cookie中是否有内容 如果没有内容 那么就添加 有就不添加
		var goodlist=$.cookie("goodlist")?JSON.parse($.cookie("goodlist")):[];
		
		// 判断该商品是否已经添加
		var isExist=false;
		var cou=0;

		for(var i=0; i<goodlist.length; i++){
			var carid=goodlist[i].tit;
			var num=goodlist[i].num;
				num=Number(num);
			console.log(num);
			if (title == carid) {
				//console.log(goodlist[i].num);
				//存在相同的商品, 则把num++
				cou=num++;
				goodlist[i].num=Number(cou+count);
				isExist=true;
			}	
		}

		//创建一个对象来存储商品。
		if(!isExist){
			var goods = {
				tit:title,
				img:pic,
				money:price,
				num:count,
			}
			goodlist.push(goods);
		}

		alert("已添加购物车！")
		$.cookie("goodlist", JSON.stringify(goodlist), {expires:7, path:"/"})
	})


	// 获取登录的cookie

		var obj=JSON.parse($.cookie("loginattr"));

		// 获取用户名

		var user=obj.user;

		// 清除用户名存在地方的内容

		$('.login_menu_list').html('');

		// 创建li存放用户登陆后

		var li=('<li class="title_username"><span>'+user+'</span>欢迎来到途牛!</li>')
		$('.login_menu_list').append(li)

		// 创建一个按钮点击退出

		var li=('<li class="title_back"><a href="#">退出</a></li>')
		$('.login_menu_list').append(li)

		$('.title_back a').click(function(){
			var loginattr = JSON.parse($.cookie("loginattr"));
			// loginattr.splice($(this).parent().index(),1);
			$('.title_username,.title_back').remove();
			var cont=$('<li><a href="html/login.html">登录</a>|</li><li><a href="html/reg.html">注册</a></li><li><a href="#"><img src="../images/common/registgift.gif" alt="注册有礼"></a></li>')
			$('.login_menu_list').append(cont)
			$.cookie("loginattr", JSON.stringify(loginattr), {expires:-7, path:"/"});
		})
})


