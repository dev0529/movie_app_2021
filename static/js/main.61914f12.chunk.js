(this.webpackJsonpmovie_app_2021=this.webpackJsonpmovie_app_2021||[]).push([[0],{44:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s(2),i=s.n(n),r=s(13),c=s.n(r),o=s(4),d=s.n(o),l=s(14),m=s(15),v=s(16),u=s(19),j=s(18),p=s(17),h=s.n(p);var b=function(e){e.id;var t=e.year,s=e.title,n=e.summary;return e.poster,Object(a.jsxs)("div",{class:"movies__movie",children:[Object(a.jsx)("h3",{class:"movie__title",children:s}),Object(a.jsx)("h5",{class:"movie__year",children:t}),Object(a.jsx)("p",{class:"movie__summary",children:n})]})},_=function(e){Object(u.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(m.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(l.a)(d.a.mark((function t(){var s,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");case 2:s=t.sent,a=s.data.data.movies,console.log(a),e.setState({movies:a,isLoading:!1});case 6:case"end":return t.stop()}}),t)}))),e}return Object(v.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(a.jsx)("section",{class:"container",children:t?Object(a.jsx)("div",{class:"loader",children:Object(a.jsx)("span",{class:"loader__text",children:'"Loading..."'})}):Object(a.jsx)("div",{class:"movies",children:s.map((function(e){return Object(a.jsx)(b,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image},e.id)}))})})}}]),s}(i.a.Component);c.a.render(Object(a.jsx)(_,{}),document.getElementById("potato"))}},[[44,1,2]]]);
//# sourceMappingURL=main.61914f12.chunk.js.map