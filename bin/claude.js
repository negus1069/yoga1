#!/usr/bin/env node
/**
 * Claude Terminal CLI
 * Usage:
 *   claude -p "Your prompt here"
 *   echo "Your prompt" | claude
 *   claude -f ./path/to/file.txt -p "Summarize this file"
 *
 * Options:
 *   -p <text>           Prompt text (if omitted, reads from stdin)
 *   -f <file>           Path to a file to include in the prompt
 *   -m <model>          Model (default: claude-3-5-sonnet-latest)
 *   --max_tokens <n>     Max tokens for response (default: 1024)
 *   --temperature <num>  Temperature for generation (default: 0)
 *   -s <system>         System prompt to guide Claude
 *   --help               Show this help
 *
 * Environment variables (optional):
 *   ANTHROPIC_API_KEY         Required: your Anthropic API key
 *   CLAUDE_MODEL              Default model override
 *   CLAUDE_MAX_TOKENS         Default max tokens
 *   CLAUDE_TEMPERATURE        Default temperature
 *   CLAUDE_SYSTEM             Default system prompt
 */

import fs from 'fs';
import path from 'path';
import process from 'process';
import Anthropic from 'anthropic';

function printUsage() {
  console.error(`Claude Terminal CLI

Usage:
  claude -p "Your prompt here"
  echo "Your prompt" | claude
  claude -f ./path/to/file.txt -p "Summarize this file"

Options:
  -p <text>           Prompt text (if omitted, reads from stdin)
  -f <file>           Path to a file to include in the prompt
  -m <model>          Model (default: claude-3-5-sonnet-latest)
  --max_tokens <n>     Max tokens for response (default: 1024)
  --temperature <num>  Temperature for generation (default: 0)
  -s <system>         System prompt to guide Claude
  --help               Show this help

Environment variables:
  ANTHROPIC_API_KEY         Required: your Anthropic API key
  CLAUDE_MODEL              Default model override
  CLAUDE_MAX_TOKENS         Default max tokens
  CLAUDE_TEMPERATURE        Default temperature
  CLAUDE_SYSTEM             Default system prompt
`);
}

const args = process.argv.slice(2);

if (args.includes('--help')) {
  printUsage();
  process.exit(0);
}

const apiKey = process.env.ANTHROPIC_API_KEY;
if (!apiKey) {
  console.error('ERROR: ANTHROPIC_API_KEY is not set.');
  console.error('Set it with: export ANTHROPIC_API_KEY="sk-ant-..."');
  process.exit(1);
}

function getArg(flag, defaultVal) {
  const i = args.indexOf(flag);
  if (i >= 0) {
    const val = args[i + 1];
    if (!val || val.startsWith('-')) return defaultVal;
    return val;
  }
  return defaultVal;
}

const model = getArg('-m', process.env.CLAUDE_MODEL || 'claude-3-5-sonnet-latest');
const maxTokens = parseInt(getArg('--max_tokens', process.env.CLAUDE_MAX_TOKENS || '1024'), 10);
const temperature = parseFloat(getArg('--temperature', process.env.CLAUDE_TEMPERATURE || '0'));
const systemPrompt = getArg('-s', process.env.CLAUDE_SYSTEM || '');
const promptArg = getArg('-p', '');
const fileArg = getArg('-f', '');

async function readStdin() {
  if (process.stdin.isTTY) return '';
  return await new Promise((resolve, reject) => {
    let data = '';
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', (chunk) => (data += chunk));
    process.stdin.on('end', () => resolve(data));
    process.stdin.on('error', reject);
  });
}

function readFileSafe(p) {
  try {
    const abs = path.resolve(process.cwd(), p);
    return fs.readFileSync(abs, 'utf8');
  } catch (e) {
    console.error(`ERROR: Failed to read file "${p}": ${e.message}`);
    process.exit(1);
  }
}

const fileContent = fileArg ? readFileSafe(fileArg) : '';

const makeUserContent = (promptText, fileText) => {
  if (fileText && promptText) {
    return `${promptText}\n\nFile (${fileArg}):\n---\n${fileText}\n---`;
  } else if (fileText && !promptText) {
    return `Please process the following file (${fileArg}):\n---\n${fileText}\n---`;
  }
  return promptText;
};

(async () => {
  try {
    const stdinText = await readStdin();
    const userPrompt = (promptArg || stdinText || '').trim();

    if (!userPrompt && !fileContent) {
      printUsage();
      process.exit(1);
    }

    const content = makeUserContent(userPrompt, fileContent);

    const anthropic = new Anthropic({ apiKey });

    const stream = await anthropic.messages.create({
      model,
      max_tokens: Number.isFinite(maxTokens) ? maxTokens : 1024,
      temperature: Number.isFinite(temperature) ? temperature : 0,
      system: systemPrompt || undefined,
      messages: [
        { role: 'user', content }
      ],
      stream: true
    });

    // Stream response to stdout
    for await (const event of stream) {
      switch (event.type) {
        case 'content_block_delta':
          if (event.delta && typeof event.delta.text === 'string') {
            process.stdout.write(event.delta.text);
          }
          break;
        case 'message_stop':
          process.stdout.write('\n');
          break;
        case 'error':
          console.error(`\nERROR: ${event.error?.message || 'Unknown error'}`);
          process.exit(1);
          break;
        default:
          // ignore other event types
          break;
      }
    }
  } catch (err) {
    console.error(`ERROR: ${err?.message || err}`);
    process.exit(1);
  }
})();