/* 楼层跳转/* 

	/*1.初始化
		 * gddw  display:none
	2.获取元素
		 lctz : 11
		 gddw > li 11
	3.控制Jump显示隐藏
		 * window.onscroll
		 * 滚动条当前的位置 wTop  document.body
		 	 document.documentElements  window
		 	 * wTop > lctz[i].offsetTop-200 + 'px'
				 * jump display block;
	4.wTop >= lctz[i].offsetTop
		*gddw background red;
	5.操作gddw给他添加点击事件
		*gddw onclick
			*滚动条当前的位置wTOP = lctz[i].offsetTop*/
	let lctz = document.querySelectorAll('.lctz');
	let gddw = document.querySelectorAll('.gddw>li');

	let jump = document.querySelector('.gddw');

	let obj = document.documentElement.scrollTop?document.documentElement:document.body;
	var num;

	window.onscroll = function(){
		let wTop = document.documentElement.scrollTop || document.body.scrollTop || window.scrollY || window.pageYOffset;
		if(wTop > lctz[0].offsetTop -150){
			jump.style.display = 'block';
		}else{
			jump.style.display = 'none';
		}
	}