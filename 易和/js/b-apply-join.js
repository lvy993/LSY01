//选择商户类型
		$(".mid .content .b-infor .sell-class span:nth-child(n+2)").on("click",function(){
			$(".mid .content .b-infor .sell-class span").attr("class","");
			$(this).attr("class","sel-cla");
		});
		
		
		//上传图片
		$(".mid .content .b-infor .b-photos .face .clicks .box").on("click",function(){
			$("#file").click();
		});
		$("#file").on("change",function(){
			alert("已选择");
		});
		$("#join-sub").on("click",function(){
			alert("已提交");
		});