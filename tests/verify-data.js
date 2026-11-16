/* Verify standalone course data without network/dependencies. */
const fs=require('node:fs');
const vm=require('node:vm');
const path=require('node:path');
const root=path.join(__dirname,'..');
const data=fs.readFileSync(path.join(root,'assets/js/course-data.js'),'utf8');
const course=vm.runInNewContext(data+'\nCOURSE;');
const assert=require('node:assert/strict');
assert.equal(course.length,16,'Expected 10 lectures + 6 workshops');
assert.equal(course.filter(x=>!x.kind).length,10);
assert.equal(course.filter(x=>x.kind==='workshop').length,6);
assert.equal(course.reduce((n,x)=>n+x.questions.length,0),393);
for(const c of course) for(const q of c.questions){
 if(q.kind==='mc')assert(q.options.length>q.correct && q.correct>=0,'Invalid answer key');
 if(q.kind==='tf')assert(typeof q.correct==='boolean','Invalid true/false');
}
for(const p of ['index.html','about.html','assets/css/style.css','assets/images/book-cover.svg','assets/js/app.js'])assert(fs.existsSync(path.join(root,p)),p+' missing');
console.log('PASS: 10 lectures, 6 workshops, 393 questions, assets present');
