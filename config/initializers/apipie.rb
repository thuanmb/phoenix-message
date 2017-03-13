Apipie.configure do |config|
  config.app_name                = "Phoenix Message"
  config.api_base_url            = "/api"
  config.doc_base_url            = "/apidoc"
  config.validate = false
  # where is your API defined?
  config.api_controllers_matcher = "#{Rails.root}/app/controllers/api/**/*.rb"
  config.app_info = "Welcome to Phoenix Message API documentation."

  config.authenticate = Proc.new do
    authenticate_or_request_with_http_basic do |username, password|
      username == "admin@phoenixmessage.com" && password == "phoenixmessage@1234"
    end
  end
end

Apipie::ApipiesController.class_eval do
  def authenticate
    if Apipie.configuration.authenticate
      env['warden'].custom_failure!
      instance_eval(&Apipie.configuration.authenticate)
    end
  end
end

