import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  /** The `Long` scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  Time: any;
};

export type ContentNode = {
  __typename?: 'ContentNode';
  children: Array<ContentNode>;
  tag: Scalars['String'];
  text?: Maybe<Scalars['String']>;
};

/** 'ContentNode' input values */
export type ContentNodeInput = {
  children: Array<ContentNodeInput>;
  tag: Scalars['String'];
  text?: InputMaybe<Scalars['String']>;
};

export type Draft = {
  __typename?: 'Draft';
  /** The document's ID. */
  _id: Scalars['ID'];
  /** The document's timestamp. */
  _ts: Scalars['Long'];
  content: ContentNode;
  poll?: Maybe<Poll>;
  proposal: Proposal;
};

/** 'Draft' input values */
export type DraftInput = {
  content: ContentNodeInput;
  poll?: InputMaybe<DraftPollRelation>;
  proposal?: InputMaybe<DraftProposalRelation>;
};

/** The pagination object for elements of type 'Draft'. */
export type DraftPage = {
  __typename?: 'DraftPage';
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars['String']>;
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars['String']>;
  /** The elements of type 'Draft' in this page. */
  data: Array<Maybe<Draft>>;
};

/** Allow manipulating the relationship between the types 'Draft' and 'Poll' using the field 'Draft.poll'. */
export type DraftPollRelation = {
  /** Connect a document of type 'Poll' with the current document using its ID. */
  connect?: InputMaybe<Scalars['ID']>;
  /** Create a document of type 'Poll' and associate it with the current document. */
  create?: InputMaybe<PollInput>;
};

/** Allow manipulating the relationship between the types 'Draft' and 'Proposal' using the field 'Draft.proposal'. */
export type DraftProposalRelation = {
  /** Connect a document of type 'Proposal' with the current document using its ID. */
  connect?: InputMaybe<Scalars['ID']>;
  /** Create a document of type 'Proposal' and associate it with the current document. */
  create?: InputMaybe<ProposalInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create a new document in the collection of 'Draft' */
  createDraft: Draft;
  /** Create a new document in the collection of 'Poll' */
  createPoll: Poll;
  /** Create a new document in the collection of 'PollOption' */
  createPollOption: PollOption;
  /** Create a new document in the collection of 'Proposal' */
  createProposal: Proposal;
  /** Create a new document in the collection of 'Vote' */
  createVote: Vote;
  /** Create a new document in the collection of 'What' */
  createWhat: What;
  /** Delete an existing document in the collection of 'Draft' */
  deleteDraft?: Maybe<Draft>;
  /** Delete an existing document in the collection of 'Poll' */
  deletePoll?: Maybe<Poll>;
  /** Delete an existing document in the collection of 'PollOption' */
  deletePollOption?: Maybe<PollOption>;
  /** Delete an existing document in the collection of 'Proposal' */
  deleteProposal?: Maybe<Proposal>;
  /** Delete an existing document in the collection of 'Vote' */
  deleteVote?: Maybe<Vote>;
  /** Delete an existing document in the collection of 'What' */
  deleteWhat?: Maybe<What>;
  /** Partially updates an existing document in the collection of 'Draft'. It only modifies the values that are specified in the arguments. During execution, it verifies that required fields are not set to 'null'. */
  partialUpdateDraft?: Maybe<Draft>;
  /** Partially updates an existing document in the collection of 'Poll'. It only modifies the values that are specified in the arguments. During execution, it verifies that required fields are not set to 'null'. */
  partialUpdatePoll?: Maybe<Poll>;
  /** Partially updates an existing document in the collection of 'PollOption'. It only modifies the values that are specified in the arguments. During execution, it verifies that required fields are not set to 'null'. */
  partialUpdatePollOption?: Maybe<PollOption>;
  /** Partially updates an existing document in the collection of 'Proposal'. It only modifies the values that are specified in the arguments. During execution, it verifies that required fields are not set to 'null'. */
  partialUpdateProposal?: Maybe<Proposal>;
  /** Partially updates an existing document in the collection of 'Vote'. It only modifies the values that are specified in the arguments. During execution, it verifies that required fields are not set to 'null'. */
  partialUpdateVote?: Maybe<Vote>;
  /** Partially updates an existing document in the collection of 'What'. It only modifies the values that are specified in the arguments. During execution, it verifies that required fields are not set to 'null'. */
  partialUpdateWhat?: Maybe<What>;
  /** Update an existing document in the collection of 'Draft' */
  updateDraft?: Maybe<Draft>;
  /** Update an existing document in the collection of 'Poll' */
  updatePoll?: Maybe<Poll>;
  /** Update an existing document in the collection of 'PollOption' */
  updatePollOption?: Maybe<PollOption>;
  /** Update an existing document in the collection of 'Proposal' */
  updateProposal?: Maybe<Proposal>;
  /** Update an existing document in the collection of 'Vote' */
  updateVote?: Maybe<Vote>;
  /** Update an existing document in the collection of 'What' */
  updateWhat?: Maybe<What>;
};


export type MutationCreateDraftArgs = {
  data: DraftInput;
};


export type MutationCreatePollArgs = {
  data: PollInput;
};


export type MutationCreatePollOptionArgs = {
  data: PollOptionInput;
};


export type MutationCreateProposalArgs = {
  data: ProposalInput;
};


export type MutationCreateVoteArgs = {
  data: VoteInput;
};


export type MutationCreateWhatArgs = {
  data: WhatInput;
};


export type MutationDeleteDraftArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePollArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePollOptionArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteProposalArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteVoteArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteWhatArgs = {
  id: Scalars['ID'];
};


export type MutationPartialUpdateDraftArgs = {
  data: PartialUpdateDraftInput;
  id: Scalars['ID'];
};


export type MutationPartialUpdatePollArgs = {
  data: PartialUpdatePollInput;
  id: Scalars['ID'];
};


export type MutationPartialUpdatePollOptionArgs = {
  data: PartialUpdatePollOptionInput;
  id: Scalars['ID'];
};


export type MutationPartialUpdateProposalArgs = {
  data: PartialUpdateProposalInput;
  id: Scalars['ID'];
};


export type MutationPartialUpdateVoteArgs = {
  data: PartialUpdateVoteInput;
  id: Scalars['ID'];
};


export type MutationPartialUpdateWhatArgs = {
  data: PartialUpdateWhatInput;
  id: Scalars['ID'];
};


export type MutationUpdateDraftArgs = {
  data: DraftInput;
  id: Scalars['ID'];
};


export type MutationUpdatePollArgs = {
  data: PollInput;
  id: Scalars['ID'];
};


export type MutationUpdatePollOptionArgs = {
  data: PollOptionInput;
  id: Scalars['ID'];
};


export type MutationUpdateProposalArgs = {
  data: ProposalInput;
  id: Scalars['ID'];
};


export type MutationUpdateVoteArgs = {
  data: VoteInput;
  id: Scalars['ID'];
};


export type MutationUpdateWhatArgs = {
  data: WhatInput;
  id: Scalars['ID'];
};

/** 'ContentNode' input values */
export type PartialUpdateContentNodeInput = {
  children?: InputMaybe<Array<PartialUpdateContentNodeInput>>;
  tag?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
};

/** 'Draft' input values */
export type PartialUpdateDraftInput = {
  content?: InputMaybe<PartialUpdateContentNodeInput>;
  poll?: InputMaybe<DraftPollRelation>;
  proposal?: InputMaybe<DraftProposalRelation>;
};

/** 'Poll' input values */
export type PartialUpdatePollInput = {
  draft?: InputMaybe<PollDraftRelation>;
  openAt?: InputMaybe<Scalars['Time']>;
  openDurationSeconds?: InputMaybe<Scalars['Int']>;
  pollOptions?: InputMaybe<PollPollOptionsRelation>;
  votes?: InputMaybe<PollVotesRelation>;
};

/** 'PollOption' input values */
export type PartialUpdatePollOptionInput = {
  name?: InputMaybe<Scalars['String']>;
  poll?: InputMaybe<PollOptionPollRelation>;
  votes?: InputMaybe<PollOptionVotesRelation>;
};

/** 'Proposal' input values */
export type PartialUpdateProposalInput = {
  canonicalDraft?: InputMaybe<ProposalCanonicalDraftRelation>;
  drafts?: InputMaybe<ProposalDraftsRelation>;
};

/** 'Vote' input values */
export type PartialUpdateVoteInput = {
  poll?: InputMaybe<VotePollRelation>;
  pollOptions?: InputMaybe<VotePollOptionsRelation>;
};

/** 'What' input values */
export type PartialUpdateWhatInput = {
  bar?: InputMaybe<Scalars['String']>;
};

export type Poll = {
  __typename?: 'Poll';
  /** The document's ID. */
  _id: Scalars['ID'];
  /** The document's timestamp. */
  _ts: Scalars['Long'];
  draft: Draft;
  openAt?: Maybe<Scalars['Time']>;
  openDurationSeconds?: Maybe<Scalars['Int']>;
  pollOptions: PollOptionPage;
  votes: VotePage;
};


export type PollPollOptionsArgs = {
  _cursor?: InputMaybe<Scalars['String']>;
  _size?: InputMaybe<Scalars['Int']>;
};


export type PollVotesArgs = {
  _cursor?: InputMaybe<Scalars['String']>;
  _size?: InputMaybe<Scalars['Int']>;
};

/** Allow manipulating the relationship between the types 'Poll' and 'Draft' using the field 'Poll.draft'. */
export type PollDraftRelation = {
  /** Connect a document of type 'Draft' with the current document using its ID. */
  connect?: InputMaybe<Scalars['ID']>;
  /** Create a document of type 'Draft' and associate it with the current document. */
  create?: InputMaybe<DraftInput>;
  /** If true, disconnects this document from 'Draft' */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** 'Poll' input values */
export type PollInput = {
  draft?: InputMaybe<PollDraftRelation>;
  openAt?: InputMaybe<Scalars['Time']>;
  openDurationSeconds?: InputMaybe<Scalars['Int']>;
  pollOptions?: InputMaybe<PollPollOptionsRelation>;
  votes?: InputMaybe<PollVotesRelation>;
};

export type PollOption = {
  __typename?: 'PollOption';
  /** The document's ID. */
  _id: Scalars['ID'];
  /** The document's timestamp. */
  _ts: Scalars['Long'];
  name?: Maybe<Scalars['String']>;
  poll: Poll;
  votes: VotePage;
};


export type PollOptionVotesArgs = {
  _cursor?: InputMaybe<Scalars['String']>;
  _size?: InputMaybe<Scalars['Int']>;
};

/** 'PollOption' input values */
export type PollOptionInput = {
  name?: InputMaybe<Scalars['String']>;
  poll?: InputMaybe<PollOptionPollRelation>;
  votes?: InputMaybe<PollOptionVotesRelation>;
};

/** The pagination object for elements of type 'PollOption'. */
export type PollOptionPage = {
  __typename?: 'PollOptionPage';
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars['String']>;
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars['String']>;
  /** The elements of type 'PollOption' in this page. */
  data: Array<Maybe<PollOption>>;
};

/** Allow manipulating the relationship between the types 'PollOption' and 'Poll' using the field 'PollOption.poll'. */
export type PollOptionPollRelation = {
  /** Connect a document of type 'Poll' with the current document using its ID. */
  connect?: InputMaybe<Scalars['ID']>;
  /** Create a document of type 'Poll' and associate it with the current document. */
  create?: InputMaybe<PollInput>;
};

/** Allow manipulating the relationship between the types 'PollOption' and 'Vote'. */
export type PollOptionVotesRelation = {
  /** Connect one or more documents of type 'Vote' with the current document using their IDs. */
  connect?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Create one or more documents of type 'Vote' and associate them with the current document. */
  create?: InputMaybe<Array<InputMaybe<VoteInput>>>;
  /** Disconnect the given documents of type 'Vote' from the current document using their IDs. */
  disconnect?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

/** Allow manipulating the relationship between the types 'Poll' and 'PollOption'. */
export type PollPollOptionsRelation = {
  /** Connect one or more documents of type 'PollOption' with the current document using their IDs. */
  connect?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Create one or more documents of type 'PollOption' and associate them with the current document. */
  create?: InputMaybe<Array<InputMaybe<PollOptionInput>>>;
  /** Disconnect the given documents of type 'PollOption' from the current document using their IDs. */
  disconnect?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

/** Allow manipulating the relationship between the types 'Poll' and 'Vote'. */
export type PollVotesRelation = {
  /** Connect one or more documents of type 'Vote' with the current document using their IDs. */
  connect?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Create one or more documents of type 'Vote' and associate them with the current document. */
  create?: InputMaybe<Array<InputMaybe<VoteInput>>>;
  /** Disconnect the given documents of type 'Vote' from the current document using their IDs. */
  disconnect?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type Proposal = {
  __typename?: 'Proposal';
  /** The document's ID. */
  _id: Scalars['ID'];
  /** The document's timestamp. */
  _ts: Scalars['Long'];
  canonicalDraft?: Maybe<Draft>;
  drafts: DraftPage;
};


export type ProposalDraftsArgs = {
  _cursor?: InputMaybe<Scalars['String']>;
  _size?: InputMaybe<Scalars['Int']>;
};

/** Allow manipulating the relationship between the types 'Proposal' and 'Draft' using the field 'Proposal.canonicalDraft'. */
export type ProposalCanonicalDraftRelation = {
  /** Connect a document of type 'Draft' with the current document using its ID. */
  connect?: InputMaybe<Scalars['ID']>;
  /** Create a document of type 'Draft' and associate it with the current document. */
  create?: InputMaybe<DraftInput>;
};

/** Allow manipulating the relationship between the types 'Proposal' and 'Draft'. */
export type ProposalDraftsRelation = {
  /** Connect one or more documents of type 'Draft' with the current document using their IDs. */
  connect?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Create one or more documents of type 'Draft' and associate them with the current document. */
  create?: InputMaybe<Array<InputMaybe<DraftInput>>>;
  /** Disconnect the given documents of type 'Draft' from the current document using their IDs. */
  disconnect?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

/** 'Proposal' input values */
export type ProposalInput = {
  canonicalDraft?: InputMaybe<ProposalCanonicalDraftRelation>;
  drafts?: InputMaybe<ProposalDraftsRelation>;
};

export type Query = {
  __typename?: 'Query';
  /** Find a document from the collection of 'Draft' by its id. */
  findDraftByID?: Maybe<Draft>;
  /** Find a document from the collection of 'Poll' by its id. */
  findPollByID?: Maybe<Poll>;
  /** Find a document from the collection of 'PollOption' by its id. */
  findPollOptionByID?: Maybe<PollOption>;
  /** Find a document from the collection of 'Proposal' by its id. */
  findProposalByID?: Maybe<Proposal>;
  /** Find a document from the collection of 'Vote' by its id. */
  findVoteByID?: Maybe<Vote>;
  /** Find a document from the collection of 'What' by its id. */
  findWhatByID?: Maybe<What>;
};


export type QueryFindDraftByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindPollByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindPollOptionByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindProposalByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindVoteByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindWhatByIdArgs = {
  id: Scalars['ID'];
};

export type Vote = {
  __typename?: 'Vote';
  /** The document's ID. */
  _id: Scalars['ID'];
  /** The document's timestamp. */
  _ts: Scalars['Long'];
  poll: Poll;
  pollOptions: PollOptionPage;
};


export type VotePollOptionsArgs = {
  _cursor?: InputMaybe<Scalars['String']>;
  _size?: InputMaybe<Scalars['Int']>;
};

/** 'Vote' input values */
export type VoteInput = {
  poll?: InputMaybe<VotePollRelation>;
  pollOptions?: InputMaybe<VotePollOptionsRelation>;
};

/** The pagination object for elements of type 'Vote'. */
export type VotePage = {
  __typename?: 'VotePage';
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars['String']>;
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars['String']>;
  /** The elements of type 'Vote' in this page. */
  data: Array<Maybe<Vote>>;
};

/** Allow manipulating the relationship between the types 'Vote' and 'PollOption'. */
export type VotePollOptionsRelation = {
  /** Connect one or more documents of type 'PollOption' with the current document using their IDs. */
  connect?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Create one or more documents of type 'PollOption' and associate them with the current document. */
  create?: InputMaybe<Array<InputMaybe<PollOptionInput>>>;
  /** Disconnect the given documents of type 'PollOption' from the current document using their IDs. */
  disconnect?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

/** Allow manipulating the relationship between the types 'Vote' and 'Poll' using the field 'Vote.poll'. */
export type VotePollRelation = {
  /** Connect a document of type 'Poll' with the current document using its ID. */
  connect?: InputMaybe<Scalars['ID']>;
  /** Create a document of type 'Poll' and associate it with the current document. */
  create?: InputMaybe<PollInput>;
};

export type What = {
  __typename?: 'What';
  /** The document's ID. */
  _id: Scalars['ID'];
  /** The document's timestamp. */
  _ts: Scalars['Long'];
  bar?: Maybe<Scalars['String']>;
};

/** 'What' input values */
export type WhatInput = {
  bar?: InputMaybe<Scalars['String']>;
};

export type CreateWhatMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateWhatMutation = { __typename?: 'Mutation', createWhat: { __typename?: 'What', _id: string } };


export const CreateWhatDocument = gql`
    mutation CreateWhat {
  createWhat(data: {bar: "no thanks!"}) {
    _id
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    CreateWhat(variables?: CreateWhatMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateWhatMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateWhatMutation>(CreateWhatDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreateWhat', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;