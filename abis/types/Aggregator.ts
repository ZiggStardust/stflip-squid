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

export interface AggregatorInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "BURNER_ROLE"
      | "DEFAULT_ADMIN_ROLE"
      | "FEE_RECIPIENT_ROLE"
      | "GOVERNOR_ROLE"
      | "MANAGER_ROLE"
      | "MINTER_ROLE"
      | "PAUSER_ROLE"
      | "REBASER_ROLE"
      | "acceptDefaultAdminTransfer"
      | "beginDefaultAdminTransfer"
      | "burner"
      | "calculatePurchasable"
      | "cancelDefaultAdminTransfer"
      | "canonicalPool"
      | "changeDefaultAdminDelay"
      | "defaultAdmin"
      | "defaultAdminDelay"
      | "defaultAdminDelayIncreaseWait"
      | "flip"
      | "getRoleAdmin"
      | "grantRole"
      | "hasRole"
      | "initialize"
      | "marginalCost"
      | "minter"
      | "owner"
      | "pendingDefaultAdmin"
      | "pendingDefaultAdminDelay"
      | "renounceRole"
      | "revokeRole"
      | "rollbackDefaultAdminDelay"
      | "setPool"
      | "stakeAggregate"
      | "stflip"
      | "supportsInterface"
      | "unstakeAggregate"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "BurnAggregation"
      | "CanonicalPoolChanged"
      | "DefaultAdminDelayChangeCanceled"
      | "DefaultAdminDelayChangeScheduled"
      | "DefaultAdminTransferCanceled"
      | "DefaultAdminTransferScheduled"
      | "Initialized"
      | "RoleAdminChanged"
      | "RoleGranted"
      | "RoleRevoked"
      | "StakeAggregation"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "BURNER_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "FEE_RECIPIENT_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "GOVERNOR_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MANAGER_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MINTER_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "PAUSER_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "REBASER_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "acceptDefaultAdminTransfer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "beginDefaultAdminTransfer",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "burner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "calculatePurchasable",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      AddressLike,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelDefaultAdminTransfer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "canonicalPool",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "changeDefaultAdminDelay",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "defaultAdmin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "defaultAdminDelay",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "defaultAdminDelayIncreaseWait",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "flip", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "marginalCost",
    values: [AddressLike, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "minter", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingDefaultAdmin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pendingDefaultAdminDelay",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "rollbackDefaultAdminDelay",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setPool",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "stakeAggregate",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "stflip", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "unstakeAggregate",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "BURNER_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "FEE_RECIPIENT_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "GOVERNOR_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MANAGER_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MINTER_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "PAUSER_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "REBASER_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "acceptDefaultAdminTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "beginDefaultAdminTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "burner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "calculatePurchasable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelDefaultAdminTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "canonicalPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeDefaultAdminDelay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "defaultAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "defaultAdminDelay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "defaultAdminDelayIncreaseWait",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "flip", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "marginalCost",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "minter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingDefaultAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingDefaultAdminDelay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rollbackDefaultAdminDelay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setPool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stakeAggregate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stflip", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unstakeAggregate",
    data: BytesLike
  ): Result;
}

export namespace BurnAggregationEvent {
  export type InputTuple = [
    sender: AddressLike,
    amountInstantBurn: BigNumberish,
    amountBurn: BigNumberish,
    received: BigNumberish
  ];
  export type OutputTuple = [
    sender: string,
    amountInstantBurn: bigint,
    amountBurn: bigint,
    received: bigint
  ];
  export interface OutputObject {
    sender: string;
    amountInstantBurn: bigint;
    amountBurn: bigint;
    received: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace CanonicalPoolChangedEvent {
  export type InputTuple = [pool: AddressLike];
  export type OutputTuple = [pool: string];
  export interface OutputObject {
    pool: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DefaultAdminDelayChangeCanceledEvent {
  export type InputTuple = [];
  export type OutputTuple = [];
  export interface OutputObject {}
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DefaultAdminDelayChangeScheduledEvent {
  export type InputTuple = [
    newDelay: BigNumberish,
    effectSchedule: BigNumberish
  ];
  export type OutputTuple = [newDelay: bigint, effectSchedule: bigint];
  export interface OutputObject {
    newDelay: bigint;
    effectSchedule: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DefaultAdminTransferCanceledEvent {
  export type InputTuple = [];
  export type OutputTuple = [];
  export interface OutputObject {}
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DefaultAdminTransferScheduledEvent {
  export type InputTuple = [
    newAdmin: AddressLike,
    acceptSchedule: BigNumberish
  ];
  export type OutputTuple = [newAdmin: string, acceptSchedule: bigint];
  export interface OutputObject {
    newAdmin: string;
    acceptSchedule: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace InitializedEvent {
  export type InputTuple = [version: BigNumberish];
  export type OutputTuple = [version: bigint];
  export interface OutputObject {
    version: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleAdminChangedEvent {
  export type InputTuple = [
    role: BytesLike,
    previousAdminRole: BytesLike,
    newAdminRole: BytesLike
  ];
  export type OutputTuple = [
    role: string,
    previousAdminRole: string,
    newAdminRole: string
  ];
  export interface OutputObject {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleGrantedEvent {
  export type InputTuple = [
    role: BytesLike,
    account: AddressLike,
    sender: AddressLike
  ];
  export type OutputTuple = [role: string, account: string, sender: string];
  export interface OutputObject {
    role: string;
    account: string;
    sender: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleRevokedEvent {
  export type InputTuple = [
    role: BytesLike,
    account: AddressLike,
    sender: AddressLike
  ];
  export type OutputTuple = [role: string, account: string, sender: string];
  export interface OutputObject {
    role: string;
    account: string;
    sender: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace StakeAggregationEvent {
  export type InputTuple = [
    sender: AddressLike,
    swapReceived: BigNumberish,
    minted: BigNumberish
  ];
  export type OutputTuple = [
    sender: string,
    swapReceived: bigint,
    minted: bigint
  ];
  export interface OutputObject {
    sender: string;
    swapReceived: bigint;
    minted: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Aggregator extends BaseContract {
  connect(runner?: ContractRunner | null): Aggregator;
  waitForDeployment(): Promise<this>;

  interface: AggregatorInterface;

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

  BURNER_ROLE: TypedContractMethod<[], [string], "view">;

  DEFAULT_ADMIN_ROLE: TypedContractMethod<[], [string], "view">;

  FEE_RECIPIENT_ROLE: TypedContractMethod<[], [string], "view">;

  GOVERNOR_ROLE: TypedContractMethod<[], [string], "view">;

  MANAGER_ROLE: TypedContractMethod<[], [string], "view">;

  MINTER_ROLE: TypedContractMethod<[], [string], "view">;

  PAUSER_ROLE: TypedContractMethod<[], [string], "view">;

  REBASER_ROLE: TypedContractMethod<[], [string], "view">;

  acceptDefaultAdminTransfer: TypedContractMethod<[], [void], "nonpayable">;

  beginDefaultAdminTransfer: TypedContractMethod<
    [newAdmin: AddressLike],
    [void],
    "nonpayable"
  >;

  burner: TypedContractMethod<[], [string], "view">;

  calculatePurchasable: TypedContractMethod<
    [
      targetPrice: BigNumberish,
      targetError: BigNumberish,
      attempts: BigNumberish,
      pool_: AddressLike,
      tokenIn: BigNumberish,
      tokenOut: BigNumberish
    ],
    [bigint],
    "view"
  >;

  cancelDefaultAdminTransfer: TypedContractMethod<[], [void], "nonpayable">;

  canonicalPool: TypedContractMethod<[], [string], "view">;

  changeDefaultAdminDelay: TypedContractMethod<
    [newDelay: BigNumberish],
    [void],
    "nonpayable"
  >;

  defaultAdmin: TypedContractMethod<[], [string], "view">;

  defaultAdminDelay: TypedContractMethod<[], [bigint], "view">;

  defaultAdminDelayIncreaseWait: TypedContractMethod<[], [bigint], "view">;

  flip: TypedContractMethod<[], [string], "view">;

  getRoleAdmin: TypedContractMethod<[role: BytesLike], [string], "view">;

  grantRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  hasRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;

  initialize: TypedContractMethod<
    [
      minter_: AddressLike,
      burner_: AddressLike,
      liquidityPool_: AddressLike,
      stflip_: AddressLike,
      flip_: AddressLike,
      gov_: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  marginalCost: TypedContractMethod<
    [
      pool_: AddressLike,
      tokenIn: BigNumberish,
      tokenOut: BigNumberish,
      amount: BigNumberish
    ],
    [bigint],
    "view"
  >;

  minter: TypedContractMethod<[], [string], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  pendingDefaultAdmin: TypedContractMethod<
    [],
    [[string, bigint] & { newAdmin: string; schedule: bigint }],
    "view"
  >;

  pendingDefaultAdminDelay: TypedContractMethod<
    [],
    [[bigint, bigint] & { newDelay: bigint; schedule: bigint }],
    "view"
  >;

  renounceRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  revokeRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  rollbackDefaultAdminDelay: TypedContractMethod<[], [void], "nonpayable">;

  setPool: TypedContractMethod<[pool_: AddressLike], [void], "nonpayable">;

  stakeAggregate: TypedContractMethod<
    [
      amountTotal: BigNumberish,
      amountSwap: BigNumberish,
      minimumAmountSwapOut: BigNumberish
    ],
    [bigint],
    "nonpayable"
  >;

  stflip: TypedContractMethod<[], [string], "view">;

  supportsInterface: TypedContractMethod<
    [interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  unstakeAggregate: TypedContractMethod<
    [
      amountInstantBurn: BigNumberish,
      amountBurn: BigNumberish,
      amountSwap: BigNumberish,
      minimumAmountSwapOut: BigNumberish
    ],
    [bigint],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "BURNER_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "DEFAULT_ADMIN_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "FEE_RECIPIENT_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "GOVERNOR_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "MANAGER_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "MINTER_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "PAUSER_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "REBASER_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "acceptDefaultAdminTransfer"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "beginDefaultAdminTransfer"
  ): TypedContractMethod<[newAdmin: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "burner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "calculatePurchasable"
  ): TypedContractMethod<
    [
      targetPrice: BigNumberish,
      targetError: BigNumberish,
      attempts: BigNumberish,
      pool_: AddressLike,
      tokenIn: BigNumberish,
      tokenOut: BigNumberish
    ],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "cancelDefaultAdminTransfer"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "canonicalPool"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "changeDefaultAdminDelay"
  ): TypedContractMethod<[newDelay: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "defaultAdmin"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "defaultAdminDelay"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "defaultAdminDelayIncreaseWait"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "flip"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getRoleAdmin"
  ): TypedContractMethod<[role: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "grantRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "hasRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [
      minter_: AddressLike,
      burner_: AddressLike,
      liquidityPool_: AddressLike,
      stflip_: AddressLike,
      flip_: AddressLike,
      gov_: AddressLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "marginalCost"
  ): TypedContractMethod<
    [
      pool_: AddressLike,
      tokenIn: BigNumberish,
      tokenOut: BigNumberish,
      amount: BigNumberish
    ],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "minter"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "pendingDefaultAdmin"
  ): TypedContractMethod<
    [],
    [[string, bigint] & { newAdmin: string; schedule: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "pendingDefaultAdminDelay"
  ): TypedContractMethod<
    [],
    [[bigint, bigint] & { newDelay: bigint; schedule: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "renounceRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "revokeRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "rollbackDefaultAdminDelay"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setPool"
  ): TypedContractMethod<[pool_: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "stakeAggregate"
  ): TypedContractMethod<
    [
      amountTotal: BigNumberish,
      amountSwap: BigNumberish,
      minimumAmountSwapOut: BigNumberish
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "stflip"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "unstakeAggregate"
  ): TypedContractMethod<
    [
      amountInstantBurn: BigNumberish,
      amountBurn: BigNumberish,
      amountSwap: BigNumberish,
      minimumAmountSwapOut: BigNumberish
    ],
    [bigint],
    "nonpayable"
  >;

  getEvent(
    key: "BurnAggregation"
  ): TypedContractEvent<
    BurnAggregationEvent.InputTuple,
    BurnAggregationEvent.OutputTuple,
    BurnAggregationEvent.OutputObject
  >;
  getEvent(
    key: "CanonicalPoolChanged"
  ): TypedContractEvent<
    CanonicalPoolChangedEvent.InputTuple,
    CanonicalPoolChangedEvent.OutputTuple,
    CanonicalPoolChangedEvent.OutputObject
  >;
  getEvent(
    key: "DefaultAdminDelayChangeCanceled"
  ): TypedContractEvent<
    DefaultAdminDelayChangeCanceledEvent.InputTuple,
    DefaultAdminDelayChangeCanceledEvent.OutputTuple,
    DefaultAdminDelayChangeCanceledEvent.OutputObject
  >;
  getEvent(
    key: "DefaultAdminDelayChangeScheduled"
  ): TypedContractEvent<
    DefaultAdminDelayChangeScheduledEvent.InputTuple,
    DefaultAdminDelayChangeScheduledEvent.OutputTuple,
    DefaultAdminDelayChangeScheduledEvent.OutputObject
  >;
  getEvent(
    key: "DefaultAdminTransferCanceled"
  ): TypedContractEvent<
    DefaultAdminTransferCanceledEvent.InputTuple,
    DefaultAdminTransferCanceledEvent.OutputTuple,
    DefaultAdminTransferCanceledEvent.OutputObject
  >;
  getEvent(
    key: "DefaultAdminTransferScheduled"
  ): TypedContractEvent<
    DefaultAdminTransferScheduledEvent.InputTuple,
    DefaultAdminTransferScheduledEvent.OutputTuple,
    DefaultAdminTransferScheduledEvent.OutputObject
  >;
  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "RoleAdminChanged"
  ): TypedContractEvent<
    RoleAdminChangedEvent.InputTuple,
    RoleAdminChangedEvent.OutputTuple,
    RoleAdminChangedEvent.OutputObject
  >;
  getEvent(
    key: "RoleGranted"
  ): TypedContractEvent<
    RoleGrantedEvent.InputTuple,
    RoleGrantedEvent.OutputTuple,
    RoleGrantedEvent.OutputObject
  >;
  getEvent(
    key: "RoleRevoked"
  ): TypedContractEvent<
    RoleRevokedEvent.InputTuple,
    RoleRevokedEvent.OutputTuple,
    RoleRevokedEvent.OutputObject
  >;
  getEvent(
    key: "StakeAggregation"
  ): TypedContractEvent<
    StakeAggregationEvent.InputTuple,
    StakeAggregationEvent.OutputTuple,
    StakeAggregationEvent.OutputObject
  >;

  filters: {
    "BurnAggregation(address,uint256,uint256,uint256)": TypedContractEvent<
      BurnAggregationEvent.InputTuple,
      BurnAggregationEvent.OutputTuple,
      BurnAggregationEvent.OutputObject
    >;
    BurnAggregation: TypedContractEvent<
      BurnAggregationEvent.InputTuple,
      BurnAggregationEvent.OutputTuple,
      BurnAggregationEvent.OutputObject
    >;

    "CanonicalPoolChanged(address)": TypedContractEvent<
      CanonicalPoolChangedEvent.InputTuple,
      CanonicalPoolChangedEvent.OutputTuple,
      CanonicalPoolChangedEvent.OutputObject
    >;
    CanonicalPoolChanged: TypedContractEvent<
      CanonicalPoolChangedEvent.InputTuple,
      CanonicalPoolChangedEvent.OutputTuple,
      CanonicalPoolChangedEvent.OutputObject
    >;

    "DefaultAdminDelayChangeCanceled()": TypedContractEvent<
      DefaultAdminDelayChangeCanceledEvent.InputTuple,
      DefaultAdminDelayChangeCanceledEvent.OutputTuple,
      DefaultAdminDelayChangeCanceledEvent.OutputObject
    >;
    DefaultAdminDelayChangeCanceled: TypedContractEvent<
      DefaultAdminDelayChangeCanceledEvent.InputTuple,
      DefaultAdminDelayChangeCanceledEvent.OutputTuple,
      DefaultAdminDelayChangeCanceledEvent.OutputObject
    >;

    "DefaultAdminDelayChangeScheduled(uint48,uint48)": TypedContractEvent<
      DefaultAdminDelayChangeScheduledEvent.InputTuple,
      DefaultAdminDelayChangeScheduledEvent.OutputTuple,
      DefaultAdminDelayChangeScheduledEvent.OutputObject
    >;
    DefaultAdminDelayChangeScheduled: TypedContractEvent<
      DefaultAdminDelayChangeScheduledEvent.InputTuple,
      DefaultAdminDelayChangeScheduledEvent.OutputTuple,
      DefaultAdminDelayChangeScheduledEvent.OutputObject
    >;

    "DefaultAdminTransferCanceled()": TypedContractEvent<
      DefaultAdminTransferCanceledEvent.InputTuple,
      DefaultAdminTransferCanceledEvent.OutputTuple,
      DefaultAdminTransferCanceledEvent.OutputObject
    >;
    DefaultAdminTransferCanceled: TypedContractEvent<
      DefaultAdminTransferCanceledEvent.InputTuple,
      DefaultAdminTransferCanceledEvent.OutputTuple,
      DefaultAdminTransferCanceledEvent.OutputObject
    >;

    "DefaultAdminTransferScheduled(address,uint48)": TypedContractEvent<
      DefaultAdminTransferScheduledEvent.InputTuple,
      DefaultAdminTransferScheduledEvent.OutputTuple,
      DefaultAdminTransferScheduledEvent.OutputObject
    >;
    DefaultAdminTransferScheduled: TypedContractEvent<
      DefaultAdminTransferScheduledEvent.InputTuple,
      DefaultAdminTransferScheduledEvent.OutputTuple,
      DefaultAdminTransferScheduledEvent.OutputObject
    >;

    "Initialized(uint8)": TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;
    Initialized: TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;

    "RoleAdminChanged(bytes32,bytes32,bytes32)": TypedContractEvent<
      RoleAdminChangedEvent.InputTuple,
      RoleAdminChangedEvent.OutputTuple,
      RoleAdminChangedEvent.OutputObject
    >;
    RoleAdminChanged: TypedContractEvent<
      RoleAdminChangedEvent.InputTuple,
      RoleAdminChangedEvent.OutputTuple,
      RoleAdminChangedEvent.OutputObject
    >;

    "RoleGranted(bytes32,address,address)": TypedContractEvent<
      RoleGrantedEvent.InputTuple,
      RoleGrantedEvent.OutputTuple,
      RoleGrantedEvent.OutputObject
    >;
    RoleGranted: TypedContractEvent<
      RoleGrantedEvent.InputTuple,
      RoleGrantedEvent.OutputTuple,
      RoleGrantedEvent.OutputObject
    >;

    "RoleRevoked(bytes32,address,address)": TypedContractEvent<
      RoleRevokedEvent.InputTuple,
      RoleRevokedEvent.OutputTuple,
      RoleRevokedEvent.OutputObject
    >;
    RoleRevoked: TypedContractEvent<
      RoleRevokedEvent.InputTuple,
      RoleRevokedEvent.OutputTuple,
      RoleRevokedEvent.OutputObject
    >;

    "StakeAggregation(address,uint256,uint256)": TypedContractEvent<
      StakeAggregationEvent.InputTuple,
      StakeAggregationEvent.OutputTuple,
      StakeAggregationEvent.OutputObject
    >;
    StakeAggregation: TypedContractEvent<
      StakeAggregationEvent.InputTuple,
      StakeAggregationEvent.OutputTuple,
      StakeAggregationEvent.OutputObject
    >;
  };
}
