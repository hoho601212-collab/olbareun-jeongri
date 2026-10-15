import AdminPanel from "./AdminPanel";
export const metadata={title:"게시판 관리자",robots:{index:false,follow:false}};
export default function Admin(){return <main className="boardPage"><div className="boardHead"><p>PRIVATE ADMINISTRATION</p><h1>게시판 관리</h1><span>공지사항 등록 및 비공개 문의 답변</span></div><div className="boardWrap"><AdminPanel/></div></main>}
