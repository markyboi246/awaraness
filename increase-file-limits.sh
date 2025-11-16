#!/bin/bash

# Script to increase file descriptor limits on macOS for Metro bundler

echo "Current file descriptor limit:"
ulimit -n

echo ""
echo "Increasing limit to 10240..."
ulimit -n 10240

echo ""
echo "New limit:"
ulimit -n

echo ""
echo "✅ File limit increased for this terminal session"
echo ""
echo "To make this permanent, add this to your ~/.zshrc or ~/.bash_profile:"
echo "ulimit -n 10240"
