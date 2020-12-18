new Promise((resolver, rechazar) => {
    resolver();
})
.catch(() => {
    console.log('Haz aquello');
})
.then(() => {
    console.log('Haz esto sin que importe lo que sucedió antes');
})
