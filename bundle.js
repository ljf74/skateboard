let e,x={};document.onkeydown=e=>{0>[37,38,39,40].indexOf(e.which)||e.preventDefault(),e.repeat||(x[e.which]=1)},document.onkeyup=e=>x[e.which]=0;let v=(e,x,v)=>e+v*(2*(x=(x-e)%(2*Math.PI))%(2*Math.PI)-x),t=(e,x,v)=>e+v*(x-e),a=(e,x,v)=>e.map(((e,a)=>t(e,x[a],v))),f=(e,x,v)=>e.map(((e,t)=>e+v*x[t])),r=(e,x)=>e[0]*x[0]+e[1]*x[1],l=e=>{if(!e)return'';let x=33*Math.max(0,(0|e)-10)/10,v=''+(0|x)%100;return(x/100|0)+'.'+(2>v.length?'0':'')+v},n=(e,x,v,t)=>{let a=[x[1],-x[0]],l=-r(e,x)*v,n=r(e,a)*t;return f([l*x[0],l*x[1]],a,n)},o=(e,x,v)=>(v=(e=>0>e?0:e>1?1:e)((v-e)/(x-e)))*v*(3-2*v),m=new(window.AudioContext||webkitAudioContext),i=e=>{console.log(e);let x=m.createBuffer(1,e.length,44100),v=m.createBufferSource();return x.getChannelData(0).set(e),v.buffer=x,v.connect(m.destination),v.start(),v},h=(e=1,x=.05,v=220,t=0,a=0,f=.1,r=0,l=1,n=0,o=0,m=0,i=0,h=0,M=0,y=0,u=0,s=0,w=1,d=0,p=0)=>{let B,z,A=2*Math.PI,D=n*=500*A/44100/44100,P=v*=(1+2*x*Math.random()-x)*A/44100,b=[],C=0,G=0,S=0,F=1,N=0,c=0,R=0;for(o*=500*A/44100**3,y*=A/44100,m*=A/44100,i*=44100,h=44100*h|0,z=(t=44100*t+9)+(d*=44100)+(a*=44100)+(f*=44100)+(s*=44100)|0;z>S;b[S++]=R)++c%(100*u|0)||(R=r?r>1?r>2?r>3?Math.sin((C%A)**3):Math.max(Math.min(Math.tan(C),1),-1):1-(2*C/A%2+2)%2:1-4*Math.abs(Math.round(C/A)-C/A):Math.sin(C),R=(h?1-p+p*Math.sin(A*S/h):1)*(R>0?1:-1)*Math.abs(R)**l*e*.3*(t>S?S/t:t+d>S?1-(S-t)/d*(1-w):t+d+a>S?w:z-s>S?(z-S-s)/f*w:0),R=s?R/2+(s>S?0:(z-s>S?1:(z-S)/s)*b[S-s|0]/2):R),B=(v+=n+=o)*Math.cos(y*G++),C+=B-B*M*(1-1e9*(Math.sin(S)+1)%2),F&&++F>i&&(v+=m,P+=m,F=0),!h||++N%h||(v=P,n=D,F=F||1);return b},M=e=>(x,v)=>[e(x[0],v[0]),e(x[1],v[1])],y=e=>Math.sqrt(r(e,e)),u=Math.max,s=M(Math.min),w=M(u),d=(p=Math.abs,e=>e.map(p));var p;let B,z,A,D,P,b,C,G,S,F,N,R,E,U,_,k,L,q,X,I,O,T,J=(e,x)=>f(e,x,-1),Y=(e,x)=>Math.max(Math.min(e,x),0)-y(s([e,x],[0,0])),Z=(e,x,v,t)=>y(J(e,[x,v]))-t,H=(e,x,v,t,a)=>{let r=f(d(J(e,[x,v])),[t,a],-.5);return y(w(r,[0,0]))+Math.min(Math.max(r[0],r[1]),0)},$=(e,x,v,t,a,l,n)=>{let o=[x,v],m=J([a,l],o);e=J(e,o);let i=r(m,m),h=t-n,M=((e,x)=>f([0,0],e,x))([r(e,[m[1],-m[0]]),r(e,m)],1/i),c=[Math.sqrt(i-h*h),h];M[0]=Math.abs(M[0]);let y=c[0]*M[1]-c[1]*M[0],u=r(M,M);return 0>y?Math.sqrt(i*u)-t:y>c[0]?Math.sqrt(i*(u+1-2*M[1]))-n:r(c,M)-t},j=[e=>{let x=[-1e4,-1e4];return x[0]=u(x[0],-H(e,11.43,101.05,192,200)),x[0]=Y(x[0],Z(e,111.93,78.66,50)),x[0]=Y(x[0],$(e,26.58,-2.89,25,127.67,-4.64,25)),[-1-x[0],-1-x[1]]},e=>{let x=[-1e4,-1e4];return x[0]=u(x[0],-H(e,19.38,52.48,50,100)),x[0]=u(x[0],-H(e,72.93,52.48,30,100)),[-1-x[0],-1-x[1]]},e=>{let x=[-1e4,-1e4];return x[0]=u(x[0],-H(e,-6.05,55.81,100,125)),x[0]=Y(x[0],H(e,-17.47,-12.52,50,30)),x[0]=Y(x[0],$(e,-61.74,-2.12,10,-15.66,-2.12,10)),[-1-x[0],-1-x[1]]},e=>{let x=[-1e4,-1e4];return x[0]=u(x[0],-H(e,-.07,97.01,150,250)),x[0]=Y(x[0],$(e,47.9,-32.4,20,-48.89,-32.43,20)),x[0]=Y(x[0],H(e,-11.32,-17.57,40,40)),x[0]=Y(x[0],$(e,-16.8,-1.87,10,-50.28,-11.81,20)),[-1-x[0],-1-x[1]]},e=>{let x=[-1e4,-1e4];return x[0]=u(x[0],-H(e,70.66,77.64,150,150)),x[0]=Y(x[0],H(e,65.84,55.43,31,150)),x[0]=Y(x[0],$(e,106.59,-4.28,20,23.88,-4.59,20)),[-1-x[0],-1-x[1]]},e=>{let x=[-1e4,-1e4];return x[0]=u(x[0],-H(e,44.34,48.78,98.1,94.01)),x[0]=Y(x[0],Z(e,44.24,1.15,40.99)),x[0]=u(x[0],-Z(e,43.92,-6.14,31.58)),[-1-x[0],-1-x[1]]},e=>{let x=[-1e4,-1e4];return x[0]=u(x[0],-H(e,-81.57,63.3,186.89,121.37)),x[0]=u(x[0],-H(e,-179.33,81.59,50,84.77)),x[0]=u(x[0],-H(e,86.89,3.76,154.4,245.33)),x[0]=Y(x[0],H(e,-91.59,-3.02,50,35.76)),x[0]=Y(x[0],Z(e,-24.02,.77,17.11)),x[0]=Y(x[0],Z(e,-47.7,4.65,13.44)),x[0]=Y(x[0],Z(e,-143.51,28.24,21.01)),x[0]=Y(x[0],Z(e,-66.33,11.06,15.48)),x[0]=Y(x[0],Z(e,-118.47,18.92,14.61)),x[0]=Y(x[0],Z(e,-93.42,19.8,19.27)),x[0]=Y(x[0],Z(e,-168.27,34.65,14.02)),x[0]=Y(x[0],H(e,-137.5,-.18,88.66,56.58)),[-1-x[0],-1-x[1]]},e=>{let x=[-1e4,-1e4];return x[0]=u(x[0],-H(e,4.15,43.37,300,300)),x[0]=Y(x[0],Z(e,34.45,6.64,17.83)),x[0]=Y(x[0],Z(e,-37.15,10.44,17.83)),x[0]=Y(x[0],$(e,.9,38.33,33.77,-.17,2.73,19)),x[0]=u(x[0],-$(e,.09,6.28,3.37,.23,28.86,22)),[-1-x[0],-1-x[1]]},e=>{let x=[-1e4,-1e4];return x[0]=u(x[0],-H(e,34.88,30.21,94.56,56)),x[0]=u(x[0],-H(e,72.57,18.35,39.11,79.54)),[-1-x[0],-1-x[1]]},e=>{let x=[-1e4,-1e4];return x[0]=u(x[0],-H(e,18.02,57.64,50,110)),x[0]=u(x[0],-H(e,89.57,42,50,110)),x[0]=u(x[0],-H(e,99.5,-32.11,30,10)),[-1-x[0],-1-x[1]]},e=>{let x=[-1e4,-1e4];return x[0]=u(x[0],-H(e,32.26,57.5,78.48,110.29)),x[0]=u(x[0],-H(e,204.79,72.98,170.1,145.49)),x[0]=u(x[0],-H(e,238.47,-62.76,103.2,132.51)),x[0]=Y(x[0],Z(e,186.82,-14.81,19.64)),x[0]=Y(x[0],H(e,69.71,1.22,45.61,15.62)),x[0]=Y(x[0],$(e,109.87,-3.83,13.73,137.12,13.48,14.86)),x[0]=Y(x[0],$(e,53.8,24.17,18.27,98.27,.24,7)),[-1-x[0],-1-x[1]]},e=>{let x=[-1e4,-1e4];return x[0]=u(x[0],-H(e,-37.78,111.78,150,250)),x[0]=Y(x[0],$(e,10.19,-17.63,20,-112.46,-17.07,20)),x[0]=Y(x[0],H(e,-49.04,.05,40,46.01)),x[0]=Y(x[0],$(e,-67.5,15.4,19.97,-121.84,15.23,20)),[-1-x[0],-1-x[1]]},e=>{let x=[-1e4,-1e4];return x[0]=u(x[0],-H(e,21.99,7.92,300,300)),x[0]=Y(x[0],$(e,-2.96,-14.13,16.57,39.05,-13.99,16.22)),x[0]=Y(x[0],$(e,17.3,4.69,16.91,17.84,-31.63,16.83)),[-1-x[0],-1-x[1]]},e=>{let x=[-1e4,-1e4];return x[0]=u(x[0],-H(e,45.89,34.25,100.82,64.41)),x[0]=u(x[0],-H(e,139.23,-50.95,97.76,83.02)),x[0]=Y(x[0],$(e,112.32,-8,18.32,164.92,-7.38,19.13)),x[0]=Y(x[0],$(e,76.77,1.57,15.46,109.6,12.15,4.75)),x[0]=Y(x[0],$(e,47.63,-4.25,15.9,18,-9.89,17.89)),x[0]=u(x[0],-$(e,115.26,-5.19,9.1,163.8,-5.3,12.67)),[-1-x[0],-1-x[1]]},e=>{let x=[-1e4,-1e4];return x[0]=u(x[0],-H(e,53.48,38.82,129.68,73.84)),x[0]=u(x[0],-H(e,213.53,-15.55,113.32,182.21)),x[0]=Y(x[0],Z(e,163.85,16.56,18.59)),x[0]=Y(x[0],$(e,99.87,18.08,27.15,76.56,-22.49,13.31)),x[0]=Y(x[0],H(e,63.62,6.32,93.34,17.12)),x[0]=Y(x[0],$(e,36.04,18.81,20.75,58.99,-23.85,5.62)),[-1-x[0],-1-x[1]]},e=>{let x=[-1e4,-1e4];return x[0]=u(x[0],-H(e,-.48,30.21,23.82,56)),x[1]=u(x[1],-H(e,17.31,30.83,9.17,47.52)),x[0]=u(x[0],-H(e,36.35,23.07,26.2,69.39)),[-1-x[0],-1-x[1]]},e=>{let x=[-1e4,-1e4];return x[0]=u(x[0],-H(e,26,31.55,76.82,58.69)),x[0]=u(x[0],-H(e,-33.82,19.82,50,82.48)),x[0]=Y(x[0],Z(e,-33.82,-22.67,23.9)),x[0]=Y(x[0],$(e,73.44,-2.32,19.03,23.69,-2.18,18.9)),x[1]=u(x[1],-H(e,-34.06,-28.47,9.41,7.92)),x[1]=u(x[1],-H(e,75.73,7.27,11.45,10.56)),[-1-x[0],-1-x[1]]},e=>{let x=[-1e4,-1e4];return x[0]=u(x[0],-H(e,71.31,40.04,154.04,75.27)),x[0]=Y(x[0],H(e,123.01,-.08,62.94,23.22)),x[0]=Y(x[0],$(e,90.44,6.87,15.38,26.29,.37,21.91)),x[1]=u(x[1],-Z(e,120.34,-5.81,7)),x[1]=u(x[1],-Z(e,91.29,-22.92,7)),x[1]=u(x[1],-Z(e,63.25,-38.83,7)),x[1]=u(x[1],-Z(e,32.02,-52.75,7)),[-1-x[0],-1-x[1]]},e=>{let x=[-1e4,-1e4];return x[0]=u(x[0],-H(e,39.98,43.37,104.77,130.66)),x[0]=u(x[0],-H(e,184.77,3.19,124.61,211.16)),x[1]=u(x[1],-H(e,116.24,-48.67,10,10)),x[1]=u(x[1],-Z(e,95.28,-75.1,7)),x[0]=u(x[0],-H(e,306.31,-200.32,185.13,157.26)),x[1]=u(x[1],-H(e,100.28,-157.86,10,10)),x[0]=Y(x[0],$(e,209.81,-101.05,84.85,281.55,-102.25,23.59)),x[0]=Y(x[0],$(e,98.67,-22.99,16.65,73.85,-23.84,17.34)),x[0]=Y(x[0],H(e,4.31,-20.09,50,44.52)),x[0]=Y(x[0],$(e,39.92,1.43,16.33,39.04,-32.99,18.53)),x[0]=u(x[0],-$(e,149.39,-163.71,5,226.38,-163.59,4.88)),[-1-x[0],-1-x[1]]}],K=0,Q=10,V=(e,v)=>(A=[0,0],C=b=P=z=B=R=D=G=0,_=e?x:{},U=[],{v:K&&!e?1e3:0,t:0,l:e?1.5:3,o:[0,0],g:0,m:1,i:K&&!e?[106.4,18.7]:[0,0],h:0,M:0,u:0,p:0,B:e?0:v}),W=(e,x,f)=>({v:t(e.v,x.v,f),t:t(e.t,x.t,f),l:t(e.l,x.l,f),o:a(e.o,x.o,f),g:x.g,m:x.m,i:a(e.i,x.i,f),h:v(e.h,x.h,f),M:x.M,u:x.u,p:t(e.p,x.p,f),B:x.B}),ee=h(...[1.56,.1,367,.01,.07,.08,1,.5,-4,,,,,,,,.09,0,.05]),xe=h(...[2,0,1,.1,.3,1,3,.6,,.6,30,,.35,,,,.18,.78,.1,.46]),ve=h(...[2,0,1,.1,.3,1,3,.6,,.6,35,,.35,,,,.18,.78,.1,.46]),te=[0,1,2,3].map((e=>h(...[,0,180*Math.pow(2,[0,2,5,7][e]/12),.05,,.25,1,1.67,,,,,,,9,.1,,.71,.15]))),ce=h(...[1.5,,355,.03,,.45,1,.9,,,120,.19,.06,.2,6.9,,,.9,.02]),ae=h(...[2,,80,.01,.03,.18,1,.3,-.2,-11.6,,,,,,,,,.01]),fe=h(...[1.08,,79,.05,.49,.67,,.45,,,1,.1,.16,,,.1,,.64,.04,.28]),re=h(...[1.43,,1487,,.03,.12,,.61,45,2.5,,.03,,.7,,.2,.05]),le=h(...[1.47,,115,.02,.07,,1,.37,6.3,,,,,,,,.03,.79,.01]),ne=(l,m,h,M)=>{let u=W(l,l,0),s=0;if(u.v++,R>0&&R--,0==u.M?1>u.t&&(u.t+=.1):0>u.t||(u.t-=2==u.M?.04:.1),m)x[27]&&0==u.M&&(u.M=3);else if(K=1,_=u.v>15&&25>u.v?{39:1,38:1}:{},u.v>200&&2!=u.M){let e=()=>i(ee);x[37]&&(e(),u.B--),x[39]&&(e(),u.B++),x[38]&&(e(),u.B-=6),x[40]&&(e(),u.B+=6),u.B=Math.max(0,Math.min(Math.min(17,M),u.B)),x[13]&&(i(xe),u.M=2)}if(2==u.M)u.u++,u.i[0]+=A[0],u.i[1]+=A[1];else{if(G)F+=N,D=f([0,0],[Math.cos(F),Math.sin(F)],S),u.i=f(D,G,1),A=f([0,0],f(u.i,l.i,-1),.5),(_[38]||_[40])&&(i(le),A=f([0,0],A,1.3),G=0,B=0,R=5);else{let x=0;u.t>.99&&0==u.M&&(_[38]&&B&&(A[1]-=.3,B=0,i(re)),_[40]&&!z&&(i(ee),.5>A[1]&&(A[1]=.5)),x=_[37]?-.015:_[39]?.015:0,b|=x?1:0,-1e-4>x*A[0]?x*=3:Math.abs(A[0])>.5&&(x=0),!B||_[37]||_[39]||(x=Math.abs(A[0])>.005?.005*-Math.sign(A[0]):-A[0]),_[37]&&(u.m=-1),_[39]&&(u.m=1)),D&&!S||(B&&Math.sign(E[0])==Math.sign(x)&&(x*=r([0,-1],E)),A[0]+=x,R||(A[1]+=.027+(_[40]&&A[1]>0?.027:0))),A[1]>1&&(A[1]=1),u.i=f(u.i,A,1),u.i[0]+=A[0],u.i[1]+=A[1],D=0;for(let x=0;e.length>x;++x)if(m&&2==e[x][0]){let v=[e[x][1],e[x][2]],t=f(u.i,v,-1),a=r(t,t);if(e[x][4]*e[x][4]>a&&(D=t,!S&&r(D,A)>0)){let e=Math.sqrt(a);i(fe),G=v,F=Math.atan2(D[1],D[0]),S=e,N=2*Math.sqrt(r(A,A))/e*Math.sign((w=A)[1]*(d=D)[0]-w[0]*d[1]),_[40]&&(_[40]=0)}}D||(S=0);let t=((e,x)=>{let v=j[e](x),t=Math.min(v[0],v[1]),a=j[e]([x[0]-.01,x[1]]),r=j[e]([x[0]+.01,x[1]]),l=j[e]([x[0],x[1]-.01]),n=j[e]([x[0],x[1]+.01]),o=Math.min(a[0],a[1]),m=Math.min(r[0],r[1]),i=Math.min(l[0],l[1]),h=[m-o,Math.min(n[0],n[1])-i];h=f([0,0],h,1/y(h));let M=j[e]([x[0]-.01,x[1]+.5]),u=j[e]([x[0]+.01,x[1]+.5]),s=j[e]([x[0],x[1]+.49]),w=j[e]([x[0],x[1]+.51]),d=Math.min(M[0],M[1]),p=Math.min(u[0],u[1]),B=Math.min(s[0],s[1]),z=[p-d,Math.min(w[0],w[1])-B];return z=f([0,0],z,1/y(z)),[h[0],h[1],t,v[0]>v[1]?1:0,z[0],z[1]]})(m,u.i);E=[t[0],t[1]];let a=t[3];B||-.1>E[1]?(1.5>t[2]?s=Math.atan2(t[4],-t[5]):(s=v(u.h,0,.25),B>0&&B--),1>t[2]&&(B||(P?.5>a&&i(ae):P=1),A=n(A,E,a,1),u.i=f(u.i,E,1-t[2]),a>.5?i(ce):B=5)):(s=v(u.h,0,.25),1>t[2]&&(A=n(A,E,a,1),u.i=f(u.i,E,1-t[2]),a>.5&&i(ce)))}G||D&&!S?(u.h=v(u.h,Math.atan2(D[0],-D[1]),.75),u.g=2):(u.h=s,u.g=B?0:_[40]?2:1),(m&&u.i[1]>Q||_[82])&&(u.M=1)}var w,d;U.push([A[0],A[1]]),U.length>30&&U.shift();let p=U.reduce(((e,x)=>f(e,x,1)),[0,0]);if(m&&b&&u.l>.7&&(u.l-=.01),u.o=f([u.i[0],u.i[1]],p,10/30),u.o[1]=Math.min(u.o[1],Q-10),!m){u.o=a(u.o,[155,32],o(100,300,u.v));let e=o(50,300,u.v);if(u.l=t(3,.4,1-(1-e)*(1-e)),!x[0])return u.v=0,u}1>e.filter((e=>!e[0])).length&&u.p++,Q=20;for(let x=0;e.length>x;++x){let v=f(u.i,e[x].slice(1),-1),t=r(v,v);3==e[x][0]&&(Q=e[x][2]),1==e[x][0]&&(2==u.M&&(A=f([0,0],A,.8)),u.p&&9>t&&2!=u.M&&(i(m%2?ve:xe),u.M=2,h[m-1]&&u.v>h[m-1]||(h[m-1]=u.v-1))),e[x][0]||(16>t&&(e[x][1]+=v[0]*Math.min(1,.5/t),e[x][2]+=v[1]*Math.min(1,.5/t)),3>t&&(i(te[C]),C=(C+1)%4,e.splice(x,1),x--))}return z=_[40],u},oe=[[[0,!0,0,-172,0,[[0,100,0,0],[2,0,220,12,-110,-14],[1,26,0,-27,30,-27,50,-27,160,-27]]],[12,!0,0,-172,0,[[0,100,0,0],[2,0,220,12,-110,-14],[1,26,0,-27,30,-27,50,-27,160,-27]]],[17,!0,0,-172,.4,[[0,100,0,0],[2,0,220,12,-110,-14],[1,26,0,-27,30,-27,50,-27,160,-27]]],[100,!1],[101,!1]],[[0,!0,0,-50,0,[[2,1,110,130,-55,0],[2,1,64,50,-32,-40],[1,50,21,0,61,9,110,46,132,98],[1,50,-21,0,-64,9,-115,42,-132,104],[1,50,-12,119,-56,128,-89,162,-106,223],[1,50,12,119,56,128,89,162,106,223]]],[5,!0,0,-50,0,[[2,1,110,130,-55,0],[2,1,64,50,-32,-40],[1,50,21,0,74,-22,126,-6,162,26],[1,50,-21,0,-74,-19,-147,-29,-169,37],[1,50,-3,120,-75,121,-106,169,-123,254],[1,50,9,119,55,122,113,97,53,164]]],[9,!0,0,-50,0,[[2,1,110,130,-55,0],[2,1,64,50,-32,-40],[1,50,21,0,75,-13,136,-26,191,-65],[1,50,-21,0,-76,-9,-126,-24,-167,-50],[1,50,-3,120,-89,105,-155,138,-96,202],[1,50,7,122,50,129,122,145,184,174]]],[12,!0,0,-50,0,[[2,1,110,130,-55,0],[2,1,64,50,-32,-40],[1,50,21,0,75,-13,136,-26,191,-65],[1,50,-21,0,-76,-9,-126,-24,-167,-50],[1,50,-3,120,-89,105,-155,138,-96,202],[1,50,7,122,50,129,122,145,184,174]]],[17,!0,0,-50,0,[[2,1,110,130,-55,0],[2,1,64,50,-32,-40],[1,50,21,0,77,-4,139,-8,211,-12],[1,50,-21,0,-101,9,-71,118,-7,214],[1,50,-3,120,-84,79,-81,115,-39,185],[1,50,7,122,60,136,132,192,166,292]]],[100,!1],[101,!1]],[[0,!0,0,200,0,[[1,50,-153,-34,-109,13,149,16,189,-34],[0,28,-92,62],[0,28,125,62]]],[5,!0,4,155,-.68,[[1,50,-153,-34,-109,13,149,16,189,-34],[0,28,-92,62],[0,28,125,62]]],[6,!1],[7,!0,66,200,2.95,[[1,50,-153,-34,-109,13,149,16,189,-34],[0,28,-92,62],[0,28,125,62]]],[8,!1],[9,!0,30,190,-.03,[[1,50,-153,-34,-109,13,149,16,189,-34],[0,28,-92,62],[0,28,125,62]]],[10,!1],[11,!0,78,220,3.13,[[1,50,-153,-34,-109,13,149,16,189,-34],[0,28,-92,62],[0,28,125,62]]],[12,!1],[13,!1],[14,!0,49,242,3.37,[[1,50,-153,-34,-109,13,149,16,189,-34],[0,28,-92,62],[0,28,125,62]]],[15,!1],[16,!0,13,185,.49,[[1,50,-153,-34,-109,13,149,16,189,-34],[0,28,-92,62],[0,28,125,62]]],[17,!0,8,178,.62,[[1,50,-153,-34,-109,13,149,16,189,-34],[0,28,-92,62],[0,28,125,62]]],[100,!1],[101,!1]],[[0,!1],[6,!0,40,171,-.32,[[1,90,-150,0,-50,0,50,0,150,0]]],[7,!1],[8,!0,54,184,-.2,[[1,90,-150,0,-50,0,50,0,150,0]]],[9,!1],[10,!0,50,200,.05,[[1,90,-150,0,-50,0,50,0,150,0]]],[11,!1],[12,!0,54,184,-.2,[[1,90,-150,0,-50,0,50,0,150,0]]],[13,!0,43,209,.18,[[1,90,-150,0,-50,0,50,0,150,0]]],[14,!1],[15,!0,43,209,.18,[[1,90,-150,0,-50,0,50,0,150,0]]],[16,!1],[101,!1]]],ge=[([e,x,v,t])=>{c.fillStyle='#f00',c.beginPath(),c.arc(v,t,x,0,2*Math.PI),c.fill()},([e,x,v,t,a,f,r,l,n,o])=>{c.lineWidth=x,c.beginPath(),c.moveTo(v,t),c.bezierCurveTo(a,f,r,l,n,o),c.stroke()},([e,x,v,t,a,f])=>{c.fillStyle=x?'#f00':'#000',c.fillRect(a,f,v,t)}],me=(e,x,v)=>!!e===e?e:Array.isArray(e)?e.map(((e,t)=>me(e,x[t],v))):e+v*(x-e),ie=0,he='uniform sampler2D T,S,BG0,BG1,BG2;uniform vec4 t,s,r;float x(vec2 x){return x=17.*fract(x*.31831+.1),fract(x.x*x.y*(x.x+x.y));}float n(vec2 v){vec2 m=floor(v),f=fract(v);f=f*f*(3.-2.*f);return mix(mix(x(m+vec2(0,0)),x(m+vec2(1,0)),f.x),mix(x(m+vec2(0,1)),x(m+vec2(1,1)),f.x),f.y);}float f(vec2 x){mat2 m=mat2(.88,.48,-.48,.88);float y=.5*n(x*=8.);y+=.25*n(x=m*x*2.01);y+=.125*n(x=m*x*2.02);y+=.0625*n(x=m*x*2.03);return y;}float v(vec2 v){return v.x=.25*sin(v.x),f(v);}float f(float x,float f){return max(min(x,f),0.)-length(min(vec2(x,f),0.));}float f(vec2 x,float v,float f,float y){return length(x-vec2(v,f))-y;}float f(vec2 x,float v,float f,float m,float y,float w){vec2 B=abs(x-vec2(v,f))-vec2(m,y)*.5;return length(max(B,0.))+min(max(B.x,B.y),0.);}float f(vec2 x,float v,float f,float m,float y,float w,float z){vec2 l=vec2(v,f),B=vec2(y,w)-l;x-=l;float n=dot(B,B),p=m-z;vec2 i=vec2(dot(x,vec2(B.y,-B.x)),dot(x,B))/n,d=vec2(sqrt(n-p*p),p);i.x=abs(i.x);float h=d.x*i.y-d.y*i.x,e=dot(i,i);return h<0.?sqrt(n*e)-m:h>d.x?sqrt(n*(e+1.-2.*i.y))-z:dot(d,i)-m;}vec2 M0(vec2 x){vec2 v=vec2(-10000);v.x=max(v.x,-f(x,11.43,101.05,192.,200.,0.));v.x=f(v.x,f(x,111.93,78.66,50.));v.x=f(v.x,f(x,26.58,-2.89,25.,127.67,-4.64,25.));return-1.-v;}vec2 M1(vec2 x){vec2 v=vec2(-10000);v.x=max(v.x,-f(x,19.38,52.48,50.,100.,0.));v.x=max(v.x,-f(x,72.93,52.48,30.,100.,0.));return-1.-v;}vec2 M2(vec2 x){vec2 v=vec2(-10000);v.x=max(v.x,-f(x,-6.05,55.81,100.,125.,0.));v.x=f(v.x,f(x,-17.47,-12.52,50.,30.,0.));v.x=f(v.x,f(x,-61.74,-2.12,10.,-15.66,-2.12,10.));return-1.-v;}vec2 M3(vec2 x){vec2 v=vec2(-10000);v.x=max(v.x,-f(x,-.07,97.01,150.,250.,0.));v.x=f(v.x,f(x,47.9,-32.4,20.,-48.89,-32.43,20.));v.x=f(v.x,f(x,-11.32,-17.57,40.,40.,0.));v.x=f(v.x,f(x,-16.8,-1.87,10.,-50.28,-11.81,20.));return-1.-v;}vec2 M4(vec2 x){vec2 v=vec2(-10000);v.x=max(v.x,-f(x,70.66,77.64,150.,150.,0.));v.x=f(v.x,f(x,65.84,55.43,31.,150.,0.));v.x=f(v.x,f(x,106.59,-4.28,20.,23.88,-4.59,20.));return-1.-v;}vec2 M5(vec2 x){vec2 v=vec2(-10000);v.x=max(v.x,-f(x,44.34,48.78,98.1,94.01,0.));v.x=f(v.x,f(x,44.24,1.15,40.99));v.x=max(v.x,-f(x,43.92,-6.14,31.58));return-1.-v;}vec2 M6(vec2 x){vec2 v=vec2(-10000);v.x=max(v.x,-f(x,-81.57,63.3,186.89,121.37,0.));v.x=max(v.x,-f(x,-179.33,81.59,50.,84.77,0.));v.x=max(v.x,-f(x,86.89,3.76,154.4,245.33,0.));v.x=f(v.x,f(x,-91.59,-3.02,50.,35.76,0.));v.x=f(v.x,f(x,-24.02,.77,17.11));v.x=f(v.x,f(x,-47.7,4.65,13.44));v.x=f(v.x,f(x,-143.51,28.24,21.01));v.x=f(v.x,f(x,-66.33,11.06,15.48));v.x=f(v.x,f(x,-118.47,18.92,14.61));v.x=f(v.x,f(x,-93.42,19.8,19.27));v.x=f(v.x,f(x,-168.27,34.65,14.02));v.x=f(v.x,f(x,-137.5,-.18,88.66,56.58,0.));return-1.-v;}vec2 M7(vec2 x){vec2 v=vec2(-10000);v.x=max(v.x,-f(x,4.15,43.37,300.,300.,0.));v.x=f(v.x,f(x,34.45,6.64,17.83));v.x=f(v.x,f(x,-37.15,10.44,17.83));v.x=f(v.x,f(x,.9,38.33,33.77,-.17,2.73,19.));v.x=max(v.x,-f(x,.09,6.28,3.37,.23,28.86,22.));return-1.-v;}vec2 M8(vec2 x){vec2 v=vec2(-10000);v.x=max(v.x,-f(x,34.88,30.21,94.56,56.,0.));v.x=max(v.x,-f(x,72.57,18.35,39.11,79.54,0.));return-1.-v;}vec2 M9(vec2 x){vec2 v=vec2(-10000);v.x=max(v.x,-f(x,18.02,57.64,50.,110.,0.));v.x=max(v.x,-f(x,89.57,42.,50.,110.,0.));v.x=max(v.x,-f(x,99.5,-32.11,30.,10.,0.));return-1.-v;}vec2 MA(vec2 x){vec2 v=vec2(-10000);v.x=max(v.x,-f(x,32.26,57.5,78.48,110.29,0.));v.x=max(v.x,-f(x,204.79,72.98,170.1,145.49,0.));v.x=max(v.x,-f(x,238.47,-62.76,103.2,132.51,0.));v.x=f(v.x,f(x,186.82,-14.81,19.64));v.x=f(v.x,f(x,69.71,1.22,45.61,15.62,0.));v.x=f(v.x,f(x,109.87,-3.83,13.73,137.12,13.48,14.86));v.x=f(v.x,f(x,53.8,24.17,18.27,98.27,.24,7.));return-1.-v;}vec2 MB(vec2 x){vec2 v=vec2(-10000);v.x=max(v.x,-f(x,-37.78,111.78,150.,250.,0.));v.x=f(v.x,f(x,10.19,-17.63,20.,-112.46,-17.07,20.));v.x=f(v.x,f(x,-49.04,.05,40.,46.01,0.));v.x=f(v.x,f(x,-67.5,15.4,19.97,-121.84,15.23,20.));return-1.-v;}vec2 MC(vec2 x){vec2 v=vec2(-10000);v.x=max(v.x,-f(x,21.99,7.92,300.,300.,0.));v.x=f(v.x,f(x,-2.96,-14.13,16.57,39.05,-13.99,16.22));v.x=f(v.x,f(x,17.3,4.69,16.91,17.84,-31.63,16.83));return-1.-v;}vec2 MD(vec2 x){vec2 v=vec2(-10000);v.x=max(v.x,-f(x,45.89,34.25,100.82,64.41,0.));v.x=max(v.x,-f(x,139.23,-50.95,97.76,83.02,0.));v.x=f(v.x,f(x,112.32,-8.,18.32,164.92,-7.38,19.13));v.x=f(v.x,f(x,76.77,1.57,15.46,109.6,12.15,4.75));v.x=f(v.x,f(x,47.63,-4.25,15.9,18.,-9.89,17.89));v.x=max(v.x,-f(x,115.26,-5.19,9.1,163.8,-5.3,12.67));return-1.-v;}vec2 ME(vec2 x){vec2 v=vec2(-10000);v.x=max(v.x,-f(x,53.48,38.82,129.68,73.84,0.));v.x=max(v.x,-f(x,213.53,-15.55,113.32,182.21,0.));v.x=f(v.x,f(x,163.85,16.56,18.59));v.x=f(v.x,f(x,99.87,18.08,27.15,76.56,-22.49,13.31));v.x=f(v.x,f(x,63.62,6.32,93.34,17.12,0.));v.x=f(v.x,f(x,36.04,18.81,20.75,58.99,-23.85,5.62));return-1.-v;}vec2 MF(vec2 x){vec2 v=vec2(-10000);v.x=max(v.x,-f(x,-.48,30.21,23.82,56.,0.));v.y=max(v.y,-f(x,17.31,30.83,9.17,47.52,0.));v.x=max(v.x,-f(x,36.35,23.07,26.2,69.39,0.));return-1.-v;}vec2 MG(vec2 x){vec2 v=vec2(-10000);v.x=max(v.x,-f(x,26.,31.55,76.82,58.69,0.));v.x=max(v.x,-f(x,-33.82,19.82,50.,82.48,0.));v.x=f(v.x,f(x,-33.82,-22.67,23.9));v.x=f(v.x,f(x,73.44,-2.32,19.03,23.69,-2.18,18.9));v.y=max(v.y,-f(x,-34.06,-28.47,9.41,7.92,0.));v.y=max(v.y,-f(x,75.73,7.27,11.45,10.56,0.));return-1.-v;}vec2 MH(vec2 x){vec2 v=vec2(-10000);v.x=max(v.x,-f(x,71.31,40.04,154.04,75.27,0.));v.x=f(v.x,f(x,123.01,-.08,62.94,23.22,0.));v.x=f(v.x,f(x,90.44,6.87,15.38,26.29,.37,21.91));v.y=max(v.y,-f(x,120.34,-5.81,7.));v.y=max(v.y,-f(x,91.29,-22.92,7.));v.y=max(v.y,-f(x,63.25,-38.83,7.));v.y=max(v.y,-f(x,32.02,-52.75,7.));return-1.-v;}vec2 MI(vec2 x){vec2 v=vec2(-10000);v.x=max(v.x,-f(x,39.98,43.37,104.77,130.66,0.));v.x=max(v.x,-f(x,184.77,3.19,124.61,211.16,0.));v.y=max(v.y,-f(x,116.24,-48.67,10.,10.,0.));v.y=max(v.y,-f(x,95.28,-75.1,7.));v.x=max(v.x,-f(x,306.31,-200.32,185.13,157.26,0.));v.y=max(v.y,-f(x,100.28,-157.86,10.,10.,0.));v.x=f(v.x,f(x,209.81,-101.05,84.85,281.55,-102.25,23.59));v.x=f(v.x,f(x,98.67,-22.99,16.65,73.85,-23.84,17.34));v.x=f(v.x,f(x,4.31,-20.09,50.,44.52,0.));v.x=f(v.x,f(x,39.92,1.43,16.33,39.04,-32.99,18.53));v.x=max(v.x,-f(x,149.39,-163.71,5.,226.38,-163.59,4.88));return-1.-v;}float m(vec2 v){vec2 x=M(v);return min(x.x,x.y);}vec4 m(vec2 x,float v){vec2 y=vec2(v,0),f=M(x+y.yx);float B=m(x-y.xy),n=m(x+y.xy),w=m(x-y.yx),i=min(f.x,f.y);return vec4(normalize(vec2(n-B,i-w)),i,.25*(float(B<=0.)+float(n<=0.)+float(w<=0.)+float(i<=0.))*(f.y<f.x?-1.:1.));}vec3 f(float x,float v,vec2 y){return vec3(1,.9,.7)*smoothstep(x,v,f(.1*y))+vec3(.7,.9,1)*smoothstep(x,v,f(.1*y+9.))+vec3(.12,.08,.12)*f(.0015*y+5.);}vec3 p(vec2 x){return x/=.2,x/=2048.,x+=.5,texture2D(BG0,x).xyz;}vec3 h(vec2 x){return x/=.2,x/=2048.,x+=.5,texture2D(BG1,x).xyz;}vec3 D(vec2 x){return x/=.2,x/=2048.,x+=.5,texture2D(BG2,x).xyz;}void main(){vec2 x=gl_FragCoord.xy-.5*vec2(1024,768),y=gl_FragCoord.xy/vec2(1024,768),B;y.y=1.-y.y;x.y*=-1.;B=.2*x+.2*t.xy;x=x/t.z/21.+t.xy;\n#ifdef BG\ngl_FragColor=vec4(f(t.x,t.y,B),1);\n#else\nvec4 i=texture2D(T,y),n=texture2D(S,y),d=m(x,.5/t.z/21.);vec3 w=vec3(0);if(d.w!=0.){float l=pow(max(0.,1.+.5*d.z),3.);if(d.w<0.)w=-d.w*(.1+.25*l)*vec3(.5);else{vec2 z=vec2(.3,0.),e=l>.01?B+20.*d.xy*l:B;w=.25*p(e+z.xy)+.25*p(e-z.xy)+.25*p(e+z.yx)+.25*p(e-z.yx);vec2 a=l>.01?.05*x+.2*vec2(d.y,-d.x)*l:.05*x;float c=fract(2.*(sin(a.x)+a.y));vec3 o=(.5+.5*smoothstep(.2,.3,c)*smoothstep(.8,.7,c))*r.xyz;w+=d.w*(.1+.5*l)*o;}}else w=p(B);vec2 e=2.*i.yz-1.;float l=length(e),c=max(0.,1.-l);if(i.x>25./255.){w+=c*exp(-3.*l)*8.*vec3(.12,.08,.12);if(s.w>.5){float a=clamp((i.x-.117647)/.117647,0.,1.);w+=a*c*exp(-10.*length(e))*5.*h(8.*vec2(atan(e.y,e.x)+.05*t.w,5.*(c-.05*t.w)));}}else if(i.x>15./255.){w-=pow(c,2.);vec2 a=vec2(atan(e.y,e.x)+.05*t.w,c-.01*t.w);vec3 z=vec3(.12,.08,.12)*mix(v(a),v(a+vec2(1.57,0)),.5);w+=(1.-exp(-5.*l))*c*10.*z;}else if(i.x>5./255.)w+=smoothstep(0.,.3,c)*10.*vec3(1,1,.5)*exp(-(8.+2.*sin(.5*t.w+(x.x+x.y)))*l);float a=n.x;w+=vec3(a)+vec3(1,1,.5)*pow(.5*max(0.,2.-length(x-s.xy)),2.75+.25*sin(.3*t.w));if(n.z>0.)w=clamp(w,0.,1.);w+=(vec3(.3)+D(x+9.+.05*t.w))*(n.y+.75*n.z);if(n.z>0.&&n.z<.5)w=mix(w,10.*n.z*vec3(.12,.08,.12),.5);gl_FragColor=vec4(min(vec3(1),w)*s.z,1);\n#endif\n}',Me=[],ye=c.createLinearGradient(-1,0,1,0);ye.addColorStop(0,'#000'),ye.addColorStop(1,'#0f0');let ue=c.createLinearGradient(0,-1,0,1);ue.addColorStop(0,'#000'),ue.addColorStop(1,'#00f');let se,we,de,pe=['Click to play','Use the arrows','Use the ramp','Use momentum','Press down to become heavy','Press R to restart','','','Use the black hole','','','','','','','Use the rubber block'],Be=(e,x,v)=>(0>v&&(v+=1),v>1&&(v-=1),1/6>v?e+6*(x-e)*v:.5>v?x:2/3>v?e+(x-e)*(2/3-v)*6:e),ze=e=>{let x=g.createShader(35633),v=g.createShader(35632),t=g.createProgram();return g.shaderSource(x,'attribute vec4 a;uniform vec4 P0,P1;void main(){gl_Position=P0+P1*a;}'),g.compileShader(x),g.shaderSource(v,e),g.compileShader(v),g.attachShader(t,x),g.attachShader(t,v),g.linkProgram(t),g.deleteShader(v),g.deleteShader(x),t},Ae=x=>{e=[[[0,57.01,19.73],[0,61.3,19.65],[0,52.41,19.82],[0,47.84,19.91],[2,155,32,2,50],[3,158.84,236.64]],[[0,56.05,-1.21],[0,51.69,-2.01],[0,47.16,-1.21],[1,85.47,-2.48]],[[0,23.35,-8.65],[0,27.11,-8.65],[0,19.59,-8.55],[0,-43.24,5.77],[0,-40.16,5.74],[0,-36.98,5.69],[1,-7.36,-5.04]],[[0,-67.24,-6.84],[0,-64.65,-1.51],[0,-61.03,2.44],[0,-55.83,4.74],[0,65.54,-34.85],[0,65.66,-30.87],[0,11.19,-14.16],[0,14.66,-14.16],[1,35.77,-18.18]],[[0,65.68,10.95],[0,53.58,12.4],[0,78.17,11.9],[1,135.3,-6.75]],[[0,82.52,1.93],[0,82.27,5.38],[0,81.7,9],[0,6.02,1.6],[0,6.18,5.08],[0,6.91,8.67],[1,44.26,-42.05],[3,44,44.75]],[[0,-168.4,46.48],[0,-141.5,47.23],[0,-116.84,31.54],[0,-92.48,36.47],[0,-66.48,24.51],[0,-47.05,16.15],[0,-24.03,15.85],[1,-193.19,31.66],[3,-144.55,58.75]],[[0,-51.73,5.74],[0,48.98,1.6],[0,-52.66,9.62],[0,49.83,5.57],[0,.22,69.85],[0,-3.31,69.34],[0,-6.69,68.84],[0,3.85,69.6],[0,7.56,69.09],[1,-.19,-4.71],[3,-.44,80.42]],[[0,43.62,-23.02],[0,44.05,-26.7],[0,45.12,-30.06],[1,86.83,-26.93],[2,35.44,-10.49,2,10]],[[0,132.85,-39.31],[0,132.83,-42.44],[0,117.74,-39.57],[0,89.15,-18.62],[0,132.79,-45.31],[1,89.58,-43.89],[2,44.62,-10.17,2,10],[2,126.32,-26.08,2,10]],[[0,142.12,24.9],[0,147.19,20.7],[0,149.53,14.4],[0,38.5,21.07],[0,38.43,28.59],[0,42.37,34.96],[1,153.4,-22.7],[2,57.87,3.23,2,10],[2,133.47,-8.26,2,10],[3,54.02,46.96]],[[0,-87.54,32.55],[0,-93.45,32.62],[0,27.83,-20.08],[0,27.82,-23.93],[0,27.95,-16.1],[0,-46.41,8.25],[0,-42.57,2.02],[0,-36.11,-1.76],[0,-99.66,32.68],[0,-13.11,-.17],[0,-18.78,-.17],[0,-7.91,-.17],[1,33.4,-18.28],[2,-126.24,23.49,2,10],[3,-49.52,41.37]],[[0,-13.12,-23.52],[0,-17.05,-13.86],[0,-12.89,-4.09],[0,48.63,-3.75],[0,52.9,-14.08],[0,48.29,-24.53],[0,9.55,-43.17],[0,25.91,-43.82],[0,17.5,19.05],[0,25.77,16.27],[0,9.04,16.63],[1,17.87,-44.21],[2,17.55,-14.04,2,18],[3,17.39,44.97]],[[0,97.48,-12.9],[0,100.95,-18.71],[0,106.36,-22.59],[0,64.1,3.22],[0,66.35,9.35],[0,71.66,13.63],[0,61.69,-9.5],[0,171.64,-22.69],[0,177.05,-19.11],[0,180.62,-12.89],[1,195.15,-14.89],[2,112.88,24.53,2,15],[2,190.58,2.07,2,10],[3,112.77,43.67]],[[0,19.01,3.48],[0,19.3,7.9],[0,19.36,11.64],[0,179.07,21.9],[0,179.96,16.53],[0,178.69,11.04],[1,-7.64,-1.95],[2,68.43,-.84,2,15],[3,40.85,43.98]],[[0,16.97,4.09],[0,18.83,-7.5],[0,17.7,-1.65],[0,19.95,-13.2],[1,46.07,-15.12]],[[0,8.4,2.52],[0,10.55,7.24],[0,13.68,10.53],[0,18.44,13.16],[0,-12.62,-20.86],[0,-13.11,-16.42],[0,-14.92,-12.64],[0,-54.7,-20.69],[0,-53.71,-16.42],[0,-52.07,-11.98],[1,-33.99,-65.41]],[[0,91.48,-34.15],[0,64.03,-49.66],[0,116.34,-16.44],[0,102.62,10.6],[0,100.98,14.67],[0,7.54,2.84],[0,8.53,8.21],[0,10.92,12.59],[0,32.4,-63.59],[1,32.09,-77.37],[3,49.71,25.12]],[[0,55.01,-20.39],[0,54.89,-16.94],[0,54.59,-13.7],[0,25.98,2.39],[0,26.66,5.6],[0,28.01,8.55],[0,96.19,-84.77],[0,116.14,-56.37],[0,129.24,-85],[0,130.35,-80.06],[0,131.71,-75.37],[0,133.32,-71.17],[0,135.42,-66.23],[0,137.39,-61.78],[0,139.62,-57.83],[0,142.09,-54],[0,145.17,-50.05],[0,148.02,-46.59],[0,151.1,-43.38],[1,62.3,-182.08],[2,105.37,-22.02,2,15],[2,271.34,-76.84,2,40]]][x],T=Me[x],g.useProgram(T)},De=0,Pe=(()=>{let e=0,x=0,v=0,t=0,a=0,f=0,r=0,l=0;return(n,o,m)=>{let i=2*Math.PI*n/11025,h=Math.sin(i),M=Math.cos(i),y=h*Math.sinh(Math.log(2)*i/h),u=1-M,s=1+y;a=u/2/s,f=u/s,r=-2*M/s,l=(1-y)/s,m[0]=a*o[0]+f*e+a*x-r*v-l*t,m[1]=a*o[1]+f*o[0]+a*e-r*m[0]-l*v;for(let e=2;512>e;++e)m[e]=a*o[e]+f*o[e-1]+a*o[e-2]-r*m[e-1]-l*m[e-2];e=o[511],x=o[510],v=m[511],t=m[510]}})(),be=new Float32Array(512),Ce=new Float32Array(512),Ge=new Float32Array(512),Se=0,Fe=0,Ne=()=>{let e=new(window.AudioContext||window.webkitAudioContext)({sampleRate:11025}),x=e.createScriptProcessor(512,0,1);x.connect(e.destination),x.onaudioprocess=e=>(e=>{if(0>De)De=0;else{for(let e=0;512>e;++e){let x=(De+e)/11025;be[e]=2*Math.random()-1,Ge[e]=.75*Math.sin(195*x*Math.PI)*Math.sin(.1*x),Ge[e]+=.75*Math.sin(218.88009942*x*Math.PI)*Math.cos(.19*x),Ge[e]+=.75*Math.sin(260.29377156*x*Math.PI)*Math.sin(.39*x),Ge[e]+=.25*Math.sin(390*x*Math.PI)*Math.sin(.03*x)}Pe(150+25*Math.sin(2e-5*De),be,Ce);for(let x=0;512>x;++x)e[x]=Fe*Se*.3*(.5*Ce[x]+.3*Ge[x]);1>Se&&(Se+=.1),De+=512}})(e.outputBuffer.getChannelData(0)),Ne=()=>{}},Re=0,Ee=NaN,Ue=0,_e=[],ke=()=>{requestAnimationFrame(ke);let v=performance.now();for(isNaN(Ee)&&(Ee=v),Re+=Math.min(v-Ee,1e3),Ee=v;Re>33;)Re-=33,we=se,se=ne(se,Ue,_e,de),0===(t=se.g)&&(ie=0),1===t&&(ie+=1)>12&&(ie-=4),2===t&&(12>ie&&(ie=12),(ie+=1)>17&&(ie=17)),x[38]=0,Ue||2==se.M||(x[40]=x[37]=x[39]=0);var t;if(((x,v,t)=>{c.fillStyle='#000',c.fillRect(0,0,1024,768);let a=c.globalCompositeOperation;c.globalCompositeOperation='lighter';for(let x=0;e.length>x;++x){if(3==e[x][0])continue;let v=e[x][1],a=e[x][2],f=1==e[x][0]?4:2==e[x][0]?e[x][4]:1;c.save(),c.translate(512+21*(v-t.o[0])*t.l,384+21*(a-t.o[1])*t.l),c.scale(21*t.l*f,21*t.l*f);let r=10+[0,20+t.p|0,10][e[x][0]];r=Math.min(255,r).toString(16),c.fillStyle=`#${(2>r.length?'0':'')+r}0000`,c.fillRect(-1.1,-1.1,2.2,2.2),c.fillStyle=ye,c.fillRect(-1.1,-1.1,2.2,2.2),c.fillStyle=ue,c.fillRect(-1.1,-1.1,2.2,2.2),c.clearRect(-1.2,-1.2,.2,2.4),c.clearRect(-1.2,-1.2,2.4,.2),c.clearRect(1,-1.2,.2,2.4),c.clearRect(-1.2,1,2.4,.2),c.restore()}if(g.activeTexture(33984),g.bindTexture(3553,L),g.texImage2D(3553,0,6408,6408,5121,C1),c.globalCompositeOperation=a,c.fillStyle='#000',c.fillRect(0,0,1024,768),(e=>{c.strokeStyle='#f00',c.lineCap='round';for(let x=0;oe.length>x;++x){let v=oe[x],t=0,a=0;if(v.length>1){for(a=1;v.length-1>a&&ie>=v[a][0];)a++;t=a-1}let f=v[t],r=v[a],l=t==a?0:(ie-f[0])/(r[0]-f[0]),n=f[1]&&r[1]?me(f,r,l):f;n[1]&&(c.save(),c.translate(512+21*(e.i[0]-e.o[0])*e.l,384+21*(e.i[1]-e.o[1])*e.l),c.scale(.075*e.l,.075*e.l),c.rotate(e.h),c.translate(e.m*n[2],n[3]),c.scale(e.m,1),c.rotate(n[4]),n[5].forEach((e=>ge[e[0]](e))),c.restore())}})(t),pe[x]&&(c.save(),c.textAlign='left',c.translate(512-21*t.o[0]*t.l,384-21*t.o[1]*t.l),c.scale(t.l,t.l),c.strokeStyle='#030',c.lineWidth=8,c.lineJoin='round',c.fillStyle='#0f0',x?(c.font='italic bold 42px Arial',c.strokeText(pe[x],-315,-189),c.fillText(pe[x],-315,-189)):(c.font='italic bold 24px Arial',c.strokeText(pe[x],-70,-90),c.fillText(pe[x],-70,-90)),c.restore()),x)c.save(),c.fillStyle='#f00',c.font='32px Courier',c.textAlign='right',c.fillText(l(t.v-t.u),1010,42),c.restore();else{c.save(),c.translate(512-21*t.o[0]*t.l,384-21*t.o[1]*t.l),c.scale(t.l,t.l),c.fillStyle='#0f0',c.strokeStyle='#030',c.lineWidth=25,c.lineJoin='round',c.textAlign='center',c.font='italic bold 378px Arial',c.strokeText('GALAXY',3255,168),c.strokeText('RIDER',3255,483),c.fillText('GALAXY',3255,168),c.fillText('RIDER',3255,483),c.font='84px Arial',c.fillText('Use Arrows and Enter to Select Level',3255,1512),c.restore();for(let e=0;18>e;++e){c.save(),c.translate(512-21*t.o[0]*t.l,384-21*t.o[1]*t.l),c.scale(t.l,t.l),c.fillStyle=c.strokeStyle=e==t.B?'#00f':e>v.length?'#003':'#007',c.lineWidth=21*(e==t.B?1:.25);let x=115+e%6*14,a=33+10*(e/6|0);c.strokeRect(21*x,21*a,252,168),c.font=(e==t.B?'bold ':'')+'63px Courier',c.textAlign='center',c.fillText(e+1,21*(x+6),21*(a+3)),c.font='bold 53px Courier',v.length>e&&c.fillText(l(v[e]),21*(x+6),21*(a+7)),c.restore()}}var f;g.activeTexture(33985),g.bindTexture(3553,k),g.texImage2D(3553,0,6408,6408,5121,C1),g.activeTexture(33986),g.bindTexture(3553,q),g.activeTexture(33987),g.bindTexture(3553,X),g.activeTexture(33988),g.bindTexture(3553,I),g.uniform4f(g.getUniformLocation(T,'P0'),0,0,0,0),g.uniform4f(g.getUniformLocation(T,'P1'),1,1,1,1),g.uniform1i(g.getUniformLocation(T,'T'),0),g.uniform1i(g.getUniformLocation(T,'S'),1),g.uniform1i(g.getUniformLocation(T,'BG0'),2),g.uniform1i(g.getUniformLocation(T,'BG1'),3),g.uniform1i(g.getUniformLocation(T,'BG2'),4),g.uniform4f(g.getUniformLocation(T,'t'),t.o[0],t.o[1],t.l,t.v),g.uniform4f(g.getUniformLocation(T,'s'),t.i[0],t.i[1],t.t,t.p),g.uniform4fv(g.getUniformLocation(T,'r'),(e=>{let x,g,v,t=.84,a=.36;return x=Be(a,t,e+1/3),g=Be(a,t,e),v=Be(a,t,e-1/3),[x,g,v,0]})((0==(f=x)&&(f=1),(.85-.25*((f-=1)/7|0)+(f%=7)/7*.1)%1))),g.bindBuffer(34962,O);let r=g.getAttribLocation(T,'a');g.enableVertexAttribArray(r),g.vertexAttribPointer(r,2,5120,!1,0,0),g.drawArrays(4,0,3)})(Ue,_e,W(we,se,Re/33)),Fe=se.t,0>se.t){let e=Math.min(17,_e.length);if(de=_e.length,3==se.M)e=Ue-1,Ue=0;else if(Ue){if(2==se.M){try{window.localStorage.setItem('galaxyrider',JSON.stringify(_e))}catch(e){}Ue++}Ue%=19,0===Ue&&alert('Congrats!')}else Ue=se.B+1;se=we=V(Ue,e),Ee=NaN,Ae(Ue)}};try{let e=window.localStorage.getItem('galaxyrider');e&&(_e.length=0,_e.push(...JSON.parse(e)))}catch(e){}(()=>{g.getExtension('OES_texture_float'),k=g.createTexture(),g.bindTexture(3553,k),g.texImage2D(3553,0,6408,1024,768,0,6408,5121,null),g.texParameteri(3553,10241,9728),g.texParameteri(3553,10240,9728),g.texParameteri(3553,10242,33071),g.texParameteri(3553,10243,33071),L=g.createTexture(),g.bindTexture(3553,L),g.texImage2D(3553,0,6408,1024,768,0,6408,5121,null),g.texParameteri(3553,10241,9728),g.texParameteri(3553,10240,9728),g.texParameteri(3553,10242,33071),g.texParameteri(3553,10243,33071),q=g.createTexture(),g.bindTexture(3553,q),g.texImage2D(3553,0,6408,2048,2048,0,6408,5121,null),g.texParameteri(3553,10241,9729),g.texParameteri(3553,10240,9729),g.texParameteri(3553,10242,10497),g.texParameteri(3553,10243,10497),X=g.createTexture(),g.bindTexture(3553,X),g.texImage2D(3553,0,6408,2048,2048,0,6408,5121,null),g.texParameteri(3553,10241,9729),g.texParameteri(3553,10240,9729),g.texParameteri(3553,10242,10497),g.texParameteri(3553,10243,10497),I=g.createTexture(),g.bindTexture(3553,I),g.texImage2D(3553,0,6408,2048,2048,0,6408,5121,null),g.texParameteri(3553,10241,9729),g.texParameteri(3553,10240,9729),g.texParameteri(3553,10242,10497),g.texParameteri(3553,10243,10497),O=g.createBuffer(),g.bindBuffer(34962,O),g.bufferData(34962,Uint8Array.of(1,1,1,128,128,1),35044);for(let e=-1;18>=e;++e)Me.push(ze('precision highp float;'+(0>e?'\n#define BG\n'+he.replace('M0','M'):he.replace('M'+e.toString(36).toUpperCase(),'M'))));let e=Me.shift();g.useProgram(e);let x=g.getAttribLocation(e,'a'),v=(v,t,a)=>{let f=g.createFramebuffer();g.bindFramebuffer(36160,f),g.framebufferTexture2D(36160,36064,3553,v,0),g.viewport(0,0,2048,2048),g.uniform4f(g.getUniformLocation(e,'P0'),0,0,0,0),g.uniform4f(g.getUniformLocation(e,'P1'),1,1,1,1),g.uniform4f(g.getUniformLocation(e,'t'),t,a,0,0),g.bindBuffer(34962,O),g.enableVertexAttribArray(x),g.vertexAttribPointer(x,2,5120,!1,0,0),g.drawArrays(4,0,3)};v(q,.73,.9),v(X,0,1),v(I,.3,1),g.bindFramebuffer(36160,null),g.viewport(0,0,1024,768)})(),se=we=V(Ue,Math.min(17,de=_e.length)),Ae(Ue),ke(),C0.onmousedown=()=>{Ne(),x[0]=1};