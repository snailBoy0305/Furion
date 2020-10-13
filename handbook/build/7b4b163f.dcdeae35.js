(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{142:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return p}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),d=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=d(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(t),m=a,p=u["".concat(c,".").concat(m)]||u[m]||b[m]||r;return t?o.a.createElement(p,i(i({ref:n},s),{},{components:t})):o.a.createElement(p,i({ref:n},s))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,c=new Array(r);c[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<r;s++)c[s]=t[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},99:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return d}));var a=t(2),o=t(6),r=(t(0),t(142)),c={id:"dbcontext-Interceptor",title:"9.24 \u6570\u636e\u5e93\u64cd\u4f5c\u62e6\u622a\u5668",sidebar_label:"9.24 \u6570\u636e\u5e93\u64cd\u4f5c\u62e6\u622a\u5668"},i={unversionedId:"dbcontext-Interceptor",id:"dbcontext-Interceptor",isDocsHomePage:!1,title:"9.24 \u6570\u636e\u5e93\u64cd\u4f5c\u62e6\u622a\u5668",description:"9.24.1 \u6570\u636e\u5e93\u62e6\u622a\u5668",source:"@site/docs\\dbcontext-Interceptor.mdx",slug:"/dbcontext-Interceptor",permalink:"/fur/docs/dbcontext-Interceptor",editUrl:"https://gitee.com/monksoul/Fur/tree/main/handbook/docs/dbcontext-Interceptor.mdx",version:"current",sidebar_label:"9.24 \u6570\u636e\u5e93\u64cd\u4f5c\u62e6\u622a\u5668",sidebar:"docs",previous:{title:"9.23 \u5b9e\u4f53/\u5168\u5c40\u67e5\u8be2\u7b5b\u9009\u5668",permalink:"/fur/docs/dbcontext-filter"},next:{title:"9.25 \u4e8b\u52a1\u548c\u5de5\u4f5c\u5355\u5143",permalink:"/fur/docs/tran"}},l=[{value:"9.24.1 \u6570\u636e\u5e93\u62e6\u622a\u5668",id:"9241-\u6570\u636e\u5e93\u62e6\u622a\u5668",children:[]},{value:"9.24.2 \u652f\u6301\u62e6\u622a\u7c7b\u578b",id:"9242-\u652f\u6301\u62e6\u622a\u7c7b\u578b",children:[{value:"9.24.2.1 <code>DbConnectionInterceptor</code>",id:"92421-dbconnectioninterceptor",children:[]},{value:"9.24.2.2 <code>DbCommandInterceptor</code>",id:"92422-dbcommandinterceptor",children:[]},{value:"9.24.2.3 <code>SaveChangesInterceptor</code>",id:"92423-savechangesinterceptor",children:[]},{value:"9.24.2.4 <code>SavedChangesEvent</code> \u62e6\u622a",id:"92424-savedchangesevent-\u62e6\u622a",children:[]}]},{value:"9.24.3 \u6ce8\u518c\u81ea\u5b9a\u4e49\u8fc7\u6ee4\u5668",id:"9243-\u6ce8\u518c\u81ea\u5b9a\u4e49\u8fc7\u6ee4\u5668",children:[]},{value:"9.24.4 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"9244-\u53cd\u9988\u4e0e\u5efa\u8bae",children:[]}],s={rightToc:l};function d(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"9241-\u6570\u636e\u5e93\u62e6\u622a\u5668"},"9.24.1 \u6570\u636e\u5e93\u62e6\u622a\u5668"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Fur")," \u6846\u67b6\u63d0\u4f9b\u56db\u79cd\u6570\u636e\u5e93\u64cd\u4f5c\u62e6\u622a\u5668\uff0c\u53ef\u4ee5\u901a\u8fc7\u62e6\u622a\u5668\u52a8\u6001\u4fee\u8be5\u6570\u636e\u5e93\u8fde\u63a5\u5b57\u7b26\u4e32\uff0c\u52a8\u6001\u4fee\u6539sql\uff0c\u52a8\u6001\u66f4\u6539\u53c2\u6570\u7b49\u64cd\u4f5c\u3002"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Fur")," \u652f\u6301\u8fd9\u56db\u79cd\u62e6\u622a\u5668\uff1a"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"DbConnectionInterceptor"),"\uff1a\u6570\u636e\u5e93\u8fde\u63a5\u62e6\u622a\u5668"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"DbCommandInterceptor"),"\uff1a\u6570\u636e\u5e93\u6267\u884c ",Object(r.b)("inlineCode",{parentName:"li"},"Sql")," \u62e6\u622a\u5668"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"SaveChangesInterceptor"),"\uff1a\u63d0\u4ea4\u5230\u6570\u636e\u5e93\u62e6\u622a\u5668"),Object(r.b)("li",{parentName:"ul"},"\u5728\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u4e2d\u91cd\u5199 ",Object(r.b)("inlineCode",{parentName:"li"},"SavedChangesEvent")," \u76f8\u5173\u4e8b\u4ef6")),Object(r.b)("h2",{id:"9242-\u652f\u6301\u62e6\u622a\u7c7b\u578b"},"9.24.2 \u652f\u6301\u62e6\u622a\u7c7b\u578b"),Object(r.b)("h3",{id:"92421-dbconnectioninterceptor"},"9.24.2.1 ",Object(r.b)("inlineCode",{parentName:"h3"},"DbConnectionInterceptor")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"using Microsoft.EntityFrameworkCore.Diagnostics;\nusing System.Data.Common;\nusing System.Threading;\nusing System.Threading.Tasks;\n\nnamespace Fur.DatabaseAccessor.Interceptors\n{\n    public class SqlConnectionInterceptor : DbConnectionInterceptor\n    {\n        // \u6570\u636e\u5e93\u8fde\u63a5\u4e4b\u524d\n        public override InterceptionResult ConnectionOpening(DbConnection connection, ConnectionEventData eventData, InterceptionResult result)\n        {\n            return base.ConnectionOpening(connection, eventData, result);\n        }\n\n        // \u6570\u636e\u5e93\u8fde\u63a5\u4e4b\u524d\uff08\u5f02\u6b65\uff09\n        public override ValueTask<InterceptionResult> ConnectionOpeningAsync(DbConnection connection, ConnectionEventData eventData, InterceptionResult result, CancellationToken cancellationToken = default)\n        {\n            return base.ConnectionOpeningAsync(connection, eventData, result, cancellationToken);\n        }\n\n        // \u6570\u636e\u5e93\u8fde\u63a5\u6210\u529f\n        public override void ConnectionOpened(DbConnection connection, ConnectionEndEventData eventData)\n        {\n            base.ConnectionOpened(connection, eventData);\n        }\n\n        // \u6570\u636e\u5e93\u8fde\u63a5\u6210\u529f\uff08\u5f02\u6b65\uff09\n        public override Task ConnectionOpenedAsync(DbConnection connection, ConnectionEndEventData eventData, CancellationToken cancellationToken = default)\n        {\n            return base.ConnectionOpenedAsync(connection, eventData, cancellationToken);\n        }\n\n        // \u6570\u636e\u5e93\u8fde\u63a5\u5173\u95ed\u4e4b\u524d\n        public override InterceptionResult ConnectionClosing(DbConnection connection, ConnectionEventData eventData, InterceptionResult result)\n        {\n            return base.ConnectionClosing(connection, eventData, result);\n        }\n\n        // \u6570\u636e\u5e93\u8fde\u63a5\u5173\u95ed\u4e4b\u524d\uff08\u5f02\u6b65\uff09\n        public override ValueTask<InterceptionResult> ConnectionClosingAsync(DbConnection connection, ConnectionEventData eventData, InterceptionResult result)\n        {\n            return base.ConnectionClosingAsync(connection, eventData, result);\n        }\n\n        // \u6570\u636e\u5e93\u8fde\u63a5\u5173\u95ed\u6210\u529f\n        public override void ConnectionClosed(DbConnection connection, ConnectionEndEventData eventData)\n        {\n            base.ConnectionClosed(connection, eventData);\n        }\n\n        // \u6570\u636e\u5e93\u8fde\u63a5\u5173\u95ed\u6210\u529f\uff08\u5f02\u6b65\uff09\n        public override Task ConnectionClosedAsync(DbConnection connection, ConnectionEndEventData eventData)\n        {\n            return base.ConnectionClosedAsync(connection, eventData);\n        }\n\n        // \u6570\u636e\u5e93\u8fde\u63a5\u5931\u8d25\n        public override void ConnectionFailed(DbConnection connection, ConnectionErrorEventData eventData)\n        {\n            base.ConnectionFailed(connection, eventData);\n        }\n\n        // \u6570\u636e\u5e93\u8fde\u63a5\u5931\u8d25\uff08\u5f02\u6b65\uff09\n        public override Task ConnectionFailedAsync(DbConnection connection, ConnectionErrorEventData eventData, CancellationToken cancellationToken = default)\n        {\n            return base.ConnectionFailedAsync(connection, eventData, cancellationToken);\n        }\n    }\n}\n")),Object(r.b)("h3",{id:"92422-dbcommandinterceptor"},"9.24.2.2 ",Object(r.b)("inlineCode",{parentName:"h3"},"DbCommandInterceptor")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"using Microsoft.EntityFrameworkCore.Diagnostics;\nusing System.Data.Common;\nusing System.Threading;\nusing System.Threading.Tasks;\n\nnamespace Fur.DatabaseAccessor\n{\n    internal sealed class SqlCommandProfilerInterceptor : DbCommandInterceptor\n    {\n        // \u521b\u5efa\u547d\u4ee4\u5bf9\u8c61\u4e4b\u524d\n        public override InterceptionResult<DbCommand> CommandCreating(CommandCorrelatedEventData eventData, InterceptionResult<DbCommand> result)\n        {\n            return base.CommandCreating(eventData, result);\n        }\n\n        // \u521b\u5efa\u547d\u4ee4\u5bf9\u8c61\u4e4b\u540e\n        public override DbCommand CommandCreated(CommandEndEventData eventData, DbCommand result)\n        {\n            return base.CommandCreated(eventData, result);\n        }\n\n        // \u521b\u5efa\u547d\u4ee4\u5bf9\u8c61\u5931\u8d25\n        public override void CommandFailed(DbCommand command, CommandErrorEventData eventData)\n        {\n            base.CommandFailed(command, eventData);\n        }\n\n         // \u521b\u5efa\u547d\u4ee4\u5bf9\u8c61\u5931\u8d25\uff08\u5f02\u6b65\uff09\n        public override Task CommandFailedAsync(DbCommand command, CommandErrorEventData eventData, CancellationToken cancellationToken = default)\n        {\n            return base.CommandFailedAsync(command, eventData, cancellationToken);\n        }\n\n        // \u8bfb\u53d6\u6570\u636e\u4e4b\u524d\n        public override InterceptionResult<DbDataReader> ReaderExecuting(DbCommand command, CommandEventData eventData, InterceptionResult<DbDataReader> result)\n        {\n            return base.ReaderExecuting(command, eventData, result);\n        }\n\n        // \u8bfb\u53d6\u6570\u636e\u4e4b\u524d\uff08\u5f02\u6b65\uff09\n        public override ValueTask<InterceptionResult<DbDataReader>> ReaderExecutingAsync(DbCommand command, CommandEventData eventData, InterceptionResult<DbDataReader> result, CancellationToken cancellationToken = default)\n        {\n            return base.ReaderExecutingAsync(command, eventData, result, cancellationToken);\n        }\n\n        // \u8bfb\u53d6\u6570\u636e\u4e4b\u540e\n        public override DbDataReader ReaderExecuted(DbCommand command, CommandExecutedEventData eventData, DbDataReader result)\n        {\n            return base.ReaderExecuted(command, eventData, result);\n        }\n\n        // \u8bfb\u53d6\u6570\u636e\u4e4b\u540e\uff08\u5f02\u6b65\uff09\n        public override ValueTask<DbDataReader> ReaderExecutedAsync(DbCommand command, CommandExecutedEventData eventData, DbDataReader result, CancellationToken cancellationToken = default)\n        {\n            return base.ReaderExecutedAsync(command, eventData, result, cancellationToken);\n        }\n\n        // DataReader \u5bf9\u8c61\u91ca\u653e\u4e4b\u524d\n        public override InterceptionResult DataReaderDisposing(DbCommand command, DataReaderDisposingEventData eventData, InterceptionResult result)\n        {\n            return base.DataReaderDisposing(command, eventData, result);\n        }\n\n        // \u65e0\u67e5\u8be2\u6267\u884c sql \u4e4b\u524d\n        public override InterceptionResult<int> NonQueryExecuting(DbCommand command, CommandEventData eventData, InterceptionResult<int> result)\n        {\n            return base.NonQueryExecuting(command, eventData, result);\n        }\n\n        // \u65e0\u67e5\u8be2\u6267\u884c sql \u4e4b\u524d\uff08\u5f02\u6b65\uff09\n        public override ValueTask<InterceptionResult<int>> NonQueryExecutingAsync(DbCommand command, CommandEventData eventData, InterceptionResult<int> result, CancellationToken cancellationToken = default)\n        {\n            return base.NonQueryExecutingAsync(command, eventData, result, cancellationToken);\n        }\n\n        // \u65e0\u67e5\u8be2\u6267\u884c sql \u4e4b\u540e\n        public override int NonQueryExecuted(DbCommand command, CommandExecutedEventData eventData, int result)\n        {\n            return base.NonQueryExecuted(command, eventData, result);\n        }\n\n        // \u65e0\u67e5\u8be2\u6267\u884c sql \u4e4b\u540e\uff08\u5f02\u6b65\uff09\n        public override ValueTask<int> NonQueryExecutedAsync(DbCommand command, CommandExecutedEventData eventData, int result, CancellationToken cancellationToken = default)\n        {\n            return base.NonQueryExecutedAsync(command, eventData, result, cancellationToken);\n        }\n\n        // \u6267\u884c sql \u8fd4\u56de\u5355\u884c\u5355\u5217\u4e4b\u524d\n        public override InterceptionResult<object> ScalarExecuting(DbCommand command, CommandEventData eventData, InterceptionResult<object> result)\n        {\n            return base.ScalarExecuting(command, eventData, result);\n        }\n\n        // \u6267\u884c sql \u8fd4\u56de\u5355\u884c\u5355\u5217\u4e4b\u524d\uff08\u5f02\u6b65\uff09\n        public override ValueTask<InterceptionResult<object>> ScalarExecutingAsync(DbCommand command, CommandEventData eventData, InterceptionResult<object> result, CancellationToken cancellationToken = default)\n        {\n            return base.ScalarExecutingAsync(command, eventData, result, cancellationToken);\n        }\n\n        // \u6267\u884c sql \u8fd4\u56de\u5355\u884c\u5355\u5217\u4e4b\u540e\n        public override object ScalarExecuted(DbCommand command, CommandExecutedEventData eventData, object result)\n        {\n            return base.ScalarExecuted(command, eventData, result);\n        }\n\n        // \u6267\u884c sql \u8fd4\u56de\u5355\u884c\u5355\u5217\u4e4b\u540e\uff08\u5f02\u6b65\uff09\n        public override ValueTask<object> ScalarExecutedAsync(DbCommand command, CommandExecutedEventData eventData, object result, CancellationToken cancellationToken = default)\n        {\n            return base.ScalarExecutedAsync(command, eventData, result, cancellationToken);\n        }\n    }\n}\n")),Object(r.b)("h3",{id:"92423-savechangesinterceptor"},"9.24.2.3 ",Object(r.b)("inlineCode",{parentName:"h3"},"SaveChangesInterceptor")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"using Microsoft.EntityFrameworkCore.Diagnostics;\nusing System.Threading;\nusing System.Threading.Tasks;\n\nnamespace Fur.DatabaseAccessor\n{\n    public class DbContextSaveChangesInterceptor : SaveChangesInterceptor\n    {\n        // \u63d0\u4ea4\u5230\u6570\u636e\u5e93\u4e4b\u524d\n        public override InterceptionResult<int> SavingChanges(DbContextEventData eventData, InterceptionResult<int> result)\n        {\n            return base.SavingChanges(eventData, result);\n        }\n\n        // \u63d0\u4ea4\u5230\u6570\u636e\u5e93\u4e4b\u524d\uff08\u5f02\u6b65\uff09\n        public override ValueTask<InterceptionResult<int>> SavingChangesAsync(DbContextEventData eventData, InterceptionResult<int> result, CancellationToken cancellationToken = default)\n        {\n            return base.SavingChangesAsync(eventData, result, cancellationToken);\n        }\n\n        // \u63d0\u4ea4\u5230\u6570\u636e\u5e93\u4e4b\u540e\n        public override int SavedChanges(SaveChangesCompletedEventData eventData, int result)\n        {\n            return base.SavedChanges(eventData, result);\n        }\n\n        // \u63d0\u4ea4\u5230\u6570\u636e\u5e93\u4e4b\u540e\uff08\u5f02\u6b65\uff09\n        public override ValueTask<int> SavedChangesAsync(SaveChangesCompletedEventData eventData, int result, CancellationToken cancellationToken = default)\n        {\n            return base.SavedChangesAsync(eventData, result, cancellationToken);\n        }\n\n        // \u63d0\u4ea4\u6570\u636e\u5e93\u5931\u8d25\n        public override void SaveChangesFailed(DbContextErrorEventData eventData)\n        {\n            base.SaveChangesFailed(eventData);\n        }\n\n        // \u63d0\u4ea4\u6570\u636e\u5e93\u5931\u8d25\uff08\u5f02\u6b65\uff09\n        public override Task SaveChangesFailedAsync(DbContextErrorEventData eventData, CancellationToken cancellationToken = default)\n        {\n            return base.SaveChangesFailedAsync(eventData, cancellationToken);\n        }\n    }\n}\n")),Object(r.b)("h3",{id:"92424-savedchangesevent-\u62e6\u622a"},"9.24.2.4 ",Object(r.b)("inlineCode",{parentName:"h3"},"SavedChangesEvent")," \u62e6\u622a"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Fur")," \u6846\u67b6\u4e2d\u4e3a\u6240\u6709 ",Object(r.b)("inlineCode",{parentName:"p"},"AppDbContext")," \u5b50\u7c7b\u90fd\u63d0\u4f9b\u4e86\u4e09\u4e2a\u53ef\u91cd\u5199\u7684\u65b9\u6cd5\uff0c\u8fd9\u4e09\u4e2a\u65b9\u6cd5\u5206\u522b\u7531\u4e09\u4e2a\u4e8b\u4ef6\u89e6\u53d1\uff1a"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"\u63d0\u4ea4\u66f4\u6539\u4e4b\u524d SavingChanges \u4e8b\u4ef6"),"\uff1a\u89e6\u53d1 ",Object(r.b)("inlineCode",{parentName:"li"},"void SavingChangesEvent(object sender, SavingChangesEventArgs e)")," \u65b9\u6cd5"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"\u63d0\u4ea4\u66f4\u6539\u4e4b\u540e SavedChanges \u4e8b\u4ef6"),"\uff1a\u89e6\u53d1 ",Object(r.b)("inlineCode",{parentName:"li"},"void SavedChangesEvent(object sender, SavedChangesEventArgs e)")," \u65b9\u6cd5"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"\u63d0\u4ea4\u66f4\u6539\u5931\u8d25 SaveChangesFailed \u4e8b\u4ef6"),"\uff1a\u89e6\u53d1 ",Object(r.b)("inlineCode",{parentName:"li"},"void SaveChangesFailedEvent(object sender, SaveChangesFailedEventArgs e)")," \u65b9\u6cd5")),Object(r.b)("p",null,"\u901a\u8fc7\u8fd9\u4e09\u4e2a\u4e8b\u4ef6\u6211\u4eec\u53ef\u4ee5",Object(r.b)("strong",{parentName:"p"},"\u5728\u6570\u636e\u5e93\u505a\u589e\u3001\u5220\u3001\u6539\u65f6\u5019\u505a\u62e6\u622a\uff0c\u6bd4\u5982\u8bbe\u7f6e\u521b\u5efa\u65f6\u95f4\u3001\u66f4\u65b0\u65f6\u95f4\u6216\u5176\u4ed6\u9ed8\u8ba4\u64cd\u4f5c"),"\u3002"),Object(r.b)("p",null,"\u5982\u81ea\u52a8\u6dfb\u52a0\u79df\u6237Id\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"protected override void SavingChangesEvent(object sender, SavingChangesEventArgs e)\n{\n    // \u83b7\u53d6\u5f53\u524d\u4e8b\u4ef6\u5bf9\u5e94\u4e0a\u4e0b\u6587\n    var dbContext = sender as FurDbContext;\n    // \u83b7\u53d6\u6240\u6709\u65b0\u589e\u548c\u66f4\u65b0\u7684\u5b9e\u4f53\n    var entities = dbContext.ChangeTracker.Entries()\n                .Where(u => u.State == EntityState.Added || u.State == EntityState.Modified);\n    foreach (var entity in entities)\n    {\n        switch (entity.State)\n        {\n            // \u81ea\u52a8\u8bbe\u7f6e\u79df\u6237Id\n            case EntityState.Added:\n                entity.Property(nameof(Entity.TenantId)).CurrentValue = GetTenantId();\n                break;\n            // \u6392\u9664\u79df\u6237Id\n            case EntityState.Modified:\n                entity.Property(nameof(Entity.TenantId)).IsModified = false;\n                break;\n        }\n    }\n}\n")),Object(r.b)("h2",{id:"9243-\u6ce8\u518c\u81ea\u5b9a\u4e49\u8fc7\u6ee4\u5668"},"9.24.3 \u6ce8\u518c\u81ea\u5b9a\u4e49\u8fc7\u6ee4\u5668"),Object(r.b)("p",null,"\u5b9a\u4e49\u597d\u8fc7\u6ee4\u5668\u4e4b\u540e\uff0c\u6211\u4eec\u9700\u8981\u5728\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u4e2d\u6ce8\u518c\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"services.AddSqlitePool<FurDbContext>(interceptors: new IInterceptor[] {\n    new SqlConnectionProfilerInterceptor(),\n    new DbContextSaveChangesInterceptor(),\n    new SqlCommandProfilerInterceptor()\n});\n")),Object(r.b)("h2",{id:"9244-\u53cd\u9988\u4e0e\u5efa\u8bae"},"9.24.4 \u53cd\u9988\u4e0e\u5efa\u8bae"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\u7ed9 Fur \u63d0 ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://gitee.com/monksoul/Fur/issues/new?issue"}),"Issue"),"\u3002"))))}d.isMDXComponent=!0}}]);