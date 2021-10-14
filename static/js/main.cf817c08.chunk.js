(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{13:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3CvRl",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__2bkPr"}},14:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2AxMb",Modal:"Modal_Modal__2WBTT"}},26:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__DncjJ"}},27:function(e,t,a){e.exports={Button:"Button_Button__3R1xi"}},71:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(24),c=a.n(o),l=a(15),s=a(4),i=a(5),u=a(7),h=a(6),m=a(12),d=a.n(m);d.a.defaults.baseURL="https://pixabay.com/api";var b="23089090-b881069149d08b76d7d8b0f8f",p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return console.log(e,t),d()("/?q=".concat(e,"&page=").concat(t,"&key=").concat(b,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))},g=a(8),f=a.n(g),j=a(0),y=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={inputValue:""},e.handleSubmit=function(t){t.preventDefault(),console.log(e.state.inputValue),e.props.onSubmit(e.state.inputValue)},e.handleChange=function(t){e.setState({inputValue:t.target.value})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(j.jsx)("header",{className:f.a.Searchbar,children:Object(j.jsxs)("form",{onSubmit:this.handleSubmit,className:f.a.SearchForm,children:[Object(j.jsx)("button",{type:"submit",className:f.a.SearchFormButton,children:Object(j.jsx)("span",{className:f.a.SearchFormButtonLabel,children:"Search"})}),Object(j.jsx)("input",{onChange:this.handleChange,className:f.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(n.Component),O=y,v=a(25),S=a.n(v),I=function(){return Object(j.jsx)("div",{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"},children:Object(j.jsx)(S.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})})},_=a(13),x=a.n(_),k=function(e){var t=e.image,a=e.onClick;return Object(j.jsx)("li",{className:x.a.ImageGalleryItem,children:Object(j.jsx)("img",{onClick:function(){return a(t.largeImageURL)},src:t.webformatURL,alt:"image",className:x.a.ImageGalleryItemImage})})},C=a(26),w=a.n(C),M=function(e){var t=e.listImages,a=e.onClick;return Object(j.jsx)("ul",{className:w.a.ImageGallery,children:t.map((function(e){return Object(j.jsx)(k,{image:e,onClick:a},e.id)}))})},F=a(27),B=a.n(F),G=function(e){var t=e.onClick;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("button",{className:B.a.Button,onClick:t,children:"Load More"})})},N=a(14),D=a.n(N),L=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).modalKeyDown=function(t){"Escape"===t.key&&e.props.onClose()},e.closeOnClick=function(t){t.target!==t.currentTarget&&e.props.onClose()},e.backdropRef=Object(n.createRef)(),e.modalClick=function(t){var a=e.backdropRef.current;a&&t.target!==a||e.props.onClose()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.modalKeyDown)}},{key:"componentWillMount",value:function(){window.removeEventListener("keydown",this.modalKeyDown)}},{key:"render",value:function(){var e=this.props.url;return Object(j.jsx)("div",{onClick:this.modalClick,className:D.a.Overlay,ref:this.backdropRef,children:Object(j.jsx)("div",{className:D.a.Modal,onClick:this.closeOnClick,children:Object(j.jsx)("img",{src:e,alt:"img"})})})}}]),a}(n.Component),R=L,E=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchQuery:"beagle",page:1,listImages:null,loading:!1,showModal:!1},e.handleSubmit=function(t){e.setState({searchQuery:t})},e.loadMore=function(){e.setState((function(e){return{page:e.page+1}}))},e.openModal=function(t){e.setState({largeImage:t,showModal:!0})},e.onClose=function(){e.setState({showModal:!1})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;p(this.state.searchQuery).then((function(t){return e.setState({listImages:t})})).catch((function(e){return console.log("Error:",e)}))}},{key:"componentDidUpdate",value:function(e,t){var a=this;return t.searchQuery!==this.state.searchQuery?p(this.state.searchQuery,1).then((function(e){a.setState({listImages:e,page:1})})).catch((function(e){return console.log("Error:",e)})):t.page!==this.state.page&&1!==this.state.page?p(this.state.searchQuery,this.state.page).then((function(e){a.setState((function(t){return{listImages:[].concat(Object(l.a)(t.listImages),Object(l.a)(e))}})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(e){return console.log("Error:",e)})):void 0}},{key:"render",value:function(){var e=this.state,t=e.listImages,a=e.loading,n=e.showModal;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(O,{onSubmit:this.handleSubmit}),t&&Object(j.jsx)(M,{listImages:t,onClick:this.openModal}),a&&Object(j.jsx)(I,{}),t&&Object(j.jsx)(G,{onClick:this.loadMore}),n&&Object(j.jsx)(R,{url:this.state.largeImage,onClose:this.onClose})]})}}]),a}(n.Component),Q=E;c.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(Q,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__DjWH3",SearchForm:"Searchbar_SearchForm__1ac2l",SearchFormButton:"Searchbar_SearchFormButton__21S85",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__8f9cn",SearchFormInput:"Searchbar_SearchFormInput__VhsfU"}}},[[71,1,2]]]);
//# sourceMappingURL=main.cf817c08.chunk.js.map