import mongoose from 'mongoose';

/**
 * Lean version of Player2SeasonDocument
 *
 * This has all Mongoose getters & functions removed. This type will be returned from `Player2Document.toObject()`.
 * ```
 * const player2Object = player2.toObject();
 * ```
 */
declare type Player2Season = {
    year: number;
    _id: mongoose.Types.ObjectId;
};
/**
 * Lean version of Player2Document
 *
 * This has all Mongoose getters & functions removed. This type will be returned from `Player2Document.toObject()`. To avoid conflicts with model names, use the type alias `Player2Object`.
 * ```
 * const player2Object = player2.toObject();
 * ```
 */
declare type Player2 = {
    slug: string;
    name: {
        full: string;
        display?: string;
        pronunciation?: string;
        nicknames: string[];
        parsed: string[];
    };
    birthDate?: Date;
    birthPlace: {
        city?: string;
        state?: string;
        country?: string;
    };
    highSchool?: string;
    college?: string;
    socials: {
        twitter?: string;
        instagram?: string;
    };
    height: {
        feet?: number;
        inches?: number;
    };
    weight?: number;
    lastAffiliation?: string;
    position?: string;
    shoots?: string;
    draftYear?: string;
    draftRound?: string;
    draftNumber?: string;
    seasons: Player2Season[];
    _id: mongoose.Types.ObjectId;
};
/**
 * Lean version of Player2Document (type alias of `Player2`)
 *
 * Use this type alias to avoid conflicts with model names:
 * ```
 * import { Player2 } from "../models"
 * import { Player2Object } from "../interfaces/mongoose.gen.ts"
 *
 * const player2Object: Player2Object = player2.toObject();
 * ```
 */
declare type Player2Object = Player2;
/**
 * Mongoose Query type
 *
 * This type is returned from query functions. For most use cases, you should not need to use this type explicitly.
 */
declare type Player2Query = mongoose.Query<any, Player2Document, Player2Queries> & Player2Queries;
/**
 * Mongoose Query helper types
 *
 * This type represents `Player2Schema.query`. For most use cases, you should not need to use this type explicitly.
 */
declare type Player2Queries = {};
declare type Player2Methods = {};
declare type Player2Statics = {};
/**
 * Mongoose Model type
 *
 * Pass this type to the Mongoose Model constructor:
 * ```
 * const Player2 = mongoose.model<Player2Document, Player2Model>("Player2", Player2Schema);
 * ```
 */
declare type Player2Model = mongoose.Model<Player2Document, Player2Queries> & Player2Statics;
/**
 * Mongoose Schema type
 *
 * Assign this type to new Player2 schema instances:
 * ```
 * const Player2Schema: Player2Schema = new mongoose.Schema({ ... })
 * ```
 */
declare type Player2Schema = mongoose.Schema<Player2Document, Player2Model, Player2Methods, Player2Queries>;
/**
 * Mongoose Subdocument type
 *
 * Type of `Player2Document["seasons"]` element.
 */
declare type Player2SeasonDocument = mongoose.Types.Subdocument & {
    year: number;
    _id: mongoose.Types.ObjectId;
};
/**
 * Mongoose Document type
 *
 * Pass this type to the Mongoose Model constructor:
 * ```
 * const Player2 = mongoose.model<Player2Document, Player2Model>("Player2", Player2Schema);
 * ```
 */
declare type Player2Document = mongoose.Document<mongoose.Types.ObjectId, Player2Queries> & Player2Methods & {
    slug: string;
    name: {
        full: string;
        display?: string;
        pronunciation?: string;
        nicknames: mongoose.Types.Array<string>;
        parsed: mongoose.Types.Array<string>;
    };
    birthDate?: Date;
    birthPlace: {
        city?: string;
        state?: string;
        country?: string;
    };
    highSchool?: string;
    college?: string;
    socials: {
        twitter?: string;
        instagram?: string;
    };
    height: {
        feet?: number;
        inches?: number;
    };
    weight?: number;
    lastAffiliation?: string;
    position?: string;
    shoots?: string;
    draftYear?: string;
    draftRound?: string;
    draftNumber?: string;
    seasons: mongoose.Types.DocumentArray<Player2SeasonDocument>;
    _id: mongoose.Types.ObjectId;
};
/**
 * Check if a property on a document is populated:
 * ```
 * import { IsPopulated } from "../interfaces/mongoose.gen.ts"
 *
 * if (IsPopulated<UserDocument["bestFriend"]>) { ... }
 * ```
 */
declare function IsPopulated<T>(doc: T | mongoose.Types.ObjectId): doc is T;
/**
 * Helper type used by `PopulatedDocument`. Returns the parent property of a string
 * representing a nested property (i.e. `friend.user` -> `friend`)
 */
declare type ParentProperty<T> = T extends `${infer P}.${string}` ? P : never;
/**
 * Helper type used by `PopulatedDocument`. Returns the child property of a string
 * representing a nested property (i.e. `friend.user` -> `user`).
 */
declare type ChildProperty<T> = T extends `${string}.${infer C}` ? C : never;
/**
 * Helper type used by `PopulatedDocument`. Removes the `ObjectId` from the general union type generated
 * for ref documents (i.e. `mongoose.Types.ObjectId | UserDocument` -> `UserDocument`)
 */
declare type PopulatedProperty<Root, T extends keyof Root> = Omit<Root, T> & {
    [ref in T]: Root[T] extends mongoose.Types.Array<infer U> ? mongoose.Types.Array<Exclude<U, mongoose.Types.ObjectId>> : Exclude<Root[T], mongoose.Types.ObjectId>;
};
/**
 * Populate properties on a document type:
 * ```
 * import { PopulatedDocument } from "../interfaces/mongoose.gen.ts"
 *
 * function example(user: PopulatedDocument<UserDocument, "bestFriend">) {
 *   console.log(user.bestFriend._id) // typescript knows this is populated
 * }
 * ```
 */
declare type PopulatedDocument<DocType, T> = T extends keyof DocType ? PopulatedProperty<DocType, T> : ParentProperty<T> extends keyof DocType ? Omit<DocType, ParentProperty<T>> & {
    [ref in ParentProperty<T>]: DocType[ParentProperty<T>] extends mongoose.Types.Array<infer U> ? mongoose.Types.Array<ChildProperty<T> extends keyof U ? PopulatedProperty<U, ChildProperty<T>> : PopulatedDocument<U, ChildProperty<T>>> : ChildProperty<T> extends keyof DocType[ParentProperty<T>] ? PopulatedProperty<DocType[ParentProperty<T>], ChildProperty<T>> : PopulatedDocument<DocType[ParentProperty<T>], ChildProperty<T>>;
} : DocType;
/**
 * Helper types used by the populate overloads
 */
declare type Unarray<T> = T extends Array<infer U> ? U : T;
declare type Modify<T, R> = Omit<T, keyof R> & R;
/**
 * Augment mongoose with Query.populate overloads
 */
declare module "mongoose" {
    interface Query<ResultType, DocType, THelpers = {}> {
        populate<T extends string>(path: T, select?: string | any, model?: string | Model<any, THelpers>, match?: any): Query<ResultType extends Array<DocType> ? Array<PopulatedDocument<Unarray<ResultType>, T>> : ResultType extends DocType ? PopulatedDocument<Unarray<ResultType>, T> : ResultType, DocType, THelpers> & THelpers;
        populate<T extends string>(options: Modify<PopulateOptions, {
            path: T;
        }> | Array<PopulateOptions>): Query<ResultType extends Array<DocType> ? Array<PopulatedDocument<Unarray<ResultType>, T>> : ResultType extends DocType ? PopulatedDocument<Unarray<ResultType>, T> : ResultType, DocType, THelpers> & THelpers;
    }
}

export { IsPopulated, Player2, Player2Document, Player2Methods, Player2Model, Player2Object, Player2Queries, Player2Query, Player2Schema, Player2Season, Player2SeasonDocument, Player2Statics, PopulatedDocument };
