import{j as s,u as l,a as r,L as x,A as c,R as n}from"./index-I18b_bcF.js";const o=({post:t})=>s.jsxs("article",{className:"text-light p-6 bg-black text-white",children:[s.jsx("h2",{className:"text-4xl my-10",children:t.title}),s.jsx("section",{className:"font-light text-xl",children:t.body})]});function d(){const{id:t}=l(),{data:e,isLoading:a,isError:i}=r(t);return s.jsxs(s.Fragment,{children:[a&&s.jsx(x,{}),s.jsxs("h1",{className:"text-5xl font-medium mb-10",children:["Пост ",t]}),s.jsx(c,{to:n.main,className:"mb-10",children:"Назад"}),e&&s.jsx(o,{post:e}),i&&s.jsx("p",{className:"text-5xl",children:"Не удалось загрузить пост, попробуйте попытку позже."})]})}export{d as default};
