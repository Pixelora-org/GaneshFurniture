import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs'
import { resolve } from 'node:path'
import { spawnSync } from 'node:child_process'

const root = process.cwd()
const appDir = resolve(root, 'korada-furniture')
const appNextDir = resolve(appDir, '.next')
const rootNextDir = resolve(root, '.next')

const build = spawnSync('npm', ['--prefix', './korada-furniture', 'run', 'build'], {
  stdio: 'inherit',
  shell: true,
})

if (build.status !== 0) {
  process.exit(build.status ?? 1)
}

if (!existsSync(appNextDir)) {
  console.error('Expected build output not found at korada-furniture/.next')
  process.exit(1)
}

if (existsSync(rootNextDir)) {
  rmSync(rootNextDir, { recursive: true, force: true })
}
mkdirSync(rootNextDir, { recursive: true })
cpSync(appNextDir, rootNextDir, { recursive: true })

console.log('Copied korada-furniture/.next to root .next for Vercel compatibility.')
