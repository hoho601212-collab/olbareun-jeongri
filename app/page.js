import Link from "next/link";
import {areas as areaLinks} from "../lib/areas";
const services=[["01.png","유품정리","고인의 물품을 신중하게 분류하고 정리합니다.","/service/estate-cleanup"],["02.png","폐기물처리","집정리 과정에서 발생하는 물품의 반출 범위를 확인합니다.","/service/waste"],["03.png","부분 철거","정리 후 필요한 시설물 철거 범위를 확인합니다.","/service/partial-demolition"],["04.png","빈집정리","장기간 비어 있거나 매각 전인 공간을 목적에 맞게 정리합니다.","/service/vacant-home"]];
const steps=[["01","상담 및 문의","전화 또는 온라인 상담"],["02","현장 확인","작업 범위 및 견적 안내"],["03","작업 계획","정리 범위 협의"],["04","유품정리 및 폐기물처리","전문 인력 작업 진행"],["05","마무리 확인","최종 정리 및 점검 완료"]];
const faqs=[
["유품정리 비용은 어떻게 결정되나요?","평수만으로 정하지 않습니다. 정리할 물품과 폐기물의 양, 필요한 인원과 차량, 층수, 엘리베이터 사용 여부, 주차 환경과 반출 동선을 함께 확인해 작업 범위를 안내합니다. 별도 장비나 추가 작업이 필요한 경우에는 진행 전에 먼저 설명드립니다."],
["유품정리 견적은 어떻게 받을 수 있나요?","전화 또는 카카오톡 상담 시 거실·방·주방·베란다와 대형 가구가 보이는 사진을 보내주시면 현장 상황을 파악하는 데 도움이 됩니다. 정확한 작업 범위와 비용은 현장 조건을 확인한 뒤 안내합니다."],
["유품정리 작업 범위와 진행 과정은 어떻게 되나요?","보관할 물품과 정리할 물품을 먼저 확인한 뒤 분류·포장·반출·적재 순으로 진행합니다. 폐기물 처리나 부분 철거가 필요한 현장은 해당 범위를 구분해 상담하며, 작업이 끝난 뒤 최종 확인을 진행합니다."],
["가족이 직접 준비해야 할 일은 무엇인가요?","사진, 통장, 인감, 중요 서류, 귀금속처럼 반드시 보관해야 할 물품은 가능하면 미리 구분해두는 것이 좋습니다. 현장에 계속 머무르기 어려운 경우에는 상담 단계에서 출입 방법과 보관품 확인 방식을 협의할 수 있습니다."],
["사용 가능한 가구와 가전제품도 확인할 수 있나요?","상태가 좋은 가구나 가전은 품목·연식·작동 상태 등을 먼저 확인합니다. 재사용이나 별도 처리가 가능한지는 물품 상태와 현장 조건에 따라 달라질 수 있으므로 사진 또는 현장 확인이 필요합니다."],
["주말이나 공휴일에도 작업할 수 있나요?","주말과 공휴일도 일정 상담이 가능합니다. 희망 날짜와 오전·오후 시간대를 알려주시면 부산 지역 작업 일정과 이동 동선을 확인해 가능한 시간을 안내합니다."],
["작업 당일 추가 비용이 발생할 수 있나요?","사전에 확인한 물량과 작업 환경이 동일하다면 협의한 범위를 기준으로 진행합니다. 다만 확인되지 않았던 추가 물량, 별도 장비, 추가 철거 등 작업 범위가 달라지는 경우에는 먼저 내용을 설명하고 협의합니다."],
["유품정리 후 청소까지 포함되나요?","물품 반출 후 기본적인 주변 정돈 범위는 현장 상담 시 확인합니다. 오랜 오염, 악취, 곰팡이 또는 전문적인 특수청소가 필요한 경우에는 일반 유품정리와 작업 범위가 다르므로 별도 확인이 필요합니다."]
];
export default function Home(){return <><main><section className="hero"><div className="heroInner"><p className="eyebrow">부산 유품정리 전문업체 올바른정리</p><h1>남겨진 공간을<br/>신중하게 정리합니다</h1><p>소중했던 공간, 올바른정리가 처음부터 끝까지 함께합니다.<br/>유품정리부터 폐기물 처리, 필요한 철거까지 한 번에.</p><div className="actions"><a className="primary" href="tel:01066484886">☎ 전화문의: 010-6648-4886</a><a className="secondary" href="http://qr.kakao.com/talk/xiB5oLU91AZmWwLV9g5AwwM4O5I-" target="_blank" rel="noopener noreferrer">● 카톡 문의</a></div></div></section>
<section id="services" className="serviceGrid">{services.map((s,i)=><a href={s[3]} className="serviceCard" key={i}><span className="serviceIcon"><img src={"/images/services/"+s[0]} alt="" width="64" height="64"/></span><div><h3>{s[1]}</h3><p>{s[2]}</p><b>자세히 보기 →</b></div></a>)}</section>
<section id="areas" className="split section"><div><p className="kicker">BUSAN SERVICE AREA</p><h2>우리 동네 유품정리<br/>지금 바로 확인하세요</h2><p className="lead">부산 전 지역, 가까운 곳에서 신속하게 방문합니다. 지역별 현장 특성에 맞춰 상담합니다.</p><a className="outline" href="#areaList">지역별 상세보기 →</a></div><div className="areaPanel"><div className="mapImageWrap"><img src="/images/maps/부산지도.png" alt="부산 16개 구·군 유품정리 서비스 지역 지도" className="busanMapImage" width="900" height="900" loading="lazy"/></div><div id="areaList" className="areaList">{areaLinks.map(a=><a key={a.slug} href={"/busan/"+a.slug}>{a.name}<b>›</b></a>)}</div></div></section>
<section id="about" className="section pale"><h2>올바른정리가<br/>선택받는 이유</h2><p className="lead">단순한 정리가 아닌, 공간과 마음을 존중하는 정리를 약속합니다.</p><div className="reasons">{[["부산 전 지역","신속한 현장 방문"],["전문 인력","체계적인 작업 진행"],["합리적인 비용","작업 범위 사전 안내"],["정식 폐기물 처리","안전하고 올바른 처리"],["철거·원상복구까지","한 번에 해결"]].map((x,i)=><div key={i}><i className="reasonFlower"><img src="/images/trust/chrysanthemum.png" alt="" width="72" height="72"/></i><strong>{x[0]}</strong><small>{x[1]}</small></div>)}</div></section>
<section id="process" className="section"><h2>작업 이렇게 진행합니다</h2><p className="lead">상담부터 마무리까지, 체계적인 절차로 진행합니다.</p><div className="steps">{steps.map(s=><article key={s[0]}><em>{s[0]}</em><i className="processIcon"><img src={"/images/process/"+s[0]+".png"} alt="" width="88" height="88"/></i><strong>{s[1]}</strong><small>{s[2]}</small></article>)}</div></section>
<section id="cases" className="section pale caseGallery">
<div className="sectionHead"><div><h2>작업사례로 확인하는 변화</h2><p className="lead">유품정리·빈집정리·폐기물처리 현장 사진을 유형별로 확인할 수 있도록 구성했습니다.</p></div></div>
{[
 ["유품정리","estate-cleanup","고인의 물품을 신중하게 분류하고 공간을 정리한 현장",["흑백 빈방과 올바른정리 워터마크.png","흑백으로 담은 어수선한 방.png","정리 중인 흑백 거실 풍경.png"]],
 ["빈집정리","vacant-home","장기간 비어 있던 공간의 생활물품과 가재도구를 정리한 현장",["vacant-home-before-after-bw.webp","vacant-home-before-after-02-bw.webp","vacant-home-before-after-03-bw.webp"]],
 ["폐기물처리","waste","집정리 과정에서 발생한 물품을 분류하고 반출한 현장",["waste-before-after-01-bw.webp","waste-before-after-02-bw.webp","waste-before-after-03-bw.webp"]]
].map(([title,folder,desc,photos])=><div className="caseGroup" key={folder}>
 <div className="caseGroupHead"><div><span>WORK CASE</span><h3>{title}</h3><p>{desc}</p></div><Link href="/cases">전체 사례 보기 →</Link></div>
 <div className="casePhotoGrid">{[1,2,3].map(n=><figure key={n} className="casePhotoSlot">
   {photos?<img className="casePhoto" src={"/images/cases/"+folder+"/"+photos[n-1]} alt={title+" 작업 현장 "+n} loading="lazy"/>:
   <div className="caseUploadPlaceholder"><small>PHOTO {String(n).padStart(2,"0")}</small><strong>{title}</strong><code>{"/images/cases/"+folder+"/0"+n+".webp"}</code></div>}
 </figure>)}</div>
</div>)}
</section>
<section className="section trustNote"><p className="kicker">OUR STANDARD</p><h2>확인되지 않은 후기보다<br/>작업 기준을 먼저 보여드립니다</h2><p className="lead">실제 작업사례와 고객 후기는 자료가 확보된 뒤 사실에 맞게 공개합니다. 현재는 상담·현장 확인·작업 범위 협의 등 서비스 기준을 중심으로 안내합니다.</p></section>\n<section id="faq" className="section faqSection">
<div className="faqIntro"><p className="kicker">FAQ</p><h2>자주 묻는 질문</h2><p className="lead">올바른정리에 많이 문의하시는 부산 유품정리 상담 내용을 정리했습니다.</p></div>
<div className="faqLayout"><div className="faqList">{faqs.map((f,i)=><details className="faqItem" key={f[0]}><summary><span>{String(i+1).padStart(2,"0")}</span><strong>{f[0]}</strong><b>＋</b></summary><p>{f[1]}</p></details>)}</div>
<aside className="quickGuide"><p className="kicker">QUICK GUIDE</p><h3>아래 내용을 알려주시면<br/>상담이 더욱 빠르게 진행됩니다.</h3><div className="guideGrid">{[["01","현장 주소와 주거 형태","부산 내 위치와 아파트·빌라·주택·원룸 등 현장 유형"],["02","층수와 엘리베이터","계단 작업 여부와 엘리베이터 사용 가능 여부"],["03","정리할 공간의 사진","방·거실·주방·베란다와 대형 가구가 보이는 사진"],["04","희망 작업 일정","원하는 날짜와 오전·오후 시간대"]].map(x=><div key={x[0]}><em>{x[0]}</em><strong>{x[1]}</strong><small>{x[2]}</small></div>)}</div><div className="faqContact"><a href="tel:01066484886"><small>전화문의</small><strong>010-6648-4886</strong></a><a href="http://qr.kakao.com/talk/xiB5oLU91AZmWwLV9g5AwwM4O5I-" target="_blank" rel="noopener noreferrer"><small>카톡문의</small><strong>바로가기 →</strong></a></div></aside></div>
<div className="faqLinks"><div><p className="kicker">SERVICE LINK</p><h3>궁금한 주제별 페이지를<br/>함께 확인해보세요.</h3></div><Link href="/">올바른정리 홈<small>서비스와 작업사례 한눈에 보기</small></Link><Link href="/service/estate-cleanup">유품정리 서비스<small>작업 범위와 진행 과정 안내</small></Link><Link href="/service/waste">폐기물처리<small>집정리 후 반출 범위 확인</small></Link><Link href="/busan">부산 지역 서비스<small>부산 16개 구·군 안내</small></Link></div>
<div className="faqFinal"><div><h3>찾으시는 답변이 없으신가요?</h3><p>현장 상황과 궁금한 내용을 알려주시면 작업 범위와 진행 방법을 편안하게 안내해드립니다.</p></div><a href="tel:01066484886">☎ 010-6648-4886</a><a href="http://qr.kakao.com/talk/xiB5oLU91AZmWwLV9g5AwwM4O5I-" target="_blank" rel="noopener noreferrer">카톡 문의 →</a></div>
</section>
<section id="contact" className="cta"><div><small>혼자가 아닙니다.</small><h2>올바른정리가 함께합니다.</h2><p>힘든 순간, 부담스러운 정리도 올바른정리가 도와드리겠습니다.</p></div><a className="primary" href="tel:01066484886">☎ 전화 상담</a><a className="secondary" href="http://qr.kakao.com/talk/xiB5oLU91AZmWwLV9g5AwwM4O5I-" target="_blank" rel="noopener noreferrer">● 카톡 문의</a></section></main>
<div className="mobileBar"><a href="tel:01066484886">☎ 전화상담</a><a href="http://qr.kakao.com/talk/xiB5oLU91AZmWwLV9g5AwwM4O5I-" target="_blank" rel="noopener noreferrer">● 카톡문의</a></div></>}