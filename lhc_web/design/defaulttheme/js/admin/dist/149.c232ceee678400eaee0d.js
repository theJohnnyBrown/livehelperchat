"use strict";(self.webpackChunkLHCReactAPPAdmin=self.webpackChunkLHCReactAPPAdmin||[]).push([[149],{6149:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var a=n(8152),s=n(7294),c=n(9669),d=n.n(c),r=n(4478),o=null;const l=function(e){var t=(0,s.useState)([]),n=(0,a.Z)(t,2),c=n[0],l=n[1],i=(0,s.useState)(!1),m=(0,a.Z)(i,2),u=m[0],p=m[1],g=(0,s.useReducer)((function(e){return e+1}),0),f=(0,a.Z)(g,2),h=(f[0],f[1]),v=(0,s.useState)(!0),I=(0,a.Z)(v,2),C=I[0],_=I[1],b=function(){u||d().get(WWW_DIR_JAVASCRIPT+"cannedmsg/filter/"+e.chatId).then((function(e){_(!1),l(e.data),p(!0),e.data.map((function(e,t){e.messages.map((function(e){1==e.current&&y(e)}))}))}))},E=function(t,n){void 0!==n&&(n.stopPropagation(),n.preventDefault()),setTimeout((function(){var n=new FormData;n.append("msg",t.msg);var a=!1;t.subject_ids&&(n.append("subjects_ids",t.subject_ids),a=!0),n.append("canned_id",t.id);var s=document.getElementById("CSChatMessage-"+e.chatId);s&&s.getAttribute("mode-write")&&n.append("mode_write",s.getAttribute("mode-write")),d().post(WWW_DIR_JAVASCRIPT+"chat/addmsgadmin/"+e.chatId,n,{headers:{"X-CSRFToken":confLH.csrf_token}}).then((function(t){return LHCCallbacks.addmsgadmin&&LHCCallbacks.addmsgadmin(e.chatId),ee.emitEvent("chatAddMsgAdmin",[e.chatId]),1==a&&lhinst.updateVoteStatus(e.chatId),lhinst.syncadmincall(),!0}))}),t.delay)},y=function(t){if(clearTimeout(o),null!==t){var n=document.getElementById("chat-render-preview-"+e.chatId);n.innerHTML=t.msg;var a=new FormData;a.append("msg",t.msg),a.append("msg_body",!0),o=setTimeout((function(){d().post(WWW_DIR_JAVASCRIPT+"chat/previewmessage/",a).then((function(e){n.innerHTML=e.data}))}),100)}else document.getElementById("chat-render-preview-"+e.chatId).innerHTML=""};(0,s.useEffect)((function(){c.map((function(t,n){t.messages.map((function(t){if(t.current){var n=document.getElementById("canned-msg-"+e.chatId+"-"+t.id);null==n||(a="canned-list-"+e.chatId,s="canned-msg-"+e.chatId+"-"+t.id,c={threshold:10},d=document.getElementById(a),r=document.getElementById(s),d.offsetHeight+d.scrollTop>=r.offsetTop+c.threshold&&r.offsetTop>d.scrollTop-c.threshold)||n.scrollIntoView()}var a,s,c,d,r}))}))})),(0,s.useEffect)((function(){function t(t,n){e.chatId==t&&d().get(WWW_DIR_JAVASCRIPT+"cannedmsg/filter/"+e.chatId).then((function(e){u||(l(e.data),y(null),p(!0)),e.data.map((function(e,t){e.messages.map((function(e){e.id==n&&E(e)}))}))}))}return ee.addListener("sendCannedByMessageId",t),ee.emitEvent("chatCannedMounted",[e.chatId]),function(){ee.removeListener("sendCannedByMessageId",t)}}),[]);var k=function(t,n){if((13==t.keyCode||38==t.keyCode||40==t.keyCode)&&1==n)return t.preventDefault(),void t.stopPropagation();if(27==t.keyCode&&(document.getElementById("CSChatMessage-"+e.chatId).focus(),_(!0)),13==t.keyCode)c.map((function(t,n){return t.messages.map((function(t){if(t.current){var n=document.getElementById("CSChatMessage-"+e.chatId);n.value=t.msg,n.focus(),t.subject_ids&&n.setAttribute("subjects_ids",t.subject_ids),n.setAttribute("canned_id",t.id),_(!0)}}))})),t.preventDefault(),t.stopPropagation();else if(38==t.keyCode){var a=!1;if(void 0!==c[0]&&1==c[0].messages[0].current){c[0].messages[0].current=!1;var s=c.length-1;c[s].messages[c[s].messages.length-1].current=!0,y(c[s].messages[c[s].messages.length-1]),c[s].expanded||(c[s].expanded=!0)}else c.map((function(e,t,n){return n[n.length-1-t].messages.map((function(e,s,c){var d=c[c.length-1-s];1==a?(n[n.length-1-t].expanded||(n[n.length-1-t].expanded=!0),d.current=!0,a=!1,y(d)):d.current&&(d.current=!1,a=!0)}))}));l(c),h(),t.preventDefault(),t.stopPropagation()}else 40==t.keyCode?(a=!1,void 0!==c[c.length-1]&&1==c[c.length-1].messages[c[c.length-1].messages.length-1].current?(c[c.length-1].messages[c[c.length-1].messages.length-1].current=!1,c[0].messages[0].current=!0,y(c[0].messages[0]),c[0].expanded||(c[0].expanded=!0)):c.map((function(e,t){e.messages.map((function(t){1==a?(e.expanded||(e.expanded=!0),t.current=!0,y(t),a=!1):t.current&&(t.current=!1,a=!0)}))})),l(c),h(),t.preventDefault(),t.stopPropagation()):!0===n&&d().get(WWW_DIR_JAVASCRIPT+"cannedmsg/filter/"+e.chatId+"?q="+encodeURIComponent(t.target.value)).then((function(e){l(e.data),_(!1),y(null),e.data.map((function(e,t){e.messages.map((function(e){1==e.current&&y(e)}))}))}))},x=(0,r.$)("chat_canned"),A=x.t;return x.i18n,s.createElement(s.Fragment,null,s.createElement("div",{className:"col-12 col-xl-6"},!u&&s.createElement("p",{className:"border mb-0 mt-0 pb-1 pt-1"},s.createElement("a",{className:"fs13 d-block",onClick:b},s.createElement("span",{className:"material-icons"},"expand_more"),A("chat_canned.canned"))),u&&C&&s.createElement("ul",{className:"list-unstyled fs13 border mt-0 mx300 mb-0"},s.createElement("li",{className:"pt-1 pb-1"},s.createElement("a",{className:"d-block",onClick:function(e){return _(!1)}},s.createElement("span",{className:"material-icons"},"expand_more"),A("chat_canned.canned")))),u&&!C&&s.createElement("ul",{className:"list-unstyled fs13 border mt-0 mx300",id:"canned-list-"+e.chatId},s.createElement("li",{className:"border-bottom pt-1 pb-1"},s.createElement("a",{onClick:function(e){return _(!0)}},s.createElement("span",{className:"material-icons"},"expand_less"),A("chat_canned.canned"))),c.map((function(t,n){return s.createElement("li",null,s.createElement("a",{className:"font-weight-bold",key:n,onClick:function(){return a=n,(e=t).expanded=!e.expanded,void l(c.map((function(t,n){return a==n?e:t})));var e,a}},s.createElement("span",{className:"material-icons"},t.expanded?"expand_less":"expand_more"),t.title," [",t.messages.length,t.messages.length>=50?"+":"","]"),t.expanded&&s.createElement("ul",{className:"list-unstyled ms-4"},t.messages.map((function(t){return s.createElement("li",{key:t.id,className:t.current?"font-italic font-weight-bold":"",id:"canned-msg-"+e.chatId+"-"+t.id},s.createElement("a",{className:"hover-canned d-block",onMouseLeave:function(e){return y(null),void c.map((function(e,t){e.messages.map((function(e){1==e.current&&y(e)}))}))},onMouseEnter:function(e){return function(e){y(e)}(t)},title:t.msg,onClick:function(n){return function(t){var n=document.getElementById("CSChatMessage-"+e.chatId);n.value=n.getAttribute("content_modified")?n.value+t.msg:t.msg,n.focus(),t.subject_ids&&n.setAttribute("subjects_ids",t.subject_ids),n.setAttribute("canned_id",t.id),y(t)}(t)}},s.createElement("span",{title:A("chat_canned.send_instantly"),onClick:function(e){return E(t,e)},className:"material-icons fs12"},"send")," ",t.message_title))}))))})))),s.createElement("div",{className:"col-12 col-xl-6"},s.createElement("input",{type:"text",onFocus:b,className:"form-control form-control-sm",onKeyUp:function(e){return k(e,!0)},onKeyDown:function(e){return k(e,!1)},defaultValue:"",placeholder:A("chat_canned.navigate")}),!C&&s.createElement("div",{className:"mx275 mh275 mt-1 break-words",id:"chat-render-preview-"+e.chatId})))}}}]);
//# sourceMappingURL=149.c232ceee678400eaee0d.js.map