const getBtn = document.getElementById('get-data');
const getbalance = document.getElementById('balance');
const getusername = document.getElementById('username');
const getminer = document.getElementById('miner');
const getdiff = document.getElementById('diff');
const gethashrate = document.getElementById('hashrate');

const getdata = () => { axios.get('https://server.duinocoin.com/users/alongkorn20')
.then(response => {console.log(response.data.result);
   
   getbalance.innerHTML = response.data.result.balance.balance;
   getusername.innerHTML = response.data.result.balance.username;
   getminer.innerHTML = response.data.result.miners[0].accepted;
   getdiff.innerHTML = response.data.result.miners[0].diff; 
   gethashrate.innerHTML = response.data.result.miners[0].hashrate;
});
};
getBtn.addEventListener('click', getdata);



