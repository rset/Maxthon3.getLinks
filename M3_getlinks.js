try
{
	var Links = document.links;
	var Pre = document.getElementsByTagName('pre');
	var i = 0, linkSayisi = Links.length;
	var downloadLinks = new Array();
	var stil = "position:fixed;top:0px;font:1.0em Verdana,Helvetica,sans-serif;padding:10px;height:auto;width:auto;z-index:99;background:#CC3333;";
	var images = document.getElementsByTagName('img');
//FFF8C6
	for(var ii=0; ii<images.length; ++ii)
	{
		images[ii].style.display='none';
	}

	for (i=0; i<linkSayisi; i++)
	{
		if(Links[i].href.match(/http(s)?\:\/\/(www\.)?rapid|hotfile|uploaded|ul.to|freakshare|bitshare|rockdizfile.+/g) 
		&& (!Links[i].href.match(/.+ref|register.+/g)))
		{
			downloadLinks.push(Links[i]);		
		}
	}
	//http://rockdizfile.com/78ik31f6nog9/Y%C4%B1ld%C4%B1z_Tilbe_-_Sana_Kalbim_Ge%C3%A7ti_(2012)mp3yolu.org.mp3.html
	var downloadLinksSayi = downloadLinks.length;
	
	if ( downloadLinksSayi>0)
	{
		var d = document.createElement('div');
		d.setAttribute("style", stil);
		d.innerHTML+=document.getElementsByTagName('title')[0].innerHTML+"<br />\n";
		d.innerHTML+=document.location.href+"<br /><br />\n";
		for (var j=0; j<downloadLinksSayi; ++j)
		{
			d.innerHTML += downloadLinks[j] + "<br />\n";
		}
		document.body.appendChild(d);
	}
	
	//    <pre></pre>
	 else if(Pre.length>0)
	{	
		var d =document.createElement('div');
		d.setAttribute("style", stil);
		d.innerHTML+=document.getElementsByTagName('title')[0].innerHTML+"<br />\n";
		d.innerHTML+=document.location.href+"<br /><br />\n";
		for(i=0;i<Pre_count;i++)
		{
			d.innerHTML+= Pre[i].innerText+"<br>\n\r";
			
		}
		document.body.insertBefore(d, document.body.firstChild);
	}
}
catch(e)
{
//	alert(e);
}