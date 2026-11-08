import { spawn, execSync } from 'child_process';

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

const server = spawn('npm.cmd', ['run', 'preview', '--', '--port', '4173'], {
  stdio: 'ignore',
  shell: true,
});

await new Promise((r) => setTimeout(r, 3000));

try {
  // Run node script to evaluate scrollWidth or use curl
  console.log('Testing overflow...');
} finally {
  if (server.pid) {
    try { execSync(`taskkill /F /T /PID ${server.pid}`, { stdio: 'ignore' }); } catch {}
  }
}

