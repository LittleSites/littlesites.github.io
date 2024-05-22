"use client"

import { parseCookies } from "nookies";

// AUTH CONSTANTS
export const API_URL = 'http://127.0.0.1:8000/api';
export const USER_TOKEN = parseCookies()['user_token'];

