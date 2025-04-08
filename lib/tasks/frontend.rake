namespace :frontend do
  desc 'Copy frontend build to public directory'
  task :copy_build do
    source_dir = Rails.root.join('frontend', 'dist')
    target_dir = Rails.root.join('public')
    
    FileUtils.rm_rf(Dir.glob("#{target_dir}/*"))
    
    FileUtils.cp_r("#{source_dir}/.", target_dir)
    
    puts "Frontend build copied to public directory"
  end
end 