import { ethers, JsonRpcProvider } from "ethers";
import { Burner } from "./abis/types/Burner";
import { Burner__factory } from "./abis/types/factories/Burner__factory";
import { StFlip } from "./abis/types/StFlip";
import { StFlip__factory } from "./abis/types/factories/StFlip__factory";

const burnStFlip = async () => {

    const burnerContractAddress = "0xb4078E779F4a982f27109522E2BA07dd9E133252";
    const stFlipContractAddress = "0x961d4921e1718e633bac8ded88c4a1cae44b785a";

    const provider = new JsonRpcProvider("http://localhost:8545");
    const signer = await provider.getSigner();

    const burnerContract = Burner__factory.connect(burnerContractAddress, signer);
    const stFlipContract = StFlip__factory.connect(stFlipContractAddress, signer);

    // The amount to burn 
    const amountToBurn = ethers.utils.parseUnits("1.0", 18); // Burning 1 token (assuming 18 decimal places)

    const signerAddress = await signer.getAddress();

    // Call the burn function on the stFlip contract
    const burnTx = await stFlipContract.burn(signerAddress, amountToBurn);

    // Wait for the transaction to be mined
    const receipt = await burnTx.wait();
    console.log(`Burn transaction hash: ${receipt.transactionHash}`);

    //if the FLIP balance of the Output contract exceeds totalPendingBurns the burn can be redeemed
    const totalPendingBurns = await burnerContract.totalPendingBurns();
    const flipBalance = await (stFlipContract as any).balanceOf(burnerContractAddress);

    if (flipBalance.gte(totalPendingBurns)) {
        // Call redeem on the burner contract
        const redeemTx = await burnerContract.redeem(0); // replace 0 with the actual burn id
        const redeemReceipt = await redeemTx.wait();
        console.log(`Redeem transaction hash: ${redeemReceipt.transactionHash}`);
    }
}

