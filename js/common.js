//common


$(function(){
	//header-top
	
	//鼠标移入到我的订单 会显示订单列表
	$('.header_top_order').hover(function(){
		$('.top_order_list').css({display:'block',zIndex:'1000'});
	},function(){
		$('.top_order_list').css({display:'none',zIndex:'0'});
	});

	//鼠标移入到网站地图 会显示地图列表
	$('.header_top_webmap').hover(function(){
		$('.top_map_list').css({display:'block',zIndex:'1000'});
	},function(){
		$('.top_map_list').css({display:'none',zIndex:'0'});
	});
	
	//鼠标移入到手机图片 会显示手机图片
	$('.header_top_phone').hover(function(){
		$('.top_phone_app').css({display:'block',zIndex:'1000'})
	},function(){
		$('.top_phone_app').css({display:'none',zIndex:'0'})
	});

	//鼠标移入到微信图片 会显示二维码图片
	$('.header_top_weixin').hover(function(){
		$('.top_weixin_code').css({display:'block',zIndex:'1000'});
		$(this).find('.icon_arrow').css({backgroundPosition:'-92px -7px'})
	},function(){
		$('.top_weixin_code').css({display:'none',zIndex:'0'});
		$(this).find('.icon_arrow').css({backgroundPosition:'-63px -49px'})
	})

	//鼠标移入地图和我的订单 会修改背景图片
	$('.header_top_webmap,.header_top_order').hover(function(){
		$('.header_top_order .icon_arrow').css({backgroundPosition:'-16px -13px'})
	},function(){
		$('.header_top_order .icon_arrow').css({backgroundPosition:'-8px -13px'})
	});

	//我的订单 网站地图 手机 微信 当鼠标移入的时候 背景的显示效果
	$('.header_top_order,.header_top_webmap,.header_top_phone,.header_top_weixin').hover(function(){
		$(this).addClass('header_top_hover');
	},function(){
		$(this).removeClass('header_top_hover');
	})

	// 鼠标移入深圳站 会显示全国地址列表
	$('.header_cityname,.header_allcity').hover(function(){
		$('.header_cityname').addClass('header_cityname_active');
		$('.header_allcity').css({display:'block',zIndex:'1000'})
		$('.header_nowcity .icon_arrow').css({backgroundPosition:'-16px -13px'})
	},
	function(){
		$('.header_cityname').removeClass('header_cityname_active');
		$('.header_allcity').css({display:'none',zIndex:'0'})
		$('.header_nowcity .icon_arrow').css({backgroundPosition:'-8px -13px'})
	})
	//鼠标点击全国地址菜单栏 首字母切换 详细显示菜单
	$('.header_allcity_first li').click(function(){
		$('.header_allcity_first li').removeClass('header_allcity_active');
		$(this).addClass('header_allcity_active');
		var index=$(this).index();
		
		$('.header_common_word').eq(index).css({display:'block'});
		$('.header_common_word').eq(index).siblings('.header_common_word').css({display:'none'})
	})
	//地址 input搜索框获取焦点 input中的placeholder会清空
	//失去焦点 会显示placeholder
	$('.header_search_citybox input').focus(function(){
		$(this).attr({placeholder:''});
		$(this).blur(function(){
			$(this).attr({placeholder:'搜索城市（支持汉字，拼音，首字母查询）'});
		})
	})
	// 鼠标移入所有产品 显示产品列表
	$('.header_searchbox_allproduce,.header_searchbox_list').hover(function(){
		$('.header_searchbox_list').css({display:'block',zIndex:'1000'})
		$('.header_searchbox_list li').hover(function(){
			$(this).addClass('header_searchbox_active')
		},function(){
			$(this).removeClass('header_searchbox_active')
		})
	},function(){
		$('.header_searchbox_list').css({display:'none',zIndex:'0'})
	})

	// 鼠标获取 正文搜索框 焦点时 隐藏placeholder 并且显示热门搜索
	$('.header_searchbox_con input').focus(function(){
			$(this).attr({placeholder:''});
			$('.header_searchbox_hotcity').css({display:'none'});
			$('.header_hotsearch').css({display:'block',zIndex:'1000'});
			$('.header_searchbox_allproduce').off()
		$(this).blur(function(){
			$(this).attr({placeholder:'三亚'});
			$('.header_searchbox_hotcity').css({display:'block'});
			$('.header_hotsearch').css({display:'none',zIndex:'0'});
			$('.header_searchbox_allproduce,.header_searchbox_list').hover(function(){
			$('.header_searchbox_list').css({display:'block',zIndex:'1000'})
			$('.header_searchbox_list li').hover(function(){
					$(this).addClass('header_searchbox_active')
				},function(){
					$(this).removeClass('header_searchbox_active')
				})
			},function(){
				$('.header_searchbox_list').css({display:'none',zIndex:'0'})
		})

		})
	})
	$('.header_hotsearch').hover(function(){
		$(this).css({display:'block',zIndex:'1000'});
		$('.header_click_close').click(function(){
			$('.header_hotsearch').css({display:'none'});
			$('.header_hotsearch').off();
		})
	})
	//关键字的失去焦点和获取焦点
	$('.header_normal_search input').focus(function(){
		$(this).attr({placeholder:''})
	})
	$('.header_normal_search input').blur(function(){
		$(this).attr({placeholder:'请输入目的地、主题、关键字'})
	})

	// 复选框 在高级选项中 选中 或不选中
	var checkList=$('.header_normal_con li');
	var numCheck=-1;
	checkList.click(function(){
		var index=$(this).index();
		if (index == numCheck) {
			numCheck = -1;
			$(this).removeClass('header_checkbox_active');
			$(this).find('.checkbox_got').css({display:'none'});
		}
		else {
			numCheck = index;
			$(this).addClass('header_checkbox_active');
			$(this).find('.checkbox_got').css({display:'block'});
			$(this).siblings(checkList).removeClass('header_checkbox_active');
			$(this).find('.checkbox_got').parent().siblings(checkList).find('.checkbox_got').css({display:'none'});
			$(this).parent().prev('.header_nolimit').removeClass('header_checkbox_active')
		}
	})
	//点击不限 让其他选框所有效果 隐藏
	$('.header_nolimit').click(function(){
		$(this).addClass('header_checkbox_active');
		$(this).next('.header_normal_con').find('li').removeClass('header_checkbox_active');
		$(this).next('.header_normal_con').find('.checkbox_got').css({display:'none'});
	})

	// 点击更多 让高度自动
	$('.header_checkbox_more').click(function(){
		var index=$(this).parent('.header_clear').index();//1 2
		if(numCheck==index){
			numCheck=-1;
			$(this).siblings('.header_normal_con').css({height:'28px'});
			$(this).html('更多')
		}else{
			numCheck=index;
			$(this).siblings('.header_normal_con').css({height:'auto'});
			$(this).html('收起')
		}
	})
	//点击更多条件的按钮 下拉morefilter显示
	$('.header_normal_showcon a').click(function(){
		var index=$(this).index();
		if(numCheck==index){
			numCheck=-1;
			$(this).html('收起更多');
			$('.header_normal_morefilter').show(400);
		}else{
			numCheck=index;
			$(this).html('更多条件（交通类型、住宿类型、组团特色、产品特色）')
			$('.header_normal_morefilter').hide(400);
		}	
	})
	// 疑问
	// 点击清除搜索条件 清除所有选中条件 并且将不限的添加class
	$('.header_normal_btn a').click(function(){
		$('.header_normal_con li').removeClass('header_checkbox_active');
		$('.checkbox_got').css({display:'none'});
		$('.header_nolimit').addClass('header_checkbox_active');
	})
	//点击高级搜索按钮 显示高级搜索所有内容
	$('.header_searchbox_high span').click(function(){
		var index=$(this).index();
		if(numCheck==index){
			numCheck=-1;
			$('.header_high_con').hide().css({zIndex:0});
			$(this).next('.header_icon').css({backgroundPosition:'-8px -13px'});
		}else{
			numCheck=index;
			$('.header_high_con').show().css({zIndex:1000});
			$(this).next('.header_icon').css({backgroundPosition:'-16px -13px'})
		}
	})
	$('.header_click_close').click(function(){
		$('.header_high_con').hide();
	})
	// 鼠标移入导航 切换相对应效果
	$('.header_nav_first_list').hover(function(){
		//var widthWin=$(window).width();
		if($(this).index()!=0){
			$(this).css({background:'#F0F1F3'});
			$(this).find('.header_nav_second_con').show().css({zIndex:'1000'});
			$(this).find('.nav_list_bg').css({backgroundPosition:'-16px -440px'});
			$(this).find('.icon_nav').show();
			$('.header_nav_second_bg').show().css({zIndex:'998'});;
		}
		
	},function(){
		if($(this).index()!=0){
			$(this).css({background:'#fff'});
			$(this).find('.header_nav_second_con').hide().css({zIndex:'0'})
			$(this).find('.nav_list_bg').css({backgroundPosition:'-16px -456px'})
			$(this).find('.icon_nav').hide();
			$('.header_nav_second_bg').hide();
		}
	})

	// 二级菜单单项效果
	$('.header_nav_second_list li').hover(function(){
		$(this).find('a').addClass('header_nav_second_list_active')
	},function(){
		$(this).find('a').removeClass('header_nav_second_list_active')
	})

	// footer内容 滚动
	$.getJSON('data/footer-user.json',function(footerUser){
		for(var i=0;i<footerUser.length;i++){
			var obj=footerUser[i];
			var li=$("<li>"+obj.title+"</li>")
			$('.footer_slide_list').append(li)
		}
		var index=0;
		var size=$('.footer_slide_list li').size();
		var timer=setInterval(function(){
			index++;
			var currentWidth=$('.footer_slide_list li').width();
			$('.footer_slide_list').animate({left:-index*currentWidth},800);
			if(index==(size-1)){
				index=0;
			}
		},2000)
	})

})


