//轮播图
		var timer;
		var currentIndex = 0;
		function move(){
			clearInterval(timer);
			timer = setInterval(function(){
				currentIndex++;
				$(".b-win .content").animate({
					left:(-100)*currentIndex+"%",
				},800,function(){
					if (currentIndex >= 5) {
						currentIndex = 0;
						$(".b-win .content").css("left",0);					
					}
					adjustPointer();
				});
			},2000);
		}
		move();
		//小圆点
		function adjustPointer(){
			$(".b-win .win-foot .sel-point").attr("class","");
			$(".b-win .win-foot span").eq(currentIndex).attr("class","sel-point");
		}
		//圆点点击事件
		$(".b-win .win-foot span").on("click",function(){
			clearInterval(timer);
			currentIndex = $(this).index();
			adjustPointer();
			$(".b-win .content").animate({
				left:(-100)*currentIndex+"%",
			},500,function(){
				move();
			});			
		});
		//滑动
		$(".mid .car-der .der-top .car-class a").on("mouseenter",function(){
			var index = $(this).index();
			$(".mid .car-der .der-top .car-class .slip").animate({
				left:(134*index)+"px"
			},300);
		});
		$(".mid .brand .br-con td").on("click",function(){
			window.location.href = "c-1.html";
		});
		$(".mid .car-der .car-con .cars").on("click",function(){
			window.location.href = "c-1.html";
		});
