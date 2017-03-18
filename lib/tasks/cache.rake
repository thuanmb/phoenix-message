namespace :cache do
  desc "Clears Rails cache"
  task clear: :environment do  ## Clear rails cache
    Rails.cache.clear
  end
end

