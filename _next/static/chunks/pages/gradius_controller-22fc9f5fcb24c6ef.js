(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[229],{7615:function(t,o,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gradius_controller",function(){return n(4132)}])},4132:function(t,o,n){"use strict";n.r(o);var _=n(5893),r=n(24),l=n(7294),e=n(5371),s=n(8239),u=n(1290),a=n(4428),c=n.n(a);let i=()=>{let[t]=(0,r.KO)(e.L),[o,n]=(0,l.useState)(2);if(!t)return(0,_.jsx)(s.g,{visible:!0});//!userが常にfalseだから常にロードしているのではないか
let a=async t=>{let o=u.x.controller1.player.$post({body:t});console.log(o)},i=async t=>{let o=(t+1)%2;n(o),console.log("state",o);let _=u.x.controller1.game_state.$post({body:o});console.log(_)},d=async()=>{u.x.controller1.laser_shot.$post({body:[1]})};return(0,_.jsxs)("div",{className:c().container,children:[(0,_.jsxs)("div",{className:c().up_down_button_board,children:[(0,_.jsx)("div",{className:c().up_button,onClick:()=>a({move:{x:0,y:-1}}),children:"上"}),(0,_.jsx)("div",{className:c().down_button,onClick:()=>a({move:{x:0,y:1}}),children:"下"})]}),(0,_.jsxs)("div",{className:c().left_right_button_board,children:[(0,_.jsx)("div",{className:c().left_button,onClick:()=>a({move:{x:-1,y:0}}),children:"左"}),(0,_.jsx)("div",{className:c().right_button,onClick:()=>a({move:{x:1,y:0}}),children:"右"}),(0,_.jsx)("div",{className:c().start_button,onClick:()=>i(o),children:["playing","stop","start"][o]}),(0,_.jsx)("div",{className:c().shoot_button,onClick:()=>d(),children:"発射"})]})]})};o.default=i},4428:function(t){t.exports={container:"gradius_controller_container__Cr9mH",up_down_button_board:"gradius_controller_up_down_button_board__HRQU1",left_right_button_board:"gradius_controller_left_right_button_board__CX8Zl",up_button:"gradius_controller_up_button__BaePJ",down_button:"gradius_controller_down_button__TQsKc",left_button:"gradius_controller_left_button__NoNER",right_button:"gradius_controller_right_button__P4mgP",start_button:"gradius_controller_start_button__Vq7YX",shoot_button:"gradius_controller_shoot_button__M0rhE"}}},function(t){t.O(0,[774,888,179],function(){return t(t.s=7615)}),_N_E=t.O()}]);