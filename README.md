# Uthunthu Consultancy website
Static site (no build step) + Supabase for consultation requests, events and admin login.

## Files
- index.html - page shell, nav, footer
- css/styles.css - all styling
- js/config.js - your Supabase URL and anon key
- js/data.js - shared content (services, BSD model, specialized services)
- js/pages/*.js - one file per page (home, about, bsd, services, impact, gallery, contact, events, admin)
- js/app.js - router
- supabase/schema.sql - tables and security rules

## Set up Supabase
1. supabase.com > New project.
2. SQL Editor > New query > paste supabase/schema.sql > Run.
3. Authentication > Users > Add user > enter the admin email and password (tick auto-confirm).
4. SQL Editor > run (use the admin email):
   insert into admins(user_id) select id from auth.users where email='ADMIN_EMAIL_HERE';
5. Authentication > Sign In / Providers > turn OFF "Allow new users to sign up".
6. Project Settings > API > copy Project URL and anon public key into js/config.js.
7. Authentication > URL Configuration > set Site URL to your GitHub Pages address.

## Test locally
   python3 -m http.server 8000
Open http://localhost:8000 (admin is at http://localhost:8000/#/admin).

## Publish on GitHub Pages
   git init
   git add .
   git commit -m "Uthunthu website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/uthunthu-site.git
   git push -u origin main
Then GitHub > Settings > Pages > Deploy from a branch > main > / (root) > Save.
Admin page: https://YOUR-USERNAME.github.io/uthunthu-site/#/admin

Email alerts for new requests are not included; requests appear in the Admin > Requests tab.
