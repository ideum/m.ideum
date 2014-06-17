# m.ideum

Static mobile pages for ideum.com. Pages are designed for screens ≤640px
in width.

## Dependancies
- JQuery
- Foundation.js

## Development

The site is developed using [Jekyll](http://jekyllrb.com/).  All the
development dependencies, including Jekyll, can be installed with the
`bundle` command.

There are several utility tasks provided through `rake`:
* **`rake fetch:all`** generates several data files from the current
  data published on http://ideum.com.  If there seems to be content
  missing from the site, this is probably why.
* **`rake serve`** will rebuild the site, serve it on
  http://localhost:4000, and watch the file system for changes.
* **`rake deploy`** will publish the current iteration of the site to
  S3.

## Deployment

Deployment is managed via the
[`s3_website`](https://github.com/laurilehmijoki/s3_website) utility.
Configuration can be found in `/s3_website.yml`.

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
