let ti=document.getElementById("title")
let x='x'
let s=[]
function end(n1,n2,n3){
document.getElementById("a"+n1).style.cssText=' background-image: linear-gradient(48deg,rgb(125, 10, 77),rgba(17, 6, 6, 0.938));border-radius: 9px; '
document.getElementById("a"+n2).style.cssText=' background-image: linear-gradient(48deg,rgb(125, 10, 77),rgba(17, 6, 6, 0.938));border-radius: 9px; '
document.getElementById("a"+n3).style.cssText=' background-image: linear-gradient(48deg,rgb(125, 10, 77),rgba(17, 6, 6, 0.938));border-radius: 9px; '
setInterval(function(){ti.innerHTML+='.'},1000)
setTimeout(function(){location.reload()},4000)
ti.innerHTML=`win is ${s[n1]}`
}
function win(){for(let i=1;i<10;i++){s[i]=document.getElementById("a"+i).innerHTML}
if(s[1]==s[2]&&s[2]==s[3]&&s[3]!='')
{end(1,2,3)}
else if(s[4]==s[5]&&s[5]==s[6]&&s[6]!=''){
  end(4,5,6)
    }else if(s[9]==s[8]&&s[7]==s[8]&&s[9]!=''){
      end(9,8,7)
        }
        else if(s[1]==s[4]&&s[4]==s[7]&&s[4]!=''){
          end(1,4,7)
            } else if  (s[3]==s[5]&&s[5]==s[7]&&s[3]!=''){
              end(3,5,7)
                } else if(s[1]==s[5]&&s[5]==s[9]&&s[9]!=''){
                  end(1,5,9)
                    }else if(s[9]==s[6]&&s[6]==s[3]&&s[3]!=''){
                      end(9,6,3)
                       }else if(s[2]==s[5]&&s[5]==s[8]&&s[9]!=''){
                        end(2,5,8)
                         }
}
function game(id){let q=document.getElementById(id)
if(x=='x'&&q.innerHTML==''){
q.innerHTML="x";
ti.innerHTML='o'
x='o'}
else if(x=='o'&&q.innerHTML=='')
{
q.innerHTML='o'
ti.innerHTML='x'
x='x'
}
win()
}


let p=document.getElementById('t')
let u='x'
y=[]

function st(g1,g2,g3) {
document.getElementById('g'+g1).style.cssText='background: linear-gradient(299deg,blue,rgb(109, 100, 151));'
document.getElementById('g'+g2).style.cssText='background: linear-gradient(299deg,blue,rgb(109, 100, 151));'
document.getElementById('g'+g3).style.cssText='background: linear-gradient(299deg,blue,rgb(109, 100, 151));'
p.innerHTML=`win is${y[1]}`
setInterval(function(){p.innerHTML +='.'},1000)
setTimeout(function (){location.reload()},3000)

  
}
function w() {for(let i=1;i<10;i++){y[i]=document.getElementById("g"+i).innerHTML}
  if(y[1]==y[2]&&y[2]==y[3]&&y[3]!=''){
    st(1,2,3)
      }
else if(y[4]==y[5]&&y[5]==y[6]&&y[6]!=''){
    st(4,5,6)
      }else if(y[9]==y[8]&&y[7]==y[8]&&y[9]!=''){
        st(9,8,7)
          }
          else if(y[1]==y[4]&&y[4]==y[7]&&y[4]!=''){
            st(1,4,7)
              } else if  (y[3]==y[5]&&y[5]==y[7]&&y[3]!=''){
                st(3,5,7)
                  } else if(y[1]==y[5]&&y[5]==y[9]&&y[9]!=''){
                    st(1,5,9)
                      }else if(y[9]==y[6]&&y[6]==y[3]&&y[3]!=''){
                        st(9,6,3)
                         } else if(y[5]==y[8]&&y[5]==y[2]&&y[8]!=''){
                          st(2,5,8)
                           }
  }



function gh(id){
let h=document.getElementById(id)
if(h.innerHTML==''&& u=='x')
{p.innerHTML='o'
h.innerHTML='x'
u='o'
} else if(h.innerHTML==''&& u=='o')
{p.innerHTML='x'
h.innerHTML='o'
u='x'
}w()}
let ul=document.getElementById('ul')
let o=document.getElementById('eg')
let c=document.getElementById('dt')
o.addEventListener("click",function (){ul.classList.remove("c1") ,ul.style.cssText='transition: 2s;'})
c.addEventListener("click",function (){ul.classList.add("c1") ,ul.style.cssText='transition: 2s;'})
let after=document.getElementById("after")
let beforr=document.getElementById("befor")
let insied=document.getElementById("insied")
let div=document.getElementById("dr")
let p1=document.getElementById("p1")

beforr.onclick=function (){div.append(after,insied,ul)}
let b=document.getElementById("bt")
b.onclick=function(){window.scroll({top:0,behavior:'smooth'})}