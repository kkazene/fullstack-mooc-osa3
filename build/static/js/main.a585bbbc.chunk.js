(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n(42)},40:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),u=n(10),o=n.n(u),i=n(11),c=n(12),l=n(14),s=n(13),m=n(15),f=n(2),p=n.n(f),d="/api/persons",v={getAll:function(){return p.a.get(d).then(function(e){return e.data})},create:function(e){return p.a.post(d,e).then(function(e){return e.data})},update:function(e,t){return p.a.put("".concat(d,"/").concat(e),t).then(function(e){return e.data})},remove:function(e){return p.a.delete("".concat(d,"/").concat(e)).then(function(e){return e})}},b=function(e){var t=e.error,n=e.errorType;if(null===t)return null;var r="message ".concat(n);return a.a.createElement("div",{className:r},t)},h=function(e){var t=e.filterValue,n=e.updateFilter;return a.a.createElement("div",null,"rajaa n\xe4ytett\xe4vi\xe4: ",a.a.createElement("input",{value:t,onChange:n}))},N=function(e){var t=e.newName,n=e.newNumber,r=e.addNumber,u=e.updateName,o=e.updateNumber;return a.a.createElement("form",{onSubmit:r},a.a.createElement("div",null,"nimi: ",a.a.createElement("input",{value:t,onChange:u})),a.a.createElement("div",null,"ninumero: ",a.a.createElement("input",{value:n,onChange:o})),a.a.createElement("div",null,a.a.createElement("button",{type:"submit"},"lis\xe4\xe4")))},w=function(e){var t=e.persons,n=e.removeNumber;return a.a.createElement("table",null,a.a.createElement("tbody",null,t.map(function(e){return a.a.createElement("tr",{key:e.name},a.a.createElement("td",null,e.name),a.a.createElement("td",null,e.number),a.a.createElement("td",null,a.a.createElement("button",{onClick:function(){return n(e)},type:"button"},"poista")))})))},E=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(s.a)(t).call(this,e))).updateFilter=function(e){n.setState({filterValue:e.target.value})},n.updateName=function(e){n.setState({newName:e.target.value})},n.updateNumber=function(e){n.setState({newNumber:e.target.value})},n.addNumber=function(e){e.preventDefault();var t=n.state,r=t.persons,a=t.newName,u=t.newNumber,o=r.map(function(e){return{name:e.name,id:e.id}}),i={name:a,number:u},c=o.filter(function(e){return e.name===a});if(c.length){var l=c[0].id;window.confirm("".concat(a," on jo luettelossa, korvataanko vanha numero uudella?"))&&v.update(l,i).then(function(e){var t=n.state.persons.filter(function(e){return e.id!==l});n.setState({persons:t.concat(e),newName:"",newNumber:"",error:"Muokattiin onnistuneesti ".concat(a,"!"),errorType:"success"}),setTimeout(function(){n.setState({error:null})},5e3)}).catch(function(e){n.setState({error:"Kyseist\xe4 henkil\xf6\xe4 ei en\xe4\xe4 l\xf6ydy!",errorType:"error",persons:n.state.persons.filter(function(e){return e.id!==l})}),setTimeout(function(){n.setState({error:null})},5e3)})}else v.create(i).then(function(e){n.setState({persons:n.state.persons.concat(e),newName:"",newNumber:"",error:"Lis\xe4ttiin onnistuneesti ".concat(a,"!"),errorType:"success"}),setTimeout(function(){n.setState({error:null})},5e3)}).catch(function(e){n.setState({error:"".concat(e),errorType:"error"}),setTimeout(function(){n.setState({error:null})},5e3)})},n.removeNumber=function(e){var t=e.id,r=e.name;window.confirm("poistetaanko ".concat(r))&&v.remove(t).then(function(e){n.setState({persons:n.state.persons.filter(function(e){return e.id!==t}),error:"Poistettiin onnistuneesti ".concat(r,"!"),errorType:"success"}),setTimeout(function(){n.setState({error:null})},5e3)}).catch(function(e){n.setState({error:"Kyseist\xe4 henkil\xf6\xe4 ei en\xe4\xe4 l\xf6ydy!",errorType:"error",persons:n.state.persons.filter(function(e){return e.id!==t})}),setTimeout(function(){n.setState({error:null})},5e3)})},n.state={persons:[],filterValue:"",newName:"",newNumber:"",error:null,errorType:""},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.getAll().then(function(t){e.setState({persons:t})}).catch(function(t){e.setState({error:"".concat(t)}),setTimeout(function(){e.setState({error:null})},5e3)})}},{key:"render",value:function(){var e=this.state,t=e.persons,n=e.filterValue,r=e.newName,u=e.newNumber,o=e.error,i=e.errorType,c=n.length?t.filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())}):t;return a.a.createElement("div",null,a.a.createElement("h1",null,"Puhelinluettelo"),a.a.createElement(b,{error:o,errorType:i}),a.a.createElement(h,{filterValue:n,updateFilter:this.updateFilter}),a.a.createElement("h2",null,"Lis\xe4\xe4 uusi"),a.a.createElement(N,{newName:r,newNumber:u,addNumber:this.addNumber,updateName:this.updateName,updateNumber:this.updateNumber}),a.a.createElement("h2",null,"Numerot"),a.a.createElement(w,{persons:c,filter:n,removeNumber:this.removeNumber}))}}]),t}(a.a.Component);n(40);o.a.render(a.a.createElement(E,null),document.getElementById("root"))}},[[16,2,1]]]);
//# sourceMappingURL=main.a585bbbc.chunk.js.map