import winston from 'winston'
import makeLogger from './logger'

export const logger = makeLogger({ winston })
export { default as config } from './config'
