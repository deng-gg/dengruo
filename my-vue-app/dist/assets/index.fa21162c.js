import{d as e,u as l,r as n,o as t,c as s,w as a,a as o,b as u,e as c}from"./index.51af412c.js";var i=e({setup(){const e=l();return{clickRoute:l=>{e.push(l)}}}});const d=u("首页"),r=u("活动管理"),f=u("活动列表"),p=u("活动详情");i.render=function(e,l,u,c,i,h){const m=n("el-breadcrumb-item"),v=n("el-breadcrumb");return t(),s(v,{"separator-class":"el-icon-arrow-right"},{default:a((()=>[o(m,{to:{path:"/Home"}},{default:a((()=>[d])),_:1}),o(m,null,{default:a((()=>[r])),_:1}),o(m,null,{default:a((()=>[f])),_:1}),o(m,null,{default:a((()=>[p])),_:1})])),_:1})};var h=e({setup(){const e=c(!1),n=l();return{isCollapse:e,handleOpen:(e,l)=>{},handleClose:(e,l)=>{},clickRoute:e=>{n.push(e)}}}});const m={class:"menu"},v={class:"main"},_=o("i",{class:"el-icon-user"},null,-1),x=o("span",null,"用户管理",-1),C=u("选项1"),g=u("选项2"),b=u("选项3"),k=u("选项1"),w=o("i",{class:"el-icon-menu"},null,-1),O={class:"footer"};h.render=function(e,l,u,c,i,d){const r=n("el-menu-item"),f=n("el-menu-item-group"),p=n("el-submenu"),h=n("el-menu"),y=n("el-button");return t(),s("div",m,[o("div",v,[o(h,{uniqueOpened:!0,"default-active":"2",class:"el-menu-vertical-demo",onOpen:e.handleOpen,onClose:e.handleClose,"background-color":"#2e3035","text-color":"#fff","active-text-color":"#ffd04b",collapse:e.isCollapse,style:{height:"calc(100vh - 80px)"}},{default:a((()=>[o(p,{index:"1"},{title:a((()=>[_,x])),default:a((()=>[o(f,null,{title:a((()=>[])),default:a((()=>[o(r,{index:"1-1"},{default:a((()=>[C])),_:1}),o(r,{index:"1-2"},{default:a((()=>[g])),_:1}),o(r,{index:"1-3"},{default:a((()=>[b])),_:1}),o(r,{index:"1-4"},{default:a((()=>[k])),_:1})])),_:1})])),_:1}),o(r,{index:"2"},{title:a((()=>[o("span",{onClick:l[1]||(l[1]=l=>e.clickRoute("Menus"))},"菜单管理")])),default:a((()=>[w])),_:1})])),_:1},8,["onOpen","onClose","collapse"]),o("div",O,[o(y,{icon:e.isCollapse?"el-icon-s-unfold":"el-icon-s-fold",onClick:l[2]||(l[2]=l=>e.isCollapse=!e.isCollapse)},null,8,["icon"])])])])};const y={},R={style:{width:"100%",height:"100%"}};y.render=function(e,l){const a=n("router-view");return t(),s("div",R,[o(a)])};var M=e({components:{Nav:i,Menu:h,Content:y},setup(){const e=l();return{clickRoute:l=>{e.push(l)},handleOpen:(e,l)=>{console.log(e,l)},handleClose:(e,l)=>{console.log(e,l)}}}});const N={class:"layout"},j={class:"left"},q={class:"right"};M.render=function(e,l,u,c,i,d){const r=n("Menu"),f=n("Nav"),p=n("el-header"),h=n("Content"),m=n("el-main"),v=n("el-container");return t(),s("div",N,[o("div",j,[o(r)]),o("div",q,[o(v,{style:{height:"100%",width:"100%"}},{default:a((()=>[o(p,{class:"header"},{default:a((()=>[o(f)])),_:1}),o(m,{style:{height:"calc(100vh - 30px)",width:"100%",padding:"0px",margin:"0px"}},{default:a((()=>[o(h)])),_:1})])),_:1})])])};export default M;
