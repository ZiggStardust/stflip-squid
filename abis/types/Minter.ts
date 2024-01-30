/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface MinterInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "_acceptGov"
      | "_setOutput"
      | "_setPendingGov"
      | "flip"
      | "gov"
      | "mint"
      | "output"
      | "pendingGov"
      | "stflip"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "Mint" | "NewGov" | "NewPendingGov"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "_acceptGov",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_setOutput",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "_setPendingGov",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "flip", values?: undefined): string;
  encodeFunctionData(functionFragment: "gov", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "output", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingGov",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "stflip", values?: undefined): string;

  decodeFunctionResult(functionFragment: "_acceptGov", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "_setOutput", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "_setPendingGov",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "flip", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "gov", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "output", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pendingGov", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stflip", data: BytesLike): Result;
}

export namespace MintEvent {
  export type InputTuple = [to: AddressLike, amount: BigNumberish];
  export type OutputTuple = [to: string, amount: bigint];
  export interface OutputObject {
    to: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace NewGovEvent {
  export type InputTuple = [oldGov: AddressLike, newGov: AddressLike];
  export type OutputTuple = [oldGov: string, newGov: string];
  export interface OutputObject {
    oldGov: string;
    newGov: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace NewPendingGovEvent {
  export type InputTuple = [
    oldPendingGov: AddressLike,
    newPendingGov: AddressLike
  ];
  export type OutputTuple = [oldPendingGov: string, newPendingGov: string];
  export interface OutputObject {
    oldPendingGov: string;
    newPendingGov: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Minter extends BaseContract {
  connect(runner?: ContractRunner | null): Minter;
  waitForDeployment(): Promise<this>;

  interface: MinterInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  _acceptGov: TypedContractMethod<[], [void], "nonpayable">;

  _setOutput: TypedContractMethod<[output_: AddressLike], [void], "nonpayable">;

  _setPendingGov: TypedContractMethod<
    [pendingGov_: AddressLike],
    [void],
    "nonpayable"
  >;

  flip: TypedContractMethod<[], [string], "view">;

  gov: TypedContractMethod<[], [string], "view">;

  mint: TypedContractMethod<
    [to: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  output: TypedContractMethod<[], [string], "view">;

  pendingGov: TypedContractMethod<[], [string], "view">;

  stflip: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "_acceptGov"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "_setOutput"
  ): TypedContractMethod<[output_: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "_setPendingGov"
  ): TypedContractMethod<[pendingGov_: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "flip"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "gov"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "mint"
  ): TypedContractMethod<
    [to: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "output"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "pendingGov"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "stflip"
  ): TypedContractMethod<[], [string], "view">;

  getEvent(
    key: "Mint"
  ): TypedContractEvent<
    MintEvent.InputTuple,
    MintEvent.OutputTuple,
    MintEvent.OutputObject
  >;
  getEvent(
    key: "NewGov"
  ): TypedContractEvent<
    NewGovEvent.InputTuple,
    NewGovEvent.OutputTuple,
    NewGovEvent.OutputObject
  >;
  getEvent(
    key: "NewPendingGov"
  ): TypedContractEvent<
    NewPendingGovEvent.InputTuple,
    NewPendingGovEvent.OutputTuple,
    NewPendingGovEvent.OutputObject
  >;

  filters: {
    "Mint(address,uint256)": TypedContractEvent<
      MintEvent.InputTuple,
      MintEvent.OutputTuple,
      MintEvent.OutputObject
    >;
    Mint: TypedContractEvent<
      MintEvent.InputTuple,
      MintEvent.OutputTuple,
      MintEvent.OutputObject
    >;

    "NewGov(address,address)": TypedContractEvent<
      NewGovEvent.InputTuple,
      NewGovEvent.OutputTuple,
      NewGovEvent.OutputObject
    >;
    NewGov: TypedContractEvent<
      NewGovEvent.InputTuple,
      NewGovEvent.OutputTuple,
      NewGovEvent.OutputObject
    >;

    "NewPendingGov(address,address)": TypedContractEvent<
      NewPendingGovEvent.InputTuple,
      NewPendingGovEvent.OutputTuple,
      NewPendingGovEvent.OutputObject
    >;
    NewPendingGov: TypedContractEvent<
      NewPendingGovEvent.InputTuple,
      NewPendingGovEvent.OutputTuple,
      NewPendingGovEvent.OutputObject
    >;
  };
}