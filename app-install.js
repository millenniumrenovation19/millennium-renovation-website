let installPrompt;
if ('serviceWorker' in navigator) navigator.serviceWorker.register('/sw.js').catch(()=>{});
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();installPrompt=e;});
const button=document.getElementById('install-app');
button?.addEventListener('click',async()=>{
 const help=document.getElementById('install-help');
 if(matchMedia('(display-mode: standalone)').matches||navigator.standalone){help.textContent='The app is already open in installed mode.';return;}
 if(installPrompt){await installPrompt.prompt();const choice=await installPrompt.userChoice;help.textContent=choice.outcome==='accepted'?'App installation requested.':'You can install later from your browser menu.';installPrompt=null;}
 else help.textContent=/iPad|iPhone|iPod/.test(navigator.userAgent)?'On iPhone: open in Safari, tap Share, then Add to Home Screen and Open as Web App.':'Open this website in Chrome or Edge. In the browser menu, choose Install app or Add to Home screen. If you opened it inside another app, first open it in your browser.';
});
window.addEventListener('appinstalled',()=>{document.getElementById('install-help').textContent='App installed. Look for Millennium on your home screen.';});
