module.exports = {
  apps: [
    {
      name: 'mahvion-landing',
      cwd: '/var/www/mahvion.com',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 3000',
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      max_memory_restart: '500M',
      error_file: '/var/log/pm2/mahvion-error.log',
      out_file: '/var/log/pm2/mahvion-out.log',
    },
  ],
};
