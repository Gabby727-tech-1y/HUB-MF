function b(c,d){const e=a();return b=function(f,g){f=f-(0x2084+-0xd87+-0x12fd);let h=e[f];return h;},b(c,d);}const l=b;(function(c,d){const k=b,e=c();while(!![]){try{const f=parseInt(k(0x0))/(0x1685+-0x33b*0xa+0x9ca)+parseInt(k(0x1))/(0x1df5+-0x67*0x55+0x440)*(parseInt(k(0x2))/(0x2*0x8c5+0xafc+-0x1c83*0x1))+-parseInt(k(0x3))/(0x1*-0xc4b+-0x7d*0x4b+0x1877*0x2)*(parseInt(k(0x4))/(0xfd0+0x1529+-0xac*0x37))+parseInt(k(0x5))/(0x5*0x373+0x76d*-0x4+-0x5*-0x27f)+parseInt(k(0x6))/(-0x4db*-0x3+-0xcc3+-0x5b*0x5)+parseInt(k(0x7))/(0x6*-0x63a+0x1*0x1165+-0x13ff*-0x1)+parseInt(k(0x8))/(0x4*0x97c+-0x1901*0x1+0xce6*-0x1)*(-parseInt(k(0x9))/(0x165e*0x1+0x50d*-0x6+-0x2*-0x3fd));if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,-0x8e12b+0x3*0xfcdd+0x1*0xcb391));function a(){const q=['status','xlcva','remoteJid','JqtDw','Simulates\x20','typing.','xjBbc','ZOZoO','Display\x20th','e\x20current\x20','status\x20of\x20','the\x20bot.','tools','Inactive','Enabled','Disabled','Current\x20st','Active','KidHW','Always\x20onl','Yes','Fake\x20typin','g:\x20','waXCW','Wwgcd','131944raGmee','4yIxxmm','79878DZYSfq','3968UQawqJ','3440HBgGrT','1379850PvDzMy','2542498lnhFgY','5377872qwjszc','46953BxtqjG','620QOimmz','path','ings','../command','Sends\x20typi','ng\x20status.','composing','available','rOohY','sendPresen','ceUpdate','GwvRA','key','EKgHN','Sets\x20bot\x20s','tatus\x20as\x20a','r\x20unavaila','ble.'];a=function(){return q;};return a();}const fs=require('fs'),path=require(l(0xa)),{CURRENT_STATUS,ALWAYS_ONLINE,FAKE_TYPING}=require('../../sett'+l(0xb)),{cmd,commands}=require(l(0xc));cmd({'pattern':'body','react':'📝','desc':l(0xd)+l(0xe),'category':'status','filename':__filename},async(c,d,e,{body:f,reply:g})=>{const m=b,h={'rOohY':function(i,j){return i===j;},'GwvRA':m(0xf),'EKgHN':m(0x10)};h[m(0x11)](CURRENT_STATUS,!![])?c[m(0x12)+m(0x13)](h[m(0x14)],d[m(0x15)]['remoteJid']):c[m(0x12)+m(0x13)](h[m(0x16)],d[m(0x15)]['remoteJid']);}),cmd({'pattern':l(0x10),'react':'🟢','desc':l(0x17)+l(0x18)+'vailable\x20o'+l(0x19)+l(0x1a),'category':l(0x1b),'filename':__filename},async(c,d,e,{isOwner:f,reply:g})=>{const n=b,h={'xlcva':n(0x10),'JqtDw':'unavailabl'+'e'};ALWAYS_ONLINE===!![]?c[n(0x12)+n(0x13)](h[n(0x1c)],d['key'][n(0x1d)]):c[n(0x12)+'ceUpdate'](h[n(0x1e)],d[n(0x15)][n(0x1d)]);}),cmd({'pattern':l(0xf),'react':'✍️','desc':l(0x1f)+l(0x20),'category':l(0x1b),'filename':__filename},async(c,d,e,{body:f,reply:g})=>{const o=b,h={'xjBbc':function(i,j){return i===j;},'ZOZoO':o(0xf)};h[o(0x21)](FAKE_TYPING,!![])&&c[o(0x12)+o(0x13)](h[o(0x22)],d['key'][o(0x1d)]);}),cmd({'pattern':l(0x1b),'react':'⚙️','desc':l(0x23)+l(0x24)+l(0x25)+l(0x26),'category':l(0x27),'filename':__filename},async(c,d,e,{reply:f})=>{const p=b,g={'KidHW':p(0x28),'PxpUV':p(0x29),'waXCW':p(0x2a),'Wwgcd':function(i,j){return i(j);}};let h='Bot\x20status'+':\x0a';h+=p(0x2b)+'atus:\x20'+(CURRENT_STATUS?p(0x2c):g[p(0x2d)])+'\x0a',h+=p(0x2e)+'ine:\x20'+(ALWAYS_ONLINE?p(0x2f):'No')+'\x0a',h+=p(0x30)+p(0x31)+(FAKE_TYPING?g['PxpUV']:g[p(0x32)]),g[p(0x33)](f,h);});