//-------------------------------------
function Ajax2(path2,txt2,obj2){
	var AJAX1;
	var AJAX1_Val="";
	obj2.innerHTML='<img src="http://inc.dog35.cn/images/loading.gif" />';
	if (window.XMLHttpRequest){
		AJAX1 = new XMLHttpRequest();
	}else{
		if (window.ActiveXObject){
			AJAX1 = new ActiveXObject("Microsoft.XMLHTTP");
		}
	}
	AJAX1.onreadystatechange=function(){ 
	if (4==AJAX1.readyState){}
	} 
	AJAX1.open("POST",path2,true); 
	AJAX1.setRequestHeader("If-Modified-Since","0");
	AJAX1.setRequestHeader("Content-Length", txt2.length);
	AJAX1.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	AJAX1.send(txt2);
	//AJAX1_Val=AJAX1.responseText;
	//obj2.innerHTML=AJAX1_Val;
}
//-------------------------------------
function vchar(str){
	return escape(str).replace(/\+/g, '%2B').replace(/\"/g,'%22').replace(/\'/g,'%27').replace(/\//g,'%2F').replace(/\&/g,'%26');
}
//------------------- 图片轮换展示
function imgFlashPlay(swf_width,swf_height,files,texts,links){
	var config='6|0xffffff|0x000000|50|0xffffff|0x000000|0x000000';
	var str='';
	str=str+'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="'+ swf_width +'" height="'+ swf_height +'">';
	str=str+'<param name="movie" value="http://inc.dog35.cn/swf/focus.swf" />';
	str=str+'<param name="quality" value="high" />';
	str=str+'<param name="menu" value="false" />';
	str=str+'<param name=wmode value="opaque" />';
	str=str+'<param name="FlashVars" value="config='+config+'&bcastr_flie='+files+'&bcastr_link='+links+'&bcastr_title='+texts+'" />';
	str=str+'<embed src="http://inc.dog35.cn/swf/focus.swf" wmode="opaque" FlashVars="config='+config+'&bcastr_flie='+files+'&bcastr_link='+links+'&bcastr_title='+texts+'& menu="false" quality="high" width="'+ swf_width +'" height="'+ swf_height +'" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />';
	str=str+'</object>';
	document.write(str);
}
//------------------- FLASH播放
function flashPlay(file,width,height,marginleft,margintop,style){var obj;if (style==1){obj='<embed src="'+file+'"; quality="high" wmode="transparent" style="width:'+width+'px;height:'+height+'px; position:absolute;margin-left:'+marginleft+'px;margin-top:'+margintop+'px;"></embed>';}else if(style==2){obj='<object id="flash_obj" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="'+width+'" height="'+height+'"><param name="movie" value="'+file+'" /><param name="quality" value="high" /><param name="wmode" value="opaque" /><embed src="'+file+'" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="'+width+'" height="'+height+'"></embed></object>';}document.write(obj);}
//------------------- 自动缩小图片
function autoThumb(ImgD,W,H){var image=new Image();var iwidth = W;var iheight = H;image.src=ImgD.src;if(image.width>0 && image.height>0){if(image.width/image.height>= iwidth/iheight){if(image.width>iwidth){ImgD.width=iwidth;ImgD.height=(image.height*iwidth)/image.width;}else{ImgD.width=image.width;ImgD.height=image.height;}}else{if(image.height>iheight){ImgD.height=iheight;ImgD.width=(image.width*iheight)/image.height;}else{ImgD.width=image.width;ImgD.height=image.height;}}}} 
//------------------- 加入收藏夹
function AddFavorite(sURL,sTitle){try{window.external.addFavorite(sURL, sTitle);}catch (e){try{window.sidebar.addPanel(sTitle,sURL,"");}catch (e){alert("加入收藏失败，请使用Ctrl+D进行添加");}}}
//------------------- 音乐播放
function musicPlay(music){
	var str='<embed class="filter" type="application/x-shockwave-flash" src="http://inc.dog35.cn/swf/dewplayer-multi.swf" width="60" height="20" flashvars="son='+music+'&autoplay=1&autoreplay=1&showtime=1&volume=100" wmode="transparent" quality="high"></embed>';
	document.write(str);
}
//-------------------- 留言板
function FbAddBoxLoad(objn){
	var str='<table border="0">';
	str=str+'<tr><th>您的称呼：</th><td><input type="text" id="fb1" maxlength="20" class="fb_inpt1" /> （必填）</td></tr>';
	str=str+'<tr><th>联系地址：</th><td><input type="text" id="fb2" maxlength="20" class="fb_inpt1" /></td></tr>';
	str=str+'<tr><th>联系电话：</th><td><input type="text" id="fb3" maxlength="20" class="fb_inpt1" /> （必填，仅填写数字）</td></tr>';
	str=str+'<tr><th>电子邮箱：</th><td><input type="text" id="fb4" maxlength="20" class="fb_inpt1" /> 为您保密</td></tr>';
	str=str+'<tr><th>QQ号码：</th><td><input type="text" id="fb5" maxlength="20" class="fb_inpt1" /> 仅填写数字，为您保密</td></tr>';
	str=str+'<tr><th>留言内容：</th><td><textarea id="fb6" class="fb_inpt2" onkeyup="fdMsgNumCheck()"></textarea> 必填，最多100字</td></tr>';
	str=str+'<tr><td colspan="2"><input type="button" class="fb_bnt1" value="" onclick="FbAddChk()" /> <span id="fbTip"></span></td></tr>';
	str=str+'</table>'
	var obj1=document.getElementById(objn);
	obj1.innerHTML=str
}

function FbAddBoxLoadEn(objn){
	var str='<table border="0">';
	str=str+'<tr><th>Your Name：</th><td><input type="text" id="fb1" maxlength="20" class="fb_inpt1" /> (not null)</td></tr>';
	str=str+'<tr><th>Address：</th><td><input type="text" id="fb2" maxlength="20" class="fb_inpt1" /></td></tr>';
	str=str+'<tr><th>Telephone：</th><td><input type="text" id="fb3" maxlength="20" class="fb_inpt1" /> (not null)</td></tr>';
	str=str+'<tr><th>Email：</th><td><input type="text" id="fb4" maxlength="20" class="fb_inpt1" /></td></tr>';
	str=str+'<tr><th>MSN：</th><td><input type="text" id="fb5" maxlength="20" class="fb_inpt1" /> (not null)</td></tr>';
	str=str+'<tr><th>Message：</th><td><textarea id="fb6" class="fb_inpt2" onkeyup="fdMsgNumCheck()"></textarea> (not null)</td></tr>';
	str=str+'<tr><td colspan="2"><input type="button" class="fb_bnt1" value="" onclick="FbAddChkEn()" /> <span id="fbTip"></span></td></tr>';
	str=str+'</table>'
	var obj1=document.getElementById(objn);
	obj1.innerHTML=str
}

//-------------------------------------
function fdMsgNumCheck() { 
	var regC = /[^ -~]+/g; 
	var regE = /\D+/g; 
	var obj1=document.getElementById("fb6");
	var str=obj1.value; 
	if (regC.test(str)){ 
		obj1.value = obj1.value.substr(0,100); 
	} 
	if(regE.test(str)){ 
		obj1.value = obj1.value.substr(0,200); 
	} 
}

//-------------------------------------
function FbAddChk(){
	var obj1=document.getElementById("fb1");
	var obj3=document.getElementById("fb3");
	var obj4=document.getElementById("fb4");
	var obj5=document.getElementById("fb5");
	var obj6=document.getElementById("fb6");
	//-------------
	var email =/^[a-zA-Z0-9_\-]{1,}@[a-zA-Z0-9_\-]{1,}\.[a-zA-Z0-9_\-.]{1,}$/;
	//-------------
	if(obj1.value.length == 0 || obj1.value.replace(/(^\s*)|(\s*$)/g, "")==""){
		alert("请填写您的称呼");
		obj1.focus();
		return false;
	}else if(obj3.value.length == 0 || obj3.value.replace(/(^\s*)|(\s*$)/g, "")==""){
		alert("请填写您的联系电话");
		obj3.focus();
		return false;
	}else if(isNaN(obj3.value)){    
		alert('电话号码仅允许填写数字');
		obj3.focus();
		return false;  
	}else if(obj4.value.length != 0 && obj4.value.replace(/(^\s*)|(\s*$)/g, "")!="" && !email.exec(obj4.value)){    
		alert('请输入正确的邮箱地址');
		obj4.focus();
		return false;  
	}else if(obj5.value.length != 0 && obj5.value.replace(/(^\s*)|(\s*$)/g, "")!="" && isNaN(obj5.value)){    
		alert('QQ号码仅允许填写数字');
		obj5.focus();
		return false;  
	}else if(obj6.value.length == 0 || obj6.value.replace(/(^\s*)|(\s*$)/g, "")==""){
		alert("请填写您的留言内容");
		obj6.focus();
		return false;
	}else{
		var path="ajax.asp?act="+escape("FbAddChk");
		var txt="fb1="+escape(vchar(document.getElementById("fb1").value));
		txt=txt+"&fb2="+escape(vchar(document.getElementById("fb2").value));
		txt=txt+"&fb3="+escape(vchar(document.getElementById("fb3").value));
		txt=txt+"&fb4="+escape(vchar(document.getElementById("fb4").value));
		txt=txt+"&fb5="+escape(vchar(document.getElementById("fb5").value));
		txt=txt+"&fb6="+escape(vchar(document.getElementById("fb6").value));
		txt=txt+"&sid="+escape(vchar(document.getElementById("sid").value));
		txt=txt+"&kid="+escape(vchar(document.getElementById("kid").value));
		txt=txt+"&itemid="+escape(vchar(document.getElementById("itemid").value));
		txt=txt+"&st="+escape(vchar(document.getElementById("st").value));
		var tip=document.getElementById("fbTip");
		Ajax2(path,txt,tip);
		alert("您的留言已经提交成功，感谢您的留言！");
		window.setTimeout(function(){window.location.reload();},1000);
	}
}

function FbAddChkEn(){
	var obj1=document.getElementById("fb1");
	var obj3=document.getElementById("fb3");
	var obj4=document.getElementById("fb4");
	var obj5=document.getElementById("fb5");
	var obj6=document.getElementById("fb6");
	//-------------
	var email =/^[a-zA-Z0-9_\-]{1,}@[a-zA-Z0-9_\-]{1,}\.[a-zA-Z0-9_\-.]{1,}$/;
	//-------------
	if(obj1.value.length == 0 || obj1.value.replace(/(^\s*)|(\s*$)/g, "")==""){
		alert("Your name cannot be null");
		obj1.focus();
		return false;
	}else if(obj3.value.length == 0 || obj3.value.replace(/(^\s*)|(\s*$)/g, "")==""){
		alert("Your telephone number cannot be null");
		obj3.focus();
		return false;
	}else if(isNaN(obj3.value)){    
		alert('Phone number to allow only fill digital');
		obj3.focus();
		return false;  
	}else if(obj4.value.length != 0 && obj4.value.replace(/(^\s*)|(\s*$)/g, "")!="" && !email.exec(obj4.value)){    
		alert('Please enter a correct email address');
		obj4.focus();
		return false;  
	}else if(obj6.value.length == 0 || obj6.value.replace(/(^\s*)|(\s*$)/g, "")==""){
		alert("Please enter your message");
		obj6.focus();
		return false;
	}else{
		var path="ajax.asp?act="+escape("FbAddChk");
		var txt="fb1="+escape(vchar(document.getElementById("fb1").value));
		txt=txt+"&fb2="+escape(vchar(document.getElementById("fb2").value));
		txt=txt+"&fb3="+escape(vchar(document.getElementById("fb3").value));
		txt=txt+"&fb4="+escape(vchar(document.getElementById("fb4").value));
		txt=txt+"&fb5="+escape(vchar(document.getElementById("fb5").value));
		txt=txt+"&fb6="+escape(vchar(document.getElementById("fb6").value));
		txt=txt+"&sid="+escape(vchar(document.getElementById("sid").value));
		txt=txt+"&kid="+escape(vchar(document.getElementById("kid").value));
		txt=txt+"&itemid="+escape(vchar(document.getElementById("itemid").value));
		txt=txt+"&st="+escape(vchar(document.getElementById("st").value));
		var tip=document.getElementById("fbTip");
		Ajax2(path,txt,tip);
		alert("Your message has been successfully submitted, Thanks for your message!");
		window.setTimeout(function(){window.location.reload();},1000);
	}
}
//------------------------------------- 图片横向滚动
function imgScroll(objn,scrollSpeed){
	var obj=document.getElementById(objn);
	var obj1=document.getElementById(objn+"_1");
	var obj2=document.getElementById(objn+"_2");
	//-------
	obj2.innerHTML=obj1.innerHTML;
	//-------
	function Marquee1(){
		if(obj2.offsetWidth-obj.scrollLeft<=0){
			obj.scrollLeft-=obj1.offsetWidth;
		}else{
			obj.scrollLeft++;
		}
	}
	//-------
	function Marquee2(){
		clearInterval(MyMar1);
		if(obj2.offsetWidth-obj.scrollLeft>=0){
			obj.scrollLeft+=obj1.offsetWidth;
		}else{
			obj.scrollLeft--;
		}
		MyMar1=setInterval(Marquee2,scrollSpeed);
	}
	//-------
	var MyMar1=setInterval(Marquee1,scrollSpeed);
	obj.onmouseover=function(){clearInterval(MyMar1)}
	obj.onmouseout=function(){MyMar1=setInterval(Marquee1,scrollSpeed)}
}
//------------------------------------- 图片延迟加载