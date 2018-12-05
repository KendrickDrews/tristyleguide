:: This file ; Opens cmd, Changes Directory to current, runs the Dev environment, and then opens the environment in Chrome. 
@echo off
start cmd.exe /k "npm run serve -- --open"