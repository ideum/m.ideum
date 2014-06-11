task :build do
  system 'jekyll build'
end

desc 'Rebuild and deploy to S3'
task :deploy => :build do
  system 's3_website push'
end
