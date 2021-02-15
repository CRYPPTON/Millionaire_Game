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

        q2 : { ques : "Čime obično sečemo papir :",
        offer : {
            a : "Grabulja",
            b : "Makaze",
            c : "Kašika",
            d : "Viljuska"
        },
        correct : function(){
            return this.offer.b
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


export function hello() {
    console.log("Hello");
  }