#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

console.log('🚀 Starting Acadify Development Environment...\n');

// Start backend server
console.log('📦 Starting Backend Server...');
const backend = spawn('npm', ['start'], {
  cwd: __dirname,
  stdio: 'pipe'
});

backend.stdout.on('data', (data) => {
  console.log(`[Backend] ${data}`);
});

backend.stderr.on('data', (data) => {
  console.error(`[Backend Error] ${data}`);
});

// Wait a bit then start frontend
setTimeout(() => {
  console.log('⚛️  Starting React Client...');
  const frontend = spawn('npm', ['start'], {
    cwd: path.join(__dirname, 'acadify-client'),
    stdio: 'pipe',
    shell: true
  });

  frontend.stdout.on('data', (data) => {
    console.log(`[Frontend] ${data}`);
  });

  frontend.stderr.on('data', (data) => {
    console.error(`[Frontend Error] ${data}`);
  });

  // Handle process termination
  process.on('SIGINT', () => {
    console.log('\n🛑 Shutting down servers...');
    backend.kill();
    frontend.kill();
    process.exit();
  });

}, 3000);

console.log('\n✅ Development servers are starting up!');
console.log('📱 Frontend will be available at: http://localhost:3000');
console.log('🔧 Backend will be available at: http://localhost:5000');
console.log('\n💡 Press Ctrl+C to stop all servers\n');