server = 'ideum-sites'
remote_path = '/var/www/ideum-mobile/'

task :build do
  system 'jekyll build'
end

task :deploy => :build do
  system 'rsync',
    '--archive', '--verbose', '--compress', '--delete',
    './_site/', "#{server}:#{remote_path}"
end
