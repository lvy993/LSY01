for(var i=0;i<40;i++) {
		var car = $('<div class="cars">'+
					'<div class="car">'+
						'<img src="img/img-b/b-car1.png"/>'+
						'<span>同城汽车装饰中心</span>'+
					'</div>'+
					'<span>李杰</span>'+
					'<span>188695963265</span>'+
					'<span>浙江省台州市温岭市人民西路2号</span>'+
				'</div>');
			$(".mid .sto-con .sellers .b-pages").before(car);
		}
		//商家二级
		function seller(){
			var sellers = ["手机商家","电脑及配件","厨房电器件","智能生活","显示器"];
			$(".mid .sto-con .menu ul li").on("mouseenter",function(){
				$(".mid .sto-con .menu .menu-det").empty();
				for (var i = 0;i<2;i++) {					
					var det = $('<div class="detail"></div>');
					for (var j = 0;j<sellers.length;j++) {
						var name = getRandom(0,4);
						var every = $('<a href="###">'+sellers[name]+'</a>');
						det.append(every);					
					}
					$(".mid .sto-con .menu .menu-det").append(det);
				}				
			});
		}
		seller();
		//左边列表
		$(".mid .sto-con .menu ul li").on("mouseenter",function(){
			$(".mid .sto-con .menu ul li").attr("class","");
			$(this).attr("class","se-li");
		});
		$(document).on("click",".mid .sto-con .menu .menu-det .detail a",function(){
			$(".mid .sto-con .menu ul li a").children("strong,b").remove();
			var txt = $(this).text();
			var addCon = $("<strong>></strong><b>"+txt+"</b>");
			$(".mid .sto-con .menu ul .se-li").find("span").eq(0).after(addCon);
			
		});
		
		$(".mid .sto-con .sellers .cars").on("click",function(){
			window.location.href = "c-1.html";
		});