const { ipcRenderer } = require('electron');

// ipcRenderer.send('nativos-aplicacao')

// ipcRenderer.on('nativos-aplicacao', function(event, arg){
//     window.nativos=arg    
// })

window.export_ipc_renderer=ipcRenderer