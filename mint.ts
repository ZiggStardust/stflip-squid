import { ethers, JsonRpcProvider } from "ethers";
import { Burner } from "./abis/types/Burner";
import { Minter__factory } from "./abis/types/factories/Minter__factory";

const mintStFlip = async () => {

    const minterContractAddress = "0xb6FF055B901b8c2d37d55DA1f1DAaEA956136350";

    const provider = new JsonRpcProvider("http://localhost:8545");
    const signer = await provider.getSigner();

    const minterContract = Minter__factory.connect(minterContractAddress, signer);

    // The amount to burn 
    const amountToMint = ethers.utils.parseUnits("1.0", 18); // Minting 1 token (assuming 18 decimal places)

    const signerAddress = await signer.getAddress();

    // Call the burn function on the stFlip contract
    const mintTx = await minterContract.mint(signerAddress, amountToMint);

    // Wait for the transaction to be mined
    const receipt = await mintTx.wait();
    console.log(`Burn transaction hash: ${receipt.transactionHash}`);

}
