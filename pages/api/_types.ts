import type { VercelRequest, VercelResponse } from '@vercel/node'
import type { NextApiRequest, NextApiResponse } from 'next'

// Exporting unions of the Now & Next _types
// makes the API more framework-agnostic

export type VcRequest = VercelRequest | NextApiRequest
export type VcResponse = VercelResponse | NextApiResponse
