$(function(){
	// 获取产品 cookie 数据
	var obj=JSON.parse($.cookie('goodlist'));

	var num=0;
	var allnum=0;

	$.each(obj,function(i,val){
		var pic=val.img;
		var title=val.tit;
		var count=val.num;
		var price=val.money;

		//存入页面
		
		var ul=$('<ul class="shop_nav shop_nav_list"></ul>');

		// 创建li存放 图片

		var li=$('<li class="shop_info_mas"><img class="shop_pic" src='+pic+'></li>');
		
		ul.append(li);

		// 创建p存放 标题

		var p=$('<p class="shop_info"><a href="#">'+title+'</a></p>');
		li.append(p)

		// 创建li存放 数量
		
		var li=$('<li class="shop_count">'+count+'</li>');
		ul.append(li)

		// 创建li存放 单价 

		var li=$('<li class="shop_price">'+price+'</li>')
		ul.append(li)

		// 创建li存放 小计 （单价*数量）

		var li=$('<li class="shop_price_small">'+(count*price)+'</li>')
		ul.append(li)

		// 创建li存放 删除按钮

		var li=$('<li class="shop_del"><a href="#">删除</a></li>')
		ul.append(li)

		$('.shop_list_cont').append(ul)

		// 创建结算 内容
		
		num+=Number(count);

		allnum+=Number(count*price);

		})

		// 计算数量
	
		var shopAccount=$('<li class="account_text">总计有<span class="aount_num">'+num+'</span>件</li>')
		$('.shop_accout').append(shopAccount)

		// 计算总价

		var allAccount=$('<li>总价<span class="aount_num">'+allnum+'</span>元</li>')
		$('.shop_accout').append(allAccount)

		// 结算按钮
		var accoutBtn=$('<li class="shop_pay">立即支付</li>');
		$('.shop_accout').append(accoutBtn)

		// 点击立即支付
		$('.shop_pay').click(function(){
			alert("呀！你好眼熟，免费去玩吧！！！")
		})



	// 点击 删除按钮 删除整条数据
	$('.shop_del').click(function(){
			var goodlist = JSON.parse($.cookie("goodlist"));
			//console.log($.cookie("cart"));//json字符串。[{}]
			//json.parse.将字符串转换为json对象。
			//json.stringfy 将对象转换为字符串。
			//console.log(goodsData);

			goodlist.splice($(this).parent().index(),1);
			//splice有两个参数，第一个为被操作的位置，第二个为要删除的个数。
			//console.log($(this).parent().parent().index());
			//移除
			//$(this).parent().parent().remove();
			//console.log(goodsData);*/
			$(this).parent().remove();
			$.cookie("goodlist", JSON.stringify(goodlist), {expires:7, path:"/"});

			self.location.reload();
	})

	// 购物车没有内容 显示图片
	if($('.shop_list_cont').children().length<=0){
		$('.shop_none').show();
		$('.shop_show').hide()
	}

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