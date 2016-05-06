function getShortenedBrowserVersion(e){return e&&e.indexOf("-")>-1&&(e=e.split("-")[1]),e}function loadJSON(e,t,s){var n=new XMLHttpRequest;n.onreadystatechange=function(){n.readyState===XMLHttpRequest.DONE&&(200===n.status?t&&t(JSON.parse(n.responseText)):s&&s(n))},n.open("GET",e,!0),n.send()}var caniuseDataUrl="https://raw.githubusercontent.com/Fyrd/caniuse/master/fulldata-json/data-2.0.json",featureID=location.href.split("?feat=")[1],featureID=featureID?featureID.split("&periods=")[0]:null,periods=location.href.split("&periods=")[1],periods=periods?periods.split(","):null,browsers=["ie","edge","firefox","chrome","safari","opera","ios_saf","op_mini","android","and_chr"];featureID&&periods?document.getElementById("defaultMessage").innerHTML='<a href="http://caniuse.com/#feat='+featureID+'">Can I Use '+featureID+"?</a> Data on support for the "+featureID+" feature across the major browsers from caniuse.com. (Embed Loading)":document.getElementById("defaultMessage").innerHTML="Error: Feature and/or Periods not Specified";for(var i=periods.length-1;i>-1;i--){var tableCells='<td class="ie"></td><td class="edge"></td><td class="firefox"></td><td class="chrome"></td><td class="safari"></td><td class="opera"></td><td class="ios_saf"></td><td class="op_mini"></td><td class="android"></td><td class="and_chr"></td>',row=document.createElement("tr");row.className="statistics "+periods[i],row.innerHTML=tableCells,document.getElementById("tableBody").appendChild(row)}loadJSON(caniuseDataUrl,function(e){var t=e.data[featureID];if(t){var s=t.usage_perc_y,r=t.usage_perc_a,a=s+r,a=a.toFixed(2),o=t.description;o=o.replace(/</g,"&lt;"),o=o.replace(/>/g,"&gt;"),document.getElementById("featureTitle").innerHTML=t.title,document.getElementById("featureDescription").innerHTML=o,document.getElementById("featureLink").href="http://caniuse.com/#feat="+featureID,document.getElementById("note").innerHTML='Global: <span class="y">'+s+'%</span> + <span class="a">'+r+"%</span> = "+a+"%";for(var i={},d=0;d<browsers.length;d++){for(var l,c=browsers[d],u=e.agents[c].current_version,f=0;f<e.agents[c].version_list.length;f++)if(0===e.agents[c].version_list[f].era){l=f;break}l=parseInt(l),i[c]={};for(var f=0;f<periods.length;f++){var p=periods[f];"current"===p?i[c][p]=u:p.indexOf("past")>-1?(n=parseInt(p.split("_")[1]),i[c][p]=e.agents[c].version_list[l-n]?e.agents[c].version_list[l-n].version:null):p.indexOf("future")>-1&&(n=parseInt(p.split("_")[1]),i[c][p]=e.agents[c].version_list[l+n]?e.agents[c].version_list[l+n].version:null)}}for(var g={},d=0;d<browsers.length;d++){var c=browsers[d];g[c]={};for(var f=0;f<periods.length;f++){var p=periods[f],m=i[c][p],h=e.agents[c].usage_global[m],h=h?h.toFixed(2):0;g[c][p]=h}}for(var v={},d=0;d<browsers.length;d++){var c=browsers[d];v[c]={};for(var f=0;f<periods.length;f++){var p=periods[f];v[c][p]=t.stats[c][i[c][p]]}}for(var y=!1,b=!1,d=0;d<browsers.length;d++)for(var c=browsers[d],f=0;f<periods.length;f++){for(var I,p=periods[f],E=document.getElementsByClassName(p)[0],w=E.childNodes,_=0;_<w.length;_++)w[_].className.indexOf(c)>-1&&(I=w[_]);void 0!=v[c][p]?I.className+=" "+v[c][p]:!1;var B=getShortenedBrowserVersion(i[c][p]),M="<span>"+B+'</span><span class="usage">'+g[c][p]+"%</span>";void 0!=i[c][p]?I.innerHTML=M:I.innerHTML="<span></span>",void 0!=v[c][p]&&v[c][p].indexOf("x")>-1&&(y=!0),void 0!=v[c][p]&&v[c][p].indexOf("u")>-1&&(b=!0)}y?document.getElementById("legendX").style.display="inline-block":document.getElementById("legendX").style.display="none",b?document.getElementById("legendU").style.display="inline-block":document.getElementById("legendU").style.display="none"}else document.getElementById("featureTitle").innerHTML="Uh Oh!",document.getElementById("featureDescription").innerHTML="The feature <strong>'"+featureID+"'</strong> was not recognized. ",document.getElementById("featureMain").innerHTML="";document.getElementById("defaultMessage").style.display="none",document.getElementsByClassName("feature")[0].style.display="block";var L=document.getElementsByClassName("feature")[0].scrollHeight,T="ciu_embed:"+featureID+":"+L;parent.postMessage(T,"*"),window.onresize=function(e){L=document.getElementsByClassName("feature")[0].scrollHeight;var t="ciu_embed:"+featureID+":"+L;parent.postMessage(t,"*")}},function(e){document.getElementById("defaultMessage").innerHTML="Error Getting JSON File: "+e.response,console.error(e)});