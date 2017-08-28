//点击收起
		$(document).on("click",".mid .content .content-list .con-detail dl dt",function(e){
			var those = $(this).siblings();
			if (those.height()) {
				those.animate({
					"height":"0px",
				},300);
				$(this).find("span").css({
					"webkitTransform": "rotateZ(45deg)",
					"mozTransform": "rotateZ(45deg)",
					"msTransform": "rotateZ(45deg)",
					"oTransform": "rotateZ(45deg)",
					"transform":" rotateZ(45deg)",
				});
			}else{
				those.animate({
					"height":"36px",
				},300);
				$(this).find("span").css({
					"webkitTransform": "rotateZ(-45deg)",
					"mozTransform": "rotateZ(-45deg)",
					"msTransform": "rotateZ(-45deg)",
					"oTransform": "rotateZ(-45deg)",
					"transform":" rotateZ(-45deg)",
				});
			}
			
		});	