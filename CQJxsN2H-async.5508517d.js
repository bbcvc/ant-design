(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["CQJxsN2H"],{CQJxsN2H:function(e,a,t){t.d(a,"__esModule",{value:!0}),t.d(a,"default",{enumerable:!0,get:function(){return r;}});var l=t("8Z0rk4BW");t("UqGybEO7");var n=t("WyIMPUJp"),d=t("qdGieaVz");let o=[{title:"Name",dataIndex:"name"},{title:"Age",dataIndex:"age"},{title:"Address",dataIndex:"address"}],s=[];for(let e=0;e<46;e++)s.push({key:e,name:`Edward King ${e}`,age:32,address:`London, Park Lane no. ${e}`});var r=()=>{let[e,a]=(0,n.useState)([]),t={selectedRowKeys:e,onChange:e=>{console.log("selectedRowKeys changed: ",e),a(e);},selections:[d.Table.SELECTION_ALL,d.Table.SELECTION_INVERT,d.Table.SELECTION_NONE,{key:"odd",text:"Select Odd Row",onSelect:e=>{a(e.filter((e,a)=>a%2==0));}},{key:"even",text:"Select Even Row",onSelect:e=>{a(e.filter((e,a)=>a%2!=0));}}]};return(0,l.jsx)(d.Table,{rowSelection:t,columns:o,dataSource:s});};}}]);
//# sourceMappingURL=CQJxsN2H-async.5508517d.js.map