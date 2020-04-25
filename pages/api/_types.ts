import { NowRequest, NowResponse } from '@now/node'
import { NextApiRequest, NextApiResponse } from 'next'

// Exporting unions of the Now & Next _types
// makes the API more framework-agnostic

export type ZeitRequest = NowRequest | NextApiRequest
export type ZeitResponse = NowResponse | NextApiResponse
