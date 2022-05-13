// JavaScript Document
$(function(){
	// 游戏大礼包列表2
	$(".dlb_list02 li").hover(function(){
			$(this).addClass("dlb_hover");
		},function(){
			$(this).removeClass("dlb_hover");
	});	
	// 游戏大礼包、手游开测表
	$(".tit_game li").hover(function(){
		$(this).addClass("game_cur").siblings().removeClass("game_cur");
		$(this).parent().siblings("#game_dlb").children("div").hide();
		$(this).parent().siblings("#game_dlb").children("div").eq($(this).index()).show();
	});
	//推荐阅读、手游排行
	$(".title_02 em i").hover(function(){
		$(this).addClass("tjyd_cur").siblings().removeClass("tjyd_cur");
		$(this).parent().parent().siblings(".nr_read").children("div").hide();
		$(this).parent().parent().siblings(".nr_read").children("div").eq($(this).index()).show();
	});
	//手机游戏	
	$(".tit_yxinfor li").hover(function(){
		$(this).addClass("game_cur").siblings().removeClass("game_cur");
		$(this).parent().siblings("#infor_pgame").children("div").hide();
		$(this).parent().siblings("#infor_pgame").children("div").eq($(this).index()).show().find("p.tit_gsmall").hide();
	});
	$(".tit_yxinfor li").eq(0).hover(function(){
		$(this).addClass("game_cur").siblings().removeClass("game_cur");	
		$("#infor_pgame").children("div").show();
		$("#infor_pgame p").show();
	});
	//手游排行
	$(".page_lank li").hover(function(){
		$(this).addClass("on").siblings().removeClass("on");		
	});	
	//推荐限免
	$(".title_tjxm em i").hover(function(){
		$(this).addClass("tjyd_cur").siblings().removeClass("tjyd_cur");
		$(this).parent().parent().siblings(".con_tjxm").children("div").hide();
		$(this).parent().parent().siblings(".con_tjxm").children("div").eq($(this).index()).show();
	});
	//首页游戏选项卡
	$(".game_xxk_l li").hover(function(){
		$(this).addClass("game_bigcur").siblings().removeClass("game_bigcur");
		$(this).parent().siblings(".game_xxk_r").children("div").hide();
		$(this).parent().siblings(".game_xxk_r").children("div").eq($(this).index()).show();
	});
	//新手教程指导
	$(".guide_xxk strong").hover(function(){
		$(this).addClass("tjyd_cur").siblings().removeClass("tjyd_cur");
		$(this).parent().parent().siblings(".nr_guide").children(".guide_box").hide();
		$(this).parent().parent().siblings(".nr_guide").children(".guide_box").eq($(this).index()).show();
	});	
	//原创视频欣赏
	$(".list_video dd").hover(function(){
		$(this).find("em").animate({ 
			top:"0px",
			padding:"47px 10px 46px",
			fontSize:"14px",
			color:"#fff"
	    }, 200 );
	},function(){		
		$(this).find("em").animate({ 
			top:"74px",
			padding:"10px 10px 9px",
			fontSize:"12px"
	    }, 200 );
	});		
	
	//精美壁纸欣赏
	$(".wall_a2 a,.wall_a3 a").hover(function(){
		$(this).find("em").slideDown();
	},function(){		
		$(this).find("em").slideUp();
	});	
	//展开收起	
	var $fl_hy=$(".filter dl:gt(2)");	
		$fl_hy.hide();
	$(".bt_open").toggle(function(){
		$fl_hy.show();
		$(this).css("background","#F8F8F8 url(img/la_02.jpg) 60px 10px no-repeat");
		$(this).text("收起");					  							  
	},function(){
		$fl_hy.hide();
		$(this).css("background","#F8F8F8 url(img/la_01.jpg) 60px 10px no-repeat");
		$(this).text("展开");		
	});	
	//排行榜
	$(".game_rank li").hover(function(){
		$(this).addClass("on").siblings().removeClass("on");
		
	});		
	//登录页面
	$(".inp_login,.inp_reg,.inp_yzm").mouseenter(function(){
		$(this).addClass("inp_focus");
	});	
	$(".inp_login,.inp_reg,.inp_yzm").mouseout(function(){
		$(this).removeClass("inp_focus");
	});	
	
	$(".inp_login,.inp_reg,.inp_yzm,.ask_input,.ssjg_inp,.input_error").focus(function(){
		var txt_value=$(this).val();
		if(txt_value==this.defaultValue){
			$(this).val("");
		}
	});	
	$(".inp_login,.inp_reg,.inp_yzm,.ask_input,.ssjg_inp,.input_error").blur(function(){
		var txt_value=$(this).val();
		if($(this).val()==''){
			$(this).val(this.defaultValue);
    }	
	});	
	//找回密码	
	$(".input_e_p,.find_yzm").focus(function(){
		$(this).css("background-color","#fff");
	});	
	$(".input_e_p,.find_yzm").blur(function(){
		$(this).css("background-color","#FFEBEC");
	});	
	
	//弹出框
	$("#login").click(function(){ 
		$("#mask").css({                 
				"height":$(document).height(),
				"width":$(document).width()
		}).show();
		$(".login_tck").show(); 
	});	
	$(".bt_close").click(function(){          
			$(".login_tck").hide();
			$("#mask").hide();
	}) ; 
	//member
	$(".member").click(function(e){
		$(".member_name").addClass("name_nobord");
		$(".member_name").find("i").addClass("icon_xsj");
		$(".member_box").show();			
		e.stopPropagation();
		return false;	
	});
	$(".mem_close").click(function(event){		
		$(".member_box").hide();
		$(".member_name").removeClass("name_nobord");
		$(".member_name").find("i").removeClass("icon_xsj");
		return false;		
	});		
	$(document).click(function(){
		$(".member_box").hide();
		$(".member_name").removeClass("name_nobord");
		$(".member_name").find("i").removeClass("icon_xsj");
	});
	//video play
	/*$("#temp3").Slide({
			effect : "fade",
			speed : "normal",
			timer : 3000
	});	*/
	$(".JQ-slide-nav li").hover(function(){
		$(this).css("background-color","#1C1C1C");	
	},function(){
		$(this).css("background-color","");
	});
	$(".btn_close").toggle(function(){
		$(".nr_videolist").hide();
		$(this).siblings("div.JQ-content-box").removeClass("JQ-content-box").addClass("JQ_cur");
		$(this).find("i").addClass("video_show");
	},function(){
		$(".nr_videolist").show();
		$(this).siblings("div.JQ_cur").removeClass("JQ_cur").addClass("JQ-content-box");
		$(this).find("i").removeClass("video_show");
	});	
	//video_sy
	$(".title_phb em i").hover(function(){
		$(this).addClass("tjyd_cur").siblings().removeClass("tjyd_cur");
		$(this).parent().parent().siblings(".rank").children("div").hide();
		$(this).parent().parent().siblings(".rank").children("div").eq($(this).index()).show();
	});
	
	//yx_xxk
	$(".yx_xxk li").hover(function(){
		$(this).addClass("yx_cur").siblings().removeClass("yx_cur");
		$(this).parent().parent().siblings(".nr_yxxxk").children("div").hide();
		$(this).parent().parent().siblings(".nr_yxxxk").children("div").eq($(this).index()).show();
	});
	
	//ask
	$(".show_dis").click(function(){
		$(this).siblings(".list_dis").show();	
		return false;
	});
	$(".list_dis li").hover(function(){
		$(this).find("i").show();
	},function(){
		$(this).find("i").hide();
	});
	
	$(".area_solution,.area_dis").focus(function(){
		var txt_value=$(this).val();
		if(txt_value==this.defaultValue){
			$(this).val("");
		}
	});	
	$(".area_solution,.area_dis").blur(function(){
		var txt_value=$(this).val();
		if($(this).val()==''){
			$(this).val(this.defaultValue);
    }	
	});	
	
	//dianwan
	$(".lb_dwzt ul li").hover(function(){
		$(this).addClass("dwzt_cur").siblings().removeClass("dwzt_cur");
		$(this).parent().parent().siblings(".nr_dwzt").children("div").hide();
		$(this).parent().parent().siblings(".nr_dwzt").children("div").eq($(this).index()).show();	
	});		
	$(".lb_dwrank li").hover(function(){
		$(this).addClass("on").siblings().removeClass("on");		
	});		
	$(".em_wall i").hover(function(){
		$(this).addClass("tjyd_cur").siblings().removeClass("tjyd_cur");
		$(this).parent().parent().siblings("#dw_game").children("div").hide();
		$(this).parent().parent().siblings("#dw_game").children("div").eq($(this).index()).show();	
	});
	
	//channel
	$(".tit_channel em i").hover(function(){
		$(this).addClass("tjyd_cur").siblings().removeClass("tjyd_cur");
		$(this).parent().parent().siblings(".con_channel").children("div").hide();
		$(this).parent().parent().siblings(".con_channel").children("div").eq($(this).index()).show();
	});
	//faka
	$(".title_vsy em i").hover(function(){
		$(this).addClass("faka_cur").siblings().removeClass("faka_cur");
		$(this).parent().parent().siblings(".nr_txtlb").children("div").hide();
		$(this).parent().parent().siblings(".nr_txtlb").children("div").eq($(this).index()).show();
	});
	
	//
	var $fl_hy=$(".filter dl:gt(2)");	
		$fl_hy.hide();
	$(".game_open").toggle(function(){
		$fl_hy.show();
		$(this).css("background","#fff url(img/la_02.jpg) 80px 10px no-repeat");
		$(this).text("收起选项");					  							  
	},function(){
		$fl_hy.hide();
		$(this).css("background","#fff url(img/la_01.jpg) 80pxx 10px no-repeat");
		$(this).text("更多选项");		
	});	
	//var $game_dd=$(".game_more dl dd");
	var $game_span=$(".game_more dl dd span");
	$game_span.toggle(function(){
		$(this).parent().css({"height":"inherit","overflow":"auto"});
		$(this).css("background","#fff url(img/la_02.jpg) right 10px no-repeat");
		$(this).text("收起");					  							  
	},function(){
		//$game_dd.css({"height":"30px","overflow":"hide"});
		$(this).parent().css({"height":"28px","overflow":"hidden"});
		$(this).css("background","#fff url(img/la_01.jpg) right 10px no-repeat");
		$(this).text("展开");		
	});	

})
