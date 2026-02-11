#!/usr/bin/env node
/**
 * Step 1 Verification Script for Telnyx A2P Campaign Readiness
 *
 * Checks that all required pages exist and contain required compliance text.
 * Run: node scripts/verify-step1.mjs
 */

const BASE_URL = 'https://smithwilliamstrucking.com';

// Required content checks - using Telnyx expected URLs
const REQUIRED_CHECKS = {
  '/': {
    name: 'Homepage',
    requiredText: [
      'smith',
    ],
  },
  '/privacy-policy': {
    name: 'Privacy Policy',
    requiredText: [
      'smith',
      'williams',
      'privacy',
      'mobile information will not be sold',
    ],
  },
  '/terms-and-conditions': {
    name: 'Terms & Conditions',
    requiredText: [
      'smith',
      'williams',
      'terms',
      'stop',
      'help',
    ],
  },
  '/sms-policy': {
    name: 'SMS Policy',
    requiredText: [
      'smith',
      'williams',
      'stop',
      'help',
      'message frequency varies',
      'mobile information will not be sold',
      '951-437-5474',
      'dispatch@smithwilliamstrucking.com',
    ],
  },
};

// Results tracking
const results = [];

async function checkUrl(path, config) {
  const url = `${BASE_URL}${path}`;
  const result = {
    path,
    name: config.name,
    url,
    status: null,
    ok: false,
    missingText: [],
    error: null,
  };

  try {
    console.log(`Checking ${config.name}: ${url}`);

    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Step1Verifier/1.0)',
      },
    });

    result.status = response.status;

    if (!response.ok) {
      result.error = `HTTP ${response.status}`;
      return result;
    }

    const html = await response.text();
    const lowerHtml = html.toLowerCase();

    // Check for required text
    for (const text of config.requiredText) {
      if (!lowerHtml.includes(text.toLowerCase())) {
        result.missingText.push(text);
      }
    }

    result.ok = result.missingText.length === 0;

  } catch (err) {
    result.error = err.message;
  }

  return result;
}

async function main() {
  console.log('='.repeat(60));
  console.log('Telnyx A2P Verification: Legal Pages');
  console.log(`Domain: ${BASE_URL}`);
  console.log('='.repeat(60));
  console.log('');

  for (const [path, config] of Object.entries(REQUIRED_CHECKS)) {
    const result = await checkUrl(path, config);
    results.push(result);
  }

  // Print summary
  console.log('');
  console.log('='.repeat(60));
  console.log('VERIFICATION SUMMARY');
  console.log('='.repeat(60));

  let allPassed = true;

  for (const result of results) {
    const status = result.ok ? '✓ PASS' : '✗ FAIL';
    console.log(`${status}  ${result.name} (${result.path})`);
    console.log(`       HTTP: ${result.status || 'N/A'}`);

    if (!result.ok) {
      allPassed = false;
      if (result.error) {
        console.log(`       Error: ${result.error}`);
      }
      if (result.missingText.length > 0) {
        console.log(`       Missing: ${result.missingText.join(', ')}`);
      }
    }
  }

  console.log('');
  console.log('='.repeat(60));

  if (allPassed) {
    console.log('RESULT: All Telnyx A2P requirements verified OK');
    console.log('='.repeat(60));
    process.exit(0);
  } else {
    console.log('RESULT: FAILED - fixes required');
    console.log('='.repeat(60));
    process.exit(1);
  }
}

main().catch(err => {
  console.error('Verification script error:', err);
  process.exit(1);
});
