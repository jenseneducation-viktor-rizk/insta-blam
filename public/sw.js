self.addEventListener('install',event => {
    console.log('SW installed at: ',newDate().toLocaleTimeString());
});

self.addEventListener('activate',event => {
    console.log('SW activated at: ',newDate().toLocaleTimeString());
})