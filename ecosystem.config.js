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
        NEXT_PUBLIC_SITE_URL: 'https://mahvion.com',
        NEXT_PUBLIC_COMPANY_NAME: 'Mahvion',
        NEXT_PUBLIC_CONTACT_EMAIL: 'support@mahvion.com',
        NEXT_PUBLIC_CONTACT_PHONE: '+91 9022217871',
        NEXT_PUBLIC_APP_ERP: 'https://erp.mahvion.com',
        NEXT_PUBLIC_APP_MED: 'https://med.mahvion.com',
        NEXT_PUBLIC_APP_INS: 'https://ins.mahvion.com',
        NEXT_PUBLIC_APP_REAL: 'https://real.mahvion.com',
        SMTP_HOST: 'smtpout.secureserver.net',
        SMTP_PORT: '465',
        SMTP_SECURE: 'true',
        SMTP_USER: 'support@mahvion.com',
        // SMTP_PASS: set this on the server — never commit passwords to git
        // On the server run: export SMTP_PASS=yourpassword  then pm2 restart
      },
      max_memory_restart: '500M',
      error_file: '/var/log/pm2/mahvion-error.log',
      out_file: '/var/log/pm2/mahvion-out.log',
    },
  ],
};
