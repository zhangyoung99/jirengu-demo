function $(id){
	return typeof id === 'string'?document.getElementById(id):id;
}

window.onload = function(){
    //获取鼠标滑过或点击的标签和要切换内容的元素
	var titles=$('notice-tit').getElementByTagName('li'), 
	    divs=$('notice-con').getElementByTagName('div');
	if(titles.length!=divs length){
		return;
	}
	for (var i = 0; i<titles.length; i++) {
		titles[i].id =i;
		titles[i].onclick=function(){
			alert(this.id);
		}
	}
}