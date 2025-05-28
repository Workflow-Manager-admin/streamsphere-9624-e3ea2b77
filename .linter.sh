#!/bin/bash
cd /home/kavia/workspace/code-generation/streamsphere-9624-e3ea2b77/streamsphere_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

