"use strict";(self.webpackChunkgroup_ap=self.webpackChunkgroup_ap||[]).push([[458],{458:(e,s,a)=>{a.r(s),a.d(s,{default:()=>j});var i=a(791),n=a(184);const c=e=>{let{step:s,label:a,isActive:i,isCompleted:c,onClick:l}=e;return(0,n.jsxs)("div",{className:" step ".concat(i?"active":""," ").concat(c?"completed step-completed":""),onClick:l,children:[(0,n.jsx)("div",{className:"step-circle",children:s}),(0,n.jsx)("div",{className:"step-label",children:a})]})};var l=a(743),t=a(277),o=a(27);const d=a.p+"static/media/IcProtectionLight.c4e8416ebd9e1ad89d9a9b4002b02aca.svg",r=e=>{let{edad:s=25,opcion:c,selectedPlan:l}=e;const[o,d]=(0,i.useState)([]),r=a(760);return(0,i.useEffect)((()=>{(()=>{let e=r.list.filter((e=>e.age>s));d(e)})()}),[]),(0,n.jsx)("div",{className:"row justify-content-center align-content-center planes-v",children:o.map(((e,s)=>(0,n.jsx)("div",{className:"col-3",children:(0,n.jsx)(t.Z,{style:{width:"18rem"},className:"card-cotiza",children:(0,n.jsxs)(t.Z.Body,{children:[(0,n.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[(0,n.jsxs)("div",{children:["Plan en Casa y Cl\xednica"===e.name?(0,n.jsx)("span",{className:"recomend",children:"Plan recomendado"}):(0,n.jsx)(n.Fragment,{}),(0,n.jsx)("p",{className:"txt-plan-home",children:e.name})]}),(0,n.jsx)("div",{children:(0,n.jsx)("img",{src:"data:image/png;base64,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",alt:"",className:"img-home"})})]}),(0,n.jsx)("p",{children:"Costo del plan"}),"2"===c&&(0,n.jsx)("p",{children:(0,n.jsxs)("s",{children:["S/".concat(e.price)," antes"]})}),(0,n.jsx)("p",{children:"S/".concat("1"===c?e.price:e.price-.05*e.price," al mes")}),(0,n.jsx)("ul",{children:e.description.map(((e,s)=>(0,n.jsx)("li",{className:"txt-plans",children:e},s)))}),(0,n.jsxs)("p",{children:["Edad permitida: ",e.age," a\xf1os"]}),(0,n.jsx)("button",{className:"btn-plan txt-select-plan",onClick:()=>(e=>{l({...e,price:"1"===c?e.price:e.price-.05*e.price})})(e),children:"Seleccionar Plan"})]})})},s)))})};var p=a(705),A=a(7);const m=e=>{var s;let{priceSelect:i}=e;const c=a(678),l=A.Ry({opcionC:A.O7().oneOf([!0],"Debe aceptar los t\xe9rminos de Pol\xedtica Comunicaciones Comerciales")}),m=(0,p.TA)({enableReinitialize:!0,initialValues:{opcionC:""},validationSchema:l,onSubmit:e=>{}});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"row justify-content-center align-content-center",children:[(0,n.jsxs)("div",{className:"col-12",children:[(0,n.jsxs)("p",{className:"txt-principal",children:[c.name," \xbfPara qui\xe9n deseas cotizar?"]}),(0,n.jsx)("p",{className:"txt-principal2",children:"Selecciona opci\xf3n que se ajuste m\xe1s a tus necesidades"})]}),(0,n.jsx)("div",{className:"col-3 col-offset-3",children:(0,n.jsx)(t.Z,{style:{width:"18rem"},className:"card-cotiza",children:(0,n.jsxs)(t.Z.Body,{children:[(0,n.jsxs)("div",{className:"d-flex justify-content-between align-items-cente",children:[(0,n.jsx)("div",{children:(0,n.jsx)("img",{src:d,alt:"Para m\xed"})}),(0,n.jsx)("div",{className:"ml-auto",children:(0,n.jsx)(o.Z.Check,{type:"radio",name:"opcionC",id:"id2",className:"fw-bold",checked:"1"===m.values.opcionC,value:"1",onChange:e=>{m.setFieldValue("opcionC","1")}})})]}),(0,n.jsx)("p",{className:"txt-tplans",children:"Para m\xed"}),(0,n.jsx)("p",{className:"txt-plans",children:"Cotiza tu seguro de salud y agrega familiares si as\xed lo deseas."})]})})}),(0,n.jsx)("div",{className:"col-3",children:(0,n.jsx)(t.Z,{style:{width:"18rem"},className:"card-cotiza",children:(0,n.jsxs)(t.Z.Body,{children:[(0,n.jsxs)("div",{className:"d-flex justify-content-between align-items-cente",children:[(0,n.jsx)("div",{children:(0,n.jsx)("img",{src:"data:image/png;base64,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",alt:""})}),(0,n.jsx)("div",{className:"ml-auto",children:(0,n.jsx)(o.Z.Check,{type:"radio",name:"opcionC",id:"id1",className:"fw-bold",value:"2",checked:"2"===m.values.opcionC,onChange:e=>{m.setFieldValue("opcionC","2")}})})]}),(0,n.jsx)("p",{className:"txt-tplans",children:"Para alguien m\xe1s"}),(0,n.jsx)("p",{className:"txt-plans",children:"Realiza una cotizaci\xf3n para uno de tus familiares o cualquier persona."})]})})})]}),(null===(s=m.values)||void 0===s?void 0:s.opcionC)&&(0,n.jsx)(r,{edad:25,opcion:m.values.opcionC,selectedPlan:e=>{i(e)}})]})};var u=a(425),x=a(420);const j=()=>{const[e,s]=(0,i.useState)(0),[a,t]=(0,i.useState)({}),o=(0,x.v9)((e=>e.data)),[d,r]=(0,i.useState)([{step:1,label:"Planes y coberturas         ....",isActive:!0,isCompleted:!1},{step:2,label:"Resumen",isActive:!1,isCompleted:!1}]);return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(l.Z,{children:[(0,n.jsx)("div",{className:"step-container",children:d.map(((e,a)=>(0,n.jsx)(c,{step:e.step,label:e.label,isActive:e.isActive,isCompleted:e.isCompleted,onClick:()=>(e=>{const a=d.map(((s,a)=>({...s,isActive:a===e,isCompleted:a<e})));r(a),s(e)})(a)},a)))}),0===e?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(m,{priceSelect:e=>{console.log();const a=o.data[0];s(1),t({namePlan:e.name,price:e.price,dni:null===a||void 0===a?void 0:a.documento,celular:null===a||void 0===a?void 0:a.telefono})}})}):1===e?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(u.default,{datos:a})}):(0,n.jsx)(n.Fragment,{})]})})}},425:(e,s,a)=>{a.r(s),a.d(s,{default:()=>l});a(791);var i=a(743),n=a(277),c=a(184);const l=e=>{let{datos:s}=e;return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(i.Z,{children:(0,c.jsx)("div",{className:"row justify-content-center align-content-center",children:(0,c.jsxs)("div",{className:"col-8",children:[(0,c.jsx)("p",{className:"resumen-seguro",children:"Resumen del seguro"}),(0,c.jsxs)(n.Z,{style:{width:"18rem"},className:"card-cotiza",children:[(0,c.jsxs)(n.Z.Header,{children:[(0,c.jsx)("p",{className:"precio",children:"PRECIOS CALCULADOS PARA:"}),(0,c.jsx)("i",{className:"fa fa-users"})," Rocio"]}),(0,c.jsxs)(n.Z.Body,{children:[(0,c.jsx)("h5",{children:"Responsable de pago"}),(0,c.jsxs)("p",{children:["DNI:",s.dni]}),(0,c.jsxs)("p",{children:["Celular:",s.celular]}),(0,c.jsx)("br",{}),(0,c.jsx)("h5",{children:"Plan elegido"}),(0,c.jsx)("p",{children:s.namePlan}),(0,c.jsxs)("p",{children:["Costo del Plan: ",s.price," al mes"]})]})]})]})})})})}},760:e=>{e.exports=JSON.parse('{"list":[{"name":"Plan en Casa","option":39,"description":["M\xe9dico general a domicilio por S/20 y medicinas cubiertas al 100%.","Videoconsulta y orientaci\xf3n telef\xf3nica  al 100% en medicina general + pediatr\xeda.","Indemnizaci\xf3n de S/300 en caso de hospitalizaci\xf3n por m\xe1s de un d\xeda."],"age":60},{"name":"Plan en Casa y Cl\xednica","option":99,"description":["Consultas en cl\xednica para cualquier especialidad.","Medicinas y ex\xe1menes derivados cubiertos al 80%.","Atenci\xf3n m\xe9dica en m\xe1s de 200 cl\xednicas del pa\xeds."],"age":70},{"name":"Plan en Casa + Bienestar","option":70,"description":["Videoconsulta con especialistas de psicolog\xeda y nutrici\xf3n.","Acceso a videos y recursos sobre bienestar.","Incluye todos los beneficios del Plan en Casa."],"age":25},{"name":"Plan en Casa + Chequeo ","option":49,"description":["Un Chequeo preventivo general de manera presencial o virtual.","Acceso a Vacunas en el Programa del MINSA en centros privados.","Incluye todos los beneficios del Plan en Casa."],"age":90},{"name":"Plan en Casa + Fitness","option":45,"description":["Descuentos en m\xe1s de 50 locales de gimnasio.","Beneficios exclusivos en alimentos nutricionales y complementos.","Incluye todos los beneficios del Plan en Casa."],"age":30}]}')},678:e=>{e.exports=JSON.parse('{"name":"Roc\xedo","lastName":"Miranda D\xedaz","birthDay":"02-04-1990"}')}}]);
//# sourceMappingURL=458.4350fb2a.chunk.js.map