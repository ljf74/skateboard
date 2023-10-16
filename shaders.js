/* File generated with Shader Minifier 1.1.6
 * http://www.ctrl-alt-test.fr
 */

var main_frag =
 "uniform sampler2D T,S,BG0,BG1,BG2;" +
 "uniform vec4 t,s,r;" +
 "float x(vec2 x)" +
 "{" +
   "return x=17.*fract(x*.31831+.1),fract(x.x*x.y*(x.x+x.y));" +
 "}" +
 "float n(vec2 v)" +
 "{" +
   "vec2 m=floor(v),f=fract(v);" +
   "f=f*f*(3.-2.*f);" +
   "return mix(mix(x(m+vec2(0,0)),x(m+vec2(1,0)),f.x),mix(x(m+vec2(0,1)),x(m+vec2(1,1)),f.x),f.y);" +
 "}" +
 "float f(vec2 x)" +
 "{" +
   "mat2 m=mat2(.88,.48,-.48,.88);" +
   "float y=.5*n(x*=8.);" +
   "y+=.25*n(x=m*x*2.01);" +
   "y+=.125*n(x=m*x*2.02);" +
   "y+=.0625*n(x=m*x*2.03);" +
   "return y;" +
 "}" +
 "float v(vec2 v)" +
 "{" +
   "return v.x=.25*sin(v.x),f(v);" +
 "}" +
 "float f(float x,float f)" +
 "{" +
   "return max(min(x,f),0.)-length(min(vec2(x,f),0.));" +
 "}" +
 "float f(vec2 x,float v,float f,float y)" +
 "{" +
   "return length(x-vec2(v,f))-y;" +
 "}" +
 "float f(vec2 x,float v,float f,float m,float y,float w)" +
 "{" +
   "vec2 B=abs(x-vec2(v,f))-vec2(m,y)*.5;" +
   "return length(max(B,0.))+min(max(B.x,B.y),0.);" +
 "}" +
 "float f(vec2 x,float v,float f,float m,float y,float w,float z)" +
 "{" +
   "vec2 l=vec2(v,f),B=vec2(y,w)-l;" +
   "x-=l;" +
   "float n=dot(B,B),p=m-z;" +
   "vec2 i=vec2(dot(x,vec2(B.y,-B.x)),dot(x,B))/n,d=vec2(sqrt(n-p*p),p);" +
   "i.x=abs(i.x);" +
   "float h=d.x*i.y-d.y*i.x,e=dot(i,i);" +
   "return h<0.?sqrt(n*e)-m:h>d.x?sqrt(n*(e+1.-2.*i.y))-z:dot(d,i)-m;" +
 "}" +
 "vec2 M(vec2 y)" +
 "{" +
   "return y;" +
 "}" +
 "vec2 M0(vec2 x)" +
 "{" +
   "vec2 v=vec2(-10000);" +
   "v.x=max(v.x,-f(x,11.43,101.05,192.,200.,0.));" +
   "v.x=f(v.x,f(x,111.93,78.66,50.));" +
   "v.x=f(v.x,f(x,26.58,-2.89,25.,127.67,-4.64,25.));" +
   "return-1.-v;" +
 "}" +
 "vec2 M1(vec2 x)" +
 "{" +
   "vec2 v=vec2(-10000);" +
   "v.x=max(v.x,-f(x,19.38,52.48,50.,100.,0.));" +
   "v.x=max(v.x,-f(x,72.93,52.48,30.,100.,0.));" +
   "return-1.-v;" +
 "}" +
 "vec2 M2(vec2 x)" +
 "{" +
   "vec2 v=vec2(-10000);" +
   "v.x=max(v.x,-f(x,-6.05,55.81,100.,125.,0.));" +
   "v.x=f(v.x,f(x,-17.47,-12.52,50.,30.,0.));" +
   "v.x=f(v.x,f(x,-61.74,-2.12,10.,-15.66,-2.12,10.));" +
   "return-1.-v;" +
 "}" +
 "vec2 M3(vec2 x)" +
 "{" +
   "vec2 v=vec2(-10000);" +
   "v.x=max(v.x,-f(x,-.07,97.01,150.,250.,0.));" +
   "v.x=f(v.x,f(x,47.9,-32.4,20.,-48.89,-32.43,20.));" +
   "v.x=f(v.x,f(x,-11.32,-17.57,40.,40.,0.));" +
   "v.x=f(v.x,f(x,-16.8,-1.87,10.,-50.28,-11.81,20.));" +
   "return-1.-v;" +
 "}" +
 "vec2 M4(vec2 x)" +
 "{" +
   "vec2 v=vec2(-10000);" +
   "v.x=max(v.x,-f(x,70.66,77.64,150.,150.,0.));" +
   "v.x=f(v.x,f(x,65.84,55.43,31.,150.,0.));" +
   "v.x=f(v.x,f(x,106.59,-4.28,20.,23.88,-4.59,20.));" +
   "return-1.-v;" +
 "}" +
 "vec2 M5(vec2 x)" +
 "{" +
   "vec2 v=vec2(-10000);" +
   "v.x=max(v.x,-f(x,44.34,48.78,98.1,94.01,0.));" +
   "v.x=f(v.x,f(x,44.24,1.15,40.99));" +
   "v.x=max(v.x,-f(x,43.92,-6.14,31.58));" +
   "return-1.-v;" +
 "}" +
 "vec2 M6(vec2 x)" +
 "{" +
   "vec2 v=vec2(-10000);" +
   "v.x=max(v.x,-f(x,-81.57,63.3,186.89,121.37,0.));" +
   "v.x=max(v.x,-f(x,-179.33,81.59,50.,84.77,0.));" +
   "v.x=max(v.x,-f(x,86.89,3.76,154.4,245.33,0.));" +
   "v.x=f(v.x,f(x,-91.59,-3.02,50.,35.76,0.));" +
   "v.x=f(v.x,f(x,-24.02,.77,17.11));" +
   "v.x=f(v.x,f(x,-47.7,4.65,13.44));" +
   "v.x=f(v.x,f(x,-143.51,28.24,21.01));" +
   "v.x=f(v.x,f(x,-66.33,11.06,15.48));" +
   "v.x=f(v.x,f(x,-118.47,18.92,14.61));" +
   "v.x=f(v.x,f(x,-93.42,19.8,19.27));" +
   "v.x=f(v.x,f(x,-168.27,34.65,14.02));" +
   "v.x=f(v.x,f(x,-137.5,-.18,88.66,56.58,0.));" +
   "return-1.-v;" +
 "}" +
 "vec2 M7(vec2 x)" +
 "{" +
   "vec2 v=vec2(-10000);" +
   "v.x=max(v.x,-f(x,4.15,43.37,300.,300.,0.));" +
   "v.x=f(v.x,f(x,34.45,6.64,17.83));" +
   "v.x=f(v.x,f(x,-37.15,10.44,17.83));" +
   "v.x=f(v.x,f(x,.9,38.33,33.77,-.17,2.73,19.));" +
   "v.x=max(v.x,-f(x,.09,6.28,3.37,.23,28.86,22.));" +
   "return-1.-v;" +
 "}" +
 "vec2 M8(vec2 x)" +
 "{" +
   "vec2 v=vec2(-10000);" +
   "v.x=max(v.x,-f(x,34.88,30.21,94.56,56.,0.));" +
   "v.x=max(v.x,-f(x,72.57,18.35,39.11,79.54,0.));" +
   "return-1.-v;" +
 "}" +
 "vec2 M9(vec2 x)" +
 "{" +
   "vec2 v=vec2(-10000);" +
   "v.x=max(v.x,-f(x,18.02,57.64,50.,110.,0.));" +
   "v.x=max(v.x,-f(x,89.57,42.,50.,110.,0.));" +
   "v.x=max(v.x,-f(x,99.5,-32.11,30.,10.,0.));" +
   "return-1.-v;" +
 "}" +
 "vec2 MA(vec2 x)" +
 "{" +
   "vec2 v=vec2(-10000);" +
   "v.x=max(v.x,-f(x,32.26,57.5,78.48,110.29,0.));" +
   "v.x=max(v.x,-f(x,204.79,72.98,170.1,145.49,0.));" +
   "v.x=max(v.x,-f(x,238.47,-62.76,103.2,132.51,0.));" +
   "v.x=f(v.x,f(x,186.82,-14.81,19.64));" +
   "v.x=f(v.x,f(x,69.71,1.22,45.61,15.62,0.));" +
   "v.x=f(v.x,f(x,109.87,-3.83,13.73,137.12,13.48,14.86));" +
   "v.x=f(v.x,f(x,53.8,24.17,18.27,98.27,.24,7.));" +
   "return-1.-v;" +
 "}" +
 "vec2 MB(vec2 x)" +
 "{" +
   "vec2 v=vec2(-10000);" +
   "v.x=max(v.x,-f(x,-37.78,111.78,150.,250.,0.));" +
   "v.x=f(v.x,f(x,10.19,-17.63,20.,-112.46,-17.07,20.));" +
   "v.x=f(v.x,f(x,-49.04,.05,40.,46.01,0.));" +
   "v.x=f(v.x,f(x,-67.5,15.4,19.97,-121.84,15.23,20.));" +
   "return-1.-v;" +
 "}" +
 "vec2 MC(vec2 x)" +
 "{" +
   "vec2 v=vec2(-10000);" +
   "v.x=max(v.x,-f(x,21.99,7.92,300.,300.,0.));" +
   "v.x=f(v.x,f(x,-2.96,-14.13,16.57,39.05,-13.99,16.22));" +
   "v.x=f(v.x,f(x,17.3,4.69,16.91,17.84,-31.63,16.83));" +
   "return-1.-v;" +
 "}" +
 "vec2 MD(vec2 x)" +
 "{" +
   "vec2 v=vec2(-10000);" +
   "v.x=max(v.x,-f(x,45.89,34.25,100.82,64.41,0.));" +
   "v.x=max(v.x,-f(x,139.23,-50.95,97.76,83.02,0.));" +
   "v.x=f(v.x,f(x,112.32,-8.,18.32,164.92,-7.38,19.13));" +
   "v.x=f(v.x,f(x,76.77,1.57,15.46,109.6,12.15,4.75));" +
   "v.x=f(v.x,f(x,47.63,-4.25,15.9,18.,-9.89,17.89));" +
   "v.x=max(v.x,-f(x,115.26,-5.19,9.1,163.8,-5.3,12.67));" +
   "return-1.-v;" +
 "}" +
 "vec2 ME(vec2 x)" +
 "{" +
   "vec2 v=vec2(-10000);" +
   "v.x=max(v.x,-f(x,53.48,38.82,129.68,73.84,0.));" +
   "v.x=max(v.x,-f(x,213.53,-15.55,113.32,182.21,0.));" +
   "v.x=f(v.x,f(x,163.85,16.56,18.59));" +
   "v.x=f(v.x,f(x,99.87,18.08,27.15,76.56,-22.49,13.31));" +
   "v.x=f(v.x,f(x,63.62,6.32,93.34,17.12,0.));" +
   "v.x=f(v.x,f(x,36.04,18.81,20.75,58.99,-23.85,5.62));" +
   "return-1.-v;" +
 "}" +
 "vec2 MF(vec2 x)" +
 "{" +
   "vec2 v=vec2(-10000);" +
   "v.x=max(v.x,-f(x,-.48,30.21,23.82,56.,0.));" +
   "v.y=max(v.y,-f(x,17.31,30.83,9.17,47.52,0.));" +
   "v.x=max(v.x,-f(x,36.35,23.07,26.2,69.39,0.));" +
   "return-1.-v;" +
 "}" +
 "vec2 MG(vec2 x)" +
 "{" +
   "vec2 v=vec2(-10000);" +
   "v.x=max(v.x,-f(x,26.,31.55,76.82,58.69,0.));" +
   "v.x=max(v.x,-f(x,-33.82,19.82,50.,82.48,0.));" +
   "v.x=f(v.x,f(x,-33.82,-22.67,23.9));" +
   "v.x=f(v.x,f(x,73.44,-2.32,19.03,23.69,-2.18,18.9));" +
   "v.y=max(v.y,-f(x,-34.06,-28.47,9.41,7.92,0.));" +
   "v.y=max(v.y,-f(x,75.73,7.27,11.45,10.56,0.));" +
   "return-1.-v;" +
 "}" +
 "vec2 MH(vec2 x)" +
 "{" +
   "vec2 v=vec2(-10000);" +
   "v.x=max(v.x,-f(x,71.31,40.04,154.04,75.27,0.));" +
   "v.x=f(v.x,f(x,123.01,-.08,62.94,23.22,0.));" +
   "v.x=f(v.x,f(x,90.44,6.87,15.38,26.29,.37,21.91));" +
   "v.y=max(v.y,-f(x,120.34,-5.81,7.));" +
   "v.y=max(v.y,-f(x,91.29,-22.92,7.));" +
   "v.y=max(v.y,-f(x,63.25,-38.83,7.));" +
   "v.y=max(v.y,-f(x,32.02,-52.75,7.));" +
   "return-1.-v;" +
 "}" +
 "vec2 MI(vec2 x)" +
 "{" +
   "vec2 v=vec2(-10000);" +
   "v.x=max(v.x,-f(x,39.98,43.37,104.77,130.66,0.));" +
   "v.x=max(v.x,-f(x,184.77,3.19,124.61,211.16,0.));" +
   "v.y=max(v.y,-f(x,116.24,-48.67,10.,10.,0.));" +
   "v.y=max(v.y,-f(x,95.28,-75.1,7.));" +
   "v.x=max(v.x,-f(x,306.31,-200.32,185.13,157.26,0.));" +
   "v.y=max(v.y,-f(x,100.28,-157.86,10.,10.,0.));" +
   "v.x=f(v.x,f(x,209.81,-101.05,84.85,281.55,-102.25,23.59));" +
   "v.x=f(v.x,f(x,98.67,-22.99,16.65,73.85,-23.84,17.34));" +
   "v.x=f(v.x,f(x,4.31,-20.09,50.,44.52,0.));" +
   "v.x=f(v.x,f(x,39.92,1.43,16.33,39.04,-32.99,18.53));" +
   "v.x=max(v.x,-f(x,149.39,-163.71,5.,226.38,-163.59,4.88));" +
   "return-1.-v;" +
 "}" +
 "float m(vec2 v)" +
 "{" +
   "vec2 x=M(v);" +
   "return min(x.x,x.y);" +
 "}" +
 "vec4 m(vec2 x,float v)" +
 "{" +
   "vec2 y=vec2(v,0),f=M(x+y.yx);" +
   "float B=m(x-y.xy),n=m(x+y.xy),w=m(x-y.yx),i=min(f.x,f.y);" +
   "return vec4(normalize(vec2(n-B,i-w)),i,.25*(float(B<=0.)+float(n<=0.)+float(w<=0.)+float(i<=0.))*(f.y<f.x?-1.:1.));" +
 "}" +
 "vec3 f(float x,float v,vec2 y)" +
 "{" +
   "return vec3(1,.9,.7)*smoothstep(x,v,f(.1*y))+vec3(.7,.9,1)*smoothstep(x,v,f(.1*y+9.))+vec3(.12,.08,.12)*f(.0015*y+5.);" +
 "}" +
 "vec3 p(vec2 x)" +
 "{" +
   "return x/=.2,x/=2048.,x+=.5,texture2D(BG0,x).xyz;" +
 "}" +
 "vec3 h(vec2 x)" +
 "{" +
   "return x/=.2,x/=2048.,x+=.5,texture2D(BG1,x).xyz;" +
 "}" +
 "vec3 D(vec2 x)" +
 "{" +
   "return x/=.2,x/=2048.,x+=.5,texture2D(BG2,x).xyz;" +
 "}" +
 "void main()" +
 "{" +
   "vec2 x=gl_FragCoord.xy-.5*vec2(1024,768),y=gl_FragCoord.xy/vec2(1024,768),B;" +
   "y.y=1.-y.y;" +
   "x.y*=-1.;" +
   "B=.2*x+.2*t.xy;" +
   "x=x/t.z/21.+t.xy;" +
   "\n#ifdef BG\n" +
   "gl_FragColor=vec4(f(t.x,t.y,B),1);" +
   "\n#else\n" +
   "vec4 i=texture2D(T,y),n=texture2D(S,y),d=m(x,.5/t.z/21.);" +
   "vec3 w=vec3(0);" +
   "if(d.w!=0.)" +
     "{" +
       "float l=pow(max(0.,1.+.5*d.z),3.);" +
       "if(d.w<0.)" +
         "w=-d.w*(.1+.25*l)*vec3(.5);" +
       "else" +
         "{" +
           "vec2 z=vec2(.3,0.),e=l>.01?B+20.*d.xy*l:B;" +
           "w=.25*p(e+z.xy)+.25*p(e-z.xy)+.25*p(e+z.yx)+.25*p(e-z.yx);" +
           "vec2 a=l>.01?.05*x+.2*vec2(d.y,-d.x)*l:.05*x;" +
           "float c=fract(2.*(sin(a.x)+a.y));" +
           "vec3 o=(.5+.5*smoothstep(.2,.3,c)*smoothstep(.8,.7,c))*r.xyz;" +
           "w+=d.w*(.1+.5*l)*o;" +
         "}" +
     "}" +
   "else" +
     " w=p(B);" +
   "vec2 e=2.*i.yz-1.;" +
   "float l=length(e),c=max(0.,1.-l);" +
   "if(i.x>25./255.)" +
     "{" +
       "w+=c*exp(-3.*l)*8.*vec3(.12,.08,.12);" +
       "if(s.w>.5)" +
         "{" +
           "float a=clamp((i.x-.117647)/.117647,0.,1.);" +
           "w+=a*c*exp(-10.*length(e))*5.*h(8.*vec2(atan(e.y,e.x)+.05*t.w,5.*(c-.05*t.w)));" +
         "}" +
     "}" +
   "else" +
     " if(i.x>15./255.)" +
       "{" +
         "w-=pow(c,2.);" +
         "vec2 a=vec2(atan(e.y,e.x)+.05*t.w,c-.01*t.w);" +
         "vec3 z=vec3(.12,.08,.12)*mix(v(a),v(a+vec2(1.57,0)),.5);" +
         "w+=(1.-exp(-5.*l))*c*10.*z;" +
       "}" +
     "else" +
       " if(i.x>5./255.)" +
         "w+=smoothstep(0.,.3,c)*10.*vec3(1,1,.5)*exp(-(8.+2.*sin(.5*t.w+(x.x+x.y)))*l);" +
   "float a=n.x;" +
   "w+=vec3(a)+vec3(1,1,.5)*pow(.5*max(0.,2.-length(x-s.xy)),2.75+.25*sin(.3*t.w));" +
   "if(n.z>0.)" +
     "w=clamp(w,0.,1.);" +
   "w+=(vec3(.3)+D(x+9.+.05*t.w))*(n.y+.75*n.z);" +
   "if(n.z>0.&&n.z<.5)" +
     "w=mix(w,10.*n.z*vec3(.12,.08,.12),.5);" +
   "gl_FragColor=vec4(min(vec3(1),w)*s.z,1);" +
   "\n#endif\n" +
 "}"

var main_vert =
 "attribute vec4 a;" +
 "uniform vec4 P0,P1;" +
 "void main()" +
 "{" +
   "gl_Position=P0+P1*a;" +
 "}"
