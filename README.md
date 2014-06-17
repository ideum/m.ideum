#m.ideum

Static mobile pages for ideum.com. Pages are designed for screens ≤640px in width.

##Dependancies
- JQuery
- Foundation.js

## Deployment

Deployment can be done via the `rake deploy` task.  This will fetch
fresh snapshots of the blog and projects data, rebuild the site, and
push to S3 as necessary.  In order to deploy, you must have the
environment variables `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`
set and your AWS account must have write permission to both S3 and
CloudFront.

Additionally, there is a cron script running on the Sites server to
automatically deploy overnight.  **Please Note** that any changes pushed
to the `master` branch will automatically be deployed, so don't merge
changes that aren't ready to go live.
