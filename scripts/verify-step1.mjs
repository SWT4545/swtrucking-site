#!/usr/bin/env node
/**
 * Step 1 Verification Script for Telnyx Campaign Readiness
 *
 * Checks that all required pages exist and contain required compliance text.
 * Run: node scripts/verify-step1.mjs
 */

const BASE_URL = 'https://smithwilliamstrucking.com';

// Required content checks
const REQUIRED_CHECKS = {
  '/': {
    name: 'Homepage',
    requiredText: [
      'smith', // company name partial
    ],
  },
  '/privacy': {
    name: 'Privacy Policy',
    requiredText: [
      'smith',
      'williams',
      'privacy',
    ],
  },
  '/terms': {
    name: 'Terms of Service',
    requiredText: [
      'smith',
      'williams',
      'terms',
    ],
  },
  '/sms-policy': {
    name: 'SMS Policy',
    requiredText: [
      'smith',
      'williams',
      'reply stop',
      'reply help',
      'message frequency',
      '7600',
      'phoenix',
      '85020',
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
  console.log('Step 1 Verification: Telnyx Campaign Readiness');
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

    if (!result.ok) {
      allPassed = false;
      if (result.error) {
        console.log(`       Error: ${result.error}`);
      }
      if (result.missingText.length > 0) {
        console.log(`       Missing text: ${result.missingText.join(', ')}`);
      }
    }
  }

  console.log('');
  console.log('='.repeat(60));

  if (allPassed) {
    console.log('RESULT: Step 1 verified OK');
    console.log('='.repeat(60));
    process.exit(0);
  } else {
    console.log('RESULT: Step 1 FAILED - fixes required');
    console.log('='.repeat(60));
    process.exit(1);
  }
}

main().catch(err => {
  console.error('Verification script error:', err);
  process.exit(1);
});
