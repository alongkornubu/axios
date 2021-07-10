const getBtn = document.getElementById('get-data');
const getresult = document.getElementById('result');
const getbalance = document.getElementById('balance');
const getusername = document.getElementById('username');
const getminer = document.getElementById('miner');


const getdata = () => { axios.get('https://server.duinocoin.com/users/alongkorn20')
.then(response => {console.log(response.data);
   getresult.innerHTML = response.data.result;
   getbalance.innerHTML = response.data.balance;
   getusername.innerHTML = response.data.username;
   getminer.innerHTML = response.data.miners;
});
};

getBtn.addEventListener('click', getdata);



