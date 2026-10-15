import InquiryForm from "./InquiryForm";
export const metadata={title:"1:1 비공개 문의",description:"올바른정리 부산 유품정리 1:1 비회원 비공개 상담 문의",robots:{index:true,follow:true}};
export default function Inquiry(){return <main className="boardPage"><div className="boardHead"><p>PRIVATE CONSULTATION</p><h1>1:1 비공개 문의</h1><span>회원가입 없이 문의를 남기고 접수번호와 비밀번호로 답변을 확인하세요.</span></div><div className="boardWrap"><InquiryForm/></div></main>}
