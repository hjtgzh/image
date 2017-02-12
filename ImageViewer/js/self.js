var dripX = "";
var dripY = "";

function displayCoord(event){//获取鼠标在该图片上的x,y坐标
	var div = $(".iv-image-wrap");
	var top = getY(div);
	var left = getX(div);
	dripX = event.pageX - left;
	dripY = event.pageY - top;
	// console.log(event)
}
/*window.onload = function(){
	$(".iv-image-wrap").mouseover(function(){
	  displayCoord(event)
	});
}*/

function getY(obj){
	var top = obj.offset().top;
	return top;
}
function getX(obj){
	var left = obj.offset().left;
	return left;
}

/*function position(x,y){//松开鼠标调用的方法获得X,Y坐标
	console.log(x)
	console.log(y)
}*/
var dot = [];
function startDot(){//开启打点
	$(".iv-large-image").mouseup(
		function(){
			var x = dripX;
			var y = dripY;
			console.log(x)
			console.log(y)

			//获取变化后图片的大小
      var photo = document.getElementsByClassName('iv-large-image')[0];
			console.log(photo.style.top)
			console.log(photo.style.left)
			//滚轮滚动后的scale值
			var scale = parseFloat(photo.style.height)/350;
			console.log(scale)

			// 把x,y的坐标返回成变化后的值,否则放大后加点会出bug
			dot.push({"x":(x-parseFloat(photo.style.left))/scale,"y":(y-parseFloat(photo.style.top))/scale})
			var hash = {};
			//数组去重
			dot = dot.reduce(function(item, next) {
		    hash[next.x] ? '' : hash[next.x] = true && item.push(next);
		    return item
			}, [])
			start(dripX,dripY);
		}
	)
}
//关闭打点
function closeDot(){
	$(".iv-large-image").off("mouseup");
}
function start(x,y){
	 var x = x;
	 var y = y;
	 var html = "";
	 html+="<div id='"+x+"' onclick='showModal("+x+","+y+")' class='point' style='left:"+x+"px;top:"+y+"px;position:absolute;display:inline-block'></div>"
	 $(".iv-image-wrap").append(html);
}
//获取打点的坐标
function showModal(x,y){
	console.log(x)
	console.log(y)
}