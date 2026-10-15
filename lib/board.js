import {randomBytes,scryptSync,timingSafeEqual,createHmac} from "node:crypto";
export const ready=()=>Boolean(process.env.OLBARUN_SUPABASE_URL&&process.env.OLBARUN_SUPABASE_SERVICE_KEY);
export async function db(table,{method="GET",query="",body,prefer}={}){
 if(!ready())throw Error("게시판 데이터베이스가 아직 연결되지 않았습니다.");
 const url=process.env.OLBARUN_SUPABASE_URL.replace(/\/$/,"")+"/rest/v1/"+table+query;
 const res=await fetch(url,{method,headers:{"apikey":process.env.OLBARUN_SUPABASE_SERVICE_KEY,"Authorization":"Bearer "+process.env.OLBARUN_SUPABASE_SERVICE_KEY,"Content-Type":"application/json","Prefer":prefer||"return=representation"},body:body?JSON.stringify(body):undefined,cache:"no-store"});
 if(!res.ok)throw Error("데이터 저장소 요청 실패 ("+res.status+")");
 return res.status===204?[]:res.json();
}
export const hashPassword=(password)=>{const salt=randomBytes(16).toString("hex");return salt+":"+scryptSync(password,salt,64).toString("hex")};
export const checkPassword=(password,stored)=>{try{const [salt,hex]=stored.split(":");const a=scryptSync(password,salt,64),b=Buffer.from(hex,"hex");return a.length===b.length&&timingSafeEqual(a,b)}catch{return false}};
export const receipt=()=>randomBytes(9).toString("hex").toUpperCase();
export const adminValid=(password)=>{if(!process.env.OLBARUN_BOARD_ADMIN_PASSWORD||!password)return false;const a=Buffer.from(password),b=Buffer.from(process.env.OLBARUN_BOARD_ADMIN_PASSWORD);return a.length===b.length&&timingSafeEqual(a,b)};
export const signAdmin=()=>createHmac("sha256",process.env.OLBARUN_BOARD_SESSION_SECRET).update("olbarun-admin").digest("hex");
export const adminCookieValid=(cookie)=>{if(!cookie||!process.env.OLBARUN_BOARD_SESSION_SECRET)return false;const a=Buffer.from(cookie),b=Buffer.from(signAdmin());return a.length===b.length&&timingSafeEqual(a,b)};
