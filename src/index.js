import styles from './assets/index.less';

console.log(styles); 

//css module
const app = document.getElementById('app');
console.log(app);
app.className = styles.app;
