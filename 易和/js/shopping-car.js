var meidian = false;
		$(document).on("click",".dian",function() {
			if(meidian == false) {
				meidian = true;
				$(this).css({
					"border": "1px solid rgb(255,108,0)",
					"background": "url(img/img-c/c-6/a1.png) no-repeat center center #ffffff",
				});
				//加属性
				$(this).parents(".xiangqing").find(".yitiao .dian2").attr("color","aa");
			} else if(meidian == true) {
				meidian = false;
				$(this).css({
					"border": "1px solid rgb(211,211,211)",
					"background": "#ffffff",
				});
				//去属性
				$(this).parents(".xiangqing").find(".yitiao .dian2").attr("color","");
				$(this).parents(".xiangqing").find(".yitiao .dian2").css({
					"border": "1px solid rgb(211,211,211)",
					"background": "#ffffff",
				});
			}
			//算钱
			addMoney($(this));
		});

		var meidian1 = false;
		$(document).on("click",".dian1",function() {
			if(meidian1 == false) {
				meidian1 = true;
				$(this).css({
					"border": "1px solid rgb(255,108,0)",
					"background": "url(img/img-c/c-6/a1.png) no-repeat center center #ffffff",
				});
				//加属性
				$(this).parents(".xiangqing").find(".yitiao .dian2").attr("color","aa");
			} else if(meidian1 == true) {
				meidian1 = false;
				$(this).css({
					"border": "1px solid rgb(211,211,211)",
					"background": "#ffffff",
				});
				//去属性
				$(this).parents(".xiangqing").find(".yitiao .dian2").attr("color","");
			}
			//算钱
			addMoney($(this));
		});

		$(document).on("click",".dian2", function() {
				if($(this).attr("color")) {
					$(this).attr("color", "");
					$(this).css({
						"border": "1px solid rgb(211,211,211)",
						"background": "#ffffff",
					});
				} else {
					$(this).attr("color", "aa");
					$(this).css({
						"border": "1px solid rgb(255,108,0)",
						"background": "url(img/img-c/c-6/a1.png) no-repeat center center #ffffff",
					});
				}
				adjustAll($(this));
				//算钱
				addMoney($(this));
			});
			//判断复选框
		$(document).on("click",".guige input", function() {
			if($(this).is(":checked")) {
				var a = $(this).parent(".guige").nextAll(".yitiao").find("input:nth-child(1)");
				a.prop("checked", true);
				a.next().css({
					"border": "1px solid rgb(255,108,0)",
					"background": "url(img/img-c/c-6/a1.png) no-repeat center center #ffffff",
				})
			} else {
				var b = $(this).parent(".guige").nextAll(".yitiao").find("input:nth-child(1)");
				b.prop("checked", false);
				b.next().css({
					"border": "1px solid rgb(211,211,211)",
					"background": "#ffffff",
				})
				$(this).parents(".xiangqing").find(".zongjine p:nth-of-type(2) span").html("0");
			}
		})

		//点击全选
		$(document).on("click",".piliangcaozuo a:nth-child(1)", function() {
			var c = $(this).parent(".piliangcaozuo").prevAll(".xiangqing").find("input:nth-child(1)");

			if(c.is(":checked")) {
				c.prop("checked", false);
				c.next().css({
					"border": "1px solid rgb(211,211,211)",
					"background": "#ffffff",
				});
				//去属性
				$(".dian2").attr("color","");
				meidian = false;
				meidian1 = false;
				addMoney($(".dian2"));
			} else {
				c.prop("checked", true);
				c.next().css({
					"border": "1px solid rgb(255,108,0)",
					"background": "url(img/img-c/c-6/a1.png) no-repeat center center #ffffff",
				});
				//加属性
				$(".dian2").attr("color","aa");
				meidian = true;
				meidian1 = true;
				addMoney($(".dian2"));
			}
		})

		//商品数量加减和价格加减
		$(document).on("click",".jian", function() {
			var shuliang = $(this).next(".shuliang").val();
			if(shuliang >= 1) {
				shuliang--;
				if(shuliang <= 1) {
					shuliang = 1;
				}
				var e = $(this).parent().prev().find("span").html();
				var f = (shuliang * e).toFixed(1);
				$(this).next(".shuliang").val(shuliang);
				$(this).parent().next().find("span").html(f);
				//商品金额
				var g = $(this).parents(".yitiao").siblings(".yitiao").find("div:nth-of-type(4) span");
				var h = 0;
				for(var i = 0; i < g.length; i++) {
					h += parseFloat($(g[i]).html());
//					alert(h);
				}
				var r = h * 1 + f * 1;
				$(this).parents(".xiangqing").find(".zongjine p:nth-of-type(2) span").html(r.toFixed(1));
				//总金额
				var j = $(this).parents(".xiangqing").find(".zongjine p:nth-of-type(2) span").html();
				var k = $(this).parents(".xiangqing").siblings(".xiangqing").find(".zongjine p:nth-of-type(2) span").html();
				var l = j * 1 + k * 1;
				$(".piliangcaozuo").find("span:nth-of-type(2) b").html(l.toFixed(1));
			}
			//算钱
			addMoney($(this));
		});

		$(document).on("click",".jia", function() {
			var shuliang = $(this).prev(".shuliang").val();
			if(shuliang != 0) {
				shuliang++;
				var e = $(this).parent().prev().find("span").html();
				var f = (shuliang * e).toFixed(1);
				$(this).prev(".shuliang").val(shuliang);
				$(this).parent().next().find("span").html(f);
				//商品金额
				var g = $(this).parents(".yitiao").siblings(".yitiao").find("div:nth-of-type(4) span");
				var h = 0;
				for(var i = 0; i < g.length; i++) {
					h += parseFloat($(g[i]).html());
				}
				var r = h * 1 + f * 1;
				$(this).parents(".xiangqing").find(".zongjine p:nth-of-type(2) span").html(r.toFixed(1));
				//总金额
				var j = $(this).parents(".xiangqing").find(".zongjine p:nth-of-type(2) span").html();
				var k = $(this).parents(".xiangqing").siblings(".xiangqing").find(".zongjine p:nth-of-type(2) span").html();
				var l = j * 1 + k * 1;
				$(".piliangcaozuo").find("span:nth-of-type(2) b").html(l.toFixed(1));
			}
			//算钱
			addMoney($(this));
		});

		//商品删除
		$(document).on("click",".shanchu", function() {
			var yitiaoId = $(this).parent(".yitiao").attr("ytId");
			var index;
			for (var i=0;i<a1.length;i++) {
				if (a1[i].id == yitiaoId) {
					index = i;
				}
			}			
			a1.splice(index,1);
			console.log(a1);
			var str1 = JSON.stringify(a1);
			localStorage.removeItem("a1");
			localStorage.setItem("a1",str1);
			$(this).parent(".yitiao").find(".dian2").attr("color","");
			//算钱
			addMoney($(this));
			$(this).parent(".yitiao").remove();
			//判断全空
			allEmpty();
		});

		//批量删除
		$(document).on("click",".piliangcaozuo a:nth-child(2)", function() {
			var d = $(this).parent(".piliangcaozuo").prevAll(".xiangqing").find(".yitiao .dian2");
			meidian = false;
			meidian1 = false;
			for(var i = 0; i < d.length; i++) {
				if($(d[i]).attr("color")) {
					var yitiaoId = $(d[i]).parent(".yitiao").attr("ytId");
//					console.log(yitiaoId);
					var index;
					for (var j=0;j<a1.length;j++) {
						if (a1[j].id == yitiaoId) {
							index = j;
						}
					}
//					console.log(index);
//					console.log(yitiaoId);
					a1.splice(index,1);
//					console.log(a1);
					var str1 = JSON.stringify(a1);
					localStorage.removeItem("a1");
					localStorage.setItem("a1",str1);
					//
					$(d[i]).attr("color","");
					addMoney($(d[i]));
					$(d[i]).parent().remove();
				}
			}
			//判断全空
			allEmpty();
		});
		//判断金额
		function addMoney(obj1){
			var money = 0;
			var yitiao = obj1.parents(".xiangqing").find(".yitiao");
			for (var i = 0; i< yitiao.length;i++) {
				if (yitiao.eq(i).find(".dian2").attr("color")) {
					var every = yitiao.eq(i).children().eq(7).find("span").html();
					money += every*1;
				}
			}
			//商品金额
			if (money > 0) {
				obj1.parents(".xiangqing").find(".zongjine p span").html(money.toFixed(1));
			} else{
				obj1.parents(".xiangqing").find(".zongjine p span").html(money);
			}
			//商品总计
			if ($(".neirong .piliangcaozuo span:nth-of-type(2) b")) {
				var totle1 = $(".xiangqing .zongjine span");
				var totleMoney = 0;
				for (var i = 0; i < totle1.length; i++) {
					totleMoney += totle1.eq(i).html()*1;
				}
				if (totleMoney > 0) {
					$(".neirong .piliangcaozuo span:nth-of-type(2) b").html(totleMoney.toFixed(1));
				} else{
					$(".neirong .piliangcaozuo span:nth-of-type(2) b").html(totleMoney);
				}
			}						
		}
		//判断全部选中
		function adjustAll(obj2){
			var yitiao = $(".xiangqing").eq(0).find(".yitiao");
			var check1 = true;
			for (var i = 0; i<yitiao.length;i++) {
				if (!$(yitiao[i]).find(".dian2").attr("color")) {
					check1 = false;
				}
			}
			if (check1) {
				meidian = true;
				obj2.parents(".xiangqing").find(".guige input").prop("checked",true);
				obj2.parents(".xiangqing").find(".dian").css({
					"border": "1px solid rgb(255,108,0)",
					"background": "url(img/img-c/c-6/a1.png) no-repeat center center #ffffff",
				});
			}else{
				meidian = false;
				obj2.parents(".xiangqing").find(".guige input").prop("checked",false);
				obj2.parents(".xiangqing").find(".dian").css({
					"border": "1px solid rgb(211,211,211)",
					"background": "#ffffff",
				});
			}
		}
		//判断全空
		function allEmpty(){
			if ($(".xiangqing").eq(0).find(".yitiao").length <= 0) {
				window.open("c-7.html");
				window.close();
			}
		}
		allEmpty();
		
		//点击去结算
		$(document).on("click",".piliangcaozuo button",function(){
			window.open("b-confirm-no-address.html","_self");
		});