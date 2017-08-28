var  num=true;
    		function  hide(x,y){
    				for(var i=x;i<=y;i++){
    					$(".on li").eq(i).hide();
    				}
    		}
    		function  show(m,n){
    				for(var i=m;i<=n;i++){
    					$(".on li").eq(i).show();
    				}
    		}
    		function  clicks(o,b,j){
    			$(".on li a").on("click",function(e){
    				e.preventDefault();
    			})
    			$(".on li").eq(o).on("click",function(){
	    			if(num==true){
	    				hide(b,j);
	    				num=false;
	    			}else{
	    				show(b,j);
	    				num=true;
	    			}
    		})
    		}
    		clicks(0,1,4);
    		clicks(5,6,10);
    		clicks(11,12,12)