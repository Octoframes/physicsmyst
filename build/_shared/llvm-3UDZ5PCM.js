import{c as f,i,j as c,k as l,m as r,p as s}from"/physicsmyst/build/_shared/chunk-RMYRWJKG.js";var v=f((N,o)=>{i();c();l();s();r();function _(e){return e?typeof e=="string"?e:e.source:null}function a(...e){return e.map(t=>_(t)).join("")}function x(e){let n=/([-a-zA-Z$._][\w$.-]*)/,t={className:"type",begin:/\bi\d+(?=\s|\b)/},d={className:"operator",relevance:0,begin:/=/},u={className:"punctuation",relevance:0,begin:/,/},p={className:"number",variants:[{begin:/0[xX][a-fA-F0-9]+/},{begin:/-?\d+(?:[.]\d+)?(?:[eE][-+]?\d+(?:[.]\d+)?)?/}],relevance:0},m={className:"symbol",variants:[{begin:/^\s*[a-z]+:/}],relevance:0},g={className:"variable",variants:[{begin:a(/%/,n)},{begin:/%\d+/},{begin:/#\d+/}]},b={className:"title",variants:[{begin:a(/@/,n)},{begin:/@\d+/},{begin:a(/!/,n)},{begin:a(/!\d+/,n)},{begin:/!\d+/}]};return{name:"LLVM IR",keywords:"begin end true false declare define global constant private linker_private internal available_externally linkonce linkonce_odr weak weak_odr appending dllimport dllexport common default hidden protected extern_weak external thread_local zeroinitializer undef null to tail target triple datalayout volatile nuw nsw nnan ninf nsz arcp fast exact inbounds align addrspace section alias module asm sideeffect gc dbg linker_private_weak attributes blockaddress initialexec localdynamic localexec prefix unnamed_addr ccc fastcc coldcc x86_stdcallcc x86_fastcallcc arm_apcscc arm_aapcscc arm_aapcs_vfpcc ptx_device ptx_kernel intel_ocl_bicc msp430_intrcc spir_func spir_kernel x86_64_sysvcc x86_64_win64cc x86_thiscallcc cc c signext zeroext inreg sret nounwind noreturn noalias nocapture byval nest readnone readonly inlinehint noinline alwaysinline optsize ssp sspreq noredzone noimplicitfloat naked builtin cold nobuiltin noduplicate nonlazybind optnone returns_twice sanitize_address sanitize_memory sanitize_thread sspstrong uwtable returned type opaque eq ne slt sgt sle sge ult ugt ule uge oeq one olt ogt ole oge ord uno ueq une x acq_rel acquire alignstack atomic catch cleanup filter inteldialect max min monotonic nand personality release seq_cst singlethread umax umin unordered xchg add fadd sub fsub mul fmul udiv sdiv fdiv urem srem frem shl lshr ashr and or xor icmp fcmp phi call trunc zext sext fptrunc fpext uitofp sitofp fptoui fptosi inttoptr ptrtoint bitcast addrspacecast select va_arg ret br switch invoke unwind unreachable indirectbr landingpad resume malloc alloca free load store getelementptr extractelement insertelement shufflevector getresult extractvalue insertvalue atomicrmw cmpxchg fence argmemonly double",contains:[t,e.COMMENT(/;\s*$/,null,{relevance:0}),e.COMMENT(/;/,/$/),e.QUOTE_STRING_MODE,{className:"string",variants:[{begin:/"/,end:/[^\\]"/}]},b,u,d,g,m,p]}}o.exports=x});export default v();
