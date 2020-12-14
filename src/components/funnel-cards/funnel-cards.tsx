import { Component, h, Element, Prop } from '@stencil/core';

@Component({
  tag: 'funnel-cards',
  styleUrl: 'funnel-cards.css',
  shadow: true,
})
export class FunnelCards {
  @Prop() cardsNumber: number;

  card: any[] = [{
    img: "https://www.flaticon.com/svg/static/icons/svg/1689/1689164.svg",
    title: "test1",
    subtitle: "sub1",
    cls: "first"
  }
    ,

  {
    img: "https://www.flaticon.com/svg/static/icons/svg/3135/3135680.svg",
    title: "test2",
    subtitle: "sub2",
    cls: "second"
  }
    ,

  {
    img: "https://www.flaticon.com/svg/static/icons/svg/3135/3135767.svg",
    title: "test3",
    subtitle: "sub3",
    cls: "third"
  }
  ,
  {
    img: "https://www.flaticon.com/svg/static/icons/svg/1689/1689164.svg",
    title: "test1",
    subtitle: "sub1",
    cls: "first"
  }
    ,

  {
    img: "https://www.flaticon.com/svg/static/icons/svg/3135/3135680.svg",
    title: "test2",
    subtitle: "sub2",
    cls: "second"
  }
    ,

  {
    img: "https://www.flaticon.com/svg/static/icons/svg/3135/3135767.svg",
    title: "test3",
    subtitle: "sub3",
    cls: "third"
  }
  ]
  @Element() el: HTMLElement;
  @Prop() cardOneInfo: any;
  internalCard1: any[];

  @Prop() cardTwoInfo: any;
  internalCard2: any[];


  @Prop() cardThreeInfo: any;
  internalCard3: any[];


  @Prop() cardFourInfo: any;
  internalCard4: any[];


  @Prop() cardFiveInfo: any;
  internalCard5: any[];

  @Prop() cardSixInfo: any;
  internalCard6: any[];

  @Prop() cardBgColor: string;
 
  @Prop() cardTextColor: string;

  constructor() {
    if (this.cardOneInfo != null) {

      this.internalCard1 = JSON.parse(this.cardOneInfo);

    }
    if (this.cardTwoInfo != null) {
      this.internalCard2 = JSON.parse(this.cardTwoInfo);
    }
    if (this.cardThreeInfo != null) {
      this.internalCard3 = JSON.parse(this.cardThreeInfo);
    }
    if (this.cardFourInfo != null) {
      this.internalCard4 = JSON.parse(this.cardFourInfo);
    }


    if (this.cardFiveInfo != null) {
      this.internalCard5 = JSON.parse(this.cardFiveInfo);
    }


    if (this.cardSixInfo != null) {
      this.internalCard6 = JSON.parse(this.cardSixInfo);
    }




    if (this.card.length != this.cardsNumber) {

      if (this.cardsNumber == 1) {
        this.card.length = 0;
        this.card.push({
          img: (this.internalCard1[0].img ? this.internalCard1[0].img : 'https://www.flaticon.com/svg/static/icons/svg/1689/1689164.svg'),
          title: (this.internalCard1[0].title ? this.internalCard1[0].title : ''),
          subtitle: (this.internalCard1[0].subtitle ? this.internalCard1[0].subtitle : '')
        })
      }

      if (this.cardsNumber == 2) {
        this.card.length = 0;
        this.card.push({
          img: (this.internalCard1[0].img ? this.internalCard1[0].img : 'https://www.flaticon.com/svg/static/icons/svg/1689/1689164.svg'),
          title: (this.internalCard1[0].title ? this.internalCard1[0].title : ''),
          subtitle: (this.internalCard1[0].subtitle ? this.internalCard1[0].subtitle : '')
        },

          {
            img: (this.internalCard2[0].img ? this.internalCard2[0].img : 'https://www.flaticon.com/svg/static/icons/svg/1689/1689164.svg'),
            title: (this.internalCard2[0].title ? this.internalCard2[0].title : ''),
            subtitle: (this.internalCard2[0].subtitle ? this.internalCard2[0].subtitle : '')
          }
        )
      }



      if (this.cardsNumber == 3) {
        this.card.length = 0;
        this.card.push({
          img: (this.internalCard1[0].img ? this.internalCard1[0].img : 'https://www.flaticon.com/svg/static/icons/svg/1689/1689164.svg'),
          title: (this.internalCard1[0].title ? this.internalCard1[0].title : ''),
          subtitle: (this.internalCard1[0].subtitle ? this.internalCard1[0].subtitle : '')
        },

          {
            img: (this.internalCard2[0].img ? this.internalCard2[0].img : 'https://www.flaticon.com/svg/static/icons/svg/1689/1689164.svg'),
            title: (this.internalCard2[0].title ? this.internalCard2[0].title : ''),
            subtitle: (this.internalCard2[0].subtitle ? this.internalCard2[0].subtitle : '')
          }
          ,
          {
            img: (this.internalCard3[0].img ? this.internalCard3[0].img : 'https://www.flaticon.com/svg/static/icons/svg/1689/1689164.svg'),
            title: (this.internalCard3[0].title ? this.internalCard3[0].title : ''),
            subtitle: (this.internalCard3[0].subtitle ? this.internalCard3[0].subtitle : '')
          }

        )
      }
   
      if (this.cardsNumber == 4) {
        this.card.length = 0;
        this.card.push({
          img: (this.internalCard1[0].img ? this.internalCard1[0].img : 'https://www.flaticon.com/svg/static/icons/svg/1689/1689164.svg'),
          title: (this.internalCard1[0].title ? this.internalCard1[0].title : ''),
          subtitle: (this.internalCard1[0].subtitle ? this.internalCard1[0].subtitle : '')
        },

          {
            img: (this.internalCard2[0].img ? this.internalCard2[0].img : 'https://www.flaticon.com/svg/static/icons/svg/1689/1689164.svg'),
            title: (this.internalCard2[0].title ? this.internalCard2[0].title : ''),
            subtitle: (this.internalCard2[0].subtitle ? this.internalCard2[0].subtitle : '')
          }
          ,
          {
            img: (this.internalCard3[0].img ? this.internalCard3[0].img : 'https://www.flaticon.com/svg/static/icons/svg/1689/1689164.svg'),
            title: (this.internalCard3[0].title ? this.internalCard3[0].title : ''),
            subtitle: (this.internalCard3[0].subtitle ? this.internalCard3[0].subtitle : '')
          }
          ,
          {
            img: (this.internalCard4[0].img ? this.internalCard4[0].img : 'https://www.flaticon.com/svg/static/icons/svg/1689/1689164.svg'),
            title: (this.internalCard4[0].title ? this.internalCard4[0].title : ''),
            subtitle: (this.internalCard4[0].subtitle ? this.internalCard4[0].subtitle : '')
          }
        )
      }  


 

      if (this.cardsNumber == 5) {
        this.card.length = 0;
        this.card.push({
          img: (this.internalCard1[0].img ? this.internalCard1[0].img : 'https://www.flaticon.com/svg/static/icons/svg/1689/1689164.svg'),
          title: (this.internalCard1[0].title ? this.internalCard1[0].title : ''),
          subtitle: (this.internalCard1[0].subtitle ? this.internalCard1[0].subtitle : '')
        },

          {
            img: (this.internalCard2[0].img ? this.internalCard2[0].img : 'https://www.flaticon.com/svg/static/icons/svg/1689/1689164.svg'),
            title: (this.internalCard2[0].title ? this.internalCard2[0].title : ''),
            subtitle: (this.internalCard2[0].subtitle ? this.internalCard2[0].subtitle : '')
          }
          ,
          {
            img: (this.internalCard3[0].img ? this.internalCard3[0].img : 'https://www.flaticon.com/svg/static/icons/svg/1689/1689164.svg'),
            title: (this.internalCard3[0].title ? this.internalCard3[0].title : ''),
            subtitle: (this.internalCard3[0].subtitle ? this.internalCard3[0].subtitle : '')
          }
          ,
          {
            img: (this.internalCard4[0].img ? this.internalCard4[0].img : 'https://www.flaticon.com/svg/static/icons/svg/1689/1689164.svg'),
            title: (this.internalCard4[0].title ? this.internalCard4[0].title : ''),
            subtitle: (this.internalCard4[0].subtitle ? this.internalCard4[0].subtitle : '')
          }
          ,
          {
            img: (this.internalCard5[0].img ? this.internalCard5[0].img : 'https://www.flaticon.com/svg/static/icons/svg/1689/1689164.svg'),
            title: (this.internalCard5[0].title ? this.internalCard5[0].title : ''),
            subtitle: (this.internalCard5[0].subtitle ? this.internalCard5[0].subtitle : '')
          }
        )
      }  







    } else {   
      this.card.length = 0;
      this.card.push({
        img: (this.internalCard1[0].img ? this.internalCard1[0].img : 'https://www.flaticon.com/svg/static/icons/svg/1689/1689164.svg'),
        title: (this.internalCard1[0].title ? this.internalCard1[0].title : ''),
        subtitle: (this.internalCard1[0].subtitle ? this.internalCard1[0].subtitle : '')
      },

        {
          img: (this.internalCard2[0].img ? this.internalCard2[0].img : 'https://www.flaticon.com/svg/static/icons/svg/1689/1689164.svg'),
          title: (this.internalCard2[0].title ? this.internalCard2[0].title : ''),
          subtitle: (this.internalCard2[0].subtitle ? this.internalCard2[0].subtitle : '')
        }
        ,
        {
          img: (this.internalCard3[0].img ? this.internalCard3[0].img : 'https://www.flaticon.com/svg/static/icons/svg/1689/1689164.svg'),
          title: (this.internalCard3[0].title ? this.internalCard3[0].title : ''),
          subtitle: (this.internalCard3[0].subtitle ? this.internalCard3[0].subtitle : '')
        }
        ,
        {
          img: (this.internalCard4[0].img ? this.internalCard4[0].img : 'https://www.flaticon.com/svg/static/icons/svg/1689/1689164.svg'),
          title: (this.internalCard4[0].title ? this.internalCard4[0].title : ''),
          subtitle: (this.internalCard4[0].subtitle ? this.internalCard4[0].subtitle : '')
        }
        ,
        {
          img: (this.internalCard5[0].img ? this.internalCard5[0].img : 'https://www.flaticon.com/svg/static/icons/svg/1689/1689164.svg'),
          title: (this.internalCard5[0].title ? this.internalCard5[0].title : ''),
          subtitle: (this.internalCard5[0].subtitle ? this.internalCard5[0].subtitle : '')
        },
        {
          img: (this.internalCard6[0].img ? this.internalCard6[0].img : 'https://www.flaticon.com/svg/static/icons/svg/1689/1689164.svg'),
          title: (this.internalCard6[0].title ? this.internalCard6[0].title : ''),
          subtitle: (this.internalCard6[0].subtitle ? this.internalCard6[0].subtitle : '')
        }
      )
  
    }




  }
  componentDidLoad() {

    var anchors = this.el.shadowRoot.querySelectorAll('.card');
    for (var i = 0; i < anchors.length; i++) {
      anchors[i].classList.remove('active');
      
      var anchor = anchors[i];
      anchor.addEventListener("click", function () {
        for (var i = 0; i < anchors.length; i++) {
          anchors[i].classList.remove('active');
         
        }
        this.classList.add('active')

      });
    }

    anchors.forEach(item=>{
      (item as HTMLElement).style.backgroundColor=(this.cardBgColor?this.cardBgColor:'#2c6fd1');
      (item as HTMLElement).style.color=(this.cardTextColor?this.cardTextColor:'#fff');
      // this.card.map((i=>item.classList.add(`${i.cls}`)))
    })
  }
  render() {
    return (

      <div class="FunnelCards">
        {this.card.map(item =>
          <div class="card first" >
            <img src={item.img}></img>
            <h3> {item.title} </h3>
            <span>{item.subtitle} </span>
          </div>
        )}


      </div>

    )
  }

}
