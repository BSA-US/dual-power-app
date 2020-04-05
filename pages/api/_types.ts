import { NowRequest, NowResponse } from '@now/node'
import { NextApiRequest, NextApiResponse } from 'next'

export type ZeitRequest = NowRequest | NextApiRequest
export type ZeitResponse = NowResponse | NextApiResponse
