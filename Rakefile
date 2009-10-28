require 'rake'

BACK_NAME         = 'Back To Scriptaculous'
BACK_SRC          = 'scripty_backward.js'
BACK_SRC_PATH     = File.expand_path('src')
BACK_DIST         = 'back.js'
BACK_DIST_PATH    = File.expand_path('dist')
BACK_VENDOR_PATH  = File.expand_path('vendor')

desc "Create a package for #{BACK_NAME}"
task :dist do
  begin
    require 'sprockets'
  rescue LoadError => e
    puts "\nYou'll need Sprockets to pack #{BACK_NAME} install it by:\n\n"
    puts "  $ gem install --remote sprockets\n\n"
    return
  end

  secretary = Sprockets::Secretary.new(
    :root         => BACK_SRC_PATH,
    :load_path    => [BACK_SRC_PATH, BACK_VENDOR_PATH],
    :source_files => [BACK_SRC]
  )

  secretary.concatenation.save_to(File.join(BACK_DIST_PATH, BACK_DIST))
end

  