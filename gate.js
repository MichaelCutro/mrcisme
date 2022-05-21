// S/O @Jenny_Pollack
if (typeof window.ethereum !== 'undefined') {

    const provider = new ethers.providers.Web3Provider(window.ethereum) 
    
    const main = async () => {
    
    await provider.send("eth_requestAccounts", []);
    
        const signer = provider.getSigner() 
    
        let balance = await signer.getBalance();
        
        if (ethers.utils.formatEther(balance) > .01) {
    
            document.write('<video autoplay><source src="assets/1984.mp4" type="video/mp4"></source></video>')
            console.log('Every once in a while, a revolutionary technology comes along that changes everything.')
    
        } else {
    
            document.write("<h1>​🇾​​​​​🇴​​​​​🇺​​​​​ 🇳​​​​​🇪​​​​​🇪​​​​​🇩​​​​​ 🇸​​​​​🇴​​​​​🇲​​​​​🇪​​​​​ 🇪​​​​​🇹​​​​​🇭​​​​​</h1>")
            console.log("you're going the wrong gwei")
        }
    }
        main()
    
        } else {
    
        //Finessin popup blockers
        function openMeta() {
            var ask = window.confirm("Ope, this page is token gated. You'll need some ETH and an Ethereum wallet.");
            if (ask) {
                window.alert("Let's start with a wallet");
        
                window.location.href = "https://metamask.io/";
        
            }
         } 
    
         openMeta();
    
    }
    