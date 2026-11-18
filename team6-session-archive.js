/* Team 6 Bakeoff 3: local, device-only experiment archive.
   Official WPM is computed by each prototype and passed through unchanged.
   Qualifying >=95% is the team's optional filter, not an official scoring rule. */
(function(){
'use strict';
const KEY='team6_bakeoff3_completed_sessions_v1';
const COLS=['run_id','saved_at','prototype','status','qualified','demo','trials_finished','session_accuracy_pct','official_wpm','raw_wpm','penalty','session_time_sec','total_errors','letters_entered','letters_expected','trial','target','entered','trial_time_sec','trial_wpm','trial_accuracy_pct','deletes','gestures','cancels','cursor_moves'];
function read(){
 try{const x=JSON.parse(localStorage.getItem(KEY)||'[]');return Array.isArray(x)?x:[]}
 catch(_){return []}
}
function quote(value){
 const s=String(value==null?'':value);
 return '"'+s.replace(/"/g,'""')+'"';
}
function rowsFor(sessions){
 const rows=[];
 for(const run of sessions){
  for(const t of run.records){
   rows.push({
    run_id:run.id,saved_at:run.savedAt,prototype:run.prototype,
    status:run.status,qualified:run.qualified,demo:run.demo,
    trials_finished:run.records.length,
    session_accuracy_pct:run.accuracy,
    official_wpm:run.official.finalWpm,raw_wpm:run.official.rawWpm,
    penalty:run.official.penalty,session_time_sec:run.official.totalMs/1000,
    total_errors:run.official.errors,letters_entered:run.official.lettersEntered,
    letters_expected:run.official.lettersExpected,
    trial:t.trial,target:t.target,entered:t.entered,
    trial_time_sec:t.time_sec,trial_wpm:t.wpm,
    trial_accuracy_pct:t.accuracy,deletes:t.deletes,
    gestures:t.gestures,cancels:t.cancels,cursor_moves:t.cursor_moves
   })
  }
 }
 return rows;
}
function download(sessions,filename){
 const data=rowsFor(sessions);
 if(!data.length)return false;
 const csv=[COLS.join(','),...data.map(r=>COLS.map(k=>quote(r[k])).join(','))].join('\r\n');
 const url=URL.createObjectURL(new Blob(['\ufeff',csv],{type:'text/csv;charset=utf-8'}));
 const link=document.createElement('a');
 link.href=url;link.download=filename;
 document.body.appendChild(link);link.click();link.remove();
 setTimeout(()=>URL.revokeObjectURL(url),3000);
 return true;
}
function setupControls(csvButton){
 csvButton.textContent='Export qualified CSV';
 const all=document.createElement('button');
 all.type='button';all.className='secondary';all.textContent='Export all attempts';
 all.title='Includes completed runs below 95% and practice sessions for transparent reporting';
 csvButton.insertAdjacentElement('afterend',all);
 const notice=document.createElement('p');
 notice.className='note';notice.style.marginTop='9px';
 notice.textContent='Completed runs auto-save to this browser. Qualifying runs auto-download CSV when the browser allows it. Incomplete runs are not recorded. For transparency, the all-attempts CSV includes below-95% runs.';
 csvButton.parentElement.insertAdjacentElement('afterend',notice);
 csvButton.addEventListener('click',()=>{
  const x=read().filter(s=>s.qualified);
  if(!download(x,'team6_bakeoff3_qualified_history.csv'))alert('No qualifying sessions saved in this browser yet.');
 });
 all.addEventListener('click',()=>{
  if(!download(read(),'team6_bakeoff3_all_completed_runs.csv'))alert('No completed sessions saved in this browser yet.');
 });
}
function recordCompleted({records,official,expectedTrials,demo}){
 const finished=records.length===expectedTrials && expectedTrials>0;
 const accuracy=Math.max(0,100*(1-official.errors/Math.max(official.lettersExpected,official.lettersEntered,1)));
 const qualified=finished&&!demo&&expectedTrials>=10&&accuracy>=95;
 const status=!finished?'incomplete':demo||expectedTrials<10?'practice':accuracy<95?'below_95':'qualified';
 if(!finished)return{saved:false,qualified:false,message:'Incomplete session: not added to completed-run archive.'};
 const prototype=location.pathname.split('/').filter(Boolean).at(-2)||'prototype';
 const now=new Date();
 const run={id:now.toISOString().replace(/[:.]/g,'-')+'_'+Math.random().toString(36).slice(2,8),
  savedAt:now.toISOString(),prototype,status,qualified,demo,
  accuracy,expectedTrials,official:{...official},records:records.map(r=>({...r}))};
 let stored=false;
 try{const existing=read();existing.push(run);localStorage.setItem(KEY,JSON.stringify(existing));stored=true}
 catch(_){}
 let downloaded=false;
 if(qualified){try{downloaded=download([run],'team6_'+prototype+'_qualified_'+run.id+'.csv')}catch(_){}}
 const count=read();
 const nGood=count.filter(x=>x.qualified).length,nOther=count.length-nGood;
 const saveMsg=stored?'Saved automatically to this browser.':'Browser storage failed — export your CSV now.';
 const dlMsg=qualified?(downloaded?' CSV download requested.':' CSV automatic download unavailable; use Export qualified CSV.'):' No automatic CSV download for nonqualifying run.';
 const kind=qualified?'QUALIFIED':status==='below_95'?'BELOW 95%':status==='practice'?'PRACTICE':'INCOMPLETE';
 return{saved:stored,qualified,message:'\n'+kind+' · Session accuracy: '+accuracy.toFixed(1)+'% ('+expectedTrials+' phrases).\n'+saveMsg+dlMsg+'\nCompleted runs stored on this device: '+count.length+' (qualified '+nGood+', other '+nOther+').'};
}
window.Team6SessionArchive=Object.freeze({setupControls,recordCompleted});
})();