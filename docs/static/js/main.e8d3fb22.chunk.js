(this["webpackJsonpgoal-seek"]=this["webpackJsonpgoal-seek"]||[]).push([[0],{24:function(e,n,t){},25:function(e,n,t){},27:function(e,n,t){},31:function(e,n,t){},32:function(e,n,t){},33:function(e,n,t){"use strict";t.r(n);var o,c=t(0),i=t(10),r=t.n(i),a=(t(24),t(16)),s=t(3),l=(t(25),t(1)),u=function(e){return Object(l.jsx)("li",{className:"goal-item",onClick:function(){e.onDelete(e.id)},children:e.children})},d=(t(27),function(e){return Object(l.jsx)("ul",{className:"goal-list",children:e.items.map((function(n){return Object(l.jsx)(u,{id:n.id,onDelete:e.onDeleteItem,children:n.text},n.id)}))})}),b=t(11),j=t(12).a.button(o||(o=Object(b.a)(["\n  font: inherit;\n  padding: 0.5rem 1.5rem;\n  border: 1px solid #8b005d;\n  color: white;\n  background: #8b005d;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);\n  cursor: pointer;\n\n  &:focus {\n    outline: none;\n  }\n\n  &:hover,\n  &:active {\n    background: #ac0e77;\n    border-color: #ac0e77;\n    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);\n  }\n"]))),f=(t(31),function(e){var n=Object(c.useState)(""),t=Object(s.a)(n,2),o=t[0],i=t[1],r=Object(c.useState)(!0),a=Object(s.a)(r,2),u=a[0],d=a[1];return Object(l.jsxs)("form",{onSubmit:function(n){n.preventDefault(),u&&e.onAddGoal(o),i(""),d(!0)},children:[Object(l.jsxs)("div",{className:"form-control ".concat(u?"":"invalid"),children:[Object(l.jsx)("label",{children:"Course Goal"}),Object(l.jsx)("input",{type:"text",value:o,onChange:function(e){var n=e.target.value;i(n),d(!!(n.trim().length>0&&n))}})]}),Object(l.jsx)(j,{type:"submit",children:"Add Goal"})]})}),h=(t(32),function(){var e=Object(c.useState)([{text:"Do all exercises!",id:"g1"},{text:"Finish the course!",id:"g2"}]),n=Object(s.a)(e,2),t=n[0],o=n[1],i=Object(l.jsx)("p",{style:{textAlign:"center"},children:"No goals found. Maybe add one?"});return t.length>0&&(i=Object(l.jsx)(d,{items:t,onDeleteItem:function(e){o((function(n){return n.filter((function(n){return n.id!==e}))}))}})),Object(l.jsxs)("div",{children:[Object(l.jsx)("section",{id:"goal-form",children:Object(l.jsx)(f,{onAddGoal:function(e){o((function(n){var t=Object(a.a)(n);return t.unshift({text:e,id:Math.random().toString()}),t}))}})}),Object(l.jsx)("section",{id:"goals",children:i})]})});r.a.createRoot(document.getElementById("root")).render(Object(l.jsx)(h,{}))}},[[33,1,2]]]);
//# sourceMappingURL=main.e8d3fb22.chunk.js.map