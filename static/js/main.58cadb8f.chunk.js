(this.webpackJsonpcurrent_project=this.webpackJsonpcurrent_project||[]).push([[0],{163:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a(0),r=a.n(n),s=a(20),o=a.n(s),i=a(27),j=a(9),l=a(16),b=a(17),u=a.n(b),d="make_request",h="get_data",O="error",x="update_has_Next_Page",m="https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json",p=function(e,t){switch(t.type){case d:return{loading:!0,jobs:[]};case h:return Object(j.a)(Object(j.a)({},e),{},{loading:!1,jobs:t.payload.jobs});case O:return Object(j.a)(Object(j.a)({},e),{},{loading:!1,error:t.payload.error,jobs:[]});case x:return Object(j.a)(Object(j.a)({},e),{},{hasNextPage:t.payload.hasNextPage});default:return e}};var g=function(e,t){var a=Object(n.useReducer)(p,{jobs:[],loading:!0}),c=Object(l.a)(a,2),r=c[0],s=c[1];return Object(n.useEffect)((function(){var a=u.a.CancelToken.source();s({type:d}),u.a.get(m,{cancelToken:a.token,params:Object(j.a)({markdown:!0,page:t},e)}).then((function(e){s({type:h,payload:{jobs:e.data}})})).catch((function(e){u.a.isCancel(e)||s({type:O,paylod:{error:e}})}));var c=u.a.CancelToken.source();return u.a.get(m,{cancelToken:c.token,params:Object(j.a)({markdown:!0,page:t+1},e)}).then((function(e){s({type:x,payload:{hasNextPage:0!==e.data.length}})})).catch((function(e){u.a.isCancel(e)||s({type:O,paylod:{error:e}})})),function(){a.cancel(),c.cancel()}}),[e,t]),r},f=a(167),y=a(170),k=a(165),v=a(166),N=a(168),C=a(39),_=a.n(C),w=function(e){var t=e.job,a=Object(n.useState)(!1),r=Object(l.a)(a,2),s=r[0],o=r[1];return Object(c.jsx)(y.a,{className:"mb-3 bg-light",children:Object(c.jsxs)(y.a.Body,{children:[Object(c.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(c.jsxs)("div",{children:[Object(c.jsxs)(y.a.Title,{children:[t.title," -"," ",Object(c.jsx)("span",{className:"text-muted font-weight-light",children:t.company})]}),Object(c.jsx)(y.a.Subtitle,{className:"text-muted mb-2",children:new Date(t.created_at).toLocaleDateString()}),Object(c.jsx)(k.a,{variant:"success",className:"mr-2",children:t.type}),Object(c.jsx)(k.a,{variant:"secondary",className:"mr-2",children:t.location}),Object(c.jsx)("div",{style:{wordBreak:"break-all"},children:Object(c.jsx)(_.a,{source:t.how_to_apply})})]}),Object(c.jsx)("img",{className:"d-none d-md-block",height:"50",src:t.company_logo,alt:t.company})]}),Object(c.jsx)(y.a.Text,{children:Object(c.jsx)(v.a,{variant:"info",onClick:function(){return o((function(e){return!e}))},children:s?"Hide Details":"View Details"})}),Object(c.jsx)(N.a,{in:s,children:Object(c.jsx)("div",{className:"mt-4",children:Object(c.jsx)(_.a,{source:t.description})})})]})})},P=a(171),T=function(e){var t=e.page,a=e.setPage,n=e.hasNextPage,r=function(e){a((function(t){return t+e}))};return Object(c.jsxs)(P.a,{children:[1!==t&&Object(c.jsx)(P.a.Prev,{onClick:function(){return r(-1)}}),1!==t&&Object(c.jsx)(P.a.Item,{onClick:function(){return a(1)},children:"1"}),t>2&&Object(c.jsx)(P.a.Ellipsis,{}),t>2&&Object(c.jsx)(P.a.Item,{onClick:function(){return r(-1)},children:t-1}),Object(c.jsx)(P.a.Item,{active:!0,children:t}),n&&Object(c.jsx)(P.a.Item,{onClick:function(){return r(1)},children:t+1}),n&&Object(c.jsx)(P.a.Next,{onClick:function(){return r(1)}})]})},S=a(169),D=a(65),I=function(e,t){return Object(c.jsx)(S.a,{classname:"mb-4",children:Object(c.jsxs)(S.a.Row,{className:"align-items-end",children:[Object(c.jsxs)(S.a.Group,{as:D.a,children:[Object(c.jsx)(S.a.Label,{children:"Description"}),Object(c.jsx)(S.a.Control,{onChange:t,value:e.description,name:"description",type:"text"})]}),Object(c.jsxs)(S.a.Group,{as:D.a,children:[Object(c.jsx)(S.a.Label,{children:"Location"}),Object(c.jsx)(S.a.Control,{onChange:t,value:e.location,name:"location",type:"text"})]}),Object(c.jsx)(S.a.Group,{as:D.a,xs:"auto",className:"ml-2",children:Object(c.jsx)(S.a.Check,{onChange:t,value:e.full_time,name:"full_time",id:"full_time",lable:"Only Full Time",type:"checkbox",className:"mb-2"})})]})})},L=function(){var e=Object(n.useState)({}),t=Object(l.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(1),o=Object(l.a)(s,2),b=o[0],u=o[1],d=g(a,b),h=d.jobs,O=d.loading,x=d.error,m=d.hasNextPage;return Object(c.jsxs)(f.a,{className:"my-4",children:[Object(c.jsx)("h1",{variant:"primary",className:"mb-4",children:"GitHub Jobs"}),Object(c.jsx)(I,{params:a,onParamChange:function(e){var t=e.target.name,a=e.target.value;r((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(i.a)({},t,a))}))}}),Object(c.jsx)(T,{page:b,setPage:u,hasNextPage:m}),O&&Object(c.jsx)("h1",{children:"Loading..."}),x&&Object(c.jsx)("h1",{children:"Error, Try Refreshing."}),h.map((function(e){return Object(c.jsx)(w,{job:e},e.id)})),Object(c.jsx)(T,{page:b,setPage:u,hasNextPage:m})]})};o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(L,{})}),document.getElementById("root"))}},[[163,1,2]]]);
//# sourceMappingURL=main.58cadb8f.chunk.js.map