// class PageFactory {
//
//   switch(){
//       case '':{
//
//           break;
//       },
//       default:{
//           break;
//       }
//   }
//
// }
// module.exports=new PageFactory();

function pageProvider (pageName) {
    switch (pageName){
        case 'HomePage':{
            pageName= require('./home.page');
            break;
        }
        case ('SearchingPage'):{
            pageName=require('./searching.page');
            break;
        }
        case 'OurWorkPage':{
             pageName= require("./ourWork.page");
        }
    }
return pageName;
}
 module.exports=pageProvider;
