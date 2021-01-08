import { Component, h, Element, Prop, State,Event, EventEmitter } from '@stencil/core';

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
  @Prop() cardShdowColor: string;
  @Prop() content: string;
  @State() satate: any[] = [];
  @Event() updateSatisfiedEvent: EventEmitter<any>;

  allClicked(ind){
      // const obj2=this.satate.find((o)=>o.index==ind);
      const obj2 = this.satate.findIndex((o) => o.index == ind);
      this.satate[obj2]["clicked"] = true;
      // console.log(obj2);
      // console.log(this.satate);
      if (this.satate.every((ox) => ox.clicked)) {
  
        this.updateSatisfiedEvent.emit(this.content)
  
        console.log("All clicked");
  
      }
  }

  private getContent(): any {

    const con = JSON.parse(this.content);
    return con.attributes;
  }

  constructor() {
    for (let i = 0; i < this.getContent().cardsNumber; i++) {
      this.satate.push({ index: i, clicked: false });
    }


    if (this.card.length != this.getContent().cardsNumber) {

      if (this.getContent().cardsNumber == 1) {
        this.card.length = 0;
        this.card.push({
          img: (this.getContent().cardOneInfo.img ? this.getContent().cardOneInfo.img : 'https://www.flaticon.com/svg/static/icons/svg/1689/1689164.svg'),
          title: (this.getContent().cardOneInfo.title ? this.getContent().cardOneInfo.title : ''),
          subtitle: (this.getContent().cardOneInfo.subtitle ? this.getContent().cardOneInfo.subtitle : '')
        })
      }

      if (this.getContent().cardsNumber == 2) {
        this.card.length = 0;
        this.card.push({
          img: (this.getContent().cardOneInfo.img ? this.getContent().cardOneInfo.img : 'https://www.flaticon.com/svg/static/icons/svg/1689/1689164.svg'),
          title: (this.getContent().cardOneInfo.title ? this.getContent().cardOneInfo.title : ''),
          subtitle: (this.getContent().cardOneInfo.subtitle ? this.getContent().cardOneInfo.subtitle : '')
        },

          {
            img: (this.getContent().cardTwoInfo.img ? this.getContent().cardTwoInfo.img : 'https://www.flaticon.com/svg/static/icons/svg/1689/1689164.svg'),
            title: (this.getContent().cardTwoInfo.title ? this.getContent().cardTwoInfo.title : ''),
            subtitle: (this.getContent().cardTwoInfo.subtitle ? this.getContent().cardTwoInfo.subtitle : '')
          }
        )
      }



      if (this.getContent().cardsNumber == 3) {
        this.card.length = 0;
        this.card.push({
          img: (this.getContent().cardOneInfo.img ? this.getContent().cardOneInfo.img : 'https://www.flaticon.com/svg/static/icons/svg/1689/1689164.svg'),
          title: (this.getContent().cardOneInfo.title ? this.getContent().cardOneInfo.title : ''),
          subtitle: (this.getContent().cardOneInfo.subtitle ? this.getContent().cardOneInfo.subtitle : '')
        },

          {
            img: (this.getContent().cardTwoInfo.img ? this.getContent().cardTwoInfo.img : 'https://www.flaticon.com/svg/static/icons/svg/1689/1689164.svg'),
            title: (this.getContent().cardTwoInfo.title ? this.getContent().cardTwoInfo.title : ''),
            subtitle: (this.getContent().cardTwoInfo.subtitle ? this.getContent().cardTwoInfo.subtitle : '')
          }
          ,
          {
            img: (this.getContent().cardThreeInfo.img ? this.getContent().cardThreeInfo.img : 'https://www.flaticon.com/svg/static/icons/svg/1689/1689164.svg'),
            title: (this.getContent().cardThreeInfo.title ? this.getContent().cardThreeInfo.title : ''),
            subtitle: (this.getContent().cardThreeInfo.subtitle ? this.getContent().cardThreeInfo.subtitle : '')
          }

        )
      }
   
      if (this.getContent().cardsNumber == 4) {
        this.card.length = 0;
        this.card.push({
          img: (this.getContent().cardOneInfo.img ? this.getContent().cardOneInfo.img : 'https://www.flaticon.com/svg/static/icons/svg/1689/1689164.svg'),
          title: (this.getContent().cardOneInfo.title ? this.getContent().cardOneInfo.title : ''),
          subtitle: (this.getContent().cardOneInfo.subtitle ? this.getContent().cardOneInfo.subtitle : '')
        },

          {
            img: (this.getContent().cardTwoInfo.img ? this.getContent().cardTwoInfo.img : 'https://www.flaticon.com/svg/static/icons/svg/1689/1689164.svg'),
            title: (this.getContent().cardTwoInfo.title ? this.getContent().cardTwoInfo.title : ''),
            subtitle: (this.getContent().cardTwoInfo.subtitle ? this.getContent().cardTwoInfo.subtitle : '')
          }
          ,
          {
            img: (this.getContent().cardThreeInfo.img ? this.getContent().cardThreeInfo.img : 'https://www.flaticon.com/svg/static/icons/svg/1689/1689164.svg'),
            title: (this.getContent().cardThreeInfo.title ? this.getContent().cardThreeInfo.title : ''),
            subtitle: (this.getContent().cardThreeInfo.subtitle ? this.getContent().cardThreeInfo.subtitle : '')
          }
          ,
          {
            img: (this.getContent().cardFourInfo.img ? this.getContent().cardFourInfo.img : 'https://www.flaticon.com/svg/static/icons/svg/1689/1689164.svg'),
            title: (this.getContent().cardFourInfo.title ? this.getContent().cardFourInfo.title : ''),
            subtitle: (this.getContent().cardFourInfo.subtitle ? this.getContent().cardFourInfo.subtitle : '')
          }
        )
      }  


 

      if (this.getContent().cardsNumber == 5) {
        this.card.length = 0;
        this.card.push({
          img: (this.getContent().cardOneInfo.img ? this.getContent().cardOneInfo.img : 'https://www.flaticon.com/svg/static/icons/svg/1689/1689164.svg'),
          title: (this.getContent().cardOneInfo.title ? this.getContent().cardOneInfo.title : ''),
          subtitle: (this.getContent().cardOneInfo.subtitle ? this.getContent().cardOneInfo.subtitle : '')
        },

          {
            img: (this.getContent().cardTwoInfo.img ? this.getContent().cardTwoInfo.img : 'https://www.flaticon.com/svg/static/icons/svg/1689/1689164.svg'),
            title: (this.getContent().cardTwoInfo.title ? this.getContent().cardTwoInfo.title : ''),
            subtitle: (this.getContent().cardTwoInfo.subtitle ? this.getContent().cardTwoInfo.subtitle : '')
          }
          ,
          {
            img: (this.getContent().cardThreeInfo.img ? this.getContent().cardThreeInfo.img : 'https://www.flaticon.com/svg/static/icons/svg/1689/1689164.svg'),
            title: (this.getContent().cardThreeInfo.title ? this.getContent().cardThreeInfo.title : ''),
            subtitle: (this.getContent().cardThreeInfo.subtitle ? this.getContent().cardThreeInfo.subtitle : '')
          }
          ,
          {
            img: (this.getContent().cardFourInfo.img ? this.getContent().cardFourInfo.img : 'https://www.flaticon.com/svg/static/icons/svg/1689/1689164.svg'),
            title: (this.getContent().cardFourInfo.title ? this.getContent().cardFourInfo.title : ''),
            subtitle: (this.getContent().cardFourInfo.subtitle ? this.getContent().cardFourInfo.subtitle : '')
          }
          ,
          {
            img: (this.getContent().cardFiveInfo.img ? this.getContent().cardFiveInfo.img : 'https://www.flaticon.com/svg/static/icons/svg/1689/1689164.svg'),
            title: (this.getContent().cardFiveInfo.title ? this.getContent().cardFiveInfo.title : ''),
            subtitle: (this.getContent().cardFiveInfo.subtitle ? this.getContent().cardFiveInfo.subtitle : '')
          }
        )
      }  







    } else {   
      this.card.length = 0;
      this.card.push({
        img: (this.getContent().cardOneInfo.img ? this.getContent().cardOneInfo.img : 'https://www.flaticon.com/svg/static/icons/svg/1689/1689164.svg'),
        title: (this.getContent().cardOneInfo.title ? this.getContent().cardOneInfo.title : ''),
        subtitle: (this.getContent().cardOneInfo.subtitle ? this.getContent().cardOneInfo.subtitle : '')
      },

        {
          img: (this.getContent().cardTwoInfo.img ? this.getContent().cardTwoInfo.img : 'https://www.flaticon.com/svg/static/icons/svg/1689/1689164.svg'),
          title: (this.getContent().cardTwoInfo.title ? this.getContent().cardTwoInfo.title : ''),
          subtitle: (this.getContent().cardTwoInfo.subtitle ? this.getContent().cardTwoInfo.subtitle : '')
        }
        ,
        {
          img: (this.getContent().cardThreeInfo.img ? this.getContent().cardThreeInfo.img : 'https://www.flaticon.com/svg/static/icons/svg/1689/1689164.svg'),
          title: (this.getContent().cardThreeInfo.title ? this.getContent().cardThreeInfo.title : ''),
          subtitle: (this.getContent().cardThreeInfo.subtitle ? this.getContent().cardThreeInfo.subtitle : '')
        }
        ,
        {
          img: (this.getContent().cardFourInfo.img ? this.getContent().cardFourInfo.img : 'https://www.flaticon.com/svg/static/icons/svg/1689/1689164.svg'),
          title: (this.getContent().cardFourInfo.title ? this.getContent().cardFourInfo.title : ''),
          subtitle: (this.getContent().cardFourInfo.subtitle ? this.getContent().cardFourInfo.subtitle : '')
        }
        ,
        {
          img: (this.getContent().cardFiveInfo.img ? this.getContent().cardFiveInfo.img : 'https://www.flaticon.com/svg/static/icons/svg/1689/1689164.svg'),
          title: (this.getContent().cardFiveInfo.title ? this.getContent().cardFiveInfo.title : ''),
          subtitle: (this.getContent().cardFiveInfo.subtitle ? this.getContent().cardFiveInfo.subtitle : '')
        },
        {
          img: (this.getContent().cardSixInfo.img ? this.getContent().cardSixInfo.img : 'https://www.flaticon.com/svg/static/icons/svg/1689/1689164.svg'),
          title: (this.getContent().cardSixInfo.title ? this.getContent().cardSixInfo.title : ''),
          subtitle: (this.getContent().cardSixInfo.subtitle ? this.getContent().cardSixInfo.subtitle : '')
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
      (item as HTMLElement).style.backgroundColor=(this.getContent().cardBgColor?this.getContent().cardBgColor:'#2c6fd1');
      (item as HTMLElement).style.color=(this.getContent().cardTextColor?this.getContent().cardTextColor:'#fff');
      (item as HTMLElement).style.boxShadow=`20px 20px 60px rgba(34,50,84,0.5), 1px 1px 0px 1px ${(this.getContent().cardShdowColor?this.getContent().cardShdowColor:'#3f58e3')}`;

    })
  }
  render() {
    return (

      <div class="FunnelCards NeueFrutigerWorld">
        {this.card.map((item,index) =>
          <div class="card first"   onClick={this.allClicked.bind(this,index)} >
            <img src={item.img}   style={{"border-radius":"50%"}}></img>
            <h3> {item.title} </h3>
            <span>{item.subtitle} </span>
          </div>
        )}


      </div>

    )
  }

}
