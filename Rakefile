desc 'Serve the site locally for development'
task :serve do
  system 'jekyll serve --watch'
end
task :default => :serve

task :build => 'fetch:all' do
  rm_rf '_site'
  system 'jekyll build'
end

desc 'Rebuild and deploy to S3'
task :deploy => :build do
  system 's3_website push'
end

namespace :fetch do
  task :setup do
    require 'open-uri'
    require 'rss'
    require 'json'
    require 'yaml'

    FileUtils.mkdir_p File.expand_path('_data', __dir__)
  end

  desc 'Fetch the latest news from ideum.com'
  task :news => :setup do
    puts 'Fetching updated blog entries...'

    open('http://ideum.com/feed/') do |raw_feed|
      feed = RSS::Parser.parse(raw_feed)

      data = feed.items.map do |item|
        {
          "title" => item.title.gsub("\u00a0", '&nbsp;'),
          "excerpt" => item.description.gsub("\u00a0", '&nbsp;'),
          "link" => item.link
        }
      end

      path = File.expand_path('_data/news.yml', __dir__)
      File.open(path, 'w') do |file|
        file.write YAML.dump(data)
      end
    end
  end

  desc 'Fetch recent projects from ideum.com'
  task :projects => :setup do
    puts 'Fetching updated project summaries...'

    open('http://ideum.com/wp-admin/admin-ajax.php?action=recent_projects') do |raw_json|
      data = JSON.load(raw_json)

      path = File.expand_path('_data/projects.yml', __dir__)
      File.open(path, 'w') do |file|
        file.write YAML.dump(data)
      end
    end
  end

  desc 'Fetch news and projects'
  task :all => [:news, :projects]
end
