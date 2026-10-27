
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Commune
 * 
 */
export type Commune = $Result.DefaultSelection<Prisma.$CommunePayload>
/**
 * Model Signalemment
 * 
 */
export type Signalemment = $Result.DefaultSelection<Prisma.$SignalemmentPayload>
/**
 * Model Categorie
 * 
 */
export type Categorie = $Result.DefaultSelection<Prisma.$CategoriePayload>
/**
 * Model Assignation
 * 
 */
export type Assignation = $Result.DefaultSelection<Prisma.$AssignationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const role: {
  citoyen: 'citoyen',
  agent_municipale: 'agent_municipale',
  admin: 'admin'
};

export type role = (typeof role)[keyof typeof role]


export const status: {
  reçus: 'reçus',
  en_cours: 'en_cours',
  rejetter: 'rejetter',
  resolus: 'resolus'
};

export type status = (typeof status)[keyof typeof status]

}

export type role = $Enums.role

export const role: typeof $Enums.role

export type status = $Enums.status

export const status: typeof $Enums.status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.commune`: Exposes CRUD operations for the **Commune** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Communes
    * const communes = await prisma.commune.findMany()
    * ```
    */
  get commune(): Prisma.CommuneDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.signalemment`: Exposes CRUD operations for the **Signalemment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Signalemments
    * const signalemments = await prisma.signalemment.findMany()
    * ```
    */
  get signalemment(): Prisma.SignalemmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categorie`: Exposes CRUD operations for the **Categorie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categorie.findMany()
    * ```
    */
  get categorie(): Prisma.CategorieDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assignation`: Exposes CRUD operations for the **Assignation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assignations
    * const assignations = await prisma.assignation.findMany()
    * ```
    */
  get assignation(): Prisma.AssignationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.1
   * Query Engine version: d1b3f377ca835d73fd50954a5e22128b9ebdd6b8
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Commune: 'Commune',
    Signalemment: 'Signalemment',
    Categorie: 'Categorie',
    Assignation: 'Assignation'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "commune" | "signalemment" | "categorie" | "assignation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Commune: {
        payload: Prisma.$CommunePayload<ExtArgs>
        fields: Prisma.CommuneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommuneFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommuneFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunePayload>
          }
          findFirst: {
            args: Prisma.CommuneFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommuneFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunePayload>
          }
          findMany: {
            args: Prisma.CommuneFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunePayload>[]
          }
          create: {
            args: Prisma.CommuneCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunePayload>
          }
          createMany: {
            args: Prisma.CommuneCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommuneCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunePayload>[]
          }
          delete: {
            args: Prisma.CommuneDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunePayload>
          }
          update: {
            args: Prisma.CommuneUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunePayload>
          }
          deleteMany: {
            args: Prisma.CommuneDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommuneUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommuneUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunePayload>[]
          }
          upsert: {
            args: Prisma.CommuneUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunePayload>
          }
          aggregate: {
            args: Prisma.CommuneAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommune>
          }
          groupBy: {
            args: Prisma.CommuneGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommuneGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommuneCountArgs<ExtArgs>
            result: $Utils.Optional<CommuneCountAggregateOutputType> | number
          }
        }
      }
      Signalemment: {
        payload: Prisma.$SignalemmentPayload<ExtArgs>
        fields: Prisma.SignalemmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SignalemmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalemmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SignalemmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalemmentPayload>
          }
          findFirst: {
            args: Prisma.SignalemmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalemmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SignalemmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalemmentPayload>
          }
          findMany: {
            args: Prisma.SignalemmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalemmentPayload>[]
          }
          create: {
            args: Prisma.SignalemmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalemmentPayload>
          }
          createMany: {
            args: Prisma.SignalemmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SignalemmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalemmentPayload>[]
          }
          delete: {
            args: Prisma.SignalemmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalemmentPayload>
          }
          update: {
            args: Prisma.SignalemmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalemmentPayload>
          }
          deleteMany: {
            args: Prisma.SignalemmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SignalemmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SignalemmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalemmentPayload>[]
          }
          upsert: {
            args: Prisma.SignalemmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalemmentPayload>
          }
          aggregate: {
            args: Prisma.SignalemmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSignalemment>
          }
          groupBy: {
            args: Prisma.SignalemmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<SignalemmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.SignalemmentCountArgs<ExtArgs>
            result: $Utils.Optional<SignalemmentCountAggregateOutputType> | number
          }
        }
      }
      Categorie: {
        payload: Prisma.$CategoriePayload<ExtArgs>
        fields: Prisma.CategorieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategorieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategorieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>
          }
          findFirst: {
            args: Prisma.CategorieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategorieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>
          }
          findMany: {
            args: Prisma.CategorieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>[]
          }
          create: {
            args: Prisma.CategorieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>
          }
          createMany: {
            args: Prisma.CategorieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategorieCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>[]
          }
          delete: {
            args: Prisma.CategorieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>
          }
          update: {
            args: Prisma.CategorieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>
          }
          deleteMany: {
            args: Prisma.CategorieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategorieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategorieUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>[]
          }
          upsert: {
            args: Prisma.CategorieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>
          }
          aggregate: {
            args: Prisma.CategorieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategorie>
          }
          groupBy: {
            args: Prisma.CategorieGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategorieGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategorieCountArgs<ExtArgs>
            result: $Utils.Optional<CategorieCountAggregateOutputType> | number
          }
        }
      }
      Assignation: {
        payload: Prisma.$AssignationPayload<ExtArgs>
        fields: Prisma.AssignationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssignationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssignationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignationPayload>
          }
          findFirst: {
            args: Prisma.AssignationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssignationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignationPayload>
          }
          findMany: {
            args: Prisma.AssignationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignationPayload>[]
          }
          create: {
            args: Prisma.AssignationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignationPayload>
          }
          createMany: {
            args: Prisma.AssignationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssignationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignationPayload>[]
          }
          delete: {
            args: Prisma.AssignationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignationPayload>
          }
          update: {
            args: Prisma.AssignationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignationPayload>
          }
          deleteMany: {
            args: Prisma.AssignationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssignationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssignationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignationPayload>[]
          }
          upsert: {
            args: Prisma.AssignationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignationPayload>
          }
          aggregate: {
            args: Prisma.AssignationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssignation>
          }
          groupBy: {
            args: Prisma.AssignationGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssignationGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssignationCountArgs<ExtArgs>
            result: $Utils.Optional<AssignationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    commune?: CommuneOmit
    signalemment?: SignalemmentOmit
    categorie?: CategorieOmit
    assignation?: AssignationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    signalement: number
    assignation: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    signalement?: boolean | UserCountOutputTypeCountSignalementArgs
    assignation?: boolean | UserCountOutputTypeCountAssignationArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSignalementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SignalemmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssignationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignationWhereInput
  }


  /**
   * Count Type CommuneCountOutputType
   */

  export type CommuneCountOutputType = {
    signalement: number
    user: number
  }

  export type CommuneCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    signalement?: boolean | CommuneCountOutputTypeCountSignalementArgs
    user?: boolean | CommuneCountOutputTypeCountUserArgs
  }

  // Custom InputTypes
  /**
   * CommuneCountOutputType without action
   */
  export type CommuneCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommuneCountOutputType
     */
    select?: CommuneCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommuneCountOutputType without action
   */
  export type CommuneCountOutputTypeCountSignalementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SignalemmentWhereInput
  }

  /**
   * CommuneCountOutputType without action
   */
  export type CommuneCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type SignalemmentCountOutputType
   */

  export type SignalemmentCountOutputType = {
    assignation: number
  }

  export type SignalemmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignation?: boolean | SignalemmentCountOutputTypeCountAssignationArgs
  }

  // Custom InputTypes
  /**
   * SignalemmentCountOutputType without action
   */
  export type SignalemmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignalemmentCountOutputType
     */
    select?: SignalemmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SignalemmentCountOutputType without action
   */
  export type SignalemmentCountOutputTypeCountAssignationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignationWhereInput
  }


  /**
   * Count Type CategorieCountOutputType
   */

  export type CategorieCountOutputType = {
    signalement: number
  }

  export type CategorieCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    signalement?: boolean | CategorieCountOutputTypeCountSignalementArgs
  }

  // Custom InputTypes
  /**
   * CategorieCountOutputType without action
   */
  export type CategorieCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieCountOutputType
     */
    select?: CategorieCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategorieCountOutputType without action
   */
  export type CategorieCountOutputTypeCountSignalementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SignalemmentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    first_name: string | null
    last_name: string | null
    email: string | null
    tel: string | null
    password: string | null
    role: $Enums.role | null
    profil_picture: string | null
    otpTpken: string | null
    cree_le: Date | null
    mod_le: Date | null
    communeId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    first_name: string | null
    last_name: string | null
    email: string | null
    tel: string | null
    password: string | null
    role: $Enums.role | null
    profil_picture: string | null
    otpTpken: string | null
    cree_le: Date | null
    mod_le: Date | null
    communeId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    first_name: number
    last_name: number
    email: number
    tel: number
    password: number
    role: number
    profil_picture: number
    otpTpken: number
    cree_le: number
    mod_le: number
    communeId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    tel?: true
    password?: true
    role?: true
    profil_picture?: true
    otpTpken?: true
    cree_le?: true
    mod_le?: true
    communeId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    tel?: true
    password?: true
    role?: true
    profil_picture?: true
    otpTpken?: true
    cree_le?: true
    mod_le?: true
    communeId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    tel?: true
    password?: true
    role?: true
    profil_picture?: true
    otpTpken?: true
    cree_le?: true
    mod_le?: true
    communeId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    first_name: string
    last_name: string
    email: string
    tel: string
    password: string
    role: $Enums.role
    profil_picture: string | null
    otpTpken: string | null
    cree_le: Date
    mod_le: Date
    communeId: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    tel?: boolean
    password?: boolean
    role?: boolean
    profil_picture?: boolean
    otpTpken?: boolean
    cree_le?: boolean
    mod_le?: boolean
    communeId?: boolean
    commune?: boolean | CommuneDefaultArgs<ExtArgs>
    signalement?: boolean | User$signalementArgs<ExtArgs>
    assignation?: boolean | User$assignationArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    tel?: boolean
    password?: boolean
    role?: boolean
    profil_picture?: boolean
    otpTpken?: boolean
    cree_le?: boolean
    mod_le?: boolean
    communeId?: boolean
    commune?: boolean | CommuneDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    tel?: boolean
    password?: boolean
    role?: boolean
    profil_picture?: boolean
    otpTpken?: boolean
    cree_le?: boolean
    mod_le?: boolean
    communeId?: boolean
    commune?: boolean | CommuneDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    tel?: boolean
    password?: boolean
    role?: boolean
    profil_picture?: boolean
    otpTpken?: boolean
    cree_le?: boolean
    mod_le?: boolean
    communeId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "first_name" | "last_name" | "email" | "tel" | "password" | "role" | "profil_picture" | "otpTpken" | "cree_le" | "mod_le" | "communeId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commune?: boolean | CommuneDefaultArgs<ExtArgs>
    signalement?: boolean | User$signalementArgs<ExtArgs>
    assignation?: boolean | User$assignationArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commune?: boolean | CommuneDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commune?: boolean | CommuneDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      commune: Prisma.$CommunePayload<ExtArgs>
      signalement: Prisma.$SignalemmentPayload<ExtArgs>[]
      assignation: Prisma.$AssignationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      first_name: string
      last_name: string
      email: string
      tel: string
      password: string
      role: $Enums.role
      profil_picture: string | null
      otpTpken: string | null
      cree_le: Date
      mod_le: Date
      communeId: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    commune<T extends CommuneDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CommuneDefaultArgs<ExtArgs>>): Prisma__CommuneClient<$Result.GetResult<Prisma.$CommunePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    signalement<T extends User$signalementArgs<ExtArgs> = {}>(args?: Subset<T, User$signalementArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignalemmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignation<T extends User$assignationArgs<ExtArgs> = {}>(args?: Subset<T, User$assignationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly first_name: FieldRef<"User", 'String'>
    readonly last_name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly tel: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'role'>
    readonly profil_picture: FieldRef<"User", 'String'>
    readonly otpTpken: FieldRef<"User", 'String'>
    readonly cree_le: FieldRef<"User", 'DateTime'>
    readonly mod_le: FieldRef<"User", 'DateTime'>
    readonly communeId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.signalement
   */
  export type User$signalementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signalemment
     */
    select?: SignalemmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signalemment
     */
    omit?: SignalemmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalemmentInclude<ExtArgs> | null
    where?: SignalemmentWhereInput
    orderBy?: SignalemmentOrderByWithRelationInput | SignalemmentOrderByWithRelationInput[]
    cursor?: SignalemmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SignalemmentScalarFieldEnum | SignalemmentScalarFieldEnum[]
  }

  /**
   * User.assignation
   */
  export type User$assignationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignation
     */
    select?: AssignationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignation
     */
    omit?: AssignationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignationInclude<ExtArgs> | null
    where?: AssignationWhereInput
    orderBy?: AssignationOrderByWithRelationInput | AssignationOrderByWithRelationInput[]
    cursor?: AssignationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssignationScalarFieldEnum | AssignationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Commune
   */

  export type AggregateCommune = {
    _count: CommuneCountAggregateOutputType | null
    _avg: CommuneAvgAggregateOutputType | null
    _sum: CommuneSumAggregateOutputType | null
    _min: CommuneMinAggregateOutputType | null
    _max: CommuneMaxAggregateOutputType | null
  }

  export type CommuneAvgAggregateOutputType = {
    population: number | null
  }

  export type CommuneSumAggregateOutputType = {
    population: number | null
  }

  export type CommuneMinAggregateOutputType = {
    id: string | null
    nom: string | null
    nom_ville: string | null
    population: number | null
    creer_le: Date | null
    mod_lw: Date | null
  }

  export type CommuneMaxAggregateOutputType = {
    id: string | null
    nom: string | null
    nom_ville: string | null
    population: number | null
    creer_le: Date | null
    mod_lw: Date | null
  }

  export type CommuneCountAggregateOutputType = {
    id: number
    nom: number
    nom_ville: number
    population: number
    creer_le: number
    mod_lw: number
    _all: number
  }


  export type CommuneAvgAggregateInputType = {
    population?: true
  }

  export type CommuneSumAggregateInputType = {
    population?: true
  }

  export type CommuneMinAggregateInputType = {
    id?: true
    nom?: true
    nom_ville?: true
    population?: true
    creer_le?: true
    mod_lw?: true
  }

  export type CommuneMaxAggregateInputType = {
    id?: true
    nom?: true
    nom_ville?: true
    population?: true
    creer_le?: true
    mod_lw?: true
  }

  export type CommuneCountAggregateInputType = {
    id?: true
    nom?: true
    nom_ville?: true
    population?: true
    creer_le?: true
    mod_lw?: true
    _all?: true
  }

  export type CommuneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Commune to aggregate.
     */
    where?: CommuneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communes to fetch.
     */
    orderBy?: CommuneOrderByWithRelationInput | CommuneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommuneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Communes
    **/
    _count?: true | CommuneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommuneAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommuneSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommuneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommuneMaxAggregateInputType
  }

  export type GetCommuneAggregateType<T extends CommuneAggregateArgs> = {
        [P in keyof T & keyof AggregateCommune]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommune[P]>
      : GetScalarType<T[P], AggregateCommune[P]>
  }




  export type CommuneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommuneWhereInput
    orderBy?: CommuneOrderByWithAggregationInput | CommuneOrderByWithAggregationInput[]
    by: CommuneScalarFieldEnum[] | CommuneScalarFieldEnum
    having?: CommuneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommuneCountAggregateInputType | true
    _avg?: CommuneAvgAggregateInputType
    _sum?: CommuneSumAggregateInputType
    _min?: CommuneMinAggregateInputType
    _max?: CommuneMaxAggregateInputType
  }

  export type CommuneGroupByOutputType = {
    id: string
    nom: string
    nom_ville: string
    population: number | null
    creer_le: Date
    mod_lw: Date
    _count: CommuneCountAggregateOutputType | null
    _avg: CommuneAvgAggregateOutputType | null
    _sum: CommuneSumAggregateOutputType | null
    _min: CommuneMinAggregateOutputType | null
    _max: CommuneMaxAggregateOutputType | null
  }

  type GetCommuneGroupByPayload<T extends CommuneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommuneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommuneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommuneGroupByOutputType[P]>
            : GetScalarType<T[P], CommuneGroupByOutputType[P]>
        }
      >
    >


  export type CommuneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    nom_ville?: boolean
    population?: boolean
    creer_le?: boolean
    mod_lw?: boolean
    signalement?: boolean | Commune$signalementArgs<ExtArgs>
    user?: boolean | Commune$userArgs<ExtArgs>
    _count?: boolean | CommuneCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commune"]>

  export type CommuneSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    nom_ville?: boolean
    population?: boolean
    creer_le?: boolean
    mod_lw?: boolean
  }, ExtArgs["result"]["commune"]>

  export type CommuneSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    nom_ville?: boolean
    population?: boolean
    creer_le?: boolean
    mod_lw?: boolean
  }, ExtArgs["result"]["commune"]>

  export type CommuneSelectScalar = {
    id?: boolean
    nom?: boolean
    nom_ville?: boolean
    population?: boolean
    creer_le?: boolean
    mod_lw?: boolean
  }

  export type CommuneOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "nom_ville" | "population" | "creer_le" | "mod_lw", ExtArgs["result"]["commune"]>
  export type CommuneInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    signalement?: boolean | Commune$signalementArgs<ExtArgs>
    user?: boolean | Commune$userArgs<ExtArgs>
    _count?: boolean | CommuneCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CommuneIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CommuneIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CommunePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Commune"
    objects: {
      signalement: Prisma.$SignalemmentPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nom: string
      nom_ville: string
      population: number | null
      creer_le: Date
      mod_lw: Date
    }, ExtArgs["result"]["commune"]>
    composites: {}
  }

  type CommuneGetPayload<S extends boolean | null | undefined | CommuneDefaultArgs> = $Result.GetResult<Prisma.$CommunePayload, S>

  type CommuneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommuneFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommuneCountAggregateInputType | true
    }

  export interface CommuneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Commune'], meta: { name: 'Commune' } }
    /**
     * Find zero or one Commune that matches the filter.
     * @param {CommuneFindUniqueArgs} args - Arguments to find a Commune
     * @example
     * // Get one Commune
     * const commune = await prisma.commune.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommuneFindUniqueArgs>(args: SelectSubset<T, CommuneFindUniqueArgs<ExtArgs>>): Prisma__CommuneClient<$Result.GetResult<Prisma.$CommunePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Commune that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommuneFindUniqueOrThrowArgs} args - Arguments to find a Commune
     * @example
     * // Get one Commune
     * const commune = await prisma.commune.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommuneFindUniqueOrThrowArgs>(args: SelectSubset<T, CommuneFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommuneClient<$Result.GetResult<Prisma.$CommunePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Commune that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommuneFindFirstArgs} args - Arguments to find a Commune
     * @example
     * // Get one Commune
     * const commune = await prisma.commune.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommuneFindFirstArgs>(args?: SelectSubset<T, CommuneFindFirstArgs<ExtArgs>>): Prisma__CommuneClient<$Result.GetResult<Prisma.$CommunePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Commune that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommuneFindFirstOrThrowArgs} args - Arguments to find a Commune
     * @example
     * // Get one Commune
     * const commune = await prisma.commune.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommuneFindFirstOrThrowArgs>(args?: SelectSubset<T, CommuneFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommuneClient<$Result.GetResult<Prisma.$CommunePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Communes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommuneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Communes
     * const communes = await prisma.commune.findMany()
     * 
     * // Get first 10 Communes
     * const communes = await prisma.commune.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const communeWithIdOnly = await prisma.commune.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommuneFindManyArgs>(args?: SelectSubset<T, CommuneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Commune.
     * @param {CommuneCreateArgs} args - Arguments to create a Commune.
     * @example
     * // Create one Commune
     * const Commune = await prisma.commune.create({
     *   data: {
     *     // ... data to create a Commune
     *   }
     * })
     * 
     */
    create<T extends CommuneCreateArgs>(args: SelectSubset<T, CommuneCreateArgs<ExtArgs>>): Prisma__CommuneClient<$Result.GetResult<Prisma.$CommunePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Communes.
     * @param {CommuneCreateManyArgs} args - Arguments to create many Communes.
     * @example
     * // Create many Communes
     * const commune = await prisma.commune.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommuneCreateManyArgs>(args?: SelectSubset<T, CommuneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Communes and returns the data saved in the database.
     * @param {CommuneCreateManyAndReturnArgs} args - Arguments to create many Communes.
     * @example
     * // Create many Communes
     * const commune = await prisma.commune.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Communes and only return the `id`
     * const communeWithIdOnly = await prisma.commune.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommuneCreateManyAndReturnArgs>(args?: SelectSubset<T, CommuneCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Commune.
     * @param {CommuneDeleteArgs} args - Arguments to delete one Commune.
     * @example
     * // Delete one Commune
     * const Commune = await prisma.commune.delete({
     *   where: {
     *     // ... filter to delete one Commune
     *   }
     * })
     * 
     */
    delete<T extends CommuneDeleteArgs>(args: SelectSubset<T, CommuneDeleteArgs<ExtArgs>>): Prisma__CommuneClient<$Result.GetResult<Prisma.$CommunePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Commune.
     * @param {CommuneUpdateArgs} args - Arguments to update one Commune.
     * @example
     * // Update one Commune
     * const commune = await prisma.commune.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommuneUpdateArgs>(args: SelectSubset<T, CommuneUpdateArgs<ExtArgs>>): Prisma__CommuneClient<$Result.GetResult<Prisma.$CommunePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Communes.
     * @param {CommuneDeleteManyArgs} args - Arguments to filter Communes to delete.
     * @example
     * // Delete a few Communes
     * const { count } = await prisma.commune.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommuneDeleteManyArgs>(args?: SelectSubset<T, CommuneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Communes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommuneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Communes
     * const commune = await prisma.commune.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommuneUpdateManyArgs>(args: SelectSubset<T, CommuneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Communes and returns the data updated in the database.
     * @param {CommuneUpdateManyAndReturnArgs} args - Arguments to update many Communes.
     * @example
     * // Update many Communes
     * const commune = await prisma.commune.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Communes and only return the `id`
     * const communeWithIdOnly = await prisma.commune.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommuneUpdateManyAndReturnArgs>(args: SelectSubset<T, CommuneUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Commune.
     * @param {CommuneUpsertArgs} args - Arguments to update or create a Commune.
     * @example
     * // Update or create a Commune
     * const commune = await prisma.commune.upsert({
     *   create: {
     *     // ... data to create a Commune
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Commune we want to update
     *   }
     * })
     */
    upsert<T extends CommuneUpsertArgs>(args: SelectSubset<T, CommuneUpsertArgs<ExtArgs>>): Prisma__CommuneClient<$Result.GetResult<Prisma.$CommunePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Communes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommuneCountArgs} args - Arguments to filter Communes to count.
     * @example
     * // Count the number of Communes
     * const count = await prisma.commune.count({
     *   where: {
     *     // ... the filter for the Communes we want to count
     *   }
     * })
    **/
    count<T extends CommuneCountArgs>(
      args?: Subset<T, CommuneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommuneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Commune.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommuneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommuneAggregateArgs>(args: Subset<T, CommuneAggregateArgs>): Prisma.PrismaPromise<GetCommuneAggregateType<T>>

    /**
     * Group by Commune.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommuneGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommuneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommuneGroupByArgs['orderBy'] }
        : { orderBy?: CommuneGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommuneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommuneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Commune model
   */
  readonly fields: CommuneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Commune.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommuneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    signalement<T extends Commune$signalementArgs<ExtArgs> = {}>(args?: Subset<T, Commune$signalementArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignalemmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends Commune$userArgs<ExtArgs> = {}>(args?: Subset<T, Commune$userArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Commune model
   */
  interface CommuneFieldRefs {
    readonly id: FieldRef<"Commune", 'String'>
    readonly nom: FieldRef<"Commune", 'String'>
    readonly nom_ville: FieldRef<"Commune", 'String'>
    readonly population: FieldRef<"Commune", 'Int'>
    readonly creer_le: FieldRef<"Commune", 'DateTime'>
    readonly mod_lw: FieldRef<"Commune", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Commune findUnique
   */
  export type CommuneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commune
     */
    select?: CommuneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commune
     */
    omit?: CommuneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommuneInclude<ExtArgs> | null
    /**
     * Filter, which Commune to fetch.
     */
    where: CommuneWhereUniqueInput
  }

  /**
   * Commune findUniqueOrThrow
   */
  export type CommuneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commune
     */
    select?: CommuneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commune
     */
    omit?: CommuneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommuneInclude<ExtArgs> | null
    /**
     * Filter, which Commune to fetch.
     */
    where: CommuneWhereUniqueInput
  }

  /**
   * Commune findFirst
   */
  export type CommuneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commune
     */
    select?: CommuneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commune
     */
    omit?: CommuneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommuneInclude<ExtArgs> | null
    /**
     * Filter, which Commune to fetch.
     */
    where?: CommuneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communes to fetch.
     */
    orderBy?: CommuneOrderByWithRelationInput | CommuneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Communes.
     */
    cursor?: CommuneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Communes.
     */
    distinct?: CommuneScalarFieldEnum | CommuneScalarFieldEnum[]
  }

  /**
   * Commune findFirstOrThrow
   */
  export type CommuneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commune
     */
    select?: CommuneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commune
     */
    omit?: CommuneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommuneInclude<ExtArgs> | null
    /**
     * Filter, which Commune to fetch.
     */
    where?: CommuneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communes to fetch.
     */
    orderBy?: CommuneOrderByWithRelationInput | CommuneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Communes.
     */
    cursor?: CommuneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Communes.
     */
    distinct?: CommuneScalarFieldEnum | CommuneScalarFieldEnum[]
  }

  /**
   * Commune findMany
   */
  export type CommuneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commune
     */
    select?: CommuneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commune
     */
    omit?: CommuneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommuneInclude<ExtArgs> | null
    /**
     * Filter, which Communes to fetch.
     */
    where?: CommuneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communes to fetch.
     */
    orderBy?: CommuneOrderByWithRelationInput | CommuneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Communes.
     */
    cursor?: CommuneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Communes.
     */
    distinct?: CommuneScalarFieldEnum | CommuneScalarFieldEnum[]
  }

  /**
   * Commune create
   */
  export type CommuneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commune
     */
    select?: CommuneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commune
     */
    omit?: CommuneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommuneInclude<ExtArgs> | null
    /**
     * The data needed to create a Commune.
     */
    data: XOR<CommuneCreateInput, CommuneUncheckedCreateInput>
  }

  /**
   * Commune createMany
   */
  export type CommuneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Communes.
     */
    data: CommuneCreateManyInput | CommuneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Commune createManyAndReturn
   */
  export type CommuneCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commune
     */
    select?: CommuneSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Commune
     */
    omit?: CommuneOmit<ExtArgs> | null
    /**
     * The data used to create many Communes.
     */
    data: CommuneCreateManyInput | CommuneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Commune update
   */
  export type CommuneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commune
     */
    select?: CommuneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commune
     */
    omit?: CommuneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommuneInclude<ExtArgs> | null
    /**
     * The data needed to update a Commune.
     */
    data: XOR<CommuneUpdateInput, CommuneUncheckedUpdateInput>
    /**
     * Choose, which Commune to update.
     */
    where: CommuneWhereUniqueInput
  }

  /**
   * Commune updateMany
   */
  export type CommuneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Communes.
     */
    data: XOR<CommuneUpdateManyMutationInput, CommuneUncheckedUpdateManyInput>
    /**
     * Filter which Communes to update
     */
    where?: CommuneWhereInput
    /**
     * Limit how many Communes to update.
     */
    limit?: number
  }

  /**
   * Commune updateManyAndReturn
   */
  export type CommuneUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commune
     */
    select?: CommuneSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Commune
     */
    omit?: CommuneOmit<ExtArgs> | null
    /**
     * The data used to update Communes.
     */
    data: XOR<CommuneUpdateManyMutationInput, CommuneUncheckedUpdateManyInput>
    /**
     * Filter which Communes to update
     */
    where?: CommuneWhereInput
    /**
     * Limit how many Communes to update.
     */
    limit?: number
  }

  /**
   * Commune upsert
   */
  export type CommuneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commune
     */
    select?: CommuneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commune
     */
    omit?: CommuneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommuneInclude<ExtArgs> | null
    /**
     * The filter to search for the Commune to update in case it exists.
     */
    where: CommuneWhereUniqueInput
    /**
     * In case the Commune found by the `where` argument doesn't exist, create a new Commune with this data.
     */
    create: XOR<CommuneCreateInput, CommuneUncheckedCreateInput>
    /**
     * In case the Commune was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommuneUpdateInput, CommuneUncheckedUpdateInput>
  }

  /**
   * Commune delete
   */
  export type CommuneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commune
     */
    select?: CommuneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commune
     */
    omit?: CommuneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommuneInclude<ExtArgs> | null
    /**
     * Filter which Commune to delete.
     */
    where: CommuneWhereUniqueInput
  }

  /**
   * Commune deleteMany
   */
  export type CommuneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Communes to delete
     */
    where?: CommuneWhereInput
    /**
     * Limit how many Communes to delete.
     */
    limit?: number
  }

  /**
   * Commune.signalement
   */
  export type Commune$signalementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signalemment
     */
    select?: SignalemmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signalemment
     */
    omit?: SignalemmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalemmentInclude<ExtArgs> | null
    where?: SignalemmentWhereInput
    orderBy?: SignalemmentOrderByWithRelationInput | SignalemmentOrderByWithRelationInput[]
    cursor?: SignalemmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SignalemmentScalarFieldEnum | SignalemmentScalarFieldEnum[]
  }

  /**
   * Commune.user
   */
  export type Commune$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Commune without action
   */
  export type CommuneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commune
     */
    select?: CommuneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commune
     */
    omit?: CommuneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommuneInclude<ExtArgs> | null
  }


  /**
   * Model Signalemment
   */

  export type AggregateSignalemment = {
    _count: SignalemmentCountAggregateOutputType | null
    _min: SignalemmentMinAggregateOutputType | null
    _max: SignalemmentMaxAggregateOutputType | null
  }

  export type SignalemmentMinAggregateOutputType = {
    id: string | null
    description: string | null
    categorie: string | null
    image: string | null
    latitude: string | null
    longitude: string | null
    status: $Enums.status | null
    user: string | null
    commune: string | null
    creer_le: Date | null
    mod_lw: Date | null
  }

  export type SignalemmentMaxAggregateOutputType = {
    id: string | null
    description: string | null
    categorie: string | null
    image: string | null
    latitude: string | null
    longitude: string | null
    status: $Enums.status | null
    user: string | null
    commune: string | null
    creer_le: Date | null
    mod_lw: Date | null
  }

  export type SignalemmentCountAggregateOutputType = {
    id: number
    description: number
    categorie: number
    image: number
    latitude: number
    longitude: number
    status: number
    user: number
    commune: number
    creer_le: number
    mod_lw: number
    _all: number
  }


  export type SignalemmentMinAggregateInputType = {
    id?: true
    description?: true
    categorie?: true
    image?: true
    latitude?: true
    longitude?: true
    status?: true
    user?: true
    commune?: true
    creer_le?: true
    mod_lw?: true
  }

  export type SignalemmentMaxAggregateInputType = {
    id?: true
    description?: true
    categorie?: true
    image?: true
    latitude?: true
    longitude?: true
    status?: true
    user?: true
    commune?: true
    creer_le?: true
    mod_lw?: true
  }

  export type SignalemmentCountAggregateInputType = {
    id?: true
    description?: true
    categorie?: true
    image?: true
    latitude?: true
    longitude?: true
    status?: true
    user?: true
    commune?: true
    creer_le?: true
    mod_lw?: true
    _all?: true
  }

  export type SignalemmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Signalemment to aggregate.
     */
    where?: SignalemmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Signalemments to fetch.
     */
    orderBy?: SignalemmentOrderByWithRelationInput | SignalemmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SignalemmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Signalemments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Signalemments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Signalemments
    **/
    _count?: true | SignalemmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SignalemmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SignalemmentMaxAggregateInputType
  }

  export type GetSignalemmentAggregateType<T extends SignalemmentAggregateArgs> = {
        [P in keyof T & keyof AggregateSignalemment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSignalemment[P]>
      : GetScalarType<T[P], AggregateSignalemment[P]>
  }




  export type SignalemmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SignalemmentWhereInput
    orderBy?: SignalemmentOrderByWithAggregationInput | SignalemmentOrderByWithAggregationInput[]
    by: SignalemmentScalarFieldEnum[] | SignalemmentScalarFieldEnum
    having?: SignalemmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SignalemmentCountAggregateInputType | true
    _min?: SignalemmentMinAggregateInputType
    _max?: SignalemmentMaxAggregateInputType
  }

  export type SignalemmentGroupByOutputType = {
    id: string
    description: string
    categorie: string
    image: string
    latitude: string
    longitude: string
    status: $Enums.status
    user: string
    commune: string
    creer_le: Date
    mod_lw: Date
    _count: SignalemmentCountAggregateOutputType | null
    _min: SignalemmentMinAggregateOutputType | null
    _max: SignalemmentMaxAggregateOutputType | null
  }

  type GetSignalemmentGroupByPayload<T extends SignalemmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SignalemmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SignalemmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SignalemmentGroupByOutputType[P]>
            : GetScalarType<T[P], SignalemmentGroupByOutputType[P]>
        }
      >
    >


  export type SignalemmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    categorie?: boolean
    image?: boolean
    latitude?: boolean
    longitude?: boolean
    status?: boolean
    user?: boolean
    commune?: boolean
    creer_le?: boolean
    mod_lw?: boolean
    UderId?: boolean | UserDefaultArgs<ExtArgs>
    categorieId?: boolean | CategorieDefaultArgs<ExtArgs>
    communeid?: boolean | CommuneDefaultArgs<ExtArgs>
    assignation?: boolean | Signalemment$assignationArgs<ExtArgs>
    _count?: boolean | SignalemmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["signalemment"]>

  export type SignalemmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    categorie?: boolean
    image?: boolean
    latitude?: boolean
    longitude?: boolean
    status?: boolean
    user?: boolean
    commune?: boolean
    creer_le?: boolean
    mod_lw?: boolean
    UderId?: boolean | UserDefaultArgs<ExtArgs>
    categorieId?: boolean | CategorieDefaultArgs<ExtArgs>
    communeid?: boolean | CommuneDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["signalemment"]>

  export type SignalemmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    categorie?: boolean
    image?: boolean
    latitude?: boolean
    longitude?: boolean
    status?: boolean
    user?: boolean
    commune?: boolean
    creer_le?: boolean
    mod_lw?: boolean
    UderId?: boolean | UserDefaultArgs<ExtArgs>
    categorieId?: boolean | CategorieDefaultArgs<ExtArgs>
    communeid?: boolean | CommuneDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["signalemment"]>

  export type SignalemmentSelectScalar = {
    id?: boolean
    description?: boolean
    categorie?: boolean
    image?: boolean
    latitude?: boolean
    longitude?: boolean
    status?: boolean
    user?: boolean
    commune?: boolean
    creer_le?: boolean
    mod_lw?: boolean
  }

  export type SignalemmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "categorie" | "image" | "latitude" | "longitude" | "status" | "user" | "commune" | "creer_le" | "mod_lw", ExtArgs["result"]["signalemment"]>
  export type SignalemmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UderId?: boolean | UserDefaultArgs<ExtArgs>
    categorieId?: boolean | CategorieDefaultArgs<ExtArgs>
    communeid?: boolean | CommuneDefaultArgs<ExtArgs>
    assignation?: boolean | Signalemment$assignationArgs<ExtArgs>
    _count?: boolean | SignalemmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SignalemmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UderId?: boolean | UserDefaultArgs<ExtArgs>
    categorieId?: boolean | CategorieDefaultArgs<ExtArgs>
    communeid?: boolean | CommuneDefaultArgs<ExtArgs>
  }
  export type SignalemmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UderId?: boolean | UserDefaultArgs<ExtArgs>
    categorieId?: boolean | CategorieDefaultArgs<ExtArgs>
    communeid?: boolean | CommuneDefaultArgs<ExtArgs>
  }

  export type $SignalemmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Signalemment"
    objects: {
      UderId: Prisma.$UserPayload<ExtArgs>
      categorieId: Prisma.$CategoriePayload<ExtArgs>
      communeid: Prisma.$CommunePayload<ExtArgs>
      assignation: Prisma.$AssignationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      description: string
      categorie: string
      image: string
      latitude: string
      longitude: string
      status: $Enums.status
      user: string
      commune: string
      creer_le: Date
      mod_lw: Date
    }, ExtArgs["result"]["signalemment"]>
    composites: {}
  }

  type SignalemmentGetPayload<S extends boolean | null | undefined | SignalemmentDefaultArgs> = $Result.GetResult<Prisma.$SignalemmentPayload, S>

  type SignalemmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SignalemmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SignalemmentCountAggregateInputType | true
    }

  export interface SignalemmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Signalemment'], meta: { name: 'Signalemment' } }
    /**
     * Find zero or one Signalemment that matches the filter.
     * @param {SignalemmentFindUniqueArgs} args - Arguments to find a Signalemment
     * @example
     * // Get one Signalemment
     * const signalemment = await prisma.signalemment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SignalemmentFindUniqueArgs>(args: SelectSubset<T, SignalemmentFindUniqueArgs<ExtArgs>>): Prisma__SignalemmentClient<$Result.GetResult<Prisma.$SignalemmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Signalemment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SignalemmentFindUniqueOrThrowArgs} args - Arguments to find a Signalemment
     * @example
     * // Get one Signalemment
     * const signalemment = await prisma.signalemment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SignalemmentFindUniqueOrThrowArgs>(args: SelectSubset<T, SignalemmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SignalemmentClient<$Result.GetResult<Prisma.$SignalemmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Signalemment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalemmentFindFirstArgs} args - Arguments to find a Signalemment
     * @example
     * // Get one Signalemment
     * const signalemment = await prisma.signalemment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SignalemmentFindFirstArgs>(args?: SelectSubset<T, SignalemmentFindFirstArgs<ExtArgs>>): Prisma__SignalemmentClient<$Result.GetResult<Prisma.$SignalemmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Signalemment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalemmentFindFirstOrThrowArgs} args - Arguments to find a Signalemment
     * @example
     * // Get one Signalemment
     * const signalemment = await prisma.signalemment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SignalemmentFindFirstOrThrowArgs>(args?: SelectSubset<T, SignalemmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__SignalemmentClient<$Result.GetResult<Prisma.$SignalemmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Signalemments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalemmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Signalemments
     * const signalemments = await prisma.signalemment.findMany()
     * 
     * // Get first 10 Signalemments
     * const signalemments = await prisma.signalemment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const signalemmentWithIdOnly = await prisma.signalemment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SignalemmentFindManyArgs>(args?: SelectSubset<T, SignalemmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignalemmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Signalemment.
     * @param {SignalemmentCreateArgs} args - Arguments to create a Signalemment.
     * @example
     * // Create one Signalemment
     * const Signalemment = await prisma.signalemment.create({
     *   data: {
     *     // ... data to create a Signalemment
     *   }
     * })
     * 
     */
    create<T extends SignalemmentCreateArgs>(args: SelectSubset<T, SignalemmentCreateArgs<ExtArgs>>): Prisma__SignalemmentClient<$Result.GetResult<Prisma.$SignalemmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Signalemments.
     * @param {SignalemmentCreateManyArgs} args - Arguments to create many Signalemments.
     * @example
     * // Create many Signalemments
     * const signalemment = await prisma.signalemment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SignalemmentCreateManyArgs>(args?: SelectSubset<T, SignalemmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Signalemments and returns the data saved in the database.
     * @param {SignalemmentCreateManyAndReturnArgs} args - Arguments to create many Signalemments.
     * @example
     * // Create many Signalemments
     * const signalemment = await prisma.signalemment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Signalemments and only return the `id`
     * const signalemmentWithIdOnly = await prisma.signalemment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SignalemmentCreateManyAndReturnArgs>(args?: SelectSubset<T, SignalemmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignalemmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Signalemment.
     * @param {SignalemmentDeleteArgs} args - Arguments to delete one Signalemment.
     * @example
     * // Delete one Signalemment
     * const Signalemment = await prisma.signalemment.delete({
     *   where: {
     *     // ... filter to delete one Signalemment
     *   }
     * })
     * 
     */
    delete<T extends SignalemmentDeleteArgs>(args: SelectSubset<T, SignalemmentDeleteArgs<ExtArgs>>): Prisma__SignalemmentClient<$Result.GetResult<Prisma.$SignalemmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Signalemment.
     * @param {SignalemmentUpdateArgs} args - Arguments to update one Signalemment.
     * @example
     * // Update one Signalemment
     * const signalemment = await prisma.signalemment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SignalemmentUpdateArgs>(args: SelectSubset<T, SignalemmentUpdateArgs<ExtArgs>>): Prisma__SignalemmentClient<$Result.GetResult<Prisma.$SignalemmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Signalemments.
     * @param {SignalemmentDeleteManyArgs} args - Arguments to filter Signalemments to delete.
     * @example
     * // Delete a few Signalemments
     * const { count } = await prisma.signalemment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SignalemmentDeleteManyArgs>(args?: SelectSubset<T, SignalemmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Signalemments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalemmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Signalemments
     * const signalemment = await prisma.signalemment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SignalemmentUpdateManyArgs>(args: SelectSubset<T, SignalemmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Signalemments and returns the data updated in the database.
     * @param {SignalemmentUpdateManyAndReturnArgs} args - Arguments to update many Signalemments.
     * @example
     * // Update many Signalemments
     * const signalemment = await prisma.signalemment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Signalemments and only return the `id`
     * const signalemmentWithIdOnly = await prisma.signalemment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SignalemmentUpdateManyAndReturnArgs>(args: SelectSubset<T, SignalemmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignalemmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Signalemment.
     * @param {SignalemmentUpsertArgs} args - Arguments to update or create a Signalemment.
     * @example
     * // Update or create a Signalemment
     * const signalemment = await prisma.signalemment.upsert({
     *   create: {
     *     // ... data to create a Signalemment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Signalemment we want to update
     *   }
     * })
     */
    upsert<T extends SignalemmentUpsertArgs>(args: SelectSubset<T, SignalemmentUpsertArgs<ExtArgs>>): Prisma__SignalemmentClient<$Result.GetResult<Prisma.$SignalemmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Signalemments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalemmentCountArgs} args - Arguments to filter Signalemments to count.
     * @example
     * // Count the number of Signalemments
     * const count = await prisma.signalemment.count({
     *   where: {
     *     // ... the filter for the Signalemments we want to count
     *   }
     * })
    **/
    count<T extends SignalemmentCountArgs>(
      args?: Subset<T, SignalemmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SignalemmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Signalemment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalemmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SignalemmentAggregateArgs>(args: Subset<T, SignalemmentAggregateArgs>): Prisma.PrismaPromise<GetSignalemmentAggregateType<T>>

    /**
     * Group by Signalemment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalemmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SignalemmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SignalemmentGroupByArgs['orderBy'] }
        : { orderBy?: SignalemmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SignalemmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSignalemmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Signalemment model
   */
  readonly fields: SignalemmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Signalemment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SignalemmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    UderId<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    categorieId<T extends CategorieDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategorieDefaultArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    communeid<T extends CommuneDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CommuneDefaultArgs<ExtArgs>>): Prisma__CommuneClient<$Result.GetResult<Prisma.$CommunePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assignation<T extends Signalemment$assignationArgs<ExtArgs> = {}>(args?: Subset<T, Signalemment$assignationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Signalemment model
   */
  interface SignalemmentFieldRefs {
    readonly id: FieldRef<"Signalemment", 'String'>
    readonly description: FieldRef<"Signalemment", 'String'>
    readonly categorie: FieldRef<"Signalemment", 'String'>
    readonly image: FieldRef<"Signalemment", 'String'>
    readonly latitude: FieldRef<"Signalemment", 'String'>
    readonly longitude: FieldRef<"Signalemment", 'String'>
    readonly status: FieldRef<"Signalemment", 'status'>
    readonly user: FieldRef<"Signalemment", 'String'>
    readonly commune: FieldRef<"Signalemment", 'String'>
    readonly creer_le: FieldRef<"Signalemment", 'DateTime'>
    readonly mod_lw: FieldRef<"Signalemment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Signalemment findUnique
   */
  export type SignalemmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signalemment
     */
    select?: SignalemmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signalemment
     */
    omit?: SignalemmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalemmentInclude<ExtArgs> | null
    /**
     * Filter, which Signalemment to fetch.
     */
    where: SignalemmentWhereUniqueInput
  }

  /**
   * Signalemment findUniqueOrThrow
   */
  export type SignalemmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signalemment
     */
    select?: SignalemmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signalemment
     */
    omit?: SignalemmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalemmentInclude<ExtArgs> | null
    /**
     * Filter, which Signalemment to fetch.
     */
    where: SignalemmentWhereUniqueInput
  }

  /**
   * Signalemment findFirst
   */
  export type SignalemmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signalemment
     */
    select?: SignalemmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signalemment
     */
    omit?: SignalemmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalemmentInclude<ExtArgs> | null
    /**
     * Filter, which Signalemment to fetch.
     */
    where?: SignalemmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Signalemments to fetch.
     */
    orderBy?: SignalemmentOrderByWithRelationInput | SignalemmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Signalemments.
     */
    cursor?: SignalemmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Signalemments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Signalemments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Signalemments.
     */
    distinct?: SignalemmentScalarFieldEnum | SignalemmentScalarFieldEnum[]
  }

  /**
   * Signalemment findFirstOrThrow
   */
  export type SignalemmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signalemment
     */
    select?: SignalemmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signalemment
     */
    omit?: SignalemmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalemmentInclude<ExtArgs> | null
    /**
     * Filter, which Signalemment to fetch.
     */
    where?: SignalemmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Signalemments to fetch.
     */
    orderBy?: SignalemmentOrderByWithRelationInput | SignalemmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Signalemments.
     */
    cursor?: SignalemmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Signalemments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Signalemments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Signalemments.
     */
    distinct?: SignalemmentScalarFieldEnum | SignalemmentScalarFieldEnum[]
  }

  /**
   * Signalemment findMany
   */
  export type SignalemmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signalemment
     */
    select?: SignalemmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signalemment
     */
    omit?: SignalemmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalemmentInclude<ExtArgs> | null
    /**
     * Filter, which Signalemments to fetch.
     */
    where?: SignalemmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Signalemments to fetch.
     */
    orderBy?: SignalemmentOrderByWithRelationInput | SignalemmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Signalemments.
     */
    cursor?: SignalemmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Signalemments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Signalemments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Signalemments.
     */
    distinct?: SignalemmentScalarFieldEnum | SignalemmentScalarFieldEnum[]
  }

  /**
   * Signalemment create
   */
  export type SignalemmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signalemment
     */
    select?: SignalemmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signalemment
     */
    omit?: SignalemmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalemmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Signalemment.
     */
    data: XOR<SignalemmentCreateInput, SignalemmentUncheckedCreateInput>
  }

  /**
   * Signalemment createMany
   */
  export type SignalemmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Signalemments.
     */
    data: SignalemmentCreateManyInput | SignalemmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Signalemment createManyAndReturn
   */
  export type SignalemmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signalemment
     */
    select?: SignalemmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Signalemment
     */
    omit?: SignalemmentOmit<ExtArgs> | null
    /**
     * The data used to create many Signalemments.
     */
    data: SignalemmentCreateManyInput | SignalemmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalemmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Signalemment update
   */
  export type SignalemmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signalemment
     */
    select?: SignalemmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signalemment
     */
    omit?: SignalemmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalemmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Signalemment.
     */
    data: XOR<SignalemmentUpdateInput, SignalemmentUncheckedUpdateInput>
    /**
     * Choose, which Signalemment to update.
     */
    where: SignalemmentWhereUniqueInput
  }

  /**
   * Signalemment updateMany
   */
  export type SignalemmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Signalemments.
     */
    data: XOR<SignalemmentUpdateManyMutationInput, SignalemmentUncheckedUpdateManyInput>
    /**
     * Filter which Signalemments to update
     */
    where?: SignalemmentWhereInput
    /**
     * Limit how many Signalemments to update.
     */
    limit?: number
  }

  /**
   * Signalemment updateManyAndReturn
   */
  export type SignalemmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signalemment
     */
    select?: SignalemmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Signalemment
     */
    omit?: SignalemmentOmit<ExtArgs> | null
    /**
     * The data used to update Signalemments.
     */
    data: XOR<SignalemmentUpdateManyMutationInput, SignalemmentUncheckedUpdateManyInput>
    /**
     * Filter which Signalemments to update
     */
    where?: SignalemmentWhereInput
    /**
     * Limit how many Signalemments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalemmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Signalemment upsert
   */
  export type SignalemmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signalemment
     */
    select?: SignalemmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signalemment
     */
    omit?: SignalemmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalemmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Signalemment to update in case it exists.
     */
    where: SignalemmentWhereUniqueInput
    /**
     * In case the Signalemment found by the `where` argument doesn't exist, create a new Signalemment with this data.
     */
    create: XOR<SignalemmentCreateInput, SignalemmentUncheckedCreateInput>
    /**
     * In case the Signalemment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SignalemmentUpdateInput, SignalemmentUncheckedUpdateInput>
  }

  /**
   * Signalemment delete
   */
  export type SignalemmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signalemment
     */
    select?: SignalemmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signalemment
     */
    omit?: SignalemmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalemmentInclude<ExtArgs> | null
    /**
     * Filter which Signalemment to delete.
     */
    where: SignalemmentWhereUniqueInput
  }

  /**
   * Signalemment deleteMany
   */
  export type SignalemmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Signalemments to delete
     */
    where?: SignalemmentWhereInput
    /**
     * Limit how many Signalemments to delete.
     */
    limit?: number
  }

  /**
   * Signalemment.assignation
   */
  export type Signalemment$assignationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignation
     */
    select?: AssignationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignation
     */
    omit?: AssignationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignationInclude<ExtArgs> | null
    where?: AssignationWhereInput
    orderBy?: AssignationOrderByWithRelationInput | AssignationOrderByWithRelationInput[]
    cursor?: AssignationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssignationScalarFieldEnum | AssignationScalarFieldEnum[]
  }

  /**
   * Signalemment without action
   */
  export type SignalemmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signalemment
     */
    select?: SignalemmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signalemment
     */
    omit?: SignalemmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalemmentInclude<ExtArgs> | null
  }


  /**
   * Model Categorie
   */

  export type AggregateCategorie = {
    _count: CategorieCountAggregateOutputType | null
    _min: CategorieMinAggregateOutputType | null
    _max: CategorieMaxAggregateOutputType | null
  }

  export type CategorieMinAggregateOutputType = {
    id: string | null
    nom: string | null
  }

  export type CategorieMaxAggregateOutputType = {
    id: string | null
    nom: string | null
  }

  export type CategorieCountAggregateOutputType = {
    id: number
    nom: number
    _all: number
  }


  export type CategorieMinAggregateInputType = {
    id?: true
    nom?: true
  }

  export type CategorieMaxAggregateInputType = {
    id?: true
    nom?: true
  }

  export type CategorieCountAggregateInputType = {
    id?: true
    nom?: true
    _all?: true
  }

  export type CategorieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorie to aggregate.
     */
    where?: CategorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategorieOrderByWithRelationInput | CategorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategorieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategorieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategorieMaxAggregateInputType
  }

  export type GetCategorieAggregateType<T extends CategorieAggregateArgs> = {
        [P in keyof T & keyof AggregateCategorie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategorie[P]>
      : GetScalarType<T[P], AggregateCategorie[P]>
  }




  export type CategorieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategorieWhereInput
    orderBy?: CategorieOrderByWithAggregationInput | CategorieOrderByWithAggregationInput[]
    by: CategorieScalarFieldEnum[] | CategorieScalarFieldEnum
    having?: CategorieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategorieCountAggregateInputType | true
    _min?: CategorieMinAggregateInputType
    _max?: CategorieMaxAggregateInputType
  }

  export type CategorieGroupByOutputType = {
    id: string
    nom: string
    _count: CategorieCountAggregateOutputType | null
    _min: CategorieMinAggregateOutputType | null
    _max: CategorieMaxAggregateOutputType | null
  }

  type GetCategorieGroupByPayload<T extends CategorieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategorieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategorieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategorieGroupByOutputType[P]>
            : GetScalarType<T[P], CategorieGroupByOutputType[P]>
        }
      >
    >


  export type CategorieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    signalement?: boolean | Categorie$signalementArgs<ExtArgs>
    _count?: boolean | CategorieCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categorie"]>

  export type CategorieSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
  }, ExtArgs["result"]["categorie"]>

  export type CategorieSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
  }, ExtArgs["result"]["categorie"]>

  export type CategorieSelectScalar = {
    id?: boolean
    nom?: boolean
  }

  export type CategorieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom", ExtArgs["result"]["categorie"]>
  export type CategorieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    signalement?: boolean | Categorie$signalementArgs<ExtArgs>
    _count?: boolean | CategorieCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategorieIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategorieIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoriePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categorie"
    objects: {
      signalement: Prisma.$SignalemmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nom: string
    }, ExtArgs["result"]["categorie"]>
    composites: {}
  }

  type CategorieGetPayload<S extends boolean | null | undefined | CategorieDefaultArgs> = $Result.GetResult<Prisma.$CategoriePayload, S>

  type CategorieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategorieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategorieCountAggregateInputType | true
    }

  export interface CategorieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categorie'], meta: { name: 'Categorie' } }
    /**
     * Find zero or one Categorie that matches the filter.
     * @param {CategorieFindUniqueArgs} args - Arguments to find a Categorie
     * @example
     * // Get one Categorie
     * const categorie = await prisma.categorie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategorieFindUniqueArgs>(args: SelectSubset<T, CategorieFindUniqueArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categorie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategorieFindUniqueOrThrowArgs} args - Arguments to find a Categorie
     * @example
     * // Get one Categorie
     * const categorie = await prisma.categorie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategorieFindUniqueOrThrowArgs>(args: SelectSubset<T, CategorieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categorie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieFindFirstArgs} args - Arguments to find a Categorie
     * @example
     * // Get one Categorie
     * const categorie = await prisma.categorie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategorieFindFirstArgs>(args?: SelectSubset<T, CategorieFindFirstArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categorie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieFindFirstOrThrowArgs} args - Arguments to find a Categorie
     * @example
     * // Get one Categorie
     * const categorie = await prisma.categorie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategorieFindFirstOrThrowArgs>(args?: SelectSubset<T, CategorieFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categorie.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categorie.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categorieWithIdOnly = await prisma.categorie.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategorieFindManyArgs>(args?: SelectSubset<T, CategorieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categorie.
     * @param {CategorieCreateArgs} args - Arguments to create a Categorie.
     * @example
     * // Create one Categorie
     * const Categorie = await prisma.categorie.create({
     *   data: {
     *     // ... data to create a Categorie
     *   }
     * })
     * 
     */
    create<T extends CategorieCreateArgs>(args: SelectSubset<T, CategorieCreateArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategorieCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categorie = await prisma.categorie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategorieCreateManyArgs>(args?: SelectSubset<T, CategorieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategorieCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categorie = await prisma.categorie.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categorieWithIdOnly = await prisma.categorie.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategorieCreateManyAndReturnArgs>(args?: SelectSubset<T, CategorieCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categorie.
     * @param {CategorieDeleteArgs} args - Arguments to delete one Categorie.
     * @example
     * // Delete one Categorie
     * const Categorie = await prisma.categorie.delete({
     *   where: {
     *     // ... filter to delete one Categorie
     *   }
     * })
     * 
     */
    delete<T extends CategorieDeleteArgs>(args: SelectSubset<T, CategorieDeleteArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categorie.
     * @param {CategorieUpdateArgs} args - Arguments to update one Categorie.
     * @example
     * // Update one Categorie
     * const categorie = await prisma.categorie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategorieUpdateArgs>(args: SelectSubset<T, CategorieUpdateArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategorieDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categorie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategorieDeleteManyArgs>(args?: SelectSubset<T, CategorieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categorie = await prisma.categorie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategorieUpdateManyArgs>(args: SelectSubset<T, CategorieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategorieUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const categorie = await prisma.categorie.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categorieWithIdOnly = await prisma.categorie.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategorieUpdateManyAndReturnArgs>(args: SelectSubset<T, CategorieUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categorie.
     * @param {CategorieUpsertArgs} args - Arguments to update or create a Categorie.
     * @example
     * // Update or create a Categorie
     * const categorie = await prisma.categorie.upsert({
     *   create: {
     *     // ... data to create a Categorie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categorie we want to update
     *   }
     * })
     */
    upsert<T extends CategorieUpsertArgs>(args: SelectSubset<T, CategorieUpsertArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categorie.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategorieCountArgs>(
      args?: Subset<T, CategorieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategorieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categorie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategorieAggregateArgs>(args: Subset<T, CategorieAggregateArgs>): Prisma.PrismaPromise<GetCategorieAggregateType<T>>

    /**
     * Group by Categorie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategorieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategorieGroupByArgs['orderBy'] }
        : { orderBy?: CategorieGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategorieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategorieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categorie model
   */
  readonly fields: CategorieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categorie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategorieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    signalement<T extends Categorie$signalementArgs<ExtArgs> = {}>(args?: Subset<T, Categorie$signalementArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignalemmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Categorie model
   */
  interface CategorieFieldRefs {
    readonly id: FieldRef<"Categorie", 'String'>
    readonly nom: FieldRef<"Categorie", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Categorie findUnique
   */
  export type CategorieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * Filter, which Categorie to fetch.
     */
    where: CategorieWhereUniqueInput
  }

  /**
   * Categorie findUniqueOrThrow
   */
  export type CategorieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * Filter, which Categorie to fetch.
     */
    where: CategorieWhereUniqueInput
  }

  /**
   * Categorie findFirst
   */
  export type CategorieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * Filter, which Categorie to fetch.
     */
    where?: CategorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategorieOrderByWithRelationInput | CategorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategorieScalarFieldEnum | CategorieScalarFieldEnum[]
  }

  /**
   * Categorie findFirstOrThrow
   */
  export type CategorieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * Filter, which Categorie to fetch.
     */
    where?: CategorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategorieOrderByWithRelationInput | CategorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategorieScalarFieldEnum | CategorieScalarFieldEnum[]
  }

  /**
   * Categorie findMany
   */
  export type CategorieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategorieOrderByWithRelationInput | CategorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategorieScalarFieldEnum | CategorieScalarFieldEnum[]
  }

  /**
   * Categorie create
   */
  export type CategorieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * The data needed to create a Categorie.
     */
    data: XOR<CategorieCreateInput, CategorieUncheckedCreateInput>
  }

  /**
   * Categorie createMany
   */
  export type CategorieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategorieCreateManyInput | CategorieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categorie createManyAndReturn
   */
  export type CategorieCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategorieCreateManyInput | CategorieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categorie update
   */
  export type CategorieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * The data needed to update a Categorie.
     */
    data: XOR<CategorieUpdateInput, CategorieUncheckedUpdateInput>
    /**
     * Choose, which Categorie to update.
     */
    where: CategorieWhereUniqueInput
  }

  /**
   * Categorie updateMany
   */
  export type CategorieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategorieUpdateManyMutationInput, CategorieUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategorieWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Categorie updateManyAndReturn
   */
  export type CategorieUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategorieUpdateManyMutationInput, CategorieUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategorieWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Categorie upsert
   */
  export type CategorieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * The filter to search for the Categorie to update in case it exists.
     */
    where: CategorieWhereUniqueInput
    /**
     * In case the Categorie found by the `where` argument doesn't exist, create a new Categorie with this data.
     */
    create: XOR<CategorieCreateInput, CategorieUncheckedCreateInput>
    /**
     * In case the Categorie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategorieUpdateInput, CategorieUncheckedUpdateInput>
  }

  /**
   * Categorie delete
   */
  export type CategorieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * Filter which Categorie to delete.
     */
    where: CategorieWhereUniqueInput
  }

  /**
   * Categorie deleteMany
   */
  export type CategorieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategorieWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Categorie.signalement
   */
  export type Categorie$signalementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signalemment
     */
    select?: SignalemmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signalemment
     */
    omit?: SignalemmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalemmentInclude<ExtArgs> | null
    where?: SignalemmentWhereInput
    orderBy?: SignalemmentOrderByWithRelationInput | SignalemmentOrderByWithRelationInput[]
    cursor?: SignalemmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SignalemmentScalarFieldEnum | SignalemmentScalarFieldEnum[]
  }

  /**
   * Categorie without action
   */
  export type CategorieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
  }


  /**
   * Model Assignation
   */

  export type AggregateAssignation = {
    _count: AssignationCountAggregateOutputType | null
    _min: AssignationMinAggregateOutputType | null
    _max: AssignationMaxAggregateOutputType | null
  }

  export type AssignationMinAggregateOutputType = {
    userId: string | null
    signalementId: string | null
  }

  export type AssignationMaxAggregateOutputType = {
    userId: string | null
    signalementId: string | null
  }

  export type AssignationCountAggregateOutputType = {
    userId: number
    signalementId: number
    _all: number
  }


  export type AssignationMinAggregateInputType = {
    userId?: true
    signalementId?: true
  }

  export type AssignationMaxAggregateInputType = {
    userId?: true
    signalementId?: true
  }

  export type AssignationCountAggregateInputType = {
    userId?: true
    signalementId?: true
    _all?: true
  }

  export type AssignationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assignation to aggregate.
     */
    where?: AssignationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignations to fetch.
     */
    orderBy?: AssignationOrderByWithRelationInput | AssignationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssignationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Assignations
    **/
    _count?: true | AssignationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssignationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssignationMaxAggregateInputType
  }

  export type GetAssignationAggregateType<T extends AssignationAggregateArgs> = {
        [P in keyof T & keyof AggregateAssignation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssignation[P]>
      : GetScalarType<T[P], AggregateAssignation[P]>
  }




  export type AssignationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignationWhereInput
    orderBy?: AssignationOrderByWithAggregationInput | AssignationOrderByWithAggregationInput[]
    by: AssignationScalarFieldEnum[] | AssignationScalarFieldEnum
    having?: AssignationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssignationCountAggregateInputType | true
    _min?: AssignationMinAggregateInputType
    _max?: AssignationMaxAggregateInputType
  }

  export type AssignationGroupByOutputType = {
    userId: string
    signalementId: string
    _count: AssignationCountAggregateOutputType | null
    _min: AssignationMinAggregateOutputType | null
    _max: AssignationMaxAggregateOutputType | null
  }

  type GetAssignationGroupByPayload<T extends AssignationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssignationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssignationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssignationGroupByOutputType[P]>
            : GetScalarType<T[P], AssignationGroupByOutputType[P]>
        }
      >
    >


  export type AssignationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    signalementId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    signalement?: boolean | SignalemmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignation"]>

  export type AssignationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    signalementId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    signalement?: boolean | SignalemmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignation"]>

  export type AssignationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    signalementId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    signalement?: boolean | SignalemmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignation"]>

  export type AssignationSelectScalar = {
    userId?: boolean
    signalementId?: boolean
  }

  export type AssignationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "signalementId", ExtArgs["result"]["assignation"]>
  export type AssignationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    signalement?: boolean | SignalemmentDefaultArgs<ExtArgs>
  }
  export type AssignationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    signalement?: boolean | SignalemmentDefaultArgs<ExtArgs>
  }
  export type AssignationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    signalement?: boolean | SignalemmentDefaultArgs<ExtArgs>
  }

  export type $AssignationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Assignation"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      signalement: Prisma.$SignalemmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      signalementId: string
    }, ExtArgs["result"]["assignation"]>
    composites: {}
  }

  type AssignationGetPayload<S extends boolean | null | undefined | AssignationDefaultArgs> = $Result.GetResult<Prisma.$AssignationPayload, S>

  type AssignationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssignationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssignationCountAggregateInputType | true
    }

  export interface AssignationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Assignation'], meta: { name: 'Assignation' } }
    /**
     * Find zero or one Assignation that matches the filter.
     * @param {AssignationFindUniqueArgs} args - Arguments to find a Assignation
     * @example
     * // Get one Assignation
     * const assignation = await prisma.assignation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssignationFindUniqueArgs>(args: SelectSubset<T, AssignationFindUniqueArgs<ExtArgs>>): Prisma__AssignationClient<$Result.GetResult<Prisma.$AssignationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Assignation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssignationFindUniqueOrThrowArgs} args - Arguments to find a Assignation
     * @example
     * // Get one Assignation
     * const assignation = await prisma.assignation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssignationFindUniqueOrThrowArgs>(args: SelectSubset<T, AssignationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssignationClient<$Result.GetResult<Prisma.$AssignationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assignation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignationFindFirstArgs} args - Arguments to find a Assignation
     * @example
     * // Get one Assignation
     * const assignation = await prisma.assignation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssignationFindFirstArgs>(args?: SelectSubset<T, AssignationFindFirstArgs<ExtArgs>>): Prisma__AssignationClient<$Result.GetResult<Prisma.$AssignationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assignation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignationFindFirstOrThrowArgs} args - Arguments to find a Assignation
     * @example
     * // Get one Assignation
     * const assignation = await prisma.assignation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssignationFindFirstOrThrowArgs>(args?: SelectSubset<T, AssignationFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssignationClient<$Result.GetResult<Prisma.$AssignationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Assignations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assignations
     * const assignations = await prisma.assignation.findMany()
     * 
     * // Get first 10 Assignations
     * const assignations = await prisma.assignation.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const assignationWithUserIdOnly = await prisma.assignation.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends AssignationFindManyArgs>(args?: SelectSubset<T, AssignationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Assignation.
     * @param {AssignationCreateArgs} args - Arguments to create a Assignation.
     * @example
     * // Create one Assignation
     * const Assignation = await prisma.assignation.create({
     *   data: {
     *     // ... data to create a Assignation
     *   }
     * })
     * 
     */
    create<T extends AssignationCreateArgs>(args: SelectSubset<T, AssignationCreateArgs<ExtArgs>>): Prisma__AssignationClient<$Result.GetResult<Prisma.$AssignationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Assignations.
     * @param {AssignationCreateManyArgs} args - Arguments to create many Assignations.
     * @example
     * // Create many Assignations
     * const assignation = await prisma.assignation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssignationCreateManyArgs>(args?: SelectSubset<T, AssignationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Assignations and returns the data saved in the database.
     * @param {AssignationCreateManyAndReturnArgs} args - Arguments to create many Assignations.
     * @example
     * // Create many Assignations
     * const assignation = await prisma.assignation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Assignations and only return the `userId`
     * const assignationWithUserIdOnly = await prisma.assignation.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssignationCreateManyAndReturnArgs>(args?: SelectSubset<T, AssignationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Assignation.
     * @param {AssignationDeleteArgs} args - Arguments to delete one Assignation.
     * @example
     * // Delete one Assignation
     * const Assignation = await prisma.assignation.delete({
     *   where: {
     *     // ... filter to delete one Assignation
     *   }
     * })
     * 
     */
    delete<T extends AssignationDeleteArgs>(args: SelectSubset<T, AssignationDeleteArgs<ExtArgs>>): Prisma__AssignationClient<$Result.GetResult<Prisma.$AssignationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Assignation.
     * @param {AssignationUpdateArgs} args - Arguments to update one Assignation.
     * @example
     * // Update one Assignation
     * const assignation = await prisma.assignation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssignationUpdateArgs>(args: SelectSubset<T, AssignationUpdateArgs<ExtArgs>>): Prisma__AssignationClient<$Result.GetResult<Prisma.$AssignationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Assignations.
     * @param {AssignationDeleteManyArgs} args - Arguments to filter Assignations to delete.
     * @example
     * // Delete a few Assignations
     * const { count } = await prisma.assignation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssignationDeleteManyArgs>(args?: SelectSubset<T, AssignationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assignations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assignations
     * const assignation = await prisma.assignation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssignationUpdateManyArgs>(args: SelectSubset<T, AssignationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assignations and returns the data updated in the database.
     * @param {AssignationUpdateManyAndReturnArgs} args - Arguments to update many Assignations.
     * @example
     * // Update many Assignations
     * const assignation = await prisma.assignation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Assignations and only return the `userId`
     * const assignationWithUserIdOnly = await prisma.assignation.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AssignationUpdateManyAndReturnArgs>(args: SelectSubset<T, AssignationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Assignation.
     * @param {AssignationUpsertArgs} args - Arguments to update or create a Assignation.
     * @example
     * // Update or create a Assignation
     * const assignation = await prisma.assignation.upsert({
     *   create: {
     *     // ... data to create a Assignation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Assignation we want to update
     *   }
     * })
     */
    upsert<T extends AssignationUpsertArgs>(args: SelectSubset<T, AssignationUpsertArgs<ExtArgs>>): Prisma__AssignationClient<$Result.GetResult<Prisma.$AssignationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Assignations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignationCountArgs} args - Arguments to filter Assignations to count.
     * @example
     * // Count the number of Assignations
     * const count = await prisma.assignation.count({
     *   where: {
     *     // ... the filter for the Assignations we want to count
     *   }
     * })
    **/
    count<T extends AssignationCountArgs>(
      args?: Subset<T, AssignationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssignationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Assignation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssignationAggregateArgs>(args: Subset<T, AssignationAggregateArgs>): Prisma.PrismaPromise<GetAssignationAggregateType<T>>

    /**
     * Group by Assignation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssignationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssignationGroupByArgs['orderBy'] }
        : { orderBy?: AssignationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssignationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssignationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Assignation model
   */
  readonly fields: AssignationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Assignation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssignationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    signalement<T extends SignalemmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SignalemmentDefaultArgs<ExtArgs>>): Prisma__SignalemmentClient<$Result.GetResult<Prisma.$SignalemmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Assignation model
   */
  interface AssignationFieldRefs {
    readonly userId: FieldRef<"Assignation", 'String'>
    readonly signalementId: FieldRef<"Assignation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Assignation findUnique
   */
  export type AssignationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignation
     */
    select?: AssignationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignation
     */
    omit?: AssignationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignationInclude<ExtArgs> | null
    /**
     * Filter, which Assignation to fetch.
     */
    where: AssignationWhereUniqueInput
  }

  /**
   * Assignation findUniqueOrThrow
   */
  export type AssignationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignation
     */
    select?: AssignationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignation
     */
    omit?: AssignationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignationInclude<ExtArgs> | null
    /**
     * Filter, which Assignation to fetch.
     */
    where: AssignationWhereUniqueInput
  }

  /**
   * Assignation findFirst
   */
  export type AssignationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignation
     */
    select?: AssignationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignation
     */
    omit?: AssignationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignationInclude<ExtArgs> | null
    /**
     * Filter, which Assignation to fetch.
     */
    where?: AssignationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignations to fetch.
     */
    orderBy?: AssignationOrderByWithRelationInput | AssignationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assignations.
     */
    cursor?: AssignationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assignations.
     */
    distinct?: AssignationScalarFieldEnum | AssignationScalarFieldEnum[]
  }

  /**
   * Assignation findFirstOrThrow
   */
  export type AssignationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignation
     */
    select?: AssignationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignation
     */
    omit?: AssignationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignationInclude<ExtArgs> | null
    /**
     * Filter, which Assignation to fetch.
     */
    where?: AssignationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignations to fetch.
     */
    orderBy?: AssignationOrderByWithRelationInput | AssignationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assignations.
     */
    cursor?: AssignationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assignations.
     */
    distinct?: AssignationScalarFieldEnum | AssignationScalarFieldEnum[]
  }

  /**
   * Assignation findMany
   */
  export type AssignationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignation
     */
    select?: AssignationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignation
     */
    omit?: AssignationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignationInclude<ExtArgs> | null
    /**
     * Filter, which Assignations to fetch.
     */
    where?: AssignationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignations to fetch.
     */
    orderBy?: AssignationOrderByWithRelationInput | AssignationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assignations.
     */
    cursor?: AssignationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assignations.
     */
    distinct?: AssignationScalarFieldEnum | AssignationScalarFieldEnum[]
  }

  /**
   * Assignation create
   */
  export type AssignationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignation
     */
    select?: AssignationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignation
     */
    omit?: AssignationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignationInclude<ExtArgs> | null
    /**
     * The data needed to create a Assignation.
     */
    data: XOR<AssignationCreateInput, AssignationUncheckedCreateInput>
  }

  /**
   * Assignation createMany
   */
  export type AssignationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Assignations.
     */
    data: AssignationCreateManyInput | AssignationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Assignation createManyAndReturn
   */
  export type AssignationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignation
     */
    select?: AssignationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Assignation
     */
    omit?: AssignationOmit<ExtArgs> | null
    /**
     * The data used to create many Assignations.
     */
    data: AssignationCreateManyInput | AssignationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Assignation update
   */
  export type AssignationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignation
     */
    select?: AssignationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignation
     */
    omit?: AssignationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignationInclude<ExtArgs> | null
    /**
     * The data needed to update a Assignation.
     */
    data: XOR<AssignationUpdateInput, AssignationUncheckedUpdateInput>
    /**
     * Choose, which Assignation to update.
     */
    where: AssignationWhereUniqueInput
  }

  /**
   * Assignation updateMany
   */
  export type AssignationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Assignations.
     */
    data: XOR<AssignationUpdateManyMutationInput, AssignationUncheckedUpdateManyInput>
    /**
     * Filter which Assignations to update
     */
    where?: AssignationWhereInput
    /**
     * Limit how many Assignations to update.
     */
    limit?: number
  }

  /**
   * Assignation updateManyAndReturn
   */
  export type AssignationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignation
     */
    select?: AssignationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Assignation
     */
    omit?: AssignationOmit<ExtArgs> | null
    /**
     * The data used to update Assignations.
     */
    data: XOR<AssignationUpdateManyMutationInput, AssignationUncheckedUpdateManyInput>
    /**
     * Filter which Assignations to update
     */
    where?: AssignationWhereInput
    /**
     * Limit how many Assignations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Assignation upsert
   */
  export type AssignationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignation
     */
    select?: AssignationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignation
     */
    omit?: AssignationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignationInclude<ExtArgs> | null
    /**
     * The filter to search for the Assignation to update in case it exists.
     */
    where: AssignationWhereUniqueInput
    /**
     * In case the Assignation found by the `where` argument doesn't exist, create a new Assignation with this data.
     */
    create: XOR<AssignationCreateInput, AssignationUncheckedCreateInput>
    /**
     * In case the Assignation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssignationUpdateInput, AssignationUncheckedUpdateInput>
  }

  /**
   * Assignation delete
   */
  export type AssignationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignation
     */
    select?: AssignationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignation
     */
    omit?: AssignationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignationInclude<ExtArgs> | null
    /**
     * Filter which Assignation to delete.
     */
    where: AssignationWhereUniqueInput
  }

  /**
   * Assignation deleteMany
   */
  export type AssignationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assignations to delete
     */
    where?: AssignationWhereInput
    /**
     * Limit how many Assignations to delete.
     */
    limit?: number
  }

  /**
   * Assignation without action
   */
  export type AssignationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignation
     */
    select?: AssignationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignation
     */
    omit?: AssignationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    tel: 'tel',
    password: 'password',
    role: 'role',
    profil_picture: 'profil_picture',
    otpTpken: 'otpTpken',
    cree_le: 'cree_le',
    mod_le: 'mod_le',
    communeId: 'communeId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CommuneScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    nom_ville: 'nom_ville',
    population: 'population',
    creer_le: 'creer_le',
    mod_lw: 'mod_lw'
  };

  export type CommuneScalarFieldEnum = (typeof CommuneScalarFieldEnum)[keyof typeof CommuneScalarFieldEnum]


  export const SignalemmentScalarFieldEnum: {
    id: 'id',
    description: 'description',
    categorie: 'categorie',
    image: 'image',
    latitude: 'latitude',
    longitude: 'longitude',
    status: 'status',
    user: 'user',
    commune: 'commune',
    creer_le: 'creer_le',
    mod_lw: 'mod_lw'
  };

  export type SignalemmentScalarFieldEnum = (typeof SignalemmentScalarFieldEnum)[keyof typeof SignalemmentScalarFieldEnum]


  export const CategorieScalarFieldEnum: {
    id: 'id',
    nom: 'nom'
  };

  export type CategorieScalarFieldEnum = (typeof CategorieScalarFieldEnum)[keyof typeof CategorieScalarFieldEnum]


  export const AssignationScalarFieldEnum: {
    userId: 'userId',
    signalementId: 'signalementId'
  };

  export type AssignationScalarFieldEnum = (typeof AssignationScalarFieldEnum)[keyof typeof AssignationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'role'
   */
  export type EnumroleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'role'>
    


  /**
   * Reference to a field of type 'role[]'
   */
  export type ListEnumroleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'status'
   */
  export type EnumstatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'status'>
    


  /**
   * Reference to a field of type 'status[]'
   */
  export type ListEnumstatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'status[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    first_name?: StringFilter<"User"> | string
    last_name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    tel?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumroleFilter<"User"> | $Enums.role
    profil_picture?: StringNullableFilter<"User"> | string | null
    otpTpken?: StringNullableFilter<"User"> | string | null
    cree_le?: DateTimeFilter<"User"> | Date | string
    mod_le?: DateTimeFilter<"User"> | Date | string
    communeId?: StringFilter<"User"> | string
    commune?: XOR<CommuneScalarRelationFilter, CommuneWhereInput>
    signalement?: SignalemmentListRelationFilter
    assignation?: AssignationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    tel?: SortOrder
    password?: SortOrder
    role?: SortOrder
    profil_picture?: SortOrderInput | SortOrder
    otpTpken?: SortOrderInput | SortOrder
    cree_le?: SortOrder
    mod_le?: SortOrder
    communeId?: SortOrder
    commune?: CommuneOrderByWithRelationInput
    signalement?: SignalemmentOrderByRelationAggregateInput
    assignation?: AssignationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    first_name?: StringFilter<"User"> | string
    last_name?: StringFilter<"User"> | string
    tel?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumroleFilter<"User"> | $Enums.role
    profil_picture?: StringNullableFilter<"User"> | string | null
    otpTpken?: StringNullableFilter<"User"> | string | null
    cree_le?: DateTimeFilter<"User"> | Date | string
    mod_le?: DateTimeFilter<"User"> | Date | string
    communeId?: StringFilter<"User"> | string
    commune?: XOR<CommuneScalarRelationFilter, CommuneWhereInput>
    signalement?: SignalemmentListRelationFilter
    assignation?: AssignationListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    tel?: SortOrder
    password?: SortOrder
    role?: SortOrder
    profil_picture?: SortOrderInput | SortOrder
    otpTpken?: SortOrderInput | SortOrder
    cree_le?: SortOrder
    mod_le?: SortOrder
    communeId?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    first_name?: StringWithAggregatesFilter<"User"> | string
    last_name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    tel?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumroleWithAggregatesFilter<"User"> | $Enums.role
    profil_picture?: StringNullableWithAggregatesFilter<"User"> | string | null
    otpTpken?: StringNullableWithAggregatesFilter<"User"> | string | null
    cree_le?: DateTimeWithAggregatesFilter<"User"> | Date | string
    mod_le?: DateTimeWithAggregatesFilter<"User"> | Date | string
    communeId?: StringWithAggregatesFilter<"User"> | string
  }

  export type CommuneWhereInput = {
    AND?: CommuneWhereInput | CommuneWhereInput[]
    OR?: CommuneWhereInput[]
    NOT?: CommuneWhereInput | CommuneWhereInput[]
    id?: StringFilter<"Commune"> | string
    nom?: StringFilter<"Commune"> | string
    nom_ville?: StringFilter<"Commune"> | string
    population?: IntNullableFilter<"Commune"> | number | null
    creer_le?: DateTimeFilter<"Commune"> | Date | string
    mod_lw?: DateTimeFilter<"Commune"> | Date | string
    signalement?: SignalemmentListRelationFilter
    user?: UserListRelationFilter
  }

  export type CommuneOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    nom_ville?: SortOrder
    population?: SortOrderInput | SortOrder
    creer_le?: SortOrder
    mod_lw?: SortOrder
    signalement?: SignalemmentOrderByRelationAggregateInput
    user?: UserOrderByRelationAggregateInput
  }

  export type CommuneWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nom?: string
    AND?: CommuneWhereInput | CommuneWhereInput[]
    OR?: CommuneWhereInput[]
    NOT?: CommuneWhereInput | CommuneWhereInput[]
    nom_ville?: StringFilter<"Commune"> | string
    population?: IntNullableFilter<"Commune"> | number | null
    creer_le?: DateTimeFilter<"Commune"> | Date | string
    mod_lw?: DateTimeFilter<"Commune"> | Date | string
    signalement?: SignalemmentListRelationFilter
    user?: UserListRelationFilter
  }, "id" | "nom">

  export type CommuneOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    nom_ville?: SortOrder
    population?: SortOrderInput | SortOrder
    creer_le?: SortOrder
    mod_lw?: SortOrder
    _count?: CommuneCountOrderByAggregateInput
    _avg?: CommuneAvgOrderByAggregateInput
    _max?: CommuneMaxOrderByAggregateInput
    _min?: CommuneMinOrderByAggregateInput
    _sum?: CommuneSumOrderByAggregateInput
  }

  export type CommuneScalarWhereWithAggregatesInput = {
    AND?: CommuneScalarWhereWithAggregatesInput | CommuneScalarWhereWithAggregatesInput[]
    OR?: CommuneScalarWhereWithAggregatesInput[]
    NOT?: CommuneScalarWhereWithAggregatesInput | CommuneScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Commune"> | string
    nom?: StringWithAggregatesFilter<"Commune"> | string
    nom_ville?: StringWithAggregatesFilter<"Commune"> | string
    population?: IntNullableWithAggregatesFilter<"Commune"> | number | null
    creer_le?: DateTimeWithAggregatesFilter<"Commune"> | Date | string
    mod_lw?: DateTimeWithAggregatesFilter<"Commune"> | Date | string
  }

  export type SignalemmentWhereInput = {
    AND?: SignalemmentWhereInput | SignalemmentWhereInput[]
    OR?: SignalemmentWhereInput[]
    NOT?: SignalemmentWhereInput | SignalemmentWhereInput[]
    id?: StringFilter<"Signalemment"> | string
    description?: StringFilter<"Signalemment"> | string
    categorie?: StringFilter<"Signalemment"> | string
    image?: StringFilter<"Signalemment"> | string
    latitude?: StringFilter<"Signalemment"> | string
    longitude?: StringFilter<"Signalemment"> | string
    status?: EnumstatusFilter<"Signalemment"> | $Enums.status
    user?: StringFilter<"Signalemment"> | string
    commune?: StringFilter<"Signalemment"> | string
    creer_le?: DateTimeFilter<"Signalemment"> | Date | string
    mod_lw?: DateTimeFilter<"Signalemment"> | Date | string
    UderId?: XOR<UserScalarRelationFilter, UserWhereInput>
    categorieId?: XOR<CategorieScalarRelationFilter, CategorieWhereInput>
    communeid?: XOR<CommuneScalarRelationFilter, CommuneWhereInput>
    assignation?: AssignationListRelationFilter
  }

  export type SignalemmentOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    categorie?: SortOrder
    image?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    status?: SortOrder
    user?: SortOrder
    commune?: SortOrder
    creer_le?: SortOrder
    mod_lw?: SortOrder
    UderId?: UserOrderByWithRelationInput
    categorieId?: CategorieOrderByWithRelationInput
    communeid?: CommuneOrderByWithRelationInput
    assignation?: AssignationOrderByRelationAggregateInput
  }

  export type SignalemmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SignalemmentWhereInput | SignalemmentWhereInput[]
    OR?: SignalemmentWhereInput[]
    NOT?: SignalemmentWhereInput | SignalemmentWhereInput[]
    description?: StringFilter<"Signalemment"> | string
    categorie?: StringFilter<"Signalemment"> | string
    image?: StringFilter<"Signalemment"> | string
    latitude?: StringFilter<"Signalemment"> | string
    longitude?: StringFilter<"Signalemment"> | string
    status?: EnumstatusFilter<"Signalemment"> | $Enums.status
    user?: StringFilter<"Signalemment"> | string
    commune?: StringFilter<"Signalemment"> | string
    creer_le?: DateTimeFilter<"Signalemment"> | Date | string
    mod_lw?: DateTimeFilter<"Signalemment"> | Date | string
    UderId?: XOR<UserScalarRelationFilter, UserWhereInput>
    categorieId?: XOR<CategorieScalarRelationFilter, CategorieWhereInput>
    communeid?: XOR<CommuneScalarRelationFilter, CommuneWhereInput>
    assignation?: AssignationListRelationFilter
  }, "id">

  export type SignalemmentOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    categorie?: SortOrder
    image?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    status?: SortOrder
    user?: SortOrder
    commune?: SortOrder
    creer_le?: SortOrder
    mod_lw?: SortOrder
    _count?: SignalemmentCountOrderByAggregateInput
    _max?: SignalemmentMaxOrderByAggregateInput
    _min?: SignalemmentMinOrderByAggregateInput
  }

  export type SignalemmentScalarWhereWithAggregatesInput = {
    AND?: SignalemmentScalarWhereWithAggregatesInput | SignalemmentScalarWhereWithAggregatesInput[]
    OR?: SignalemmentScalarWhereWithAggregatesInput[]
    NOT?: SignalemmentScalarWhereWithAggregatesInput | SignalemmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Signalemment"> | string
    description?: StringWithAggregatesFilter<"Signalemment"> | string
    categorie?: StringWithAggregatesFilter<"Signalemment"> | string
    image?: StringWithAggregatesFilter<"Signalemment"> | string
    latitude?: StringWithAggregatesFilter<"Signalemment"> | string
    longitude?: StringWithAggregatesFilter<"Signalemment"> | string
    status?: EnumstatusWithAggregatesFilter<"Signalemment"> | $Enums.status
    user?: StringWithAggregatesFilter<"Signalemment"> | string
    commune?: StringWithAggregatesFilter<"Signalemment"> | string
    creer_le?: DateTimeWithAggregatesFilter<"Signalemment"> | Date | string
    mod_lw?: DateTimeWithAggregatesFilter<"Signalemment"> | Date | string
  }

  export type CategorieWhereInput = {
    AND?: CategorieWhereInput | CategorieWhereInput[]
    OR?: CategorieWhereInput[]
    NOT?: CategorieWhereInput | CategorieWhereInput[]
    id?: StringFilter<"Categorie"> | string
    nom?: StringFilter<"Categorie"> | string
    signalement?: SignalemmentListRelationFilter
  }

  export type CategorieOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    signalement?: SignalemmentOrderByRelationAggregateInput
  }

  export type CategorieWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CategorieWhereInput | CategorieWhereInput[]
    OR?: CategorieWhereInput[]
    NOT?: CategorieWhereInput | CategorieWhereInput[]
    nom?: StringFilter<"Categorie"> | string
    signalement?: SignalemmentListRelationFilter
  }, "id">

  export type CategorieOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    _count?: CategorieCountOrderByAggregateInput
    _max?: CategorieMaxOrderByAggregateInput
    _min?: CategorieMinOrderByAggregateInput
  }

  export type CategorieScalarWhereWithAggregatesInput = {
    AND?: CategorieScalarWhereWithAggregatesInput | CategorieScalarWhereWithAggregatesInput[]
    OR?: CategorieScalarWhereWithAggregatesInput[]
    NOT?: CategorieScalarWhereWithAggregatesInput | CategorieScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Categorie"> | string
    nom?: StringWithAggregatesFilter<"Categorie"> | string
  }

  export type AssignationWhereInput = {
    AND?: AssignationWhereInput | AssignationWhereInput[]
    OR?: AssignationWhereInput[]
    NOT?: AssignationWhereInput | AssignationWhereInput[]
    userId?: StringFilter<"Assignation"> | string
    signalementId?: StringFilter<"Assignation"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    signalement?: XOR<SignalemmentScalarRelationFilter, SignalemmentWhereInput>
  }

  export type AssignationOrderByWithRelationInput = {
    userId?: SortOrder
    signalementId?: SortOrder
    user?: UserOrderByWithRelationInput
    signalement?: SignalemmentOrderByWithRelationInput
  }

  export type AssignationWhereUniqueInput = Prisma.AtLeast<{
    userId_signalementId?: AssignationUserIdSignalementIdCompoundUniqueInput
    AND?: AssignationWhereInput | AssignationWhereInput[]
    OR?: AssignationWhereInput[]
    NOT?: AssignationWhereInput | AssignationWhereInput[]
    userId?: StringFilter<"Assignation"> | string
    signalementId?: StringFilter<"Assignation"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    signalement?: XOR<SignalemmentScalarRelationFilter, SignalemmentWhereInput>
  }, "userId_signalementId">

  export type AssignationOrderByWithAggregationInput = {
    userId?: SortOrder
    signalementId?: SortOrder
    _count?: AssignationCountOrderByAggregateInput
    _max?: AssignationMaxOrderByAggregateInput
    _min?: AssignationMinOrderByAggregateInput
  }

  export type AssignationScalarWhereWithAggregatesInput = {
    AND?: AssignationScalarWhereWithAggregatesInput | AssignationScalarWhereWithAggregatesInput[]
    OR?: AssignationScalarWhereWithAggregatesInput[]
    NOT?: AssignationScalarWhereWithAggregatesInput | AssignationScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"Assignation"> | string
    signalementId?: StringWithAggregatesFilter<"Assignation"> | string
  }

  export type UserCreateInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    tel: string
    password: string
    role?: $Enums.role
    profil_picture?: string | null
    otpTpken?: string | null
    cree_le?: Date | string
    mod_le?: Date | string
    commune: CommuneCreateNestedOneWithoutUserInput
    signalement?: SignalemmentCreateNestedManyWithoutUderIdInput
    assignation?: AssignationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    tel: string
    password: string
    role?: $Enums.role
    profil_picture?: string | null
    otpTpken?: string | null
    cree_le?: Date | string
    mod_le?: Date | string
    communeId: string
    signalement?: SignalemmentUncheckedCreateNestedManyWithoutUderIdInput
    assignation?: AssignationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    profil_picture?: NullableStringFieldUpdateOperationsInput | string | null
    otpTpken?: NullableStringFieldUpdateOperationsInput | string | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    mod_le?: DateTimeFieldUpdateOperationsInput | Date | string
    commune?: CommuneUpdateOneRequiredWithoutUserNestedInput
    signalement?: SignalemmentUpdateManyWithoutUderIdNestedInput
    assignation?: AssignationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    profil_picture?: NullableStringFieldUpdateOperationsInput | string | null
    otpTpken?: NullableStringFieldUpdateOperationsInput | string | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    mod_le?: DateTimeFieldUpdateOperationsInput | Date | string
    communeId?: StringFieldUpdateOperationsInput | string
    signalement?: SignalemmentUncheckedUpdateManyWithoutUderIdNestedInput
    assignation?: AssignationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    tel: string
    password: string
    role?: $Enums.role
    profil_picture?: string | null
    otpTpken?: string | null
    cree_le?: Date | string
    mod_le?: Date | string
    communeId: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    profil_picture?: NullableStringFieldUpdateOperationsInput | string | null
    otpTpken?: NullableStringFieldUpdateOperationsInput | string | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    mod_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    profil_picture?: NullableStringFieldUpdateOperationsInput | string | null
    otpTpken?: NullableStringFieldUpdateOperationsInput | string | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    mod_le?: DateTimeFieldUpdateOperationsInput | Date | string
    communeId?: StringFieldUpdateOperationsInput | string
  }

  export type CommuneCreateInput = {
    id?: string
    nom: string
    nom_ville: string
    population?: number | null
    creer_le?: Date | string
    mod_lw?: Date | string
    signalement?: SignalemmentCreateNestedManyWithoutCommuneidInput
    user?: UserCreateNestedManyWithoutCommuneInput
  }

  export type CommuneUncheckedCreateInput = {
    id?: string
    nom: string
    nom_ville: string
    population?: number | null
    creer_le?: Date | string
    mod_lw?: Date | string
    signalement?: SignalemmentUncheckedCreateNestedManyWithoutCommuneidInput
    user?: UserUncheckedCreateNestedManyWithoutCommuneInput
  }

  export type CommuneUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    nom_ville?: StringFieldUpdateOperationsInput | string
    population?: NullableIntFieldUpdateOperationsInput | number | null
    creer_le?: DateTimeFieldUpdateOperationsInput | Date | string
    mod_lw?: DateTimeFieldUpdateOperationsInput | Date | string
    signalement?: SignalemmentUpdateManyWithoutCommuneidNestedInput
    user?: UserUpdateManyWithoutCommuneNestedInput
  }

  export type CommuneUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    nom_ville?: StringFieldUpdateOperationsInput | string
    population?: NullableIntFieldUpdateOperationsInput | number | null
    creer_le?: DateTimeFieldUpdateOperationsInput | Date | string
    mod_lw?: DateTimeFieldUpdateOperationsInput | Date | string
    signalement?: SignalemmentUncheckedUpdateManyWithoutCommuneidNestedInput
    user?: UserUncheckedUpdateManyWithoutCommuneNestedInput
  }

  export type CommuneCreateManyInput = {
    id?: string
    nom: string
    nom_ville: string
    population?: number | null
    creer_le?: Date | string
    mod_lw?: Date | string
  }

  export type CommuneUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    nom_ville?: StringFieldUpdateOperationsInput | string
    population?: NullableIntFieldUpdateOperationsInput | number | null
    creer_le?: DateTimeFieldUpdateOperationsInput | Date | string
    mod_lw?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommuneUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    nom_ville?: StringFieldUpdateOperationsInput | string
    population?: NullableIntFieldUpdateOperationsInput | number | null
    creer_le?: DateTimeFieldUpdateOperationsInput | Date | string
    mod_lw?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SignalemmentCreateInput = {
    id?: string
    description: string
    image: string
    latitude: string
    longitude: string
    status?: $Enums.status
    creer_le?: Date | string
    mod_lw?: Date | string
    UderId: UserCreateNestedOneWithoutSignalementInput
    categorieId: CategorieCreateNestedOneWithoutSignalementInput
    communeid: CommuneCreateNestedOneWithoutSignalementInput
    assignation?: AssignationCreateNestedManyWithoutSignalementInput
  }

  export type SignalemmentUncheckedCreateInput = {
    id?: string
    description: string
    categorie: string
    image: string
    latitude: string
    longitude: string
    status?: $Enums.status
    user: string
    commune: string
    creer_le?: Date | string
    mod_lw?: Date | string
    assignation?: AssignationUncheckedCreateNestedManyWithoutSignalementInput
  }

  export type SignalemmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    creer_le?: DateTimeFieldUpdateOperationsInput | Date | string
    mod_lw?: DateTimeFieldUpdateOperationsInput | Date | string
    UderId?: UserUpdateOneRequiredWithoutSignalementNestedInput
    categorieId?: CategorieUpdateOneRequiredWithoutSignalementNestedInput
    communeid?: CommuneUpdateOneRequiredWithoutSignalementNestedInput
    assignation?: AssignationUpdateManyWithoutSignalementNestedInput
  }

  export type SignalemmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categorie?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    user?: StringFieldUpdateOperationsInput | string
    commune?: StringFieldUpdateOperationsInput | string
    creer_le?: DateTimeFieldUpdateOperationsInput | Date | string
    mod_lw?: DateTimeFieldUpdateOperationsInput | Date | string
    assignation?: AssignationUncheckedUpdateManyWithoutSignalementNestedInput
  }

  export type SignalemmentCreateManyInput = {
    id?: string
    description: string
    categorie: string
    image: string
    latitude: string
    longitude: string
    status?: $Enums.status
    user: string
    commune: string
    creer_le?: Date | string
    mod_lw?: Date | string
  }

  export type SignalemmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    creer_le?: DateTimeFieldUpdateOperationsInput | Date | string
    mod_lw?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SignalemmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categorie?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    user?: StringFieldUpdateOperationsInput | string
    commune?: StringFieldUpdateOperationsInput | string
    creer_le?: DateTimeFieldUpdateOperationsInput | Date | string
    mod_lw?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategorieCreateInput = {
    id?: string
    nom: string
    signalement?: SignalemmentCreateNestedManyWithoutCategorieIdInput
  }

  export type CategorieUncheckedCreateInput = {
    id?: string
    nom: string
    signalement?: SignalemmentUncheckedCreateNestedManyWithoutCategorieIdInput
  }

  export type CategorieUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    signalement?: SignalemmentUpdateManyWithoutCategorieIdNestedInput
  }

  export type CategorieUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    signalement?: SignalemmentUncheckedUpdateManyWithoutCategorieIdNestedInput
  }

  export type CategorieCreateManyInput = {
    id?: string
    nom: string
  }

  export type CategorieUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
  }

  export type CategorieUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
  }

  export type AssignationCreateInput = {
    user: UserCreateNestedOneWithoutAssignationInput
    signalement: SignalemmentCreateNestedOneWithoutAssignationInput
  }

  export type AssignationUncheckedCreateInput = {
    userId: string
    signalementId: string
  }

  export type AssignationUpdateInput = {
    user?: UserUpdateOneRequiredWithoutAssignationNestedInput
    signalement?: SignalemmentUpdateOneRequiredWithoutAssignationNestedInput
  }

  export type AssignationUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    signalementId?: StringFieldUpdateOperationsInput | string
  }

  export type AssignationCreateManyInput = {
    userId: string
    signalementId: string
  }

  export type AssignationUpdateManyMutationInput = {

  }

  export type AssignationUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    signalementId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumroleFilter<$PrismaModel = never> = {
    equals?: $Enums.role | EnumroleFieldRefInput<$PrismaModel>
    in?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    notIn?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    not?: NestedEnumroleFilter<$PrismaModel> | $Enums.role
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CommuneScalarRelationFilter = {
    is?: CommuneWhereInput
    isNot?: CommuneWhereInput
  }

  export type SignalemmentListRelationFilter = {
    every?: SignalemmentWhereInput
    some?: SignalemmentWhereInput
    none?: SignalemmentWhereInput
  }

  export type AssignationListRelationFilter = {
    every?: AssignationWhereInput
    some?: AssignationWhereInput
    none?: AssignationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SignalemmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssignationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    tel?: SortOrder
    password?: SortOrder
    role?: SortOrder
    profil_picture?: SortOrder
    otpTpken?: SortOrder
    cree_le?: SortOrder
    mod_le?: SortOrder
    communeId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    tel?: SortOrder
    password?: SortOrder
    role?: SortOrder
    profil_picture?: SortOrder
    otpTpken?: SortOrder
    cree_le?: SortOrder
    mod_le?: SortOrder
    communeId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    tel?: SortOrder
    password?: SortOrder
    role?: SortOrder
    profil_picture?: SortOrder
    otpTpken?: SortOrder
    cree_le?: SortOrder
    mod_le?: SortOrder
    communeId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumroleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.role | EnumroleFieldRefInput<$PrismaModel>
    in?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    notIn?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    not?: NestedEnumroleWithAggregatesFilter<$PrismaModel> | $Enums.role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumroleFilter<$PrismaModel>
    _max?: NestedEnumroleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommuneCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    nom_ville?: SortOrder
    population?: SortOrder
    creer_le?: SortOrder
    mod_lw?: SortOrder
  }

  export type CommuneAvgOrderByAggregateInput = {
    population?: SortOrder
  }

  export type CommuneMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    nom_ville?: SortOrder
    population?: SortOrder
    creer_le?: SortOrder
    mod_lw?: SortOrder
  }

  export type CommuneMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    nom_ville?: SortOrder
    population?: SortOrder
    creer_le?: SortOrder
    mod_lw?: SortOrder
  }

  export type CommuneSumOrderByAggregateInput = {
    population?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumstatusFilter<$PrismaModel = never> = {
    equals?: $Enums.status | EnumstatusFieldRefInput<$PrismaModel>
    in?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel>
    not?: NestedEnumstatusFilter<$PrismaModel> | $Enums.status
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CategorieScalarRelationFilter = {
    is?: CategorieWhereInput
    isNot?: CategorieWhereInput
  }

  export type SignalemmentCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    categorie?: SortOrder
    image?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    status?: SortOrder
    user?: SortOrder
    commune?: SortOrder
    creer_le?: SortOrder
    mod_lw?: SortOrder
  }

  export type SignalemmentMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    categorie?: SortOrder
    image?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    status?: SortOrder
    user?: SortOrder
    commune?: SortOrder
    creer_le?: SortOrder
    mod_lw?: SortOrder
  }

  export type SignalemmentMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    categorie?: SortOrder
    image?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    status?: SortOrder
    user?: SortOrder
    commune?: SortOrder
    creer_le?: SortOrder
    mod_lw?: SortOrder
  }

  export type EnumstatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.status | EnumstatusFieldRefInput<$PrismaModel>
    in?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel>
    not?: NestedEnumstatusWithAggregatesFilter<$PrismaModel> | $Enums.status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstatusFilter<$PrismaModel>
    _max?: NestedEnumstatusFilter<$PrismaModel>
  }

  export type CategorieCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
  }

  export type CategorieMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
  }

  export type CategorieMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
  }

  export type SignalemmentScalarRelationFilter = {
    is?: SignalemmentWhereInput
    isNot?: SignalemmentWhereInput
  }

  export type AssignationUserIdSignalementIdCompoundUniqueInput = {
    userId: string
    signalementId: string
  }

  export type AssignationCountOrderByAggregateInput = {
    userId?: SortOrder
    signalementId?: SortOrder
  }

  export type AssignationMaxOrderByAggregateInput = {
    userId?: SortOrder
    signalementId?: SortOrder
  }

  export type AssignationMinOrderByAggregateInput = {
    userId?: SortOrder
    signalementId?: SortOrder
  }

  export type CommuneCreateNestedOneWithoutUserInput = {
    create?: XOR<CommuneCreateWithoutUserInput, CommuneUncheckedCreateWithoutUserInput>
    connectOrCreate?: CommuneCreateOrConnectWithoutUserInput
    connect?: CommuneWhereUniqueInput
  }

  export type SignalemmentCreateNestedManyWithoutUderIdInput = {
    create?: XOR<SignalemmentCreateWithoutUderIdInput, SignalemmentUncheckedCreateWithoutUderIdInput> | SignalemmentCreateWithoutUderIdInput[] | SignalemmentUncheckedCreateWithoutUderIdInput[]
    connectOrCreate?: SignalemmentCreateOrConnectWithoutUderIdInput | SignalemmentCreateOrConnectWithoutUderIdInput[]
    createMany?: SignalemmentCreateManyUderIdInputEnvelope
    connect?: SignalemmentWhereUniqueInput | SignalemmentWhereUniqueInput[]
  }

  export type AssignationCreateNestedManyWithoutUserInput = {
    create?: XOR<AssignationCreateWithoutUserInput, AssignationUncheckedCreateWithoutUserInput> | AssignationCreateWithoutUserInput[] | AssignationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AssignationCreateOrConnectWithoutUserInput | AssignationCreateOrConnectWithoutUserInput[]
    createMany?: AssignationCreateManyUserInputEnvelope
    connect?: AssignationWhereUniqueInput | AssignationWhereUniqueInput[]
  }

  export type SignalemmentUncheckedCreateNestedManyWithoutUderIdInput = {
    create?: XOR<SignalemmentCreateWithoutUderIdInput, SignalemmentUncheckedCreateWithoutUderIdInput> | SignalemmentCreateWithoutUderIdInput[] | SignalemmentUncheckedCreateWithoutUderIdInput[]
    connectOrCreate?: SignalemmentCreateOrConnectWithoutUderIdInput | SignalemmentCreateOrConnectWithoutUderIdInput[]
    createMany?: SignalemmentCreateManyUderIdInputEnvelope
    connect?: SignalemmentWhereUniqueInput | SignalemmentWhereUniqueInput[]
  }

  export type AssignationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AssignationCreateWithoutUserInput, AssignationUncheckedCreateWithoutUserInput> | AssignationCreateWithoutUserInput[] | AssignationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AssignationCreateOrConnectWithoutUserInput | AssignationCreateOrConnectWithoutUserInput[]
    createMany?: AssignationCreateManyUserInputEnvelope
    connect?: AssignationWhereUniqueInput | AssignationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumroleFieldUpdateOperationsInput = {
    set?: $Enums.role
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CommuneUpdateOneRequiredWithoutUserNestedInput = {
    create?: XOR<CommuneCreateWithoutUserInput, CommuneUncheckedCreateWithoutUserInput>
    connectOrCreate?: CommuneCreateOrConnectWithoutUserInput
    upsert?: CommuneUpsertWithoutUserInput
    connect?: CommuneWhereUniqueInput
    update?: XOR<XOR<CommuneUpdateToOneWithWhereWithoutUserInput, CommuneUpdateWithoutUserInput>, CommuneUncheckedUpdateWithoutUserInput>
  }

  export type SignalemmentUpdateManyWithoutUderIdNestedInput = {
    create?: XOR<SignalemmentCreateWithoutUderIdInput, SignalemmentUncheckedCreateWithoutUderIdInput> | SignalemmentCreateWithoutUderIdInput[] | SignalemmentUncheckedCreateWithoutUderIdInput[]
    connectOrCreate?: SignalemmentCreateOrConnectWithoutUderIdInput | SignalemmentCreateOrConnectWithoutUderIdInput[]
    upsert?: SignalemmentUpsertWithWhereUniqueWithoutUderIdInput | SignalemmentUpsertWithWhereUniqueWithoutUderIdInput[]
    createMany?: SignalemmentCreateManyUderIdInputEnvelope
    set?: SignalemmentWhereUniqueInput | SignalemmentWhereUniqueInput[]
    disconnect?: SignalemmentWhereUniqueInput | SignalemmentWhereUniqueInput[]
    delete?: SignalemmentWhereUniqueInput | SignalemmentWhereUniqueInput[]
    connect?: SignalemmentWhereUniqueInput | SignalemmentWhereUniqueInput[]
    update?: SignalemmentUpdateWithWhereUniqueWithoutUderIdInput | SignalemmentUpdateWithWhereUniqueWithoutUderIdInput[]
    updateMany?: SignalemmentUpdateManyWithWhereWithoutUderIdInput | SignalemmentUpdateManyWithWhereWithoutUderIdInput[]
    deleteMany?: SignalemmentScalarWhereInput | SignalemmentScalarWhereInput[]
  }

  export type AssignationUpdateManyWithoutUserNestedInput = {
    create?: XOR<AssignationCreateWithoutUserInput, AssignationUncheckedCreateWithoutUserInput> | AssignationCreateWithoutUserInput[] | AssignationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AssignationCreateOrConnectWithoutUserInput | AssignationCreateOrConnectWithoutUserInput[]
    upsert?: AssignationUpsertWithWhereUniqueWithoutUserInput | AssignationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AssignationCreateManyUserInputEnvelope
    set?: AssignationWhereUniqueInput | AssignationWhereUniqueInput[]
    disconnect?: AssignationWhereUniqueInput | AssignationWhereUniqueInput[]
    delete?: AssignationWhereUniqueInput | AssignationWhereUniqueInput[]
    connect?: AssignationWhereUniqueInput | AssignationWhereUniqueInput[]
    update?: AssignationUpdateWithWhereUniqueWithoutUserInput | AssignationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AssignationUpdateManyWithWhereWithoutUserInput | AssignationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AssignationScalarWhereInput | AssignationScalarWhereInput[]
  }

  export type SignalemmentUncheckedUpdateManyWithoutUderIdNestedInput = {
    create?: XOR<SignalemmentCreateWithoutUderIdInput, SignalemmentUncheckedCreateWithoutUderIdInput> | SignalemmentCreateWithoutUderIdInput[] | SignalemmentUncheckedCreateWithoutUderIdInput[]
    connectOrCreate?: SignalemmentCreateOrConnectWithoutUderIdInput | SignalemmentCreateOrConnectWithoutUderIdInput[]
    upsert?: SignalemmentUpsertWithWhereUniqueWithoutUderIdInput | SignalemmentUpsertWithWhereUniqueWithoutUderIdInput[]
    createMany?: SignalemmentCreateManyUderIdInputEnvelope
    set?: SignalemmentWhereUniqueInput | SignalemmentWhereUniqueInput[]
    disconnect?: SignalemmentWhereUniqueInput | SignalemmentWhereUniqueInput[]
    delete?: SignalemmentWhereUniqueInput | SignalemmentWhereUniqueInput[]
    connect?: SignalemmentWhereUniqueInput | SignalemmentWhereUniqueInput[]
    update?: SignalemmentUpdateWithWhereUniqueWithoutUderIdInput | SignalemmentUpdateWithWhereUniqueWithoutUderIdInput[]
    updateMany?: SignalemmentUpdateManyWithWhereWithoutUderIdInput | SignalemmentUpdateManyWithWhereWithoutUderIdInput[]
    deleteMany?: SignalemmentScalarWhereInput | SignalemmentScalarWhereInput[]
  }

  export type AssignationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AssignationCreateWithoutUserInput, AssignationUncheckedCreateWithoutUserInput> | AssignationCreateWithoutUserInput[] | AssignationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AssignationCreateOrConnectWithoutUserInput | AssignationCreateOrConnectWithoutUserInput[]
    upsert?: AssignationUpsertWithWhereUniqueWithoutUserInput | AssignationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AssignationCreateManyUserInputEnvelope
    set?: AssignationWhereUniqueInput | AssignationWhereUniqueInput[]
    disconnect?: AssignationWhereUniqueInput | AssignationWhereUniqueInput[]
    delete?: AssignationWhereUniqueInput | AssignationWhereUniqueInput[]
    connect?: AssignationWhereUniqueInput | AssignationWhereUniqueInput[]
    update?: AssignationUpdateWithWhereUniqueWithoutUserInput | AssignationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AssignationUpdateManyWithWhereWithoutUserInput | AssignationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AssignationScalarWhereInput | AssignationScalarWhereInput[]
  }

  export type SignalemmentCreateNestedManyWithoutCommuneidInput = {
    create?: XOR<SignalemmentCreateWithoutCommuneidInput, SignalemmentUncheckedCreateWithoutCommuneidInput> | SignalemmentCreateWithoutCommuneidInput[] | SignalemmentUncheckedCreateWithoutCommuneidInput[]
    connectOrCreate?: SignalemmentCreateOrConnectWithoutCommuneidInput | SignalemmentCreateOrConnectWithoutCommuneidInput[]
    createMany?: SignalemmentCreateManyCommuneidInputEnvelope
    connect?: SignalemmentWhereUniqueInput | SignalemmentWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutCommuneInput = {
    create?: XOR<UserCreateWithoutCommuneInput, UserUncheckedCreateWithoutCommuneInput> | UserCreateWithoutCommuneInput[] | UserUncheckedCreateWithoutCommuneInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCommuneInput | UserCreateOrConnectWithoutCommuneInput[]
    createMany?: UserCreateManyCommuneInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type SignalemmentUncheckedCreateNestedManyWithoutCommuneidInput = {
    create?: XOR<SignalemmentCreateWithoutCommuneidInput, SignalemmentUncheckedCreateWithoutCommuneidInput> | SignalemmentCreateWithoutCommuneidInput[] | SignalemmentUncheckedCreateWithoutCommuneidInput[]
    connectOrCreate?: SignalemmentCreateOrConnectWithoutCommuneidInput | SignalemmentCreateOrConnectWithoutCommuneidInput[]
    createMany?: SignalemmentCreateManyCommuneidInputEnvelope
    connect?: SignalemmentWhereUniqueInput | SignalemmentWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutCommuneInput = {
    create?: XOR<UserCreateWithoutCommuneInput, UserUncheckedCreateWithoutCommuneInput> | UserCreateWithoutCommuneInput[] | UserUncheckedCreateWithoutCommuneInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCommuneInput | UserCreateOrConnectWithoutCommuneInput[]
    createMany?: UserCreateManyCommuneInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SignalemmentUpdateManyWithoutCommuneidNestedInput = {
    create?: XOR<SignalemmentCreateWithoutCommuneidInput, SignalemmentUncheckedCreateWithoutCommuneidInput> | SignalemmentCreateWithoutCommuneidInput[] | SignalemmentUncheckedCreateWithoutCommuneidInput[]
    connectOrCreate?: SignalemmentCreateOrConnectWithoutCommuneidInput | SignalemmentCreateOrConnectWithoutCommuneidInput[]
    upsert?: SignalemmentUpsertWithWhereUniqueWithoutCommuneidInput | SignalemmentUpsertWithWhereUniqueWithoutCommuneidInput[]
    createMany?: SignalemmentCreateManyCommuneidInputEnvelope
    set?: SignalemmentWhereUniqueInput | SignalemmentWhereUniqueInput[]
    disconnect?: SignalemmentWhereUniqueInput | SignalemmentWhereUniqueInput[]
    delete?: SignalemmentWhereUniqueInput | SignalemmentWhereUniqueInput[]
    connect?: SignalemmentWhereUniqueInput | SignalemmentWhereUniqueInput[]
    update?: SignalemmentUpdateWithWhereUniqueWithoutCommuneidInput | SignalemmentUpdateWithWhereUniqueWithoutCommuneidInput[]
    updateMany?: SignalemmentUpdateManyWithWhereWithoutCommuneidInput | SignalemmentUpdateManyWithWhereWithoutCommuneidInput[]
    deleteMany?: SignalemmentScalarWhereInput | SignalemmentScalarWhereInput[]
  }

  export type UserUpdateManyWithoutCommuneNestedInput = {
    create?: XOR<UserCreateWithoutCommuneInput, UserUncheckedCreateWithoutCommuneInput> | UserCreateWithoutCommuneInput[] | UserUncheckedCreateWithoutCommuneInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCommuneInput | UserCreateOrConnectWithoutCommuneInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCommuneInput | UserUpsertWithWhereUniqueWithoutCommuneInput[]
    createMany?: UserCreateManyCommuneInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCommuneInput | UserUpdateWithWhereUniqueWithoutCommuneInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCommuneInput | UserUpdateManyWithWhereWithoutCommuneInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type SignalemmentUncheckedUpdateManyWithoutCommuneidNestedInput = {
    create?: XOR<SignalemmentCreateWithoutCommuneidInput, SignalemmentUncheckedCreateWithoutCommuneidInput> | SignalemmentCreateWithoutCommuneidInput[] | SignalemmentUncheckedCreateWithoutCommuneidInput[]
    connectOrCreate?: SignalemmentCreateOrConnectWithoutCommuneidInput | SignalemmentCreateOrConnectWithoutCommuneidInput[]
    upsert?: SignalemmentUpsertWithWhereUniqueWithoutCommuneidInput | SignalemmentUpsertWithWhereUniqueWithoutCommuneidInput[]
    createMany?: SignalemmentCreateManyCommuneidInputEnvelope
    set?: SignalemmentWhereUniqueInput | SignalemmentWhereUniqueInput[]
    disconnect?: SignalemmentWhereUniqueInput | SignalemmentWhereUniqueInput[]
    delete?: SignalemmentWhereUniqueInput | SignalemmentWhereUniqueInput[]
    connect?: SignalemmentWhereUniqueInput | SignalemmentWhereUniqueInput[]
    update?: SignalemmentUpdateWithWhereUniqueWithoutCommuneidInput | SignalemmentUpdateWithWhereUniqueWithoutCommuneidInput[]
    updateMany?: SignalemmentUpdateManyWithWhereWithoutCommuneidInput | SignalemmentUpdateManyWithWhereWithoutCommuneidInput[]
    deleteMany?: SignalemmentScalarWhereInput | SignalemmentScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutCommuneNestedInput = {
    create?: XOR<UserCreateWithoutCommuneInput, UserUncheckedCreateWithoutCommuneInput> | UserCreateWithoutCommuneInput[] | UserUncheckedCreateWithoutCommuneInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCommuneInput | UserCreateOrConnectWithoutCommuneInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCommuneInput | UserUpsertWithWhereUniqueWithoutCommuneInput[]
    createMany?: UserCreateManyCommuneInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCommuneInput | UserUpdateWithWhereUniqueWithoutCommuneInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCommuneInput | UserUpdateManyWithWhereWithoutCommuneInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSignalementInput = {
    create?: XOR<UserCreateWithoutSignalementInput, UserUncheckedCreateWithoutSignalementInput>
    connectOrCreate?: UserCreateOrConnectWithoutSignalementInput
    connect?: UserWhereUniqueInput
  }

  export type CategorieCreateNestedOneWithoutSignalementInput = {
    create?: XOR<CategorieCreateWithoutSignalementInput, CategorieUncheckedCreateWithoutSignalementInput>
    connectOrCreate?: CategorieCreateOrConnectWithoutSignalementInput
    connect?: CategorieWhereUniqueInput
  }

  export type CommuneCreateNestedOneWithoutSignalementInput = {
    create?: XOR<CommuneCreateWithoutSignalementInput, CommuneUncheckedCreateWithoutSignalementInput>
    connectOrCreate?: CommuneCreateOrConnectWithoutSignalementInput
    connect?: CommuneWhereUniqueInput
  }

  export type AssignationCreateNestedManyWithoutSignalementInput = {
    create?: XOR<AssignationCreateWithoutSignalementInput, AssignationUncheckedCreateWithoutSignalementInput> | AssignationCreateWithoutSignalementInput[] | AssignationUncheckedCreateWithoutSignalementInput[]
    connectOrCreate?: AssignationCreateOrConnectWithoutSignalementInput | AssignationCreateOrConnectWithoutSignalementInput[]
    createMany?: AssignationCreateManySignalementInputEnvelope
    connect?: AssignationWhereUniqueInput | AssignationWhereUniqueInput[]
  }

  export type AssignationUncheckedCreateNestedManyWithoutSignalementInput = {
    create?: XOR<AssignationCreateWithoutSignalementInput, AssignationUncheckedCreateWithoutSignalementInput> | AssignationCreateWithoutSignalementInput[] | AssignationUncheckedCreateWithoutSignalementInput[]
    connectOrCreate?: AssignationCreateOrConnectWithoutSignalementInput | AssignationCreateOrConnectWithoutSignalementInput[]
    createMany?: AssignationCreateManySignalementInputEnvelope
    connect?: AssignationWhereUniqueInput | AssignationWhereUniqueInput[]
  }

  export type EnumstatusFieldUpdateOperationsInput = {
    set?: $Enums.status
  }

  export type UserUpdateOneRequiredWithoutSignalementNestedInput = {
    create?: XOR<UserCreateWithoutSignalementInput, UserUncheckedCreateWithoutSignalementInput>
    connectOrCreate?: UserCreateOrConnectWithoutSignalementInput
    upsert?: UserUpsertWithoutSignalementInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSignalementInput, UserUpdateWithoutSignalementInput>, UserUncheckedUpdateWithoutSignalementInput>
  }

  export type CategorieUpdateOneRequiredWithoutSignalementNestedInput = {
    create?: XOR<CategorieCreateWithoutSignalementInput, CategorieUncheckedCreateWithoutSignalementInput>
    connectOrCreate?: CategorieCreateOrConnectWithoutSignalementInput
    upsert?: CategorieUpsertWithoutSignalementInput
    connect?: CategorieWhereUniqueInput
    update?: XOR<XOR<CategorieUpdateToOneWithWhereWithoutSignalementInput, CategorieUpdateWithoutSignalementInput>, CategorieUncheckedUpdateWithoutSignalementInput>
  }

  export type CommuneUpdateOneRequiredWithoutSignalementNestedInput = {
    create?: XOR<CommuneCreateWithoutSignalementInput, CommuneUncheckedCreateWithoutSignalementInput>
    connectOrCreate?: CommuneCreateOrConnectWithoutSignalementInput
    upsert?: CommuneUpsertWithoutSignalementInput
    connect?: CommuneWhereUniqueInput
    update?: XOR<XOR<CommuneUpdateToOneWithWhereWithoutSignalementInput, CommuneUpdateWithoutSignalementInput>, CommuneUncheckedUpdateWithoutSignalementInput>
  }

  export type AssignationUpdateManyWithoutSignalementNestedInput = {
    create?: XOR<AssignationCreateWithoutSignalementInput, AssignationUncheckedCreateWithoutSignalementInput> | AssignationCreateWithoutSignalementInput[] | AssignationUncheckedCreateWithoutSignalementInput[]
    connectOrCreate?: AssignationCreateOrConnectWithoutSignalementInput | AssignationCreateOrConnectWithoutSignalementInput[]
    upsert?: AssignationUpsertWithWhereUniqueWithoutSignalementInput | AssignationUpsertWithWhereUniqueWithoutSignalementInput[]
    createMany?: AssignationCreateManySignalementInputEnvelope
    set?: AssignationWhereUniqueInput | AssignationWhereUniqueInput[]
    disconnect?: AssignationWhereUniqueInput | AssignationWhereUniqueInput[]
    delete?: AssignationWhereUniqueInput | AssignationWhereUniqueInput[]
    connect?: AssignationWhereUniqueInput | AssignationWhereUniqueInput[]
    update?: AssignationUpdateWithWhereUniqueWithoutSignalementInput | AssignationUpdateWithWhereUniqueWithoutSignalementInput[]
    updateMany?: AssignationUpdateManyWithWhereWithoutSignalementInput | AssignationUpdateManyWithWhereWithoutSignalementInput[]
    deleteMany?: AssignationScalarWhereInput | AssignationScalarWhereInput[]
  }

  export type AssignationUncheckedUpdateManyWithoutSignalementNestedInput = {
    create?: XOR<AssignationCreateWithoutSignalementInput, AssignationUncheckedCreateWithoutSignalementInput> | AssignationCreateWithoutSignalementInput[] | AssignationUncheckedCreateWithoutSignalementInput[]
    connectOrCreate?: AssignationCreateOrConnectWithoutSignalementInput | AssignationCreateOrConnectWithoutSignalementInput[]
    upsert?: AssignationUpsertWithWhereUniqueWithoutSignalementInput | AssignationUpsertWithWhereUniqueWithoutSignalementInput[]
    createMany?: AssignationCreateManySignalementInputEnvelope
    set?: AssignationWhereUniqueInput | AssignationWhereUniqueInput[]
    disconnect?: AssignationWhereUniqueInput | AssignationWhereUniqueInput[]
    delete?: AssignationWhereUniqueInput | AssignationWhereUniqueInput[]
    connect?: AssignationWhereUniqueInput | AssignationWhereUniqueInput[]
    update?: AssignationUpdateWithWhereUniqueWithoutSignalementInput | AssignationUpdateWithWhereUniqueWithoutSignalementInput[]
    updateMany?: AssignationUpdateManyWithWhereWithoutSignalementInput | AssignationUpdateManyWithWhereWithoutSignalementInput[]
    deleteMany?: AssignationScalarWhereInput | AssignationScalarWhereInput[]
  }

  export type SignalemmentCreateNestedManyWithoutCategorieIdInput = {
    create?: XOR<SignalemmentCreateWithoutCategorieIdInput, SignalemmentUncheckedCreateWithoutCategorieIdInput> | SignalemmentCreateWithoutCategorieIdInput[] | SignalemmentUncheckedCreateWithoutCategorieIdInput[]
    connectOrCreate?: SignalemmentCreateOrConnectWithoutCategorieIdInput | SignalemmentCreateOrConnectWithoutCategorieIdInput[]
    createMany?: SignalemmentCreateManyCategorieIdInputEnvelope
    connect?: SignalemmentWhereUniqueInput | SignalemmentWhereUniqueInput[]
  }

  export type SignalemmentUncheckedCreateNestedManyWithoutCategorieIdInput = {
    create?: XOR<SignalemmentCreateWithoutCategorieIdInput, SignalemmentUncheckedCreateWithoutCategorieIdInput> | SignalemmentCreateWithoutCategorieIdInput[] | SignalemmentUncheckedCreateWithoutCategorieIdInput[]
    connectOrCreate?: SignalemmentCreateOrConnectWithoutCategorieIdInput | SignalemmentCreateOrConnectWithoutCategorieIdInput[]
    createMany?: SignalemmentCreateManyCategorieIdInputEnvelope
    connect?: SignalemmentWhereUniqueInput | SignalemmentWhereUniqueInput[]
  }

  export type SignalemmentUpdateManyWithoutCategorieIdNestedInput = {
    create?: XOR<SignalemmentCreateWithoutCategorieIdInput, SignalemmentUncheckedCreateWithoutCategorieIdInput> | SignalemmentCreateWithoutCategorieIdInput[] | SignalemmentUncheckedCreateWithoutCategorieIdInput[]
    connectOrCreate?: SignalemmentCreateOrConnectWithoutCategorieIdInput | SignalemmentCreateOrConnectWithoutCategorieIdInput[]
    upsert?: SignalemmentUpsertWithWhereUniqueWithoutCategorieIdInput | SignalemmentUpsertWithWhereUniqueWithoutCategorieIdInput[]
    createMany?: SignalemmentCreateManyCategorieIdInputEnvelope
    set?: SignalemmentWhereUniqueInput | SignalemmentWhereUniqueInput[]
    disconnect?: SignalemmentWhereUniqueInput | SignalemmentWhereUniqueInput[]
    delete?: SignalemmentWhereUniqueInput | SignalemmentWhereUniqueInput[]
    connect?: SignalemmentWhereUniqueInput | SignalemmentWhereUniqueInput[]
    update?: SignalemmentUpdateWithWhereUniqueWithoutCategorieIdInput | SignalemmentUpdateWithWhereUniqueWithoutCategorieIdInput[]
    updateMany?: SignalemmentUpdateManyWithWhereWithoutCategorieIdInput | SignalemmentUpdateManyWithWhereWithoutCategorieIdInput[]
    deleteMany?: SignalemmentScalarWhereInput | SignalemmentScalarWhereInput[]
  }

  export type SignalemmentUncheckedUpdateManyWithoutCategorieIdNestedInput = {
    create?: XOR<SignalemmentCreateWithoutCategorieIdInput, SignalemmentUncheckedCreateWithoutCategorieIdInput> | SignalemmentCreateWithoutCategorieIdInput[] | SignalemmentUncheckedCreateWithoutCategorieIdInput[]
    connectOrCreate?: SignalemmentCreateOrConnectWithoutCategorieIdInput | SignalemmentCreateOrConnectWithoutCategorieIdInput[]
    upsert?: SignalemmentUpsertWithWhereUniqueWithoutCategorieIdInput | SignalemmentUpsertWithWhereUniqueWithoutCategorieIdInput[]
    createMany?: SignalemmentCreateManyCategorieIdInputEnvelope
    set?: SignalemmentWhereUniqueInput | SignalemmentWhereUniqueInput[]
    disconnect?: SignalemmentWhereUniqueInput | SignalemmentWhereUniqueInput[]
    delete?: SignalemmentWhereUniqueInput | SignalemmentWhereUniqueInput[]
    connect?: SignalemmentWhereUniqueInput | SignalemmentWhereUniqueInput[]
    update?: SignalemmentUpdateWithWhereUniqueWithoutCategorieIdInput | SignalemmentUpdateWithWhereUniqueWithoutCategorieIdInput[]
    updateMany?: SignalemmentUpdateManyWithWhereWithoutCategorieIdInput | SignalemmentUpdateManyWithWhereWithoutCategorieIdInput[]
    deleteMany?: SignalemmentScalarWhereInput | SignalemmentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAssignationInput = {
    create?: XOR<UserCreateWithoutAssignationInput, UserUncheckedCreateWithoutAssignationInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignationInput
    connect?: UserWhereUniqueInput
  }

  export type SignalemmentCreateNestedOneWithoutAssignationInput = {
    create?: XOR<SignalemmentCreateWithoutAssignationInput, SignalemmentUncheckedCreateWithoutAssignationInput>
    connectOrCreate?: SignalemmentCreateOrConnectWithoutAssignationInput
    connect?: SignalemmentWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAssignationNestedInput = {
    create?: XOR<UserCreateWithoutAssignationInput, UserUncheckedCreateWithoutAssignationInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignationInput
    upsert?: UserUpsertWithoutAssignationInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssignationInput, UserUpdateWithoutAssignationInput>, UserUncheckedUpdateWithoutAssignationInput>
  }

  export type SignalemmentUpdateOneRequiredWithoutAssignationNestedInput = {
    create?: XOR<SignalemmentCreateWithoutAssignationInput, SignalemmentUncheckedCreateWithoutAssignationInput>
    connectOrCreate?: SignalemmentCreateOrConnectWithoutAssignationInput
    upsert?: SignalemmentUpsertWithoutAssignationInput
    connect?: SignalemmentWhereUniqueInput
    update?: XOR<XOR<SignalemmentUpdateToOneWithWhereWithoutAssignationInput, SignalemmentUpdateWithoutAssignationInput>, SignalemmentUncheckedUpdateWithoutAssignationInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumroleFilter<$PrismaModel = never> = {
    equals?: $Enums.role | EnumroleFieldRefInput<$PrismaModel>
    in?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    notIn?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    not?: NestedEnumroleFilter<$PrismaModel> | $Enums.role
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumroleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.role | EnumroleFieldRefInput<$PrismaModel>
    in?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    notIn?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    not?: NestedEnumroleWithAggregatesFilter<$PrismaModel> | $Enums.role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumroleFilter<$PrismaModel>
    _max?: NestedEnumroleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumstatusFilter<$PrismaModel = never> = {
    equals?: $Enums.status | EnumstatusFieldRefInput<$PrismaModel>
    in?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel>
    not?: NestedEnumstatusFilter<$PrismaModel> | $Enums.status
  }

  export type NestedEnumstatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.status | EnumstatusFieldRefInput<$PrismaModel>
    in?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel>
    not?: NestedEnumstatusWithAggregatesFilter<$PrismaModel> | $Enums.status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstatusFilter<$PrismaModel>
    _max?: NestedEnumstatusFilter<$PrismaModel>
  }

  export type CommuneCreateWithoutUserInput = {
    id?: string
    nom: string
    nom_ville: string
    population?: number | null
    creer_le?: Date | string
    mod_lw?: Date | string
    signalement?: SignalemmentCreateNestedManyWithoutCommuneidInput
  }

  export type CommuneUncheckedCreateWithoutUserInput = {
    id?: string
    nom: string
    nom_ville: string
    population?: number | null
    creer_le?: Date | string
    mod_lw?: Date | string
    signalement?: SignalemmentUncheckedCreateNestedManyWithoutCommuneidInput
  }

  export type CommuneCreateOrConnectWithoutUserInput = {
    where: CommuneWhereUniqueInput
    create: XOR<CommuneCreateWithoutUserInput, CommuneUncheckedCreateWithoutUserInput>
  }

  export type SignalemmentCreateWithoutUderIdInput = {
    id?: string
    description: string
    image: string
    latitude: string
    longitude: string
    status?: $Enums.status
    creer_le?: Date | string
    mod_lw?: Date | string
    categorieId: CategorieCreateNestedOneWithoutSignalementInput
    communeid: CommuneCreateNestedOneWithoutSignalementInput
    assignation?: AssignationCreateNestedManyWithoutSignalementInput
  }

  export type SignalemmentUncheckedCreateWithoutUderIdInput = {
    id?: string
    description: string
    categorie: string
    image: string
    latitude: string
    longitude: string
    status?: $Enums.status
    commune: string
    creer_le?: Date | string
    mod_lw?: Date | string
    assignation?: AssignationUncheckedCreateNestedManyWithoutSignalementInput
  }

  export type SignalemmentCreateOrConnectWithoutUderIdInput = {
    where: SignalemmentWhereUniqueInput
    create: XOR<SignalemmentCreateWithoutUderIdInput, SignalemmentUncheckedCreateWithoutUderIdInput>
  }

  export type SignalemmentCreateManyUderIdInputEnvelope = {
    data: SignalemmentCreateManyUderIdInput | SignalemmentCreateManyUderIdInput[]
    skipDuplicates?: boolean
  }

  export type AssignationCreateWithoutUserInput = {
    signalement: SignalemmentCreateNestedOneWithoutAssignationInput
  }

  export type AssignationUncheckedCreateWithoutUserInput = {
    signalementId: string
  }

  export type AssignationCreateOrConnectWithoutUserInput = {
    where: AssignationWhereUniqueInput
    create: XOR<AssignationCreateWithoutUserInput, AssignationUncheckedCreateWithoutUserInput>
  }

  export type AssignationCreateManyUserInputEnvelope = {
    data: AssignationCreateManyUserInput | AssignationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommuneUpsertWithoutUserInput = {
    update: XOR<CommuneUpdateWithoutUserInput, CommuneUncheckedUpdateWithoutUserInput>
    create: XOR<CommuneCreateWithoutUserInput, CommuneUncheckedCreateWithoutUserInput>
    where?: CommuneWhereInput
  }

  export type CommuneUpdateToOneWithWhereWithoutUserInput = {
    where?: CommuneWhereInput
    data: XOR<CommuneUpdateWithoutUserInput, CommuneUncheckedUpdateWithoutUserInput>
  }

  export type CommuneUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    nom_ville?: StringFieldUpdateOperationsInput | string
    population?: NullableIntFieldUpdateOperationsInput | number | null
    creer_le?: DateTimeFieldUpdateOperationsInput | Date | string
    mod_lw?: DateTimeFieldUpdateOperationsInput | Date | string
    signalement?: SignalemmentUpdateManyWithoutCommuneidNestedInput
  }

  export type CommuneUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    nom_ville?: StringFieldUpdateOperationsInput | string
    population?: NullableIntFieldUpdateOperationsInput | number | null
    creer_le?: DateTimeFieldUpdateOperationsInput | Date | string
    mod_lw?: DateTimeFieldUpdateOperationsInput | Date | string
    signalement?: SignalemmentUncheckedUpdateManyWithoutCommuneidNestedInput
  }

  export type SignalemmentUpsertWithWhereUniqueWithoutUderIdInput = {
    where: SignalemmentWhereUniqueInput
    update: XOR<SignalemmentUpdateWithoutUderIdInput, SignalemmentUncheckedUpdateWithoutUderIdInput>
    create: XOR<SignalemmentCreateWithoutUderIdInput, SignalemmentUncheckedCreateWithoutUderIdInput>
  }

  export type SignalemmentUpdateWithWhereUniqueWithoutUderIdInput = {
    where: SignalemmentWhereUniqueInput
    data: XOR<SignalemmentUpdateWithoutUderIdInput, SignalemmentUncheckedUpdateWithoutUderIdInput>
  }

  export type SignalemmentUpdateManyWithWhereWithoutUderIdInput = {
    where: SignalemmentScalarWhereInput
    data: XOR<SignalemmentUpdateManyMutationInput, SignalemmentUncheckedUpdateManyWithoutUderIdInput>
  }

  export type SignalemmentScalarWhereInput = {
    AND?: SignalemmentScalarWhereInput | SignalemmentScalarWhereInput[]
    OR?: SignalemmentScalarWhereInput[]
    NOT?: SignalemmentScalarWhereInput | SignalemmentScalarWhereInput[]
    id?: StringFilter<"Signalemment"> | string
    description?: StringFilter<"Signalemment"> | string
    categorie?: StringFilter<"Signalemment"> | string
    image?: StringFilter<"Signalemment"> | string
    latitude?: StringFilter<"Signalemment"> | string
    longitude?: StringFilter<"Signalemment"> | string
    status?: EnumstatusFilter<"Signalemment"> | $Enums.status
    user?: StringFilter<"Signalemment"> | string
    commune?: StringFilter<"Signalemment"> | string
    creer_le?: DateTimeFilter<"Signalemment"> | Date | string
    mod_lw?: DateTimeFilter<"Signalemment"> | Date | string
  }

  export type AssignationUpsertWithWhereUniqueWithoutUserInput = {
    where: AssignationWhereUniqueInput
    update: XOR<AssignationUpdateWithoutUserInput, AssignationUncheckedUpdateWithoutUserInput>
    create: XOR<AssignationCreateWithoutUserInput, AssignationUncheckedCreateWithoutUserInput>
  }

  export type AssignationUpdateWithWhereUniqueWithoutUserInput = {
    where: AssignationWhereUniqueInput
    data: XOR<AssignationUpdateWithoutUserInput, AssignationUncheckedUpdateWithoutUserInput>
  }

  export type AssignationUpdateManyWithWhereWithoutUserInput = {
    where: AssignationScalarWhereInput
    data: XOR<AssignationUpdateManyMutationInput, AssignationUncheckedUpdateManyWithoutUserInput>
  }

  export type AssignationScalarWhereInput = {
    AND?: AssignationScalarWhereInput | AssignationScalarWhereInput[]
    OR?: AssignationScalarWhereInput[]
    NOT?: AssignationScalarWhereInput | AssignationScalarWhereInput[]
    userId?: StringFilter<"Assignation"> | string
    signalementId?: StringFilter<"Assignation"> | string
  }

  export type SignalemmentCreateWithoutCommuneidInput = {
    id?: string
    description: string
    image: string
    latitude: string
    longitude: string
    status?: $Enums.status
    creer_le?: Date | string
    mod_lw?: Date | string
    UderId: UserCreateNestedOneWithoutSignalementInput
    categorieId: CategorieCreateNestedOneWithoutSignalementInput
    assignation?: AssignationCreateNestedManyWithoutSignalementInput
  }

  export type SignalemmentUncheckedCreateWithoutCommuneidInput = {
    id?: string
    description: string
    categorie: string
    image: string
    latitude: string
    longitude: string
    status?: $Enums.status
    user: string
    creer_le?: Date | string
    mod_lw?: Date | string
    assignation?: AssignationUncheckedCreateNestedManyWithoutSignalementInput
  }

  export type SignalemmentCreateOrConnectWithoutCommuneidInput = {
    where: SignalemmentWhereUniqueInput
    create: XOR<SignalemmentCreateWithoutCommuneidInput, SignalemmentUncheckedCreateWithoutCommuneidInput>
  }

  export type SignalemmentCreateManyCommuneidInputEnvelope = {
    data: SignalemmentCreateManyCommuneidInput | SignalemmentCreateManyCommuneidInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutCommuneInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    tel: string
    password: string
    role?: $Enums.role
    profil_picture?: string | null
    otpTpken?: string | null
    cree_le?: Date | string
    mod_le?: Date | string
    signalement?: SignalemmentCreateNestedManyWithoutUderIdInput
    assignation?: AssignationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommuneInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    tel: string
    password: string
    role?: $Enums.role
    profil_picture?: string | null
    otpTpken?: string | null
    cree_le?: Date | string
    mod_le?: Date | string
    signalement?: SignalemmentUncheckedCreateNestedManyWithoutUderIdInput
    assignation?: AssignationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommuneInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommuneInput, UserUncheckedCreateWithoutCommuneInput>
  }

  export type UserCreateManyCommuneInputEnvelope = {
    data: UserCreateManyCommuneInput | UserCreateManyCommuneInput[]
    skipDuplicates?: boolean
  }

  export type SignalemmentUpsertWithWhereUniqueWithoutCommuneidInput = {
    where: SignalemmentWhereUniqueInput
    update: XOR<SignalemmentUpdateWithoutCommuneidInput, SignalemmentUncheckedUpdateWithoutCommuneidInput>
    create: XOR<SignalemmentCreateWithoutCommuneidInput, SignalemmentUncheckedCreateWithoutCommuneidInput>
  }

  export type SignalemmentUpdateWithWhereUniqueWithoutCommuneidInput = {
    where: SignalemmentWhereUniqueInput
    data: XOR<SignalemmentUpdateWithoutCommuneidInput, SignalemmentUncheckedUpdateWithoutCommuneidInput>
  }

  export type SignalemmentUpdateManyWithWhereWithoutCommuneidInput = {
    where: SignalemmentScalarWhereInput
    data: XOR<SignalemmentUpdateManyMutationInput, SignalemmentUncheckedUpdateManyWithoutCommuneidInput>
  }

  export type UserUpsertWithWhereUniqueWithoutCommuneInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCommuneInput, UserUncheckedUpdateWithoutCommuneInput>
    create: XOR<UserCreateWithoutCommuneInput, UserUncheckedCreateWithoutCommuneInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCommuneInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCommuneInput, UserUncheckedUpdateWithoutCommuneInput>
  }

  export type UserUpdateManyWithWhereWithoutCommuneInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutCommuneInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    first_name?: StringFilter<"User"> | string
    last_name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    tel?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumroleFilter<"User"> | $Enums.role
    profil_picture?: StringNullableFilter<"User"> | string | null
    otpTpken?: StringNullableFilter<"User"> | string | null
    cree_le?: DateTimeFilter<"User"> | Date | string
    mod_le?: DateTimeFilter<"User"> | Date | string
    communeId?: StringFilter<"User"> | string
  }

  export type UserCreateWithoutSignalementInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    tel: string
    password: string
    role?: $Enums.role
    profil_picture?: string | null
    otpTpken?: string | null
    cree_le?: Date | string
    mod_le?: Date | string
    commune: CommuneCreateNestedOneWithoutUserInput
    assignation?: AssignationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSignalementInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    tel: string
    password: string
    role?: $Enums.role
    profil_picture?: string | null
    otpTpken?: string | null
    cree_le?: Date | string
    mod_le?: Date | string
    communeId: string
    assignation?: AssignationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSignalementInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSignalementInput, UserUncheckedCreateWithoutSignalementInput>
  }

  export type CategorieCreateWithoutSignalementInput = {
    id?: string
    nom: string
  }

  export type CategorieUncheckedCreateWithoutSignalementInput = {
    id?: string
    nom: string
  }

  export type CategorieCreateOrConnectWithoutSignalementInput = {
    where: CategorieWhereUniqueInput
    create: XOR<CategorieCreateWithoutSignalementInput, CategorieUncheckedCreateWithoutSignalementInput>
  }

  export type CommuneCreateWithoutSignalementInput = {
    id?: string
    nom: string
    nom_ville: string
    population?: number | null
    creer_le?: Date | string
    mod_lw?: Date | string
    user?: UserCreateNestedManyWithoutCommuneInput
  }

  export type CommuneUncheckedCreateWithoutSignalementInput = {
    id?: string
    nom: string
    nom_ville: string
    population?: number | null
    creer_le?: Date | string
    mod_lw?: Date | string
    user?: UserUncheckedCreateNestedManyWithoutCommuneInput
  }

  export type CommuneCreateOrConnectWithoutSignalementInput = {
    where: CommuneWhereUniqueInput
    create: XOR<CommuneCreateWithoutSignalementInput, CommuneUncheckedCreateWithoutSignalementInput>
  }

  export type AssignationCreateWithoutSignalementInput = {
    user: UserCreateNestedOneWithoutAssignationInput
  }

  export type AssignationUncheckedCreateWithoutSignalementInput = {
    userId: string
  }

  export type AssignationCreateOrConnectWithoutSignalementInput = {
    where: AssignationWhereUniqueInput
    create: XOR<AssignationCreateWithoutSignalementInput, AssignationUncheckedCreateWithoutSignalementInput>
  }

  export type AssignationCreateManySignalementInputEnvelope = {
    data: AssignationCreateManySignalementInput | AssignationCreateManySignalementInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSignalementInput = {
    update: XOR<UserUpdateWithoutSignalementInput, UserUncheckedUpdateWithoutSignalementInput>
    create: XOR<UserCreateWithoutSignalementInput, UserUncheckedCreateWithoutSignalementInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSignalementInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSignalementInput, UserUncheckedUpdateWithoutSignalementInput>
  }

  export type UserUpdateWithoutSignalementInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    profil_picture?: NullableStringFieldUpdateOperationsInput | string | null
    otpTpken?: NullableStringFieldUpdateOperationsInput | string | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    mod_le?: DateTimeFieldUpdateOperationsInput | Date | string
    commune?: CommuneUpdateOneRequiredWithoutUserNestedInput
    assignation?: AssignationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSignalementInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    profil_picture?: NullableStringFieldUpdateOperationsInput | string | null
    otpTpken?: NullableStringFieldUpdateOperationsInput | string | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    mod_le?: DateTimeFieldUpdateOperationsInput | Date | string
    communeId?: StringFieldUpdateOperationsInput | string
    assignation?: AssignationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CategorieUpsertWithoutSignalementInput = {
    update: XOR<CategorieUpdateWithoutSignalementInput, CategorieUncheckedUpdateWithoutSignalementInput>
    create: XOR<CategorieCreateWithoutSignalementInput, CategorieUncheckedCreateWithoutSignalementInput>
    where?: CategorieWhereInput
  }

  export type CategorieUpdateToOneWithWhereWithoutSignalementInput = {
    where?: CategorieWhereInput
    data: XOR<CategorieUpdateWithoutSignalementInput, CategorieUncheckedUpdateWithoutSignalementInput>
  }

  export type CategorieUpdateWithoutSignalementInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
  }

  export type CategorieUncheckedUpdateWithoutSignalementInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
  }

  export type CommuneUpsertWithoutSignalementInput = {
    update: XOR<CommuneUpdateWithoutSignalementInput, CommuneUncheckedUpdateWithoutSignalementInput>
    create: XOR<CommuneCreateWithoutSignalementInput, CommuneUncheckedCreateWithoutSignalementInput>
    where?: CommuneWhereInput
  }

  export type CommuneUpdateToOneWithWhereWithoutSignalementInput = {
    where?: CommuneWhereInput
    data: XOR<CommuneUpdateWithoutSignalementInput, CommuneUncheckedUpdateWithoutSignalementInput>
  }

  export type CommuneUpdateWithoutSignalementInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    nom_ville?: StringFieldUpdateOperationsInput | string
    population?: NullableIntFieldUpdateOperationsInput | number | null
    creer_le?: DateTimeFieldUpdateOperationsInput | Date | string
    mod_lw?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateManyWithoutCommuneNestedInput
  }

  export type CommuneUncheckedUpdateWithoutSignalementInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    nom_ville?: StringFieldUpdateOperationsInput | string
    population?: NullableIntFieldUpdateOperationsInput | number | null
    creer_le?: DateTimeFieldUpdateOperationsInput | Date | string
    mod_lw?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateManyWithoutCommuneNestedInput
  }

  export type AssignationUpsertWithWhereUniqueWithoutSignalementInput = {
    where: AssignationWhereUniqueInput
    update: XOR<AssignationUpdateWithoutSignalementInput, AssignationUncheckedUpdateWithoutSignalementInput>
    create: XOR<AssignationCreateWithoutSignalementInput, AssignationUncheckedCreateWithoutSignalementInput>
  }

  export type AssignationUpdateWithWhereUniqueWithoutSignalementInput = {
    where: AssignationWhereUniqueInput
    data: XOR<AssignationUpdateWithoutSignalementInput, AssignationUncheckedUpdateWithoutSignalementInput>
  }

  export type AssignationUpdateManyWithWhereWithoutSignalementInput = {
    where: AssignationScalarWhereInput
    data: XOR<AssignationUpdateManyMutationInput, AssignationUncheckedUpdateManyWithoutSignalementInput>
  }

  export type SignalemmentCreateWithoutCategorieIdInput = {
    id?: string
    description: string
    image: string
    latitude: string
    longitude: string
    status?: $Enums.status
    creer_le?: Date | string
    mod_lw?: Date | string
    UderId: UserCreateNestedOneWithoutSignalementInput
    communeid: CommuneCreateNestedOneWithoutSignalementInput
    assignation?: AssignationCreateNestedManyWithoutSignalementInput
  }

  export type SignalemmentUncheckedCreateWithoutCategorieIdInput = {
    id?: string
    description: string
    image: string
    latitude: string
    longitude: string
    status?: $Enums.status
    user: string
    commune: string
    creer_le?: Date | string
    mod_lw?: Date | string
    assignation?: AssignationUncheckedCreateNestedManyWithoutSignalementInput
  }

  export type SignalemmentCreateOrConnectWithoutCategorieIdInput = {
    where: SignalemmentWhereUniqueInput
    create: XOR<SignalemmentCreateWithoutCategorieIdInput, SignalemmentUncheckedCreateWithoutCategorieIdInput>
  }

  export type SignalemmentCreateManyCategorieIdInputEnvelope = {
    data: SignalemmentCreateManyCategorieIdInput | SignalemmentCreateManyCategorieIdInput[]
    skipDuplicates?: boolean
  }

  export type SignalemmentUpsertWithWhereUniqueWithoutCategorieIdInput = {
    where: SignalemmentWhereUniqueInput
    update: XOR<SignalemmentUpdateWithoutCategorieIdInput, SignalemmentUncheckedUpdateWithoutCategorieIdInput>
    create: XOR<SignalemmentCreateWithoutCategorieIdInput, SignalemmentUncheckedCreateWithoutCategorieIdInput>
  }

  export type SignalemmentUpdateWithWhereUniqueWithoutCategorieIdInput = {
    where: SignalemmentWhereUniqueInput
    data: XOR<SignalemmentUpdateWithoutCategorieIdInput, SignalemmentUncheckedUpdateWithoutCategorieIdInput>
  }

  export type SignalemmentUpdateManyWithWhereWithoutCategorieIdInput = {
    where: SignalemmentScalarWhereInput
    data: XOR<SignalemmentUpdateManyMutationInput, SignalemmentUncheckedUpdateManyWithoutCategorieIdInput>
  }

  export type UserCreateWithoutAssignationInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    tel: string
    password: string
    role?: $Enums.role
    profil_picture?: string | null
    otpTpken?: string | null
    cree_le?: Date | string
    mod_le?: Date | string
    commune: CommuneCreateNestedOneWithoutUserInput
    signalement?: SignalemmentCreateNestedManyWithoutUderIdInput
  }

  export type UserUncheckedCreateWithoutAssignationInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    tel: string
    password: string
    role?: $Enums.role
    profil_picture?: string | null
    otpTpken?: string | null
    cree_le?: Date | string
    mod_le?: Date | string
    communeId: string
    signalement?: SignalemmentUncheckedCreateNestedManyWithoutUderIdInput
  }

  export type UserCreateOrConnectWithoutAssignationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignationInput, UserUncheckedCreateWithoutAssignationInput>
  }

  export type SignalemmentCreateWithoutAssignationInput = {
    id?: string
    description: string
    image: string
    latitude: string
    longitude: string
    status?: $Enums.status
    creer_le?: Date | string
    mod_lw?: Date | string
    UderId: UserCreateNestedOneWithoutSignalementInput
    categorieId: CategorieCreateNestedOneWithoutSignalementInput
    communeid: CommuneCreateNestedOneWithoutSignalementInput
  }

  export type SignalemmentUncheckedCreateWithoutAssignationInput = {
    id?: string
    description: string
    categorie: string
    image: string
    latitude: string
    longitude: string
    status?: $Enums.status
    user: string
    commune: string
    creer_le?: Date | string
    mod_lw?: Date | string
  }

  export type SignalemmentCreateOrConnectWithoutAssignationInput = {
    where: SignalemmentWhereUniqueInput
    create: XOR<SignalemmentCreateWithoutAssignationInput, SignalemmentUncheckedCreateWithoutAssignationInput>
  }

  export type UserUpsertWithoutAssignationInput = {
    update: XOR<UserUpdateWithoutAssignationInput, UserUncheckedUpdateWithoutAssignationInput>
    create: XOR<UserCreateWithoutAssignationInput, UserUncheckedCreateWithoutAssignationInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssignationInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssignationInput, UserUncheckedUpdateWithoutAssignationInput>
  }

  export type UserUpdateWithoutAssignationInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    profil_picture?: NullableStringFieldUpdateOperationsInput | string | null
    otpTpken?: NullableStringFieldUpdateOperationsInput | string | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    mod_le?: DateTimeFieldUpdateOperationsInput | Date | string
    commune?: CommuneUpdateOneRequiredWithoutUserNestedInput
    signalement?: SignalemmentUpdateManyWithoutUderIdNestedInput
  }

  export type UserUncheckedUpdateWithoutAssignationInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    profil_picture?: NullableStringFieldUpdateOperationsInput | string | null
    otpTpken?: NullableStringFieldUpdateOperationsInput | string | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    mod_le?: DateTimeFieldUpdateOperationsInput | Date | string
    communeId?: StringFieldUpdateOperationsInput | string
    signalement?: SignalemmentUncheckedUpdateManyWithoutUderIdNestedInput
  }

  export type SignalemmentUpsertWithoutAssignationInput = {
    update: XOR<SignalemmentUpdateWithoutAssignationInput, SignalemmentUncheckedUpdateWithoutAssignationInput>
    create: XOR<SignalemmentCreateWithoutAssignationInput, SignalemmentUncheckedCreateWithoutAssignationInput>
    where?: SignalemmentWhereInput
  }

  export type SignalemmentUpdateToOneWithWhereWithoutAssignationInput = {
    where?: SignalemmentWhereInput
    data: XOR<SignalemmentUpdateWithoutAssignationInput, SignalemmentUncheckedUpdateWithoutAssignationInput>
  }

  export type SignalemmentUpdateWithoutAssignationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    creer_le?: DateTimeFieldUpdateOperationsInput | Date | string
    mod_lw?: DateTimeFieldUpdateOperationsInput | Date | string
    UderId?: UserUpdateOneRequiredWithoutSignalementNestedInput
    categorieId?: CategorieUpdateOneRequiredWithoutSignalementNestedInput
    communeid?: CommuneUpdateOneRequiredWithoutSignalementNestedInput
  }

  export type SignalemmentUncheckedUpdateWithoutAssignationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categorie?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    user?: StringFieldUpdateOperationsInput | string
    commune?: StringFieldUpdateOperationsInput | string
    creer_le?: DateTimeFieldUpdateOperationsInput | Date | string
    mod_lw?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SignalemmentCreateManyUderIdInput = {
    id?: string
    description: string
    categorie: string
    image: string
    latitude: string
    longitude: string
    status?: $Enums.status
    commune: string
    creer_le?: Date | string
    mod_lw?: Date | string
  }

  export type AssignationCreateManyUserInput = {
    signalementId: string
  }

  export type SignalemmentUpdateWithoutUderIdInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    creer_le?: DateTimeFieldUpdateOperationsInput | Date | string
    mod_lw?: DateTimeFieldUpdateOperationsInput | Date | string
    categorieId?: CategorieUpdateOneRequiredWithoutSignalementNestedInput
    communeid?: CommuneUpdateOneRequiredWithoutSignalementNestedInput
    assignation?: AssignationUpdateManyWithoutSignalementNestedInput
  }

  export type SignalemmentUncheckedUpdateWithoutUderIdInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categorie?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    commune?: StringFieldUpdateOperationsInput | string
    creer_le?: DateTimeFieldUpdateOperationsInput | Date | string
    mod_lw?: DateTimeFieldUpdateOperationsInput | Date | string
    assignation?: AssignationUncheckedUpdateManyWithoutSignalementNestedInput
  }

  export type SignalemmentUncheckedUpdateManyWithoutUderIdInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categorie?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    commune?: StringFieldUpdateOperationsInput | string
    creer_le?: DateTimeFieldUpdateOperationsInput | Date | string
    mod_lw?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignationUpdateWithoutUserInput = {
    signalement?: SignalemmentUpdateOneRequiredWithoutAssignationNestedInput
  }

  export type AssignationUncheckedUpdateWithoutUserInput = {
    signalementId?: StringFieldUpdateOperationsInput | string
  }

  export type AssignationUncheckedUpdateManyWithoutUserInput = {
    signalementId?: StringFieldUpdateOperationsInput | string
  }

  export type SignalemmentCreateManyCommuneidInput = {
    id?: string
    description: string
    categorie: string
    image: string
    latitude: string
    longitude: string
    status?: $Enums.status
    user: string
    creer_le?: Date | string
    mod_lw?: Date | string
  }

  export type UserCreateManyCommuneInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    tel: string
    password: string
    role?: $Enums.role
    profil_picture?: string | null
    otpTpken?: string | null
    cree_le?: Date | string
    mod_le?: Date | string
  }

  export type SignalemmentUpdateWithoutCommuneidInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    creer_le?: DateTimeFieldUpdateOperationsInput | Date | string
    mod_lw?: DateTimeFieldUpdateOperationsInput | Date | string
    UderId?: UserUpdateOneRequiredWithoutSignalementNestedInput
    categorieId?: CategorieUpdateOneRequiredWithoutSignalementNestedInput
    assignation?: AssignationUpdateManyWithoutSignalementNestedInput
  }

  export type SignalemmentUncheckedUpdateWithoutCommuneidInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categorie?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    user?: StringFieldUpdateOperationsInput | string
    creer_le?: DateTimeFieldUpdateOperationsInput | Date | string
    mod_lw?: DateTimeFieldUpdateOperationsInput | Date | string
    assignation?: AssignationUncheckedUpdateManyWithoutSignalementNestedInput
  }

  export type SignalemmentUncheckedUpdateManyWithoutCommuneidInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categorie?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    user?: StringFieldUpdateOperationsInput | string
    creer_le?: DateTimeFieldUpdateOperationsInput | Date | string
    mod_lw?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutCommuneInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    profil_picture?: NullableStringFieldUpdateOperationsInput | string | null
    otpTpken?: NullableStringFieldUpdateOperationsInput | string | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    mod_le?: DateTimeFieldUpdateOperationsInput | Date | string
    signalement?: SignalemmentUpdateManyWithoutUderIdNestedInput
    assignation?: AssignationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommuneInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    profil_picture?: NullableStringFieldUpdateOperationsInput | string | null
    otpTpken?: NullableStringFieldUpdateOperationsInput | string | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    mod_le?: DateTimeFieldUpdateOperationsInput | Date | string
    signalement?: SignalemmentUncheckedUpdateManyWithoutUderIdNestedInput
    assignation?: AssignationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutCommuneInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    profil_picture?: NullableStringFieldUpdateOperationsInput | string | null
    otpTpken?: NullableStringFieldUpdateOperationsInput | string | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    mod_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignationCreateManySignalementInput = {
    userId: string
  }

  export type AssignationUpdateWithoutSignalementInput = {
    user?: UserUpdateOneRequiredWithoutAssignationNestedInput
  }

  export type AssignationUncheckedUpdateWithoutSignalementInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AssignationUncheckedUpdateManyWithoutSignalementInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SignalemmentCreateManyCategorieIdInput = {
    id?: string
    description: string
    image: string
    latitude: string
    longitude: string
    status?: $Enums.status
    user: string
    commune: string
    creer_le?: Date | string
    mod_lw?: Date | string
  }

  export type SignalemmentUpdateWithoutCategorieIdInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    creer_le?: DateTimeFieldUpdateOperationsInput | Date | string
    mod_lw?: DateTimeFieldUpdateOperationsInput | Date | string
    UderId?: UserUpdateOneRequiredWithoutSignalementNestedInput
    communeid?: CommuneUpdateOneRequiredWithoutSignalementNestedInput
    assignation?: AssignationUpdateManyWithoutSignalementNestedInput
  }

  export type SignalemmentUncheckedUpdateWithoutCategorieIdInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    user?: StringFieldUpdateOperationsInput | string
    commune?: StringFieldUpdateOperationsInput | string
    creer_le?: DateTimeFieldUpdateOperationsInput | Date | string
    mod_lw?: DateTimeFieldUpdateOperationsInput | Date | string
    assignation?: AssignationUncheckedUpdateManyWithoutSignalementNestedInput
  }

  export type SignalemmentUncheckedUpdateManyWithoutCategorieIdInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    user?: StringFieldUpdateOperationsInput | string
    commune?: StringFieldUpdateOperationsInput | string
    creer_le?: DateTimeFieldUpdateOperationsInput | Date | string
    mod_lw?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}