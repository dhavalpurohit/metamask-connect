const ethereumButton = document.querySelector('.enableEthereumButton');
const showAccount = document.querySelector('.showAccount');

ethereumButton.addEventListener('click', () => {
   getAccount();
});


async function getAccount() {
  if(window.ethereum){
    console.log("start calling.... ")
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    console.log("start calling.... ", accounts)
    showAccount.innerHTML = account;
  }
  else{
    console.error("Install MetaMask.");
  }
}

// const onboardButton = document.getElementById('onboard');


// onboardButton.addEventListener('click', () => {
//   console.log("click button connetct")
//   debugger
//   const onboarding = new MetaMaskOnboarding();
//   let accounts;
//   const updateButton = () => {
//     if (!MetaMaskOnboarding.isMetaMaskInstalled()) {
//       onboardButton.innerText = 'Click here to install MetaMask!';
//       onboardButton.onclick = () => {
//         onboardButton.innerText = 'Onboarding in progress';
//         onboardButton.disabled = true;
//         onboarding.startOnboarding();
//       };
//     } else if (accounts && accounts.length > 0) {
//       onboardButton.innerText = 'Connected';
//       onboardButton.disabled = true;
//       onboarding.stopOnboarding();
//     } else {
//       onboardButton.innerText = 'Connects';
//       onboardButton.onclick = async () => {
//         await window.ethereum.request({
//           method: 'eth_requestAccounts',
//         });
//       };
//     }
//   };

//   updateButton();
//   if (MetaMaskOnboarding.isMetaMaskInstalled()) {
//     window.ethereum.on('accountsChanged', (newAccounts) => {
//       accounts = newAccounts;
//       updateButton();
//     });
//   }
// });