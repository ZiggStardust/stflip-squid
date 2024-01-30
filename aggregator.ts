import { ethers, JsonRpcProvider } from "ethers";
import { Aggregator__factory } from "./abis/types/factories/Aggregator__factory";

const stakeAggregateStFlip = async () => {

    // Connect to the Aggregator contract
    const aggregatorContractAddress = "0x38d8d03dFA9554D2232D4249EB23c48c23a24fA4regatorContractAddress";
    const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545");
    const signer = await provider.getSigner();
    const aggregatorContract = Aggregator__factory.connect(aggregatorContractAddress, signer);

    // Define the parameters for stakeAggregate
    const amountTotal = ethers.utils.parseUnits("1.0", 18);
    const amountSwap = ethers.utils.parseUnits("1.0", 18);
    const minimumAmountSwapOut = ethers.utils.parseUnits("1.0", 18);

    // Call stakeAggregate
    const tx = await aggregatorContract.stakeAggregate(amountTotal, amountSwap, minimumAmountSwapOut);
    const receipt = await tx.wait();
    console.log(`Transaction hash: ${receipt.transactionHash}`);
}

const unstakeAggregateStFlip = async () => {

    // Connect to the Aggregator contract
    const aggregatorContractAddress = "0x38d8d03dFA9554D2232D4249EB23c48c23a24fA4regatorContractAddress";
    const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545");
    const signer = await provider.getSigner();
    const aggregatorContract = Aggregator__factory.connect(aggregatorContractAddress, signer);

    // Define the parameters for unstakeAggregate
    const amountInstantBurn = ethers.utils.parseUnits("1.0", 18);
    const amountBurn = ethers.utils.parseUnits("1.0", 18);
    const amountSwap = ethers.utils.parseUnits("1.0", 18);
    const minimumAmountSwapOut = ethers.utils.parseUnits("1.0", 18);

    // Call unstakeAggregate
    const tx = await aggregatorContract.unstakeAggregate(amountInstantBurn, amountBurn, amountSwap, minimumAmountSwapOut);
    const receipt = await tx.wait();
    console.log(`Transaction hash: ${receipt.transactionHash}`);
}

