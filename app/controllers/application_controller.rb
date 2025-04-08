class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  
  def frontend
    render file: Rails.root.join('public', 'index.html'), layout: false
  end
end
