$(function(){
	// 获取轮播图片
		$.getJSON("data/banner.json",function(bannerData){
			var bannerDataList=bannerData;
			for(var i=0;i<bannerDataList.length;i++){
				var obj=bannerDataList[i];
				// 创建li
				var bannerImg=$("<li></li>")
				var bannerTitle=$("<li></li>")
				// 给li添加css 添加背景图片
				bannerImg.css({background:"url("+obj.img+")no-repeat center top"})
				bannerTitle.html(obj.title)

				var bannerImgList=$('.content_banner_list')
				bannerImgList.append(bannerImg);
				var bannerTitleList=$('.content_banner_title');
				bannerTitleList.append(bannerTitle)

			}

			// 获取轮播图片的ul和li
			var bannerAll=$('.content_banner_list li');
			// 获取轮播标题的li
			var bannerAllTitle=$('.content_banner_title li')

			// 初始化第一张显示
			bannerAll.eq(0).show().siblings().hide();

			// 获取li的长度
			var size=bannerAll.size();

			// 自动轮播
			var i=0;

			var timer=setInterval(function(){
				i++;
				move();
			},2000)

			// 鼠标移入图片 显示左右按钮 
			$('.content_banner_next_pre,.banner_slide').hover(function(){
				$('.banner_slide').stop().fadeIn();
			},function(){
				$('.banner_slide').stop().fadeOut();
			})
			// 点击左右按钮时 切换相应的图片
			$('.slide_prev').click(function(){
				i--;
				move();
				$(this).show();
			})
			$('.slide_next').click(function(){
				i++;
				move();
				$(this).show();
			})
			// 鼠标移入title 显示相应的banner图片
			bannerAllTitle.hover(function(){
				var index=$(this).index();
				i=index;
				move();
				clearInterval(timer)
			},function(){
				timer=setInterval(function(){
					i++;
					move();
				},2000)
			})

			// 滚动
			function move(){
				if(i==size){
					i=0;
				}
				bannerAll.eq(i).stop().fadeIn().siblings().stop().fadeOut();
				bannerAllTitle.eq(i).addClass('banner_title_active').siblings().removeClass('banner_title_active');
			} 
			
		})
		// 热门推荐 鼠标移入显示宽度
		$('.content_banner_recommed li').hover(function(){
			$(this).css({width:'122px'}).find('img').css({left:'-97px'});
			$(this).siblings().css({width:'97px'}).find('img').css({left:'0px'});
		})
		//var times=-1;

		// banner图片左侧 鼠标移入移出效果
		// $('.content_type_first_nav li').hover(function(){
		// 		$(this).addClass('type_first_active');
		// 		$(this).click(function(){
		// 			times=$(this).index();
		// 			$(this).addClass('type_first_active').siblings().removeClass('type_first_active');
		// 			var index=$(this).index();
		// 			$('.content_second_type').eq(index).show().siblings('.content_second_type').hide();
		// 			if($(this).index()==0){
		// 				$(this).find('span').css({backgroundPosition:'-2px -1px'})
		// 			}else if($(this).index()==1){
		// 				$(this).find('span').css({backgroundPosition:'-40px -1px'})
		// 			}else if($(this).index()==2){
		// 				$(this).find('span').css({backgroundPosition:'-60px -3px'})
		// 			}else if($(this).index()==3){
		// 				$(this).find('span').css({backgroundPosition:'-20px -3px'})
		// 			}else if($(this).index()==4){
		// 				$(this).find('span').css({backgroundPosition:'-80px -1px'})
		// 			}else if($(this).index()==5){
		// 				$(this).find('span').css({backgroundPosition:'-100px -2px'})
		// 			}else if($(this).index()==6){
		// 				$(this).find('span').css({backgroundPosition:'-120px -3px'})
		// 			}
		// 			/*if($(this).index()==0){
		// 				$(this).find('span').css({backgroundPosition:'-2px -25px'})
		// 			}else if($(this).index()==1){
		// 				$(this).find('span').css({backgroundPosition:'-40px -27px'})
		// 			}else if($(this).index()==2){
		// 				$(this).find('span').css({backgroundPosition:'-60px -27px'})
		// 			}else if($(this).index()==3){
		// 				$(this).find('span').css({backgroundPosition:'-20px -27px'})
		// 			}else if($(this).index()==4){
		// 				$(this).find('span').css({backgroundPosition:'-80px -25px'})
		// 			}else if($(this).index()==5){
		// 				$(this).find('span').css({backgroundPosition:'-100px -26px'})
		// 			}else if($(this).index()==6){
		// 				$(this).find('span').css({backgroundPosition:'-120px -27px'})
		// 			}*/

		// 		})
		// 		if($(this).index()==0){
		// 				$(this).find('span').css({backgroundPosition:'-2px -25px'})
		// 			}else if($(this).index()==1){
		// 				$(this).find('span').css({backgroundPosition:'-40px -27px'})
		// 			}else if($(this).index()==2){
		// 				$(this).find('span').css({backgroundPosition:'-60px -27px'})
		// 			}else if($(this).index()==3){
		// 				$(this).find('span').css({backgroundPosition:'-20px -27px'})
		// 			}else if($(this).index()==4){
		// 				$(this).find('span').css({backgroundPosition:'-80px -25px'})
		// 			}else if($(this).index()==5){
		// 				$(this).find('span').css({backgroundPosition:'-100px -26px'})
		// 			}else if($(this).index()==6){
		// 				$(this).find('span').css({backgroundPosition:'-120px -27px'})
		// 			}
				
		// },function(){
		// 		$(this).removeClass('type_first_active');	
		// 		if($(this).index()==0){
		// 			$(this).find('span').css({backgroundPosition:'-2px -1px'})
		// 		}else if($(this).index()==1){
		// 			$(this).find('span').css({backgroundPosition:'-40px -1px'})
		// 		}else if($(this).index()==2){
		// 			$(this).find('span').css({backgroundPosition:'-60px -3px'})
		// 		}else if($(this).index()==3){
		// 			$(this).find('span').css({backgroundPosition:'-20px -3px'})
		// 		}else if($(this).index()==4){
		// 			$(this).find('span').css({backgroundPosition:'-80px -1px'})
		// 		}else if($(this).index()==5){
		// 			$(this).find('span').css({backgroundPosition:'-100px -2px'})
		// 		}else if($(this).index()==6){
		// 			$(this).find('span').css({backgroundPosition:'-120px -3px'})
		// 		}
		// 	if(times==$(this).index()){
		// 		$(this).addClass('type_first_active');
		// 			if($(this).index()==0){
		// 				$(this).find('span').css({backgroundPosition:'-2px -25px'})
		// 			}else if($(this).index()==1){
		// 				$(this).find('span').css({backgroundPosition:'-40px -27px'})
		// 			}else if($(this).index()==2){
		// 				$(this).find('span').css({backgroundPosition:'-60px -27px'})
		// 			}else if($(this).index()==3){
		// 				$(this).find('span').css({backgroundPosition:'-20px -27px'})
		// 			}else if($(this).index()==4){
		// 				$(this).find('span').css({backgroundPosition:'-80px -25px'})
		// 			}else if($(this).index()==5){
		// 				$(this).find('span').css({backgroundPosition:'-100px -26px'})
		// 			}else if($(this).index()==6){
		// 				$(this).find('span').css({backgroundPosition:'-120px -27px'})
		// 			}	
		// 	}
		// })
		$('.content_type_first_nav li').on('mouseover',function(){
			$(this).css({'background':'#fff','color':'#2EA536'}).siblings('li').css({'background':'#38414C','color':'#FFF'});
			$('.content_type_first_nav li').find('span').css({'background-position-y':'-2px'});
			$(this).find('span').css({'background-position-y':'-26px'});
			$(this).unbind('click').on('click',function(){
				$('.content_type_first_nav li').find('span').removeClass('active');
				$(this).find('span').addClass('active');
				$(this).addClass('type_first_active').siblings('li').removeClass('type_first_active');
				var index=$(this).index();
				$('.content_second_type').eq(index).show().siblings('.content_second_type').hide();
			})
		})



		// 点击二级菜单的关闭按钮 关闭二级展开框
		$('.second_close').click(function(){
			$(this).parent('.content_second_type').hide();
			var index=$(this).parent('.content_second_type').index();
			console.log(index);
			$('.content_type_tral').show();

			$('.content_type_first_nav li').eq(0).addClass('type_first_active').find('span').addClass('active');
			/*$('.content_type_first_nav li').eq(index).removeClass('type_first_active').find('span').removeClass('active');
			console.log(index)*/
			$('.content_type_first_nav li').eq(index-1).removeClass('type_first_active').css({'background':'#38414C','color':'#FFF'}).find('span').css({'background-position-y':'-2px'}).removeClass('active');
		
		})

		/*  
		问题：
		01.鼠标移入旅游度假第一次会隐藏背景图片效果 需要第二次移入才会有效果
		02.当鼠标点击下一个的时候 之前点击的 li的背景图片效果还会显示 需要再次移入移出 才会隐藏掉
		03.点击了关闭按钮之后 对应点击的li的背景图片效果不会隐藏
		*/
		// 二级菜单 鼠标移入标题切换
		
		$('.content_type_flit_tic span').hover(function(){
			$(this).addClass('type_flit_active')
			$(this).click(function(){
				times=$(this).index();
				$(this).addClass('type_flit_active').siblings().removeClass('type_flit_active')
			})
		},function(){
			if(times==$(this).index()){
				times=-1;
				$(this).addClass('type_flit_active')
			}else{
				$(this).removeClass('type_flit_active')
			}
		})
		// 二级菜单 点击单程/往返按钮 显示隐藏返回输入框
		$('.content_type_mil').click(function(){
			var index=$(this).index()
			$(this).find('.catalog_icon').addClass('content_radio_check').parent('.content_type_mil').siblings().find('.catalog_icon').removeClass('content_radio_check');
			if(index==1){
				$('.content_second_form_round').hide();
			}if(index==2){
				$('.content_second_form_round').show();
			}
		})
		// 二级 菜单 点击切换 按钮 交换 目的地和出发地的值
		$('.content_second_change').click(function(){
			var fromAdd=$(this).prev('.content_second_form').find('input');
			var fromAddCon=fromAdd.attr('value');
			var toAdd=$(this).next('.content_second_form').find('input');
			var toAddCon=toAdd.attr('value');
			fromAdd.attr({value:toAddCon});
			toAdd.attr({value:fromAddCon})
		})
		// 二级菜单  点击数字输入框显示输入框 并且在点击下拉菜单中的数字时 会对应;在输入先是框中
		var secondForm=$('.content_second_peopleage .content_second_form');
		secondForm.click(function(){
			$(this).next('.content_second_all').show().siblings('.content_second_all').hide();
			var secondNum=$(this).next('.content_second_all').find('li');
			secondNum.hover(function(){
				$(this).addClass('content_second_num_active');
				$(this).click(function(){
					var secondCurrentText=$(this).html();
					$(this).parent('.content_second_all').prev('.content_second_form').find('input').attr({value:secondCurrentText});
					$(this).parent('.content_second_all').hide()
				})
				
			},function(){
				$(this).removeClass('content_second_num_active');
			})
		})
		//二级菜单 自动获取当前时间
		var myDate=new Date();

		var myYear=myDate.getFullYear();
		var myMonth=myDate.getMonth();
		var myD=myDate.getDate();
		var myDay=myDate.getDay();
		$('.datenow').val(myYear+'-'+(myMonth+1)+'-'+myD+' 星期 '+myDay)
		
		// 鼠标移入图片 显示放大效果
		$('.content_second_pic').hover(function(){
			$(this).find('img').animate({width:'430px',marginLeft:'-15px'},300)
		},function(){
			$(this).find('img').animate({width:'415px',marginLeft:'0'},300)
		})

		//右侧新闻栏 获取json数据
		$.getJSON("data/banner-news.json",function(bannerNews){
			for(var i=0;i<bannerNews.length;i++){
				var obj=bannerNews[i];
				var li=$('<li></li>');
				var p=$('<p>'+obj.title+'</p>');
				var span=$('<span>'+obj.user+'</span>');
				li.append(p,span);
				$('.content_newslist').append(li);
			}
			var bannerNewsAll=$('.content_newslist');
			var size=$('.content_newslist li').size();
			var currentHeight=$('.content_newslist li').height();
			
			var index = 0;
				
			var timer=setInterval(function(){
				index++;
				move();
			},2000)

			$('.content_newslist').hover(function(){
				clearInterval(timer)
			},function(){
				timer=setInterval(function(){
					index++;
					move();
				},2000)
			})
			function move(){
				$(bannerNewsAll).animate({top:-index*currentHeight},200);
				if(index==(size-1)){
					index=0;
				}
			}
		})
		// 主要内容 超值特卖 获取json数据
		$.getJSON('data/content-title-con.json',function(contTitle){
			var contTitleSale=contTitle.titleSale;
			for(var i=0;i<contTitleSale.length;i++){
				var obj=contTitleSale[i];
				// 将图片设置为li的背景
				var li=$('<li></li>');
				li.css({background:'url('+obj.pic+') no-repeat center'})

				// 创建i标签 存储背景图片 尾货

				var iImg=$('<i></i>');
				iImg.css({background:'url('+obj.wei+') no-repeat',backgroundPosition:obj.positionBg});
				li.append(iImg);

				// 创建一个div存放 右边的内容背景
				var div=$('<div></div>');
				div.addClass('content_top_conmain_rightbg');
				li.append(div); 
				// 再创建一个div存放 右边的内容
				var div=$('<div></div>');
				div.addClass('content_top_conmain_right');
				// 创建i标签 存放箭头背景
				var ibg=$('<i></i>');
				ibg.addClass('comain_right_arrow');
				ibg.css({background:'url('+obj.wei+') no-repeat',backgroundPosition:obj.positionBgCon})
				div.append(ibg);
				li.append(div);

				// 创建时间 存放倒计时时间
				var p=$('<p></p>');
				p.addClass('comian_time_des')
				p.append('<span class="time_des_day">00</span>天<span class="time_des_time">00</span>时<span class="time_des_minit">00</span>分');
				div.append(p)
				div.append('<p class="spe_pro_name">'+obj.name+'</p><p class="spe_pro_price">￥<em>'+obj.price+'</em><span>起</span></p><p class="spe_pro_sale"><s>'+obj.salePrice+'</s><span class="icon_sale">'+obj.sale+'</span></p>')
				$('.content_top_titlesale').append(li);

				// 倒计时
				 function _fresh(){
			        var endtime=new Date("Sep 12, 2016 18:00:00");//这里设置预制时间
			        var nowtime = new Date();
			        var leftsecond=parseInt((endtime.getTime()-nowtime.getTime())/1000);
			        if(leftsecond<0){leftsecond=0;}
			        _d=parseInt(leftsecond/3600/24);
			        _h=parseInt((leftsecond/3600)%24);
			        _m=parseInt((leftsecond/60)%60);   
			       // _s=parseInt(leftsecond%60);

			       var d=_d<10?('0'+_d):_d;
			       var h=_h<10?('0'+_h):_h;
			       var m=_m<10?('0'+_m):_m;
			        $('.time_des_day').html(d);
			        $('.time_des_time').html(h);
			        $('.time_des_minit').html(m);
			        //document.getElementById("times").innerHTML=__d+"天 "+__h+"小时"+__m+"分"+__s+"秒";
			    }
			    _fresh()
			    setInterval(_fresh,1000);

			}

			var contTitleFree=contTitle.titleFree;
			for(var i=0;i<contTitleFree.length;i++){
				var obj=contTitleFree[i];
				// 将图片设置为li的背景
				var li=$('<li></li>');
				li.css({background:'url('+obj.pic+') no-repeat center'})

				// 创建i标签 存储背景图片 尾货

				var iImg=$('<i></i>');
				iImg.css({background:'url('+obj.wei+') no-repeat',backgroundPosition:obj.positionBg});
				li.append(iImg);

				// 创建一个div存放 右边的内容背景
				var div=$('<div></div>');
				div.addClass('content_top_conmain_rightbg');
				li.append(div); 
				// 再创建一个div存放 右边的内容
				var div=$('<div></div>');
				div.addClass('content_top_conmain_right');
				// 创建i标签 存放箭头背景
				var ibg=$('<i></i>');
				ibg.addClass('comain_right_arrow');
				ibg.css({background:'url('+obj.wei+') no-repeat',backgroundPosition:obj.positionBgCon})
				div.append(ibg);
				li.append(div);

				// 创建时间 存放倒计时时间
				var p=$('<p></p>');
				p.addClass('comian_time_des')
				p.append('<span><i class="icon_tic"></i>机票</span>+<span><i class="icon_hotel"></i>酒店</span>');
				div.append(p)
				div.append('<p class="spe_pro_name">'+obj.name+'</p><p class="spe_pro_price">￥<em>'+obj.price+'</em><span>起</span></p><p class="spe_pro_add">'+obj.freeAdd+'</p>')
				$('.content_top_titlefree').append(li);
			}
			// 鼠标移入到菜单栏对应显示下列的 内容
			$('.con_title_choinc').hover(function(){
				var index=$(this).index();
				//超值特卖
				$('.content_title_common .con_title_choinc').eq(index).addClass('con_title_active').siblings().removeClass('con_title_active');
				$('.content_top_conmain').eq(index).show().siblings('.content_top_conmain').hide();
			})
			// 鼠标移入内容区域 有背景阴影的显示
			$('.content_top_conmain li').hover(function(){
			$(this).css({boxShadow:'2px 2px 2px #f80, -2px 2px 5px #f80',});
			},function(){
				$(this).css({boxShadow:'none'})
			})
		})
		// 主要内容 金秋特惠
		$.getJSON('data/content-autumn.json',function(contentAutumn){
			// 长线
			var contentLongList=contentAutumn.outLongline;
			for(var i=0;i<contentLongList.length;i++){
				var obj=contentLongList[i];
				var li=$('<li></li>');
				var proPic=$('<div class="pro_pic"></div>')
				var flagNiu=$('<i class="flag_niuzhuan"></i>');
				var proMess=$('<P class="proMess">'+obj.name+'</P>');
				flagNiu.css({background:'url('+obj.flagNiuZhuan+') no-repeat center'})
				proPic.css({background:'url('+obj.pic+') no-repeat center'});
				proPic.append(flagNiu);
				proPic.append(proMess)
				li.append(proPic)

				var proInfor=$('<div class="pro_infor"><span class="price">￥<em>'+obj.price+'</em><i>起</i></span><span class="satisfaction">满意度'+obj.satisfaction+'</span></div>')
				li.append(proInfor)

				$('.content_autumn_longline').append(li);

				prolink=obj.link;
				
				
			}

			// 点击产品详情
			// 创建cookie
			
				$('.content_comain_common li').click(function(){
					var titleh2=$(this).find('.proMess').html();
					console.log(titleh2)
					for(var i=0;i<contentLongList.length;i++){
						var obj=contentLongList[i];
						// console.log(obj.name)
						if(titleh2==obj.name){
							// console.log(obj.name)
							var attr={
								title:obj.name,
								img:obj.bigPic,
								pric:obj.price,
								satic:obj.satisfaction,
								coun:obj.count,
								follo:obj.follow,
							}
							$.cookie("attr", JSON.stringify(attr), {expires:7, path:"/"})
						}
					}					
					window.open(prolink,"_blank") 
				})

			
			// 短线
			var contentShortList=contentAutumn.outShortline;
			for(var i=0;i<contentShortList.length;i++){
				var obj=contentShortList[i];
				var li=$('<li></li>');
				var proPic=$('<div class="pro_pic"></div>')
				var flagNiu=$('<i class="flag_niuzhuan"></i>');
				var proMess=$('<P class="proMess">'+obj.name+'</P>');
				flagNiu.css({background:'url('+obj.flagNiuZhuan+') no-repeat center'})
				proPic.css({background:'url('+obj.pic+') no-repeat center'});
				proPic.append(flagNiu);
				proPic.append(proMess)
				li.append(proPic)

				var proInfor=$('<div class="pro_infor"><span class="price">￥<em>'+obj.price+'</em><i>起</i></span><span class="satisfaction">满意度'+obj.satisfaction+'</span></div>')
				li.append(proInfor)

				$('.content_autumn_shortline').append(li)
			}

			$('.con_autumn_choinc').hover(function(){
				var index=$(this).index();
				//金秋特惠
				$(this).addClass('con_autumn_active').siblings().removeClass('con_autumn_active');
				var current=$(this).parent().parent().siblings('.content_main_common').find('.content_comain_common').eq(index);
				current.show().siblings('.content_comain_common').hide();
			})
			$('.con_outLongline_choinc').hover(function(){
				var index=$(this).index();
				//出境长线
				$(this).addClass('con_outLongline_active').siblings().removeClass('con_outLongline_active');
				var current=$(this).parent().parent().siblings('.content_main_common').find('.content_comain_common').eq(index);
				current.show().siblings('.content_comain_common').hide();
			})
			// 鼠标移入内容区域 有背景阴影的显示
			$('.content_comain_common li').hover(function(){
				$(this).css({boxShadow:'2px 2px 2px #f80, -2px 2px 5px #f80',});
			},function(){
				$(this).css({boxShadow:'none'})
			})
		})
		// 获取右侧的新闻列表
		$.getJSON('data/content-right.json',function(rightNews){
			for(var i=0;i<rightNews.length;i++){
				var obj=rightNews[i];
				var li=$('<li>'+obj.news+'</li>')
				$('.content_right_news_list').append(li)
			}
			// 添加新闻 鼠标移入效果
			$('.content_right_news_list li').hover(function(){
				$(this).addClass('list_news_active').siblings().removeClass('list_news_active');
			},function(){
				$(this).removeClass('list_news_active')
			})
		})
		// 旅游赞助自动滚动
		var indexauto = 0;
		var currentHeight=$('.tourism_wrap_content li').height();
		var size=$('.tourism_wrap_content li').size();

		var timer=setInterval(function(){
			indexauto++;
			move();
		},2000)

		function move(){
			$('.tourism_wrap_content').animate({top:-indexauto*currentHeight},200);
			if($('.tourism_wrap_content').css('top')=='-180px'){
				indexauto=0;
			}
		}
		var isMoving=false;
		// 鼠标点击右侧固定菜单 显示对应楼层
		$('.left_menu li').click(function(){
			//即将开始移动
			isMoving=true;
			//点击li 修改span的class
			$('.left_menu li').removeClass('fixed_menu_active')
			$(this).addClass('fixed_menu_active');
			//并且在点击li时 修改滚动高度
			//到选中索引的对应div的高度
			var index=$(this).index();
			var _top=$('.content_center_common').eq(index).offset().top;
			
			$('html,body').stop().animate({scrollTop:_top},800,function(){
				isMoving=false;
			});
			// 滚动事件 滚动到div显示到对应li的地方
		})
		var fixedTop=$('.content_center_con').offset().top;
		
		$(window).scroll(function(){
			var _scrollTop=$(document).scrollTop();
			
			if(_scrollTop>=fixedTop){
				$('.left_menu').fadeIn();
			}else{
				$('.left_menu').fadeOut();
			}

			//如果没有正在移动 则执行这里的代码 否则不执行
			if(!isMoving){
				
				//遍历所有楼层
				$('.content_center_common').each(function(){
					var _top=$(this).offset().top;
					if(_scrollTop>=_top){
						
						var index=$(this).index();

						$('.left_menu li').removeClass('fixed_menu_active'); 
						$('.left_menu li').eq(index).removeClass().addClass('fixed_menu_active');
						
					}
				})
			}	
		})
		// 鼠标移入到右侧 ul的时候 右侧菜单栏显示所有列表
		$('.right_list').hover(function(){
			$('.right_list ul').css({visibility:'visible'});
		},function(){
			var timer=setTimeout(function(){
				$('.hover_top,.hover_tuniu').css({visibility:'visible'});
				$('.right_list ul').css({visibility:'hidden'})
			},300)
		})

		// 点击top 回到顶部
		$('.hover_top').click(function(){
			$("html,body").stop().animate({scrollTop:'0'},800);
		})
		$('.hover_top').hover(function(){
			$(this).find('.rc_icon').css({backgroundPosition:"-58px -600px"});
			$(this).find('.rc_des').show().animate({right:"40px"})
		},function(){
			$(this).find('.rc_icon').css({backgroundPosition:"10px -600px"});
			$(this).find('.rc_des').hide().animate({right:"60px"})

		})
		$('.hover_tuniu').hover(function(){
			$(this).find('.rc_tuniu').css({backgroundPosition:"-64px -36px"});

		},function(){
			$(this).find('.rc_tuniu').css({backgroundPosition:"5px -36px"});

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
			var cont=$('<li><a href="html/login.html">登录</a>|</li><li><a href="html/reg.html">注册</a></li><li><a href="#"><img src="images/common/registgift.gif" alt="注册有礼"></a></li>')
			$('.login_menu_list').append(cont)
			$.cookie("loginattr", JSON.stringify(loginattr), {expires:-7, path:"/"});
		})

		// 设置cookie


})

