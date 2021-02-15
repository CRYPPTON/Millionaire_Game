var querstions = {
    easy:{
        q1 : { ques : "Nadimak Cara Dušana Nemanjića je :",
              offer : {
                  a : "Silni",
                  b : "Veliki",
                  c : "Snažni",
                  d : "Svemoćni"
              },
              correct : function(){
                  return this.offer.a
              }
        },

        q2 : { ques : "Lazar Denić je naš čuveni :",
        offer : {
            a : "Dijagnostičar",
            b : "Učitelj",
            c : "Muay Thai borac",
            d : "Bodibilder"
        },
        correct : function(){
            return this.offer.c
               }
        },

        q3 : { ques : "Prvi čovek u kosmosu je :",
            offer : {
                  a : "Julije Gagarin",
                  b : "Aleksandar Vučić",
                  c : "Bred Pit",
                  d : "Aleksej Olejnik"
                    },
            correct : function(){
                  return this.offer.a
                     }
            },

            q4 : { ques : "Dovršite junaka iz crtanog filma, Sunđer... :",
                offer : {
                      a : "Tob",
                        b : "Snob",
                        c : "Mob",
                        d : "Bob"
                        },
                    correct : function(){
                      return this.offer.d
                            }
                    },

                q5 : { ques : "Glavni grad bugarske je :",
                    offer : {
                        a : "Burgras",
                        b : "Sofija",
                        c : "Mileva",
                        d : "Trnava"
                        },
                    correct : function(){
                     return this.offer.b
                        }
                 },
                 q6 : { ques : "ko je ubio Murata :",
                 offer : {
                     a : "Car Lazar",
                     b : "Miloš Obrenović",
                     c : "Miloš Obilić",
                     d : "Vuk Branković"
                     },
                 correct : function(){
                  return this.offer.c
                     }
              }
    },

    medium:{
        q1 : { ques : "Najveći Grad u Africi :",
        offer : {
            a : "Kejptaun",
            b : "Najrobi",
            c : "Kairo",
            d : "Kinšasa"
        },
        correct : function(){
            return this.offer.c
        }
  },

  q2 : { ques : "Vaso Bakočević je poznati :",
  offer : {
      a : "MMA borac",
      b : "Slikar",
      c : "Fudbaler",
      d : "Glumac"
  },
  correct : function(){
      return this.offer.a
         }
  },

  q3 : { ques : "Ko je napisao kad su cvetale tikve :",
      offer : {
            a : "Ivo andrić",
            b : "Dragoslav Mihailovic",
            c : "Simo Matavulj",
            d : "Miloš Crnjanski"
              },
      correct : function(){
            return this.offer.b
               }
      },

      q4 : { ques : "Pijuk je ustvar... :",
          offer : {
                a : "Čekić",
                  b : "Ašov",
                  c : "Kramp",
                  d : "Lopata"
                  },
              correct : function(){
                return this.offer.c
                      }
              },

          q5 : { ques : "Sombor se nalazi u :",
              offer : {
                  a : "Banatu",
                  b : "Bačkoj",
                  c : "Srem",
                  d : "Šumadija"
                  },
              correct : function(){
               return this.offer.b
                  }
           }, 
           q6 : { ques : "Najveće jezero na svetu je :",
           offer : {
               a : "Bajkalsko",
               b : "Kaspisko",
               c : "Mičigen",
               d : "Djerdapsko"
               },
           correct : function(){
            return this.offer.b
               }
        }   
    },
    hard:{
        q1 : { ques : "Koje godine je donet Srpski gradjanski zakonik  :",
        offer : {
            a : "1944",
            b : "1844",
            c : "1789",
            d : "1804"
        },
        correct : function(){
            return this.offer.b
        }
  },

  q2 : { ques : "Denis Ciplinkov je šamtion u kom sportu:",
  offer : {
      a : "Streljastvu",
      b : "Šahu",
      c : "Skijanju",
      d : "Obaranju ruku"
  },
  correct : function(){
      return this.offer.d
         }
  },

  q3 : { ques : "Frontmen grupe Metallica je :",
      offer : {
            a : "James Hatefild",
            b : "Ozzy Osbourne",
            c : "Phil Alsemo",
            d : "Joe Satriani"
              },
      correct : function(){
            return this.offer.a
               }
      },

      q4 : { ques : "Šta je po profesiji Rowan Atkinson... :",
          offer : {
                  a : "Elektro inženjer",
                  b : "Mašinski inženjer",
                  c : "Ekoglog",
                  d : "Istoričar"
                  },
              correct : function(){
                return this.offer.a
                      }
              },
              q5 : { ques : "Koje godine je objavljena pesma Another brick in the wall:",
              offer : {
                    a : "1979",
                    b : "1978",
                    c : "1982",
                    d : "1975"
                      },
              correct : function(){
                    return this.offer.a
                       }
              },
        
              q6 : { ques : "Avogadrov broj iznosi... :",
                  offer : {
                          a : "6,042 141 99(48) · 1024 mol-1",
                          b : "6,022 141 99(47) · 1024 mol-1",
                          c : "6,023 141 99(48) · 1023 mol-1",
                          d : "6,022 141 99(47) · 1023 mol-1"
                          },
                      correct : function(){
                        return this.offer.d
                              }
                      }
    }
}
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var help_half = true;
var help_public = true;
var help_call = true;
var amount_w = 0;
var earn_money = 0;
var q = "";
var correct_an = "";
var correct_an_place = 0;
var num_of_q = 14;
var level = "easy";
var abcd_true = 0; 
var correct_field = "";

function random_q(){
    var rand_num =  Math.floor(Math.random() * 6) + 1;
    return rand_num
}

function put_querstions(num_of_q){  
    var rand_q = random_q();
    n_of_level = rand_q;
    console.log("pitanje : "+rand_q) 
    console.log("još pitanja do milionera : "+num_of_q)  
    if(num_of_q>=10 && num_of_q<=14){  
        console.log("Pitanje iz lake kategorije  ")  
         q = querstions.easy[`q${rand_q}`];
         document.getElementById("que").innerHTML ="Pitanje :"+ q.ques;
         document.getElementById("AnsA").innerHTML = q.offer.a;
         document.getElementById("AnsB").innerHTML = q.offer.b;
         document.getElementById("AnsC").innerHTML = q.offer.c;
         document.getElementById("AnsD").innerHTML = q.offer.d;
         correct_an = q.correct();
    }
    if(num_of_q<10 && 4<num_of_q){  
        console.log("Pitanje iz srednje kategorije  ") 
        q = querstions.medium[`q${rand_q}`];
        document.getElementById("que").innerHTML ="Pitanje :"+ q.ques;
        document.getElementById("AnsA").innerHTML = q.offer.a;
        document.getElementById("AnsB").innerHTML = q.offer.b;
        document.getElementById("AnsC").innerHTML = q.offer.c;
        document.getElementById("AnsD").innerHTML = q.offer.d;
        correct_an = q.correct();
        level = "medium";
   }
   if(num_of_q<4){  
    console.log("Pitanje iz teske kategorije  ") 
    q = querstions.hard[`q${rand_q}`];
    document.getElementById("que").innerHTML ="Pitanje :"+ q.ques;
    document.getElementById("AnsA").innerHTML = q.offer.a;
    document.getElementById("AnsB").innerHTML = q.offer.b;
    document.getElementById("AnsC").innerHTML = q.offer.c;
    document.getElementById("AnsD").innerHTML = q.offer.d;
    correct_an = q.correct();
    level = "hard";
    }
}

function gameOver() {
    earn_money = parseInt(earn_money)*1000
   if(earn_money<5000){
    alert("Pogresan odgovor, izgubili ste sve alooo");
   }
   if(earn_money>=5000 && earn_money<100000){
    alert("Pogresan odgovor, zaradjeni novac :"+5000);
   }
   if(earn_money>100000 && earn_money<10000000){
    alert("Pogresan odgovor, zaradjeni novac :"+100000);
   }
   earn_money = -1;
}

function recolor() {
    document.getElementById("AnsA").style.color = "white";
    document.getElementById("AnsB").style.color = "white";
    document.getElementById("AnsC").style.color = "white";
    document.getElementById("AnsD").style.color = "white";
}

function mill_game(a,id){
    
    if(!help_public){
         document.getElementById("myCanvas").style.display = "none";
    } 
    if(!help_call){
        document.getElementById("call_ans").style.display = "none";
   } 
    recolor()
    var money;
    var answer_color = id;
    if(correct_an == a){
        document.getElementById(answer_color).parentElement.style.background = "Green";
        money = document.getElementsByClassName("money");
        money[num_of_q].style.background = "green";
        money[num_of_q].style.border = "solid black 1px";
        money[num_of_q].style.borderRadius = "10px"
        amount_w = money[num_of_q].innerHTML;
        console.log("PAREEEE "+amount_w)
        earn_money = amount_w;
        console.log("PAREEEE "+earn_money)
       if(num_of_q==0) alert("you are millionier")
        num_of_q--;
        setTimeout(function(){
            put_querstions(num_of_q)
            document.getElementById(answer_color).parentElement.style.background = "black";
            
        }, 2000);
     
    }else{
        money = document.getElementsByClassName("money");
        document.getElementById(answer_color).parentElement.style.background = "Red";
        for (let i = 0; i < money.length; i++) {
            money[i].style.background = "red";
            money[i].style.border = "solid 2px blacks";
            money[i].style.borderRadius = "10px"
        }
        
        gameOver();
    }
}

if(amount_w<0) {
    gameOver();
}else{
   
    put_querstions(num_of_q);
}

function half_off(){
    if(help_half){
        document.getElementById("ped").style.backgroundImage = "url('style/ppx.png')";
        var arr_uniq = []
        var block = document.getElementsByClassName("Offer");
        
        var tq = querstions[level][`q${n_of_level}`].correct();
       // console.log(querstions[level][`q${n_of_level}`])
        for (let i = 0; i < block.length; i++) {
            if(tq!=block[i].innerHTML){
                arr_uniq.push(i);
                block[i].style.color  = "black";
            }
        }
        var rn = Math.floor(Math.random() * arr_uniq.length-1) + 1;
       // console.log("niz za uzimanje : "+arr_uniq);
       // console.log("broj u belo : "+rn)
        block[arr_uniq[rn]].style.color  = "white";
        help_half = false
    }else{
        alert("Iskoristili ste pomoć pola pola")
    }
    
}

function letters_b(a,b,c,d) {
    ctx.font = "18px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("A",19,148);
    ctx.fillText("B",99,148);
    ctx.fillText("C",179,148);
    ctx.fillText("D",259,148);
}

function bar(y) {
    var yA = 0;
    var yB = 0;
    var yC = 0;
    var yD = 0;
    var r = 100;
   // console.log("ovo je y :"+y)
  if(y=="A"){
     // console.log("upao sam u AnsA")
        yA = Math.floor(Math.random() * r) + 51;
        yB = Math.floor(Math.random() * r-yA) + 0;
        yC = Math.floor(Math.random() * r-yB-yA) + 0;
        yD = Math.floor(Math.random() * r-yC) + 0;
  } 
  if(y=="B"){
  //  console.log("upao sam u AnsB")
    yB = Math.floor(Math.random() * r) + 51;
    yA = Math.floor(Math.random() * r-yB) + 0;
    yC = Math.floor(Math.random() * r-yA-yB) + 0;
    yD = Math.floor(Math.random() * r-yC) + 0;
} 
if(y=="C"){
//console.log("upao sam u AnsC")
    yC = Math.floor(Math.random() * r) + 51;
    yB = Math.floor(Math.random() * r-yC) + 0;
    yA = Math.floor(Math.random() * r-yB-yC) + 0;
    yD = Math.floor(Math.random() * r-yA) + 0;
} 

if(y=="D"){
   // console.log("upao sam u AnsD")
    yD = Math.floor(Math.random() * r) + 51;
    yC = Math.floor(Math.random() * r-yC) + 0;
    yB = Math.floor(Math.random() * r-yC-yD) + 0;
    yA = Math.floor(Math.random() * r-yA) + 0;
} 
var abcd_a=[yA,yB,yC,yD]
var new_a = [];
for (let i = 0; i < abcd_a.length; i++) {
    if(abcd_a[i]<0){
        new_a.push(Math.floor(Math.random() * 25) + 5)
    } else{
        new_a.push(abcd_a[i])
    }
    
}
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(20,130,10,-new_a[0]);
    ctx.fillStyle = "green";
    ctx.fillRect(100,130,10,-new_a[1]);
    ctx.fillStyle = "purple";
    ctx.fillRect(180,130,10,-new_a[2]);
    ctx.fillStyle = "yellow";
    ctx.fillRect(260,130,10,-new_a[3]);
}

function voiceOfpuplic() {
    document.getElementById("pubp").style.backgroundImage = "url('style/pubpx.png')";
    if(help_public){
        document.getElementById("myCanvas").style.border = " solid 2px blue"
      //  console.log("Tacno je pod :")
       // console.log(q.correct())
        var id;
        var elm = document.getElementsByClassName("Offer");
        for (let i = 0; i < elm.length; i++) {
              if(elm[i].innerHTML==q.correct()) id = elm[i];
        }
        var str = ""+id.id
        var good_ans =  str.charAt(str.length-1)
      //  console.log(good_ans)
        bar(good_ans);
        letters_b()
        help_public = false;
    }else{
        alert("Iskoristili ste pomoć publike")
    } 
 }

 function f_call(){
     if(help_call){
        document.getElementById("callp").style.backgroundImage = "url('style/callpx.png')";
        var  id;
        var rand_n = 0; 
        var elm = document.getElementsByClassName("Offer");
        var call_answ = "";
        var ans_elm = document.getElementById("call_ans");
        //console.log(ans_elm)
        for (let i = 0; i < elm.length; i++) {
              if(elm[i].innerHTML==q.correct()) id = elm[i];
        }
        if(level=="easy"){
            rand_n = Math.floor(Math.random() * 100) + 0;
            if(rand_n<90){
               call_answ = "Prijatelj kaže da je tačan odgovor je : "+id.innerHTML;
            }else{
               rand_n = Math.floor(Math.random() * 3) + 0;
               call_answ = "Prijatelj kaže da je tačan odgovor je : "+elm[rand_n].innerHTML;
            }
        }
        if(level=="medium"){
           rand_n = Math.floor(Math.random() * 100) + 0;
           if(rand_n<50){
               call_answ = "Prijatelj kaže da je tačan odgovor je : "+id.innerHTML;
           }else{
              rand_n = Math.floor(Math.random() * 3) + 0;
              call_answ = "Prijatelj kaže da je tačan odgovor je : "+elm[rand_n].innerHTML;
           }
       }
       if(level=="hard"){
           rand_n = Math.floor(Math.random() * 100) + 0;
           if(rand_n<30){
               call_answ ="Prijatelj kaže da je tačan odgovor je : "+id.innerHTML;
           }else{
              rand_n = Math.floor(Math.random() * 3) + 0;
              call_answ = "Prijatelj kaže da je tačan odgovor je : "+elm[rand_n].innerHTML;
           }
       }
       ans_elm.style.color = "white";
       ans_elm.style.border = "white 2px solid";
       ans_elm.style.padding = "10px";
       ans_elm.style.fontFamily = "fantasy";
       ans_elm.style.font = "15px";
       document.getElementById("call_ans").innerHTML = call_answ
       help_call = false;
     }else{
         alert("Iskoristili ste pomoć prijatelj")
     }
    
 }



    function end_() {
            alert("Osvojili ste : "+earn_money+" dinara");
            setTimeout(function(){
                window.location.reload();  
            }, 2000);
            
    }
 


/*
generisati niz i po nizu sve rasporediti da bi pitanja bila unique :D
*/

